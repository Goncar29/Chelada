
const boxContainer = document.querySelector('.box');

$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};



const beerList = [];
beerList.push({
	name: 'MaracuIPA',
	description: 'Lorem',
	price: '200',
	image: './img/beer.jpg',
});
beerList.push({
	name: 'Summer Ale de Frutilla',
	description: 'Lorem',
	price: '200',
	image: './img/beer.jpg',
});
beerList.push({
	name: 'Smoke',
	description: 'Lorem',
	price: '180',
	image: './img/beer.jpg',
});
beerList.push({
	name: 'Irish Red',
	description: 'Lorem',
	price: '150',
	image: './img/beer.jpg',
});
beerList.push({
	name: 'Porter',
	description: 'Lorem',
	price: '180',
	image: './img/beer.jpg',
});
beerList.push({
	name: 'Barley Wine',
	description: 'Lorem',
	price: '200',
	image: './img/beer.jpg',
});
beerList.push({
	name: 'Weisse',
	description: 'Lorem',
	price: '150',
	image: './img/beer.jpg',
});
beerList.push({
	name: 'Dry Stout',
	description: 'Lorem',
	price: '180',
	image: './img/beer.jpg',
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

{/* <div id="beerDetail" class="section__container--box">
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
    </div> */}