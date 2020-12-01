'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const	adv = document.querySelectorAll('.promo__adv img'),
			poster = document.querySelector('.promo__bg'),
			genre = poster.querySelector('.promo__genre'),
			movieList = document.querySelector('.promo__interactive-list'),
			confirmBtn = document.querySelector('.add button'),
			inputField = document.querySelector('.adding__input'),
			deleteFilm = document.querySelectorAll('.delete');

adv.forEach(item => {
	item.remove();
});

genre.textContent = 'Драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieDB.movies.forEach(function (item, index , array) {
	array[index] = item.toUpperCase();
});


function renderList() {
	movieList.innerHTML = '';
	
	movieDB.movies.sort();
	
	movieDB.movies.forEach((film, i) =>{
		let cuttedName = film;
		if (film.length > 21) {
			cuttedName = film.slice(0, 21) + '...';
		}
		movieList.innerHTML += `
			<li class="promo__interactive-item">№${i + 1} ${cuttedName}
			<div class="delete"></div>
			</li>
		`;
	});
}

renderList();

deleteFilm.forEach((item) => {
	item.addEventListener('click', function(evt) {
		// code here
	});
});

confirmBtn.addEventListener('click', function (evt) {
	evt.preventDefault();
	if (inputField.value != '' && inputField.value.charAt(0) !== ' ' || inputField.value == null) {
		movieDB.movies.push(inputField.value.toUpperCase());
		renderList();
	}
});

// deleteFilm.addEventListener('click', function (evt) {

// });

console.dir(deleteFilm);
console.dir(deleteFilm[0].parentElement);
console.dir(deleteFilm[0].parentNode);

// console.log(movieDB.movies);
// console.warn('working');




