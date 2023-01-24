const rangeInput = document.querySelector(".range");
const numText = document.querySelector(".disp");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const gen = document.querySelector(".genBtn");
const passwordDisplay = document.querySelector(".passDisplay");
const strengthDisplay = document.querySelector(".strengthDisplay")
const cubes = document.querySelectorAll(".cube")
const copyBtn = document.getElementById("copy")
const copyText = document.querySelector(".copied")
const follower = document.querySelector(".follower")


copyBtn.addEventListener('click',function(){
    console.log(passwordDisplay.textContent)
    navigator.clipboard.writeText(passwordDisplay.textContent);
    
    copyText.classList.add("active");

    setTimeout(() => {
        copyText.classList.remove("active");
    }, 2000);
})


rangeInput.addEventListener("input",function(e){
    const value = parseInt(e.target.value);
    const min = parseInt(e.target.min);
    const max = parseInt(e.target.max);

    const width = ((value - min) / (max - min)) * 99 + '%';
    follower.style.width = width;
    console.log(width)

    if (value <= 3 ){
    }else if (value >3 && value <= 7){
         cubes.forEach((cube) => {
            cube.style.border = "2px solid hsl(0, 91%, 63%)";
        })
    }else if (value >7 && value <= 15){
         cubes.forEach((cube) => {
            cube.style.border = "2px solid orange";
        })
    }else if (value >15 && value <= 20){
         cubes.forEach((cube) => {
            cube.style.border = "2px solid green";
        })
    }
    numText.textContent = value;
    console.log(value);
})

console.log(rangeInput.value)

function generatePassword(){
    const length = parseInt(rangeInput.value);
    let chars = [];
    let password = "";
    
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
    const numbers = "0123456789".split("");
    const symbols = "`~!@#$%^&*()-_=+\/?{}[]><;:'.,".split("");

    const useUpperCase = document.querySelector(".useUpperCase");
    const useLowerCase = document.querySelector(".useLowerCase");
    const useNumbers = document.querySelector(".useNumbers");
    const useSymbols = document.querySelector(".useSymbols");

    useUpperCase.checked && (chars = [...chars,...upperCase]);
    useLowerCase.checked && (chars = [...chars,...lowerCase]);  
    useNumbers.checked && (chars = [...chars,...numbers]);
    useSymbols.checked && (chars = [...chars,...symbols]);

    if (chars.length > 0){
        for (let i = 0; i < length; i++){
            password += chars[Math.floor(Math.random() * chars.length)];
        }   
    }

    return password;
}


function setPassword(){
    passwordDisplay.textContent = generatePassword();
}

gen.addEventListener("click",setPassword)