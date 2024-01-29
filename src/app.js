const remainDay = document.querySelector("#remain-day");
const remainHour = document.querySelector("#remain-hour");
const remainMin = document.querySelector("#remain-minute");
const remainSec = document.querySelector("#remain-second");
const remainMilli = document.querySelector("#remain-millisecond");
const healthBar = document.querySelector("#healthbarbg");
const manaBar = document.querySelector("#manabar");
const timertext = document.querySelector("#timer");
const liveimg = document.querySelector("#liveimg");
const deadimg = document.querySelector("#deadimg");
isdead = false;

deadDay = new Date("2024-02-01 14:00");
reviveDay = new Date("2024-02-25 00:00");
const startday = new Date("2024-01-29 15:00");


function diffDay(){
    const today = new Date();
    const diff = isdead ? reviveDay - today : deadDay - today;
    

    const diffday = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffhour = Math.floor((diff / (1000 * 60 * 60)));
    const diffmin = Math.floor((diff / (1000 * 60)));
    const diffsec = Math.floor((diff / 1000));


    remainDay.innerText = `${diffday}day ${diffhour}hour ${diffmin}min ${diffsec}sec`;
    calculateHealth();
}


function calculateHealth(){
    const today = new Date();
    const health = deadDay - today;
    if(health < 0 && isdead == false){
        liveimg.style.display = "none";
        deadimg.style.display = "block";
        healthBar.style.display = "none";
        manaBar.style.display = "none";
        isdead = true;
    }
    if(isdead){
        
        timerdead();
    }
    else{
        timerlive();
    }

}

function timerlive(){

    const today = new Date();
    const maxhealth = deadDay - startday;
    const health = deadDay - today;
    const healthpercent = Math.floor((health / maxhealth) * 100);
    
    healthBar.style.width = `${healthpercent}%`;
}
function timerdead(){
    const today = new Date();
    
    const diff = reviveDay - today;

    const diffsec = Math.floor((diff / 1000));

    timertext.innerText = `${diffsec}`;
    
}
diffDay();
// calculateHealth();
setInterval(diffDay, 1000);
