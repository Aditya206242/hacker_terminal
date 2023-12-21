let box1 = document.querySelector(".container1");
box1.style.backgroundColor = "green";

let box2 = document.querySelector(".container2");
box2.style.backgroundColor = "green";

let box3 = document.querySelector(".container3");
box3.style.backgroundColor= "green";

let box4= document.querySelector(".container4");
box4.style.backgroundColor ="green";

let box5= document.querySelector(".container5");
box5.style.backgroundColor ="green";

let box6= document.querySelector(".container6");
box6.style.backgroundColor ="green";

let box7 = document.querySelector(".container7");
box7.style.backgroundColor = "red";

let audio = document.getElementById("hackaudio");







// boxes.innerHTML= document.querySelector(".container").innerHTML + "."
async function random() {
  let a = "Initialising Hacking";

  setTimeout(() => {
    console.log(a);

    console.log(a);
    box1.innerHTML =
      document.querySelector(".container1").innerHTML + "Initialising Hacking";
  }, 1000);

  setTimeout(() => {
    console.log(a);

    console.log(a);
    box1.innerHTML = document.querySelector(".container1").innerHTML + ".";
  }, 2000);

  setTimeout(() => {
    console.log(a);
    box1.innerHTML = document.querySelector(".container1").innerHTML + ".";
  }, 3000);

  setTimeout(() => {
    console.log(a);
    box1.innerHTML = document.querySelector(".container1").innerHTML + ".";
  }, 4000);

  setTimeout(()=>{
    box2.innerHTML = document.querySelector(".container2").innerHTML +"Reading your files";

  },4000)

  setTimeout(()=>{
    box2.innerHTML = document.querySelector(".container2").innerHTML +".";

  },5000)

  setTimeout(()=>{
    box2.innerHTML = document.querySelector(".container2").innerHTML +".";

  },6000)

  setTimeout(()=>{
    box2.innerHTML = document.querySelector(".container2").innerHTML +".";

  },7000)

  setTimeout(()=>{
    box3.innerHTML = document.querySelector(".container3").innerHTML +"Password files Detected";

  },7000)

  setTimeout(()=>{
    box3.innerHTML = document.querySelector(".container3").innerHTML +".";

  },8000)

  setTimeout(()=>{
    box3.innerHTML = document.querySelector(".container3").innerHTML +".";

  },9000)

  setTimeout(()=>{
    box3.innerHTML = document.querySelector(".container3").innerHTML +".";

  },10000)

  setTimeout(()=>{
    box4.innerHTML = document.querySelector(".container4").innerHTML +"Sending all Password";

  },10000)

  setTimeout(()=>{
    box4.innerHTML = document.querySelector(".container4").innerHTML +".";

  },11000)

  setTimeout(()=>{
    box4.innerHTML = document.querySelector(".container4").innerHTML +".";

  },12000)

  setTimeout(()=>{
    box4.innerHTML = document.querySelector(".container4").innerHTML +".";

  },13000)

  setTimeout(()=>{
    box5.innerHTML = document.querySelector(".container5").innerHTML +"Personal files to server";

  },13000)

  setTimeout(()=>{
    box5.innerHTML = document.querySelector(".container5").innerHTML +".";

  },14000)

  setTimeout(()=>{
    box5.innerHTML = document.querySelector(".container5").innerHTML +".";

  },15000)

  setTimeout(()=>{
    box5.innerHTML = document.querySelector(".container5").innerHTML +".";

  },16000)

  setTimeout(()=>{
    box6.innerHTML = document.querySelector(".container6").innerHTML +"Cleaning up";

  },16000)

  setTimeout(()=>{
    box6.innerHTML = document.querySelector(".container6").innerHTML +".";

  },17000)

  setTimeout(()=>{
    box6.innerHTML = document.querySelector(".container6").innerHTML +".";

  },18000)

  setTimeout(()=>{
    box6.innerHTML = document.querySelector(".container6").innerHTML +".";

  },19000)

  setTimeout(()=>{
    box7.innerHTML = document.querySelector(".container7").innerHTML +"You are Hacked";
    

    audio.play().then(()=>{

    }).catch((error)=>{
        console.log(error.message)
    })
    

  },19000)

  setInterval(()=>{
    box7.style.display = box7.style.display==="none"?"block":"none";
  },400)
  


  
}
async function call() {
 
  // await random();
  await random();
  
}
call()



