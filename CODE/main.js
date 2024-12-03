let h=document.getElementById('hours')
let m=document.getElementById('mins')
let s=document.getElementById('secs')
let a=document.getElementById('ap')
const ShowTime=()=>{
    const d=new Date();
    let hours=d.getHours();
    let mins=d.getMinutes();
    let secs=d.getSeconds();
    if(hours===12){
        a.innerHTML = 'PM';
        h.innerHTML=hours;
    }
    else if(hours===0){
        hours=12;
        a.innerHTML = 'AM';
        h.innerHTML=hours;
    }
    else if(hours>12){
        hours=hours-12;
        a.innerHTML = 'PM';
        if(hours<10){
            h.innerHTML="0"+hours
        }
        else{
            h.innerHTML=hours;
        }
    }
    else{
        a.innerHTML="AM";
        if(hours<10){
            h.innerHTML="0"+hours
        }
        else{
            h.innerHTML=hours;
        }
    }
    if(mins<10){
        m.innerHTML="0"+mins;
    }
    else{
        m.innerHTML=mins;
    }
    if(secs<10){
        s.innerHTML="0"+secs;
    }
    else{
        s.innerHTML=secs;
    }
    setInterval(ShowTime,1000)
}

ShowTime()


const ShowAlarmTime=()=>{
    let wt=document.getElementById('waTOption').value;
    let lt=document.getElementById('laTOption').value;
    let nt=document.getElementById('naTOption').value;
    let nnt=document.getElementById('nnaTOption').value;
    if(wt==="Select Time"){
        document.getElementById('setWT').innerText="---------------";
    }
    else{
        document.getElementById('setWT').innerText=wt;
    }
    if(lt==="Select Time"){
        document.getElementById('setLT').innerText="---------------";
    }
    else{
        document.getElementById('setLT').innerText=lt;
    }
    if(nt==="Select Time"){
        document.getElementById('setNT').innerText="---------------";
    }
    else{
        document.getElementById('setNT').innerText=nt;
    }
    if(nnt==="Select Time"){
        document.getElementById('setNi8T').innerText="---------------";
    }
    else{
        document.getElementById('setNi8T').innerText=nnt;
    }
}


const ShowMsgs=()=>{
    let wt=document.getElementById('waTOption').value;
    let lt=document.getElementById('laTOption').value;
    let nt=document.getElementById('naTOption').value;
    let nnt=document.getElementById('nnaTOption').value;
    let ph=parseInt(h.innerText)
    let arr1=wt.split(" ")
    let arr2=lt.split(" ")
    let arr3=nt.split(" ")
    let arr4=nnt.split(" ")
    console.log(arr1[0],"m");
    console.log(arr2[0]),"l";
    console.log(arr3[0],"n");
    console.log(arr4[0],"nn");
    console.log(ph);
    if(arr1[0]==ph && arr1[1]==a.innerText){
        console.log("if Morning");
        document.getElementById("timeMsg1").innerText="Good Morning"
        document.getElementById("timeMsg2").innerHTML="<h2>Hey Its Time To Wake Up</h2>"
        document.getElementById('images').style.backgroundImage = "url('assets/Morning.png')"
        document.getElementById('images').style.backgroundRepeat = "no-repeat"
        document.getElementById('images').style.backgroundSize = "cover"
        document.getElementById('images').innerText = " ";
    }
    
    else if(arr2[0]==ph && arr2[1]==a.innerText){
        console.log("if Lunch");
        document.getElementById("timeMsg1").innerText="Good Afternoon"
        document.getElementById("timeMsg2").innerHTML="<h2>Eat Your Lunch</h2>"
        document.getElementById('images').style.backgroundImage = "url('assets/Lunch.png')"
        document.getElementById('images').style.backgroundRepeat = "no-repeat"
        document.getElementById('images').style.backgroundSize = "cover"
        document.getElementById('images').innerText = " ";
    }
    
    else if(arr3[0]==ph && arr3[1]==a.innerText){
        console.log("if Nap");
        document.getElementById("timeMsg1").innerText="Good Evening"
        document.getElementById("timeMsg2").innerHTML="<h2>Time to take a nap</h2>"
        document.getElementById('images').style.backgroundImage = "url('assets/Night.png')"
        document.getElementById('images').style.backgroundRepeat = "no-repeat"
        document.getElementById('images').style.backgroundSize = "cover"
        document.getElementById('images').innerText = " ";
    }
    
    else if(arr4[0]==ph && arr4[1]==a.innerText){
        console.log("if night");
        console.log(arr4[1]);
        document.getElementById("timeMsg1").innerText="Good Night"
        document.getElementById("timeMsg2").innerHTML="<h2>Its Night Time,Close Your Eyes And Sleep</h2>"
        document.getElementById('images').style.backgroundImage = "url('assets/Night1.png')"
        document.getElementById('images').style.backgroundRepeat = "no-repeat"
        document.getElementById('images').style.backgroundSize = "cover"
        document.getElementById('images').innerText = " ";
    }
    else{
        document.getElementById("timeMsg1").innerText="Welcome"
        document.getElementById("timeMsg2").innerHTML="<h2>Choose Time and Click on Button to Start</h2>"
        document.getElementById('images').style.backgroundImage = "url('assets/butterfly.jpeg')"
        document.getElementById('images').style.backgroundRepeat = "no-repeat"
        document.getElementById('images').style.backgroundSize = "cover"
        // document.getElementById('images').innerHTML = "<p style='color:white;text-decoration: underl</p>";
    }
    setInterval(ShowMsgs  ,108000)
}


let btn=document.getElementById('setAlarmBtn');
btn.addEventListener("click", ShowAlarmTime);
btn.addEventListener("click", ShowMsgs);