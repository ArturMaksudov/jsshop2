// import { dataInfo } from "./index.js";

// const div = document.querySelector('.content');
// const data = JSON.parse(dataInfo);

// console.log(data);





// data.forEach(({ shoppingСart, fruits, price, photo }) => {
// 	const divCard = document.createElement('div');
// 	divCard.classList.add('card');
// 	div.appendChild(divCard);
// 	divCard.style.border = '1px solid green';
// 	divCard.style.padding = '20px';
// 	divCard.style.margin = '30px';
// 	divCard.style.borderRadius = '10px';



// 	const img = document.createElement('img');
// 	img.classList.add('img-profile');
// 	img.width = 300;
// 	img.height = 200;
// 	img.src = photo;
// 	divCard.appendChild(img);

// 	const cardBody = document.createElement('div');
// 	cardBody.classList.add('card-body');
// 	divCard.appendChild(cardBody);

// 	const title = document.createElement('h2');
// 	title.classList.add('card-title');
// 	title.textContent = `${fruits} `;
// 	cardBody.appendChild(title);

// 	const subtitle = document.createElement('p');
// 	subtitle.classList.add('card-subtitle');
// 	subtitle.textContent = price;
// 	cardBody.appendChild(subtitle);

// 	const btnPara = document.createElement('button');
// 	btnPara.classList.add('card-btn');
// 	btnPara.textContent = `Корзина ${shoppingСart}`;
// 	btnPara.style.color = 'black';
// 	btnPara.style.cursor = 'pointer';
// 	btnPara.style.backgroundColor = 'orange';
// 	btnPara.style.border = 'none';
// 	btnPara.style.borderRadius = '10px';
// 	btnPara.style.padding = '15px';
// 	cardBody.appendChild(btnPara);

// });



// async function fetchData() {
// 	try {
// 		const responce = await fetch('index.json');
// 		if (!responce.ok) {
// 			throw new Error('Ну удалось получить сведения из index.json')
// 		}
// 		const data = await responce.json();
// 		console.log(data);

// 		const productBox = document.querySelector('.product__box');

// 		data.forEach(({ name, image, price, color, size, quantity, max }) => {
// 			const productEl = `
// 			<div class="product">
// 				<button class="btn__del" type="button">Удалить</button>
// 				<div class="product__content">
// 			  	<img class="product__img" src="${image}" alt="${name}" />
// 			 	 <div class="product__desc">
// 					<h2 class="product__name">${name}</h2>
// 					<p class="product__price-label">
// 				  Price:
// 				  <span class="product__price">$${price}</span>
// 					</p>
// 					<p class="product__color">Color: ${color}</p>
// 					<p class="product__size">Size: ${size}</p>
// 					<div class="product__qty">
// 				 	 <label class="input__label">Quantity:</label>
// 				 	 <input
// 					class="input__quantity"
// 					type="number"
// 					min="0"
// 					max="${max}"
// 					value="${quantity}"
// 				  />
// 				</div>
// 			  </div>
// 			</div>
// 		  </div>`;
// 			productBox.insertAdjacentHTML('beforeend', productEl)
// 		})

// 	} catch (error) {
// 		console.error(error);
// 	}
// }


// fetchData()






async function fetchData() {
	try {
		const responce = await fetch('index.json');
		if (!responce.ok) {
			throw new Error('Ну удалось получить сведения из index.json')
		}
		const data = await responce.json();
		console.log(data);

		const productBox = document.querySelector('.section__box');

		data.forEach(({ name, subname, image, price, color }) => {
			const productEl = `
			
			<div class="section__product-box">
			<div class="section">
			  <img
				class="section__img"
				src="${image}"
				alt="${name}"
			  />
	
			  <div class="section__content">
				<a href="#" class="section__name">ELLERY X M'O CAPSULE</a>
				<p class="section__text">
				  ${subname}
				</p>
				<p class="section__price">$${price}</p>
			  </div>
			</div>
			</div>
		 
			`;
			productBox.insertAdjacentHTML('beforeend', productEl)
		})

	} catch (error) {
		console.error(error);
	}
}


fetchData()