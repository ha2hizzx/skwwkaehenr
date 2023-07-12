// 음식 객체 배열
const foods = [
    { name: '햄버거', ingredients: ['고기', '양파', '상추', '토마토', '빵', '소스'], description: '어디든 다니며 먹기 좋은 햄버거입니다.', recipe: '고기를 패티모양으로 구운다. -> 빵위에 고기를 엊는다 -> 위에 상추를 얹는다. -> 위에 토마토를 얹는다. -> 위에 양파를 얹는다. -> 위에 소스를 얹는다. -> 위에 빵으로 덮는다.', image: 'hamburger.webp' },
    { name: '피자', ingredients: ['도우', '치즈', '토마토 소스', '페퍼로니'], description: '치즈의 풍미가 좋은 피자입니다.', recipe: '피자 레시피 : 도우에 토마토소스를 바른다. -> 치즈를 얹는다 -> 치즈위에 페퍼로니를 얹는다 -> 오븐 또는 에어프라이기에 넣고 적당히 익힌다.', image: 'pizza.jpg' },
    { name: '스테이크', ingredients: ['고기', '소스', '드레싱', '버터', '샐러드', '올리브유'], description: '고급진 스테이크입니다.', recipe: '스테이크 레시피 : 달군 프라이펜에 올리브유를 두르고 버터를 녹인다 -> 고기를 넣고 샐러드를 넣는다 -> 고기에 버터를 끼얹으면서 익힌다.', image: 'stake.jpg' },
    { name: '김치볶음밥', ingredients: ['김치', '밥', '계란'], description: '김치와 밥의 조화 김치볶음밥입니다.', recipe: '김치볶음밥 레시피 : 식용유를 두른 뒤 김치와 밥을 넣어서 볶으세요', image: 'Kimchi Fried Rice.jpg' },
    { name: '계란 말이', ingredients: ['계란', '파'], description: '부드럽고 식감이 재미있는 계란말이 입니다.', recipe: '계란 말이 레시피 : 프라이팬에 식용유를 두른다 -> 계란을 깐다 -> 계란을 푼다\n -> 넓게 펼치고 썰어둔 파를 넣는다. -> 접어가면서 만다.', image: 'eggroll.webp' },
    { name: '에그 프라이', ingredients: ['계란'], description: '어디든 올려도 좋은 에그프라이입니다.', recipe: '에그 프라이 레시피 : 프라이팬에 식용유를 두른다 -> 계란을 깐다 -> 적당히 익힌다.', image: 'eggfrie.webp' },
    { name: '파전', ingredients: ['파', '반죽'], description: '비오는날 생각나는 파전입니다.', recipe: '프라이팬에 식용유를 두르고 달군다 -> 채썬 파를 올린다 -> 밀가루 반죽을 적당히 두른다 -> 뒤집으며 익힌다.', image: 'pajun.jpg' }
  ];
  
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const resultContainer = document.getElementById('result-container');
  const titleContainer = document.getElementById('title-container');
  
  searchBtn.addEventListener('click', searchFoods);
  titleContainer.addEventListener('click', resetSearch);
  
  function searchFoods() {
    const searchTerms = searchInput.value
      .trim()
      .toLowerCase()
      .split(',');
  
    resultContainer.innerHTML = '';
  
    if (searchTerms.length === 0 || searchTerms[0] === '') {
      return;
    }
  
    const matchingFoods = foods.filter(food => {
      return searchTerms.every(searchTerm =>
        food.ingredients.some(ingredient => searchTerm.includes(ingredient.trim()))
      );
    });
  
    if (matchingFoods.length === 0) {
      resultContainer.innerHTML = '<h3>일치하는 음식이 없습니다.</h3>';
      return;
    }
  
    matchingFoods.forEach(food => {
      const foodCard = createFoodCard(food);
      resultContainer.appendChild(foodCard);
    });
  }
  
  function resetSearch() {
    searchInput.value = '';
    resultContainer.innerHTML = '';
  }
  
  function createFoodCard(food) {
    const foodCard = document.createElement('div');
    foodCard.classList.add('food-card');
  
    const foodImageContainer = document.createElement('div');
    foodImageContainer.classList.add('food-image-container');
  
    const foodImage = document.createElement('img');
    foodImage.src = food.image;
    foodImageContainer.appendChild(foodImage);
  
    const foodCardContent = document.createElement('div');
    foodCardContent.classList.add('food-card-content');
  
    const foodName = document.createElement('h2');
    foodName.textContent = food.name;
    foodCardContent.appendChild(foodName);
  
    const foodIngredients = document.createElement('p');
    foodIngredients.textContent = '재료: ' + food.ingredients.join(', ');
    foodCardContent.appendChild(foodIngredients);
  
    const foodDescription = document.createElement('p');
    foodDescription.textContent = '설명: ' + food.description;
    foodCardContent.appendChild(foodDescription);
  
    foodCard.appendChild(foodImageContainer);
    foodCard.appendChild(foodCardContent);
  
    foodCard.addEventListener('click', function () {
      showFoodCardDetails(food);
    });
  
    return foodCard;
  }
  
  function showFoodCardDetails(food) {
    const foodCard = document.createElement('div');
    foodCard.classList.add('food-card', 'huge');
  
    const foodImageContainer = document.createElement('div');
    foodImageContainer.classList.add('food-image-container');
  
    const foodImage = document.createElement('img');
    foodImage.src = food.image;
    foodImageContainer.appendChild(foodImage);
  
    const foodCardContent = document.createElement('div');
    foodCardContent.classList.add('food-card-content');
  
    const foodName = document.createElement('h2');
    foodName.textContent = food.name;
    foodCardContent.appendChild(foodName);
  
    const foodIngredients = document.createElement('p');
    foodIngredients.textContent = '재료: ' + food.ingredients.join(', ');
    foodCardContent.appendChild(foodIngredients);
  
    const foodDescription = document.createElement('p');
    foodDescription.textContent = '설명: ' + food.description;
    foodCardContent.appendChild(foodDescription);
  
    const foodRecipe = document.createElement('p');
    foodRecipe.innerHTML = '레시피: ' + food.recipe.replace(/\n/g, '<br>');
    foodRecipe.classList.add('recipe');
    foodCardContent.appendChild(foodRecipe);
  
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.classList.add('back-button');
    backButton.addEventListener('click', function (event) {
      event.stopPropagation();
      foodCard.style.animation = 'slideDown 0.5s ease-in-out';
      setTimeout(function () {
        foodCard.remove();
      }, 300);
    });
    foodCardContent.appendChild(backButton);
  
    foodCard.appendChild(foodImageContainer);
    foodCard.appendChild(foodCardContent);
  
    document.body.appendChild(foodCard);
  }
  
  searchBtn.addEventListener('click', function() {
    searchFoods();
    searchBtn.classList.add('clicked');
    setTimeout(function() {
      searchBtn.classList.remove('clicked');
    }, 300);
  });
  
  titleContainer.addEventListener('click', function () {
    titleContainer.classList.add('title-container-clicked');
    setTimeout(function () {
      titleContainer.classList.remove('title-container-clicked');
    }, 1000);
  });
  