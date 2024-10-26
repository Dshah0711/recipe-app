let searchForm = document.querySelector("form");
let container= document.querySelector(".container");

const id ='514e985f';
const searchResultDiv = document.querySelector(".search-result");
const key='a4ac380840e29ea18b48fa3ba5918c54';
function generateHTML(result){
   
    container.classList.remove("initial");
    let generator ='';
    result.map((result)=>{
        generator +=`
        <div class="item">
        <img src=${result.recipe.image} alt="picture">
        <div class="flex-container">
            <h1 class="title">${result.recipe.label}</h1>
            <a class="view" href="${result.recipe.url}">view recipe</a>
        </div>
        <p class="item-data"> Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label:${result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : "No Data Found"}</p>
        <p class="item-data">Health label:${result.recipe.healthLabels}</p>
    </div>`
      
    })
    searchResultDiv.innerHTML=generator;
}
async function FetchAPI(){
    const url =`https://api.edamam.com/search?q=${searchQuery}&app_id=${id}&app_key=${key}`;
    const res =await fetch(url);
    let data = await res.json();

    console.log(data.hits);
    generateHTML(data.hits);
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value;
    console.log(searchQuery);
 
     FetchAPI();
  });
