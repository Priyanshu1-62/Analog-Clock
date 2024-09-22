const hr=document.querySelector("#hr");
const min=document.querySelector("#min");
const sec=document.querySelector("#sec");

function configureHands(){
    let d=new Date();
    let hrs=d.getHours();
    let mins=d.getMinutes();
    let secs=d.getSeconds();

    let hrot= 30*hrs + mins/2;
    let mrot= 6*mins;
    let srot= 6*secs;

    hr.style.transform = `rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${srot}deg)`;
}
window.addEventListener("load", () => {
    configureHands();
})

setInterval(() => {
    configureHands();
}, 1000);