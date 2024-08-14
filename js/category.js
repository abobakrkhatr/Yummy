async function getCategory() {
    let apiCategory = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    let category = await apiCategory.json();
    console.log(category.categories);
    displayCategory(category.categories);
  }
  
  function displayCategory(arr) {
    let category = "";
    for (let i = 0; i < arr.length; i++) {
      category += `
    <div class="col-md-6 col-lg-3">
    <div class="item position-relative rounded-3" onclick="getTypeCategory('${
      arr[i].strCategory
    }')">
   <img src="${arr[i].strCategoryThumb}" alt="" class="w-100" loading="lazy">
        <div class="layer-item text-center position-absolute rounded-3">
            <h4 class="text-capitalize p-0 m-0">${arr[i].strCategory}</h4>
            <p class="m-0 p-0">${arr[i].strCategoryDescription
              .split(" ")
              .slice(0, 20)
              .join(" ")}
            </p>
        </div>
    </div>
  </div>
    `;
    }
    rowData.innerHTML = category;
  }
  
  async function getTypeCategory(typeCategory) {
    let categoryFood = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${typeCategory}`
    );
    let meal = await categoryFood.json();
    console.log(meal.meals);
    displayTypeCategory(meal.meals);
  }
  
  function displayTypeCategory(arr) {
    let meal = "";
    if (arr.length > 20) {
      arr.length = 20;
    }
    for (let i = 0; i < arr.length; i++) {
      meal += `
      <div class="col-md-6 col-lg-3">
      <div class="item position-relative rounded-3" onclick="getDetails('${arr[i].idMeal}')">
     <img src="${arr[i].strMealThumb}" alt="" class="w-100" loading="lazy">
          <div class="layer-item position-absolute rounded-3">
              <h3 class="text-capitalize ps-1 pe-3">${arr[i].strMeal}</h3>
              
          </div>
      </div>
    </div>
      `;
    }
    rowData.innerHTML = meal;
  }
  
  async function getDetails(id) {
    const detailMeal = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const responseMeal = await detailMeal.json();
    console.log(responseMeal.meals);
    displayDetail(responseMeal.meals);
  }
  
  function displayDetail(arr) {
     let ingredients = ``;
    for (let i = 1; i <= 20; i++) {
        if (arr[`strIngredient${i}`]) {
            ingredients += `<li class="bg-info-subtle rounded-2 p-2 me-3 text-green">${arr[`strMeasure${i}`]} ${arr[`strIngredient${i}`]}</li>`
        }
       
    };
    for(let i=0;i<arr.length;i++){
   
    rowData.innerHTML = `
  <div class="offset-1 col-10 col-lg-4 offset-lg-0 text-white rounded-3">
    <img src="${arr[i].strMealThumb}" alt="" class="w-100">
      <h2>${arr[i].strMeal}</h2>
  </div>
  <div class="offset-1 col-10 col-lg-8 text-light offset-lg-0">
     <h2>instruction</h2>
      <p>${arr[i].strInstructions}</p>
        <div class="text-capitalize">
          <h3>Area:${arr[i].strArea} </h3>
          <h3>Category:${arr[i].strCategory} </h3>
          <h3>Recipes: </h3>
          <ul class="list-unstyled d-flex flex-wrap">
         ${ingredients}
           
          </ul>
          <h3>tags :</h3>
          <ul class="list-unstyled d-flex flex-wrap">
          ${arr[i].strTags?.split(",").map(function(x){
            return `<li class="bg-pink rounded-2 p-2 my-2 m-2 d-inline-block text-brown">${x}</li>`
            }).join('')||" "}
          </ul>
        </div>
         <div>
             <a href="${arr[i].strSource}" class="btn bg-green text-white text-capitalize"> Source</a>
            <a href="${arr[i].strYoutube}" class="btn bg-danger text-white text-capitalize"> Youtube</a>
         </div>
  </div>
  
  `
  
  
  
  };
  }