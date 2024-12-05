let gameseq=[];
let userseq=[];

let started=false;
let level=0;

let btns=["red","green","yellow","blue"];
let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
if(started==false){
    console.log("game stared");
    started=true;

    levelup();
}
});



function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
    btn.classList.remove("flash");
},250);

}
function newFlash(btn){
    btn.classList.add("newflash");
    setTimeout(function () {
    btn.classList.remove("newflash");
},450);


}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randidx=Math.floor(Math.random() * 3);
    let randcol=btns[randidx];
    gameseq.push(randcol);
    let randbtn=document.querySelector(`.${randcol}`);
    

    btnFlash(randbtn);

    }

    function reset(){
        started=false;
        gameseq=[];
        level=0;
        userseq=[];
    }

function checkans(idx){

if(userseq[idx]===gameseq[idx]){
if(userseq.length==gameseq.length){
  setTimeout(levelup,1000);
}
    
}
else{
    h2.innerHTML=`Game Over! your score was <b>${level}</b><br>Press any key to start again`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
}
}


    function btnpress(){
let newbtn=this;
   newFlash(newbtn);

   newcolor=newbtn.getAttribute("id");
   userseq.push(newcolor);
  
   checkans(userseq.length-1);


}

    let AllBtn=document.querySelectorAll(".btn");
    for(btn of AllBtn){
        btn.addEventListener("click",btnpress);
    }


