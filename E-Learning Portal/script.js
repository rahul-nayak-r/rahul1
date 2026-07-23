function login(){

let name=document.getElementById("username").value;

if(name==""){
alert("Enter Your Name");
return;
}

document.getElementById("loginSection").style.display="none";
document.getElementById("examSection").style.display="block";

}

function submitExam(){

let score=0;

let q1=document.querySelector('input[name="q1"]:checked');
let q2=document.querySelector('input[name="q2"]:checked');
let q3=document.querySelector('input[name="q3"]:checked');
let q4=document.querySelector('input[name="q4"]:checked');

if(q1) score+=Number(q1.value);
if(q2) score+=Number(q2.value);
if(q3) score+=Number(q3.value);
if(q4) score+=Number(q4.value);

document.getElementById("examSection").style.display="none";
document.getElementById("resultSection").style.display="block";

document.getElementById("result").innerHTML="Your Score : "+score+" / 4";

}