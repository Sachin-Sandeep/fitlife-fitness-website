/* Share website function */

function shareWebsite(){

    if(navigator.share){

        navigator.share({

            title: "FitLife Fitness Website",

            text: "Check out this fitness website!",

            url: window.location.href

        });

    }

    else{

        alert(
        "Sharing is not supported in this browser."
        );
    }
}

// Store fitness tips

const tips = [

    "Drink enough water every day.",

    "Exercise at least 30 minutes daily.",

    "Eat more fruits and vegetables.",

    "Get 7-8 hours of sleep every night.",

    "Warm up before every workout."

];

// Function to show random tip

function showTip(){

    // Generate random number

    let random =
    Math.floor(Math.random() * tips.length);

    // Display random tip

    document.getElementById("tip").innerText =
    tips[random];

}




// Function to calculate BMI

function calculateBMI(){

    let height =
    document.getElementById("height").value;

    let weight =
    document.getElementById("weight").value;

    if(height === "" || weight === ""){

        document.getElementById("result")
        .innerHTML =
        "Enter height and weight";

        return;
    }

    height = height / 100;

    let bmi =
    weight / (height * height);

    let category = "";

    let color = "";

    // Remove old highig
    document
    .querySelectorAll(".category")
    .forEach(item =>
    item.classList.remove("active-category"));

    if(bmi < 18.5){

        category = "Underweight";

        color = "#3498db";

        document
        .querySelector(".under")
        .classList
        .add("active-category");
    }

    else if(bmi < 25){

        category = "Healthy";

        color = "#2ecc71";

        document
        .querySelector(".healthy")
        .classList
        .add("active-category");
    }

   else if(bmi < 30){

        category = "Overweight";

        color = "#f39c12";

        document
        .querySelector(".over")
        .classList
        .add("active-category");
    }

    else{

        category = "Obese";

        color = "#e74c3c";

        document
        .querySelector(".obese")
        .classList
        .add("active-category");
    }

    document.getElementById("bmi-score")
    .innerHTML =
    bmi.toFixed(1);

    document.getElementById("result")
    .innerHTML =
    category;

    document.getElementById("bmi-score")
    .style.borderColor =
    color;

// Calculate circle fill percentage

let percentage =
Math.min((bmi / 40) * 360, 360);

// Update progress circle

document.querySelector(".bmi-circle")
.style.background =
`conic-gradient(
${color} ${percentage}deg,
#dfe6e9 ${percentage}deg
)`;



}
