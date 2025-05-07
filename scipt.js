const amount = document.querySelector("#amount");
const term = document.querySelector("#term");
const rate = document.querySelector("#rate");
const btn = document.querySelector("#btn");
let total;
let condition;
let option;

document.getElementById("clear").addEventListener("click",() => {
    term.value = null;
    amount.value = null;
    rate.value = null;
    document.querySelector("#img123").style.display = "block";
    document.querySelector("#para").style.display = "block";
    document.querySelector("#head").style.display = "block";
    document.querySelector(".head5").style.display = "none";
    document.querySelector(".head6").style.display = "none";
    document.querySelector(".div10").style.display = "none";


});
document.getElementById("imp1").addEventListener("click",() => {
condition = false;
console.log(condition);
});
document.getElementById("imp2").addEventListener("click",() => {
    condition = true;
    console.log(condition);
});
    
btn.addEventListener("click",() => {
    document.querySelector("#img123").style.display = "none";
    document.querySelector("#para").style.display = "none";
    document.querySelector("#head").style.display = "none";
    document.querySelector(".head5").style.display = "block";
    document.querySelector(".head6").style.display = "block";
    document.querySelector(".div10").style.display = "block";

    if(condition == false) {

    }
    else {
        total = amount.value*rate.value*term.value;
        console.log(total)
        document.querySelector(".head11").innerText = `$${total/100}`;
        document.querySelector(".p3").innerText = `$${total/term.value}`;

    }
  
});





