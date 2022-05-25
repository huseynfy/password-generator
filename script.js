// Characters, numbers, and symbols
const alpha = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Elements
const placeForPass = document.getElementById('generated-password');
const form = document.getElementById('form');
const checkBoxNumber = document.getElementById('checkbox-number');
const checkBoxSymbol = document.getElementById('checkbox-symbol');
const checkBoxUpper = document.getElementById('checkbox-upper');
const btnCopy = document.querySelector('.btn-copy');

// Form submit
form.addEventListener('submit',e=>{
    let count = document.getElementById('input-length').value;
    e.preventDefault();
    let characters = alpha;
    checkBoxNumber.checked ? characters+=numbers : ""
    checkBoxSymbol.checked ? characters+=symbols : ""
    checkBoxUpper.checked ? characters+=upper : ""
    
    placeForPass.innerHTML=generatePassword(count,characters)
})

// Password Generator
function generatePassword(length,characters){
    let password = ''
    for (let i = 0; i < length; i++) {
        password+=characters.charAt(Math.floor(Math.random()*characters.length))
    }
    return password;
}

// Copying
btnCopy.addEventListener('click',()=>{
    placeForPass.select;
    document.execCommand("copy",true);
    alert(`Copied Password is ${placeForPass.innerHTML}`)
  })