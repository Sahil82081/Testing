
// Selection of Questions

const Q1 = document.getElementById("Q1");
const Q2 = document.getElementById("Q2");
const Q3 = document.getElementById("Q3");
const Q4 = document.getElementById("Q4");
const Q5 = document.getElementById("Q5");
const Q6 = document.getElementById("Q6");

// Selection of Answers
const A1 = document.getElementById("A1");
const A2 = document.getElementById("A2");
const A3 = document.getElementById("A3");
const A4 = document.getElementById("A4");
const A5 = document.getElementById("A5");
const A6 = document.getElementById("A6");

// On Click Function Will Execute

console.log(A1.style.visibility);

Q1.addEventListener("click", () => {
    if (A1.style.visibility == "collapse") {
        A1.style = "visibility:visible;"
       Q1.querySelector('img').style="transform: rotate(45deg);"
    }
    else {
        A1.style = "visibility:collapse;"
        Q1.querySelector('img').style="transform: rotate(0deg);"
    }
})

Q2.addEventListener("click", () => {
    if (A2.style.visibility === "collapse") {
        A2.style = "visibility:visible;"
        Q2.querySelector('img').style="transform: rotate(45deg);"
    }
    else {
        A2.style = "visibility:collapse;"
        Q2.querySelector('img').style="transform: rotate(0deg);"
    }
})
Q3.addEventListener("click", () => {
    if (A3.style.visibility === "collapse") {
        A3.style = "visibility:visible;"
        Q3.querySelector('img').style="transform: rotate(45deg);"
    }
    else {
        A3.style = "visibility:collapse;"
        Q3.querySelector('img').style="transform: rotate(0deg);"
    }
})
Q4.addEventListener("click", () => {
    if (A4.style.visibility === "collapse") {
        A4.style = "visibility:visible;"
        Q4.querySelector('img').style="transform: rotate(45deg);"
    }
    else {
        A4.style = "visibility:collapse;"
        Q4.querySelector('img').style="transform: rotate(0deg);"
    }
})
Q5.addEventListener("click", () => {
    if (A5.style.visibility === "collapse") {
        A5.style = "visibility:visible;"
        Q5.querySelector('img').style="transform: rotate(45deg);"
    }
    else {
        A5.style = "visibility:collapse;"
        Q5.querySelector('img').style="transform: rotate(0deg);"
    }
})
Q6.addEventListener("click", () => {
    if (A6.style.visibility === "collapse") {
        A6.style = "visibility:visible;"
        Q6.querySelector('img').style="transform: rotate(45deg);"
    }
    else {
        A6.style = "visibility:collapse;"
        Q6.querySelector('img').style="transform: rotate(0deg);"
    }
})

const btn  = document.getElementById('btn')
btn.addEventListener('click',()=>{
    alert("Email Send Succesfully")
})