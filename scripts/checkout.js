// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let movie=JSON.parse(localStorage.getItem("movie"));


    
    movie.forEach(function(movie)
    {
        let myMainDiv1=document.getElementById("movie");
    let myDiv1=document.createElement("div");
        let img=document.createElement("img");
        img.src=movie.Poster;

        let name=document.createElement("p");
        name.innerText=movie.Title;

        myDiv1.append(img,name);

        myMainDiv1.append(myDiv1);
});


function bookMovieFunc()
{
    let amt=document.getElementById("wallet").innerText;
    let seat=document.getElementById("number_of_seats").value;
    let seatNo=100*Number(seat)
    if(amt>seatNo)
    {
        alert("Booking Successful!")
    }
    else
    {
        alert("Insufficient Balance!")
    }
}
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
