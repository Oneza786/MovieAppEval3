// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
//url http://www.omdbapi.com/?s=${query}&apikey=692e6b93
let id;
async function searchMovie()
{
    try
    {
        const query=document.getElementById("search").value;
        const res= await fetch(`https://www.omdbapi.com/?apikey=692e6b93&s=${query}`);
        const data= await res.json();
        const movie=data.Search;
        console.log(movie)
        return movie;
    }
    catch(err)
    {
        console.log(err)
    }
}

function append(movie)
{
    let myMainDiv=document.getElementById("movies");
    myMainDiv.innerHTML= null;
    let movieDiv=document.createElement("div");

    movie.forEach(function(e)
    {

    let img=document.createElement("img");
    img.src=e.Poster;

    let name=document.createElement("p");
    name.innerText=e.Title;

    let btn=document.createElement("button");
    btn.innerText="Book Movie";
    btn.setAttribute=("id","book_now")
    btn.addEventListener("click",function(e)
    {
        
        bookFunc();
        
    });
    movieDiv.append(img,name,btn);
    myMainDiv.append(movieDiv)
    });
}

let elem=[];
function bookFunc(e)
{
    elem.push(e)
    localStorage.setItem("movie",JSON.stringify(elem));
    window.location.href="checkout.html";
}

async function main()
{
    let data=await searchMovie();

    if(data===undefined)
    {
        return false;
    }
    append(data);
}

function debounce(f,d)
{
    if(id)
    {
        clearTimeout(id);
    }
    
    id = setTimeout(function()
    {
        f();
    },d)
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
