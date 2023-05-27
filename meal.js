const loadMeals = (search) => {

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`


  fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))



}





const displayMeals = meals => {


  const mealContainer = document.getElementById('meals-container');
  mealContainer.innerHTML = ""


  meals.forEach(meal => {

    // console.log(meal);
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col'),
      mealDiv.innerHTML = `

<div class="card h-100">
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${meal.strMeal}</h5>
  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

  <!-- Button trigger modal -->
  <button  onclick="loadDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
    Details
  </button

  </div>


</div>





`



    mealContainer.appendChild(mealDiv);

    // mealContainer.appendChild(mealDiv);








  })










}

const searchMeals = () => {


  const Text = document.getElementById('searchText').value;
  console.log('hello');
  loadMeals(Text);
  console.log('btn click');

}



const loadDetails = idMeal =>{



  url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}
  `;
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealsDetails(data.meals[0]))




}



const displayMealsDetails = meal =>{

  document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
  const mealDetailsBody = document.getElementById('mealDetailsBody');
  mealDetailsBody.innerHTML="";
  

  mealDetailsBody.innerHTML= ` <img  class=" img-fluid"   src ="${meal.strMealThumb} " > `
 



}


document.getElementById('searchText').addEventListener('keypress',function(e){

  if(e.key ==='Enter'){
    const Text = document.getElementById('searchText').value;
    loadMeals(Text);


  }
})




loadMeals('');

