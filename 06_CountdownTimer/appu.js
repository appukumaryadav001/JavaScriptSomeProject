// 15 March 2026 – 31 May 2026

setInterval(()=>{
    const result = document.getElementById("result");
    const currTime = Date.now();
    const iplTime = new Date(2026,3,15).getTime();
    let timer = iplTime-currTime;


    const day = Math.floor((timer)/(1000*60*60*24));
    timer%=1000*60*60*24;
    const hour = Math.floor((timer)/(1000*60*60));
    timer%=1000*60*60;
    const minute = Math.floor((timer)/(1000*60));
    timer%=1000*60;
    const second = Math.floor((timer)/(1000));
     timer%=1000;

     result.textContent = `${day}:days ${hour}:Hour ${minute}:Minute ${second}:Second`;
},1000);