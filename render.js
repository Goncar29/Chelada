const boxContainer = document.querySelector('.box');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const beerDetail = document.querySelector('#beerDetail');
const productDetail = document.querySelector('#productDetail');

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const beerList = [];
beerList.push({
	name: 'MaracuIPA',
	description: 'Lorem',
	price: '200',
	image: './img/maracuipa.jpg',
});
beerList.push({
	name: 'Summer Ale de Frutilla',
	description: 'Lorem',
	price: '200',
	image: './img/frutilla.jpg',
});
beerList.push({
	name: 'Smoke',
	description: 'Lorem',
	price: '180',
	image: './img/smoke.jpg',
});
beerList.push({
	name: 'Irish Red',
	description: 'Lorem',
	price: '150',
	image: './img/irish red.jpg',
});
beerList.push({
	name: 'Porter',
	description: 'Lorem',
	price: '180',
	image: './img/porter.jpg',
});
beerList.push({
	name: 'Barley Wine',
	description: 'Lorem',
	price: '200',
	image: './img/barley wine.jpg',
});
beerList.push({
	name: 'Weisse',
	description: 'Lorem',
	price: '150',
	image: './img/wisse.jpg',
});
beerList.push({
	name: 'Dry Stout',
	description: 'Lorem',
	price: '180',
	image: './img/stout.jpg',
});

function renderBeer(arr) {
	for (beer of arr) {
		const box = document.createElement('div');
		box.classList.add('box');

		const picture = document.createElement('picture');
		picture.classList.add('picture');

		const source = document.createElement('source');
		source.setAttribute('srcset', beer.image);

		const beerImg = document.createElement('img');
		beerImg.setAttribute('src', beer.image);
        beerImg.addEventListener('click', openProductDetailAside);

		const beerName = document.createElement('h2');
		beerName.innerText = beer.name;
		
		const beerDescription = document.createElement('p');
		beerDescription.innerText = beer.description;

		const link = document.createElement('a');
		link.setAttribute('href', '#');
		link.innerText = 'Saber mas';


		picture.appendChild(source);
		picture.appendChild(beerImg);

		box.appendChild(picture);
		box.appendChild(beerName);
		box.appendChild(beerDescription);
		box.appendChild(link);

		beerDetail.appendChild(box)
	}
}

renderBeer(beerList);
/* 
<div id="beerDetail" class="section__container--box">
        <div class="box">
            <picture>
                <source media="(min-width:1000px)" srcset="./img/beer.jpg">
                <source media="(min-width:1000px)" srcset="./img/beer.jpg">
                <img 
                src="./img/beer.jpg" 
                alt="Es una imagen de cerveza">
                <figcaption>Es una imagen de cerveza</figcaption>
            </picture>
            <h2>nombre de la cerveza</h3>
            <p>descripcion de la cerveza
                Lorem ipsum dolor 
                sit amet consectetur 
                adipisicing elit. 
                Ipsum est, officiis 
                ex illo neque ut ratione 
                dolor labore magni mollitia 
                nisi? Atque aliquam nihil 
                eum expedita itaque 
                corrupti ad fugit?
            </p>
            <a href="#"">Saber mas</a>
        </div>
    </div> */


	// Este render para el aside del html
// function renderDetailBeer(arr) {
// 	for (detail of arr) {
// 		const productDetailClosed = document.createElement('div');
// 		productDetailClosed.classList.add('productDetailClosed');

// 		const closedImg = document.createElement('img');
// 		closedImg.setAttribute('src', './img/icon_close.png');
// 		closedImg.setAttribute('alt', 'close');

// 		const detailImg = document.createElement('img');
// 		detailImg.setAttribute('src', detail.image);

// 		const productInfo = document.createElement('div');
// 		productInfo.classList.add('product-info');

// 		const productPrice = document.createElement('p');
// 		productPrice.innerText = '$' + detail.price;
// 		const productName = document.createElement('p');
// 		productName.innerText = detail.name;
// 		const productDescription = document.createElement('p');
// 		productDescription.innerText = detail.description;

// 		const detailButton = document.createElement('button');
// 		detailButton.classList.add('primary-button');

// 		const cartImg = document.createElement('img');
// 		cartImg.setAttribute('src', './img/bt_add_to_cart.svg');
// 		cartImg.setAttribute('alt', 'add to cart');

// 		productInfo.appendChild(productPrice);
// 		productInfo.appendChild(productName);
// 		productInfo.appendChild(productDescription);
// 		productInfo.appendChild(detailButton);
// 		productInfo.appendChild(cartImg);

// 		productDetailClosed.appendChild(closedImg);

// 		productDetail.appendChild(productInfo);
// 		productDetail.appendChild(detailImg);
// 		productDetail.appendChild(productDetailClosed);
// 	}
// }

// renderDetailBeer(beerList);


	// <aside id="productDetail" class="inactive">
    //         <div class="product-detail-close">
    //             <img src="./img/icon_close.png" alt="close">
    //         </div>
    //         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    //         <div class="product-info">
    //             <p>$35,00</p>
    //             <p>Bike</p>
    //             <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
    //             <button class="primary-button add-to-cart-button">
    //             <img src="./img/bt_add_to_cart.svg" alt="add to cart">
    //                 Add to cart
    //             </button>
    //         </div>
    //     </aside>