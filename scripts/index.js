// Store the wallet amount to your local storage with key "amount"


// let wAmt=JSON.parse(localStorage.getItem("amount")) || 0;
let amt=JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").innerText=amt;
function addToWallet()
{
    
    let amt=document.getElementById("amount").value;
    // console.log("inside")
    let w=document.getElementById("wallet").innerText;
    
    w=Number(w)+Number(amt);
    document.getElementById("wallet").innerText=w;
    
    localStorage.setItem("amount",JSON.stringify(w));
    
}

