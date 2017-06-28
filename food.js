// DOGFOOD SECTION

let dogFoodContainerDiv = document.getElementById('dog-food');

let dogFoodLoad = new XMLHttpRequest();

function dogFoodLoadHandler() {
	var data = JSON.parse(event.target.responseText);
	// console.log(data);
	outputDogFood(data);
	// outputDogFoodTypeSections(data);
}

function dogFoodLoadErrorHandler() {
	console.log('there was an error loading the JSON');
}

dogFoodLoad.addEventListener('load', dogFoodLoadHandler);
dogFoodLoad.addEventListener('error', dogFoodLoadErrorHandler);

dogFoodLoad.open('GET', 'dogfood.json');

dogFoodLoad.send();

function outputDogFood(data) {
	// console.log(data);
	data.dog_brands.forEach(function(brand) {
		// console.log(brand);
		let dogBrandSection = document.createElement('section');
		dogBrandSection.className = 'brand';
		dogBrandSection.id = brand.name;
		dogBrandSection.innerHTML = `Brand: ${brand.name}`;
		dogFoodContainerDiv.appendChild(dogBrandSection);
		// console.log(dogBrandSection);
		// console.log(brand.types);
		brand.types.forEach(function(type) {
			// console.log(type);
			let dogfoodTypeSection = document.createElement('section');
			// console.log(type.type)
			dogfoodTypeSection.className = 'type';
			dogfoodTypeSection.id = type.type;
			dogfoodTypeSection.innerHTML = `Type: ${type.type}`;
			dogBrandSection.appendChild(dogfoodTypeSection);
			// console.log(dogfoodTypeSection);
			type.volumes.forEach(function(volume){
				// console.log(volume);
				let dogfoodVolume = document.createElement('p');
				dogfoodVolume.innerHTML = `Quantity: ${volume.name} / Price: $${volume.price}`;
				dogfoodTypeSection.appendChild(dogfoodVolume);
			});
		});
	});
}

// CATFOOD SECTION

let catFoodContainerDiv = document.getElementById('cat-food');

let catFoodLoad = new XMLHttpRequest();

function catFoodLoadHandler() {
	var data = JSON.parse(event.target.responseText);
	console.log(data);
	outputCatFood(data);
	// outputDogFoodTypeSections(data);
}

function catFoodLoadErrorHandler() {
	console.log('there was an error loading the JSON');
}

catFoodLoad.addEventListener('load', catFoodLoadHandler);
catFoodLoad.addEventListener('error', catFoodLoadErrorHandler);

catFoodLoad.open('GET', 'catfood.json');

catFoodLoad.send();

function outputCatFood(data) {
	// console.log(data);
	data.cat_brands.forEach(function(brand) {
		// console.log(brand);
		let catBrandSection = document.createElement('section');
		catBrandSection.className = 'brand';
		catBrandSection.id = brand.name;
		catBrandSection.innerHTML = `Brand: ${brand.name}`;
		catFoodContainerDiv.appendChild(catBrandSection);
		// console.log(catBrandSection);
		// console.log(brand.types);
		let catBreedSection = document.createElement('section');
		catBreedSection.className = 'breed';
		catBreedSection.innerHTML = 'Breeds';
		catBrandSection.appendChild(catBreedSection);
		brand.breeds.forEach(function(breed){
			let catBreed = document.createElement('p');
			catBreed.innerHTML = breed;
			catBreedSection.appendChild(catBreed);
		});
		brand.types.forEach(function(type) {
			// console.log(type);
			let catfoodTypeSection = document.createElement('section');
			// console.log(type.type)
			catfoodTypeSection.className = 'type';
			catfoodTypeSection.id = type.type;
			catfoodTypeSection.innerHTML = `Type: ${type.type}`;
			catBrandSection.appendChild(catfoodTypeSection);
			// console.log(dogfoodTypeSection);
			type.volumes.forEach(function(volume){
				// console.log(volume);
				let catfoodVolume = document.createElement('p');
				catfoodVolume.innerHTML = `Quantity: ${volume.name} / Price: $${volume.price}`;
				catfoodTypeSection.appendChild(catfoodVolume);
			});
		});
	});
}









