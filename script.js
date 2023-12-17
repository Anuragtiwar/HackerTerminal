let UserName=prompt("Enter your name");   
let AllMessages=[
    "Initiating hack tool...",
    "Loading Modules...",
    "Searching UserName...",
    `User Name found for ${UserName}`,
    "Serching for the files",
    "Password detect",
    "Running windows security disable module",
    "Trying Brute Force Method",
    "Try Faild",
    "Restablish the Connection",
    "Connection Succeed!",
    "initiating Ransomware Tool ",
    "Say Good bye to your personal files !",
    "Cleaning Up Syste 32 bit file...",
    `Congratulations ${UserName} for being Successfully hacked`,
]

const sleep= async(seconds)=>{
    return new Promise((resolve,rejected)=>{
        setTimeout(() => {
            resolve(true);
    }, seconds*1000);
})
}



const showHack=async(message,randomNumber)=>{
 await sleep(randomNumber);
  text.innerHTML=text.innerHTML+message + "<br>";
}


(async ()=>{
    const randomNumber = Math.floor(Math.random() * 7) + 1;
for (let i = 0; i < AllMessages.length; i++) {
    await showHack(AllMessages[i],randomNumber);
}
})()

//increasing Video speed
let video = document.getElementById("bgVideo"); // Assuming your video has an id of "myVideo"
video.playbackRate = 2; // Set the playback speed to 2x (double speed)


//fucntion for Greeting
(function getGreeting() {
    const currentHour = new Date().getHours();
    let heading = document.querySelector('.heading');

    if (currentHour >= 5 && currentHour < 12) {
        heading.innerHTML = `Good Morning ! ${UserName}`;
    } else if (currentHour >= 12 && currentHour < 18) {
        heading.innerHTML = `Good Afternoon ! ${UserName}`;
    } else {
        heading.innerHTML = `Good evening ! ${UserName}` ;
    }
})();