const recipes = [
	{
		title: 'Chicken',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: "185234589",
	},
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Boglo',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
		],
		id: "2425734",
	},
	{
		title: 'Breadfruit',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Smith',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Put a pan on the fire',
			'Crack the eggs on it',
		],
		id: "334",
	},
	{
		title: 'Romazava',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Maconren',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
			'Put a pan on the fire',
			'Crack the eggs on it',
		],
		id: "443454",
	},
];


const generateButton = document.querySelector('button.generate');
const container = document.querySelector('.container');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');

const renderCard = () => {
	// check the recipes collection
	const arrayFromRecipe = Array.from(recipes);
	const arrayLength = arrayFromRecipe.length;
	recipes.forEach(recipe => {
		const stepsHtml = `
		<div class="dish-card" data-id="${recipe.id}">
			<h3
				class="dish-title
				name="dish-tile">${recipe.title}</h3>
			<img src = "${recipe.picture}">
			<div class="timing_difficulty">
				<p class="dish-timing">${recipe.timing}</p>
				<p class="dish-difficulty">${recipe.difficulty}</p>
			</div>
			<button type="button" class="btn">More Info</button>
		</div>
		`
		container.insertAdjacentHTML('beforeend', stepsHtml);
	})
		// generate the HTML
			// put it in the DOM
};

generateButton.addEventListener('click', renderCard);
 
const ShowDetailsBtn = document.querySelectorAll('.bnt');

const openModal = () => {
	outerModal.classList.add("open")
}

const closeModal =(e) => {
	if (!e.target.matches('.inner-modal')) {
		outerModal.classList.remove('open');
	}
}

const escapeModal = (e) => {
	if (e.key === "Escape") {
		outerModal.classList.remove('open');
	}
}

//function to show the food modale
const foodDetails = (e) => {
	const recipeShowBtn = e.target.matches('.btn');
	if (recipeShowBtn) {
		const parent = e.target.closest(".dish-card");
		const id = parent.dataset.id;
		const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
		const stepsList = recipe.steps;
		const stepsListlength = stepsList.length;
		let stepsListItem = [];
		//function generates the steps
		const makeListElement = () => {
			//loop through the length of the element : steps
			for (let i = 0; i < stepsListlength; i++) {
				stepsListItem[i] = '<li>' + stepsList[i] +'</li>';
			}
		}

		const ingredientList = recipe.ingredients;
		const ingredientListlength = ingredientList.length;
		let ingredientListItem = [];
		//function generates the ingrendients lists
		const makeListingredient = () => {
			//looping through the length of the element : ingredients
			for (let j = 0; j < ingredientListlength; j++) {
				ingredientListItem[j] = '<li>' + ingredientList[j] +'</li>';
			}
		}

		const stepsElement  = makeListElement();
		const ingredientElement  = makeListingredient();
		// a, b, c and d are the starting and closing tags for the list
		const a = '<ul>';
		const b = '</ul>';
		const c = '<ul>';
		const d = '</ul>';
		// full steps list 
		const ulSteps = a + stepsListItem + b;
		// full ingredients lists
		const ulIngredient = c + ingredientListItem + d;
		//html for the outer modale for the food
			const myHTML = `
			<h2>${recipe.title} by <small>${recipe.author}</small></h2>
			<img src = "${recipe.picture}">
			<div class="stp-igr-container">
				<p>Steps</p>
				<p>Ingredients</p>
			</div>
			<div class="list-conatainer">
				${ulSteps}
				${ulIngredient}
			</div>
			`
			innerModal.innerHTML = myHTML;
			openModal();
		}
}

window.addEventListener('keydown', escapeModal);
window.addEventListener('click', closeModal);
window.addEventListener('click', foodDetails);

//work witht the form element

const addArecipeBtn = document.querySelector('.add-recipe');
const formSubmit = document.querySelector('.form');

const handleAddRecipeForm = (e) => {
	const myForm =`
	<form class="form">
			<p>Your name :</p>
			<input
				class="input-form"
				type="text"
				id="name"
				name="name"
				placeholder="Enter your name here"
				required
			/>
			<p>Please select your dish :</p>
			<select name="dish" class="select-form" required>
				<option value="romazava">Romazava</option>
				<option value="koba">Koba</option>
				<option value="ravitoto">Ravitoto</option>
				<option value="mokary">Mokary</option>
				<option value="achard">Achard</option>
				<option value="masikita">Masikita</option>
				<option value="sambos">Sambos</option>
				<option value="mofo-baolina">Mofo baolina</option>
				<option value="ranonapango">Ranonapango</option>
			</select>
			<p>Please select the size of your plate :</p>
			<input type="radio" id="small" name="size" value="small" required />
			<label for="small">Small</label><br />
			<input type="radio" id="medium" name="size" value="medium" />
			<label for="medium">Medium</label><br />
			<input type="radio" id="large" name="size" value="large" />
			<label for="large">Large</label><br />
			<p>How many pieces do you want to order?</p>
			<input
				class="input-form"
				type="number"
				id="quantity"
				name="amount"
				placeholder="Enter a number here"
				required
			/>
			<button class="submitOrder" type="submit">Add this order</button>
		</form>
	`
	openModal();
	innerModal.innerHTML = myForm;
}
addArecipeBtn.addEventListener('click', handleAddRecipeForm)