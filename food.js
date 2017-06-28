let dogFoodContainerDiv = document.getElementById('dog-food');
let dogFoodData;

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
				console.log(volume);
				let dogfoodVolume = document.createElement('p');
				dogfoodVolume.innerHTML = `Quantity: ${volume.name} / Price: $${volume.price}`;
				dogfoodTypeSection.appendChild(dogfoodVolume);
			});
		});
	});
}

function outputDogFoodTypeSections() {
	// data.dog_brands.
}


