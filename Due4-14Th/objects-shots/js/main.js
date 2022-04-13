//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('.liquor').addEventListener('click', getFirstDrink);
document.querySelector('.next').addEventListener('click', nextCocktail);
document.querySelector('.previous').addEventListener('click', previousCocktail);

let i = 1;

function getFirstDrink(){
    let drink = document.querySelector('input').value;
    document.querySelector('.next').disabled = false;
    document.querySelector('.previous').disabled = true;
    i = 0;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      if(data.drinks !== null) {
        console.log(data.drinks);
        document.querySelector('h2').innerText = data.drinks[i].strDrink;
        document.querySelector('img').src = data.drinks[i].strDrinkThumb;
        document.querySelector('h3').innerText = data.drinks[i].strInstructions;
        document.querySelector('h2').style.color = 'black';

        document.querySelector('.ingredients').innerText = 'Ingredients:';
        let ingredientCounter = 1;
        while(data.drinks[i]['strIngredient'+ingredientCounter] !== null) {
          document.querySelector('.ingredients').innerText += '\n'+data.drinks[i]['strIngredient'+ingredientCounter];
          ingredientCounter++;
        }

        if(data.drinks.length > 1) {
          document.querySelector('.next').classList.remove('hidden');
          document.querySelector('.previous').classList.remove('hidden');
        }
        if(data.drinks.length === 1) {
          document.querySelector('.next').classList.add('hidden');
          document.querySelector('.previous').classList.add('hidden');
        }
      }else {
        document.querySelector('h2').innerText = 'Sorry, that\'s not in our database';
        document.querySelector('h2').style.color = 'red';
        document.querySelector('h3').innerText = '';
        document.querySelector('img').src = '';
        document.querySelector('.next').classList.add('hidden');
        document.querySelector('.previous').classList.add('hidden');
      }
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
}

function nextCocktail() {
  let drink = document.querySelector('input').value;
  
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      

      if(i < data.drinks.length-1) {
        document.querySelector('.previous').disabled = false;
        i++;
        document.querySelector('.ingredients').innerText = 'Ingredients:';
        let ingredientCounter = 1;
        while(data.drinks[i]['strIngredient'+ingredientCounter] !== null) {
          document.querySelector('.ingredients').innerText += '\n'+data.drinks[i]['strIngredient'+ingredientCounter];
          ingredientCounter++;
      }
      }
      if(i >= data.drinks.length-1) {
        document.querySelector('.next').disabled = true;
      }
      console.log(data.drinks);
      document.querySelector('h2').innerText = data.drinks[i].strDrink;
      document.querySelector('img').src = data.drinks[i].strDrinkThumb;
      document.querySelector('h3').innerText = data.drinks[i].strInstructions;
      console.log(i);

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function previousCocktail() {
  let drink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {



      if(i > 0) {
        document.querySelector('.next').disabled = false;
        i--;
        document.querySelector('.ingredients').innerText = 'Ingredients:';
        let ingredientCounter = 1;
        while(data.drinks[i]['strIngredient'+ingredientCounter] !== null) {
          document.querySelector('.ingredients').innerText += '\n'+data.drinks[i]['strIngredient'+ingredientCounter];
          ingredientCounter++;
        }
      }
      if(i <= 0) {
        document.querySelector('.previous').disabled = true;
      }
      console.log(data.drinks);
      document.querySelector('h2').innerText = data.drinks[i].strDrink;
      document.querySelector('img').src = data.drinks[i].strDrinkThumb;
      document.querySelector('h3').innerText = data.drinks[i].strInstructions;
      console.log(i);
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

