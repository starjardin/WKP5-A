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
			'Wait, put them out',
			'Add some salt on it',
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
	recipes.forEach(recipe = recipe => {
		const myHtml = `
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
		container.insertAdjacentHTML('beforeend', myHtml);
	})
		// generate the HTML
			// put it in the DOM
};

generateButton.addEventListener('click', renderCard);
 
const ShowDetailsBtn = document.querySelectorAll('.bnt');

const recipeDetails = (e) => {
	const recipeShowBtn = e.target.matches('.btn');
	if (recipeShowBtn) {
		const parent = e.target.closest(".dish-card");
		const id = parent.dataset.id;
		const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
		const stepsList = recipe.steps;
		let stepsListItem;
		for (let i = 0; i< stepsList.length; i++) {
			const htmlstepsList = recipe.steps[i];
			stepsListItem = htmlstepsList;
			console.log(stepsListItem)
		}
			const myHTML = `
			<h2>${recipe.title} by <small>${recipe.author}</small></h2>
			<img src = "${recipe.picture}">
			<p>${recipe.steps}</p>
			`
			innerModal.insertAdjacentHTML("afterbegin", myHTML);
			outerModal.classList.add("open")
		 }
		 console.log(outerModal);
}

window.addEventListener('click', recipeDetails);


