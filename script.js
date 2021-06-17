let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

imageAddres=["images/NIT/photo1.jpg","images/NIT/photo2.png","images/NIT/photo3.png","images/NIT/photo4.png"]



mouse = {
    x:0,
    y:0,
};
chge=-0.05;
op=1;
nitImg=document.getElementById("NITPIC");
currSrc=0;
function chgimg(){
    currSrc+=1;
    currSrc=currSrc%4;
    nitImg.src=imageAddres[currSrc];
}
nitImg.addEventListener('click',chgimg)
menucover=document.getElementById('menucover');
setInterval(chgimg,2000);
//menu js

window.addEventListener('scroll',function(e) {
    body=document.getElementById("body");
    menucover.style.top=window.scrollY+'px';
    menucover.style.left=0+'px';
})


homeImg=document.getElementById("homeImg");
home=document.getElementById("home");
homeImg.addEventListener("click",function(){
    if(home.style.display=='flex') {
        home.style.display='none';
        menucover.style.display='none';
    }
    else {
        home.style.display='flex';
        menucover.style.display='block';
    }
})

instImg=document.getElementById("instImg");
inst=document.getElementById("inst");
instImg.addEventListener("click",function(){
    if(inst.style.display=='flex') {
        inst.style.display='none';
        menucover.style.display='none';
    }
    else {
        inst.style.display='flex';
        menucover.style.display='block';
    }
})

deptImg=document.getElementById("deptImg");
dept=document.getElementById("dept");
deptImg.addEventListener("click",function(){
    if(dept.style.display=='flex') {
        dept.style.display='none';
        menucover.style.display='none';
    }
    else {
        dept.style.display='flex';
        menucover.style.display='block';
    }
})

acadImg=document.getElementById("acadImg");
acad=document.getElementById("acad");
acadImg.addEventListener("click",function(){
    if(acad.style.display=='flex') {
        acad.style.display='none';
        menucover.style.display='none';
    }
    else {
        acad.style.display='flex';
        menucover.style.display='block';
    }
})

admImg=document.getElementById("admImg");
adm=document.getElementById("adm");
admImg.addEventListener("click",function(){
    if(adm.style.display=='flex') {
        adm.style.display='none';
        menucover.style.display='none';
    }
    else {
        adm.style.display='flex';
        menucover.style.display='block';
    }
})



menucover.addEventListener('click',function(){
    inst.style.display='none';
    dept.style.display='none';
    acad.style.display='none';
    adm.style.display='none';
    menucover.style.display='none';
})

// NavArr[0].print();

window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    console.log(mouse.x + " " + mouse.y);
})


maxSize = 50;
let clrArr = ["#353D40", "#D9D9D9", "#A1A5A6", "#F2B138", "#003F63"];

function circle(x, y, velX, velY, radius, clr) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.radius = radius;
    this.clr = clr;
    this.fixSize = radius;

    this.draw = function () {
        c.beginPath();
        c.strokeStyle = this.clr;
        c.fillStyle = this.clr;
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.stroke;
        c.fill();
    }


    this.update = function () {
        this.x += this.velX;
        this.y += this.velY;
        if (Math.abs(this.x - mouse.x) <= 50 && Math.abs(this.y - mouse.y) <= 50 && this.radius < 50) {
            this.radius += 1;
            this.clr = clrArr[Math.floor(Math.random() * clr.length)];
        } else if (this.radius > this.fixSize) {
            this.radius -= 1;
            this.radius = Math.max(this.radius, 1);
        }
        if (this.x + radius > innerWidth) {
            this.velX = -Math.random();

        }else if (this.x - radius < 0) {
            this.velX = Math.random() ;
        }
        if (this.y + radius > innerHeight) {
            this.velY = -Math.random() ;
        }else if(this.y - radius < 0) {
            this.velY = Math.random() ;

        }
        this.draw();
    }
}




let cirArr = [];
for (i = 0; i < 1500; i++) {
    radius = Math.random() * 3;
    x = Math.random() * innerWidth;
    y = Math.random() * innerHeight;
    velX = Math.random() ;
    velY = Math.random();
    if (i < 1000) cir = new circle(x, y, velX, velY, radius, clrArr[i % cirArr.length]);
    else cir = new circle(x, y, -velX, -velY, radius, clrArr[i % cirArr.length]);
    cirArr.push(cir);

}




function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (i = 0; i < 1500; i++) {
        cirArr[i].update();
    }
}
animate();

