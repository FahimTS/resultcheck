let input = document.getElementById("input");
let check = document.getElementById("btn");
let dark = document.getElementById("dark");
let explain = document.getElementById("explain");


function checkResult(){
    let marks = document.getElementById("marks");
    let point = document.getElementById("point");
    let gpa = document.getElementById("gpa");

    let num = (input.value);
    
    if(num >= 0 && num <= 32){
        marks.innerHTML = `${num}`;
        point.innerHTML = `00`;
        gpa.innerHTML = `F`;
        explain.innerHTML = "Ohh No! Repeat"
    }else if(num >= 33 && num <= 39){
        marks.innerHTML = `${num}`;
        point.innerHTML = `1`;
        gpa.innerHTML = `D`;
        explain.innerHTML = `Unsatisfactory!`;
    }else if(num >= 40 && num <= 49){
        marks.innerHTML = `${num}`;
        point.innerHTML = `2`;
        gpa.innerHTML = `C`;
        explain.innerHTML = `Satisfactory! Required more Effort.`;
    }else if(num >= 50 && num <= 59){
        marks.innerHTML = `${num}`;
        point.innerHTML = `3.00`;
        gpa.innerHTML = `B`;
        explain.innerHTML = `Good job!`;
    }else if(num >= 60 && num <= 69){
        marks.innerHTML = `${num}`;
        point.innerHTML = `3.50`;
        gpa.innerHTML = `A-`;
        explain.innerHTML = `Awesome!`
    }else if(num >= 70 && num <= 79){
        marks.innerHTML = `${num}`;
        point.innerHTML = `4.00`;
        gpa.innerHTML = `A`;
        explain.innerHTML = `Excellent!`
    }else if(num >= 80 && num <= 100){
        marks.innerHTML = `${num}`;
        point.innerHTML = `5.00`;
        gpa.innerHTML = `A+`;
        explain.innerHTML = `Brilliant Excellent!`;
    }else if(num >= 101){
        marks.innerHTML = `not valid number`;
        point.innerHTML = `not valid number`;
        gpa.innerHTML = `not valid number`;
    }else if(num <= 1){
        marks.innerHTML = `negative number`;
        point.innerHTML = `negative number`;
        gpa.innerHTML = `negative number`;
    }
}


check.addEventListener("click", (e)=>{
    e.preventDefault();
    explain.style.display = 'block';
    checkResult();
})


// ======================== dark theme ==========================
const darkTheme = document.querySelector('.dark_theme');
darkTheme.addEventListener('click', () => {
  darkTheme.querySelector("i").classList.toggle("fa-sun")
  darkTheme.querySelector("i").classList.toggle("fa-moon")
  document.body.classList.toggle('dark')
})

window.addEventListener('load', () => {
  if(document.body.classList.contains("dark")){
    darkTheme.querySelector('i').classList.add("fa-sun");
  }else{
    darkTheme.querySelector('i').classList.add("fa-moon");
  }
})