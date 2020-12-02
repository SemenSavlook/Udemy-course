'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
				"Скотт Пилигрим против...",
				"Я робот",
				"Аритмия"
    ]
};

const	adv = document.querySelectorAll('.promo__adv img'),
			poster = document.querySelector('.promo__bg'),
			genre = poster.querySelector('.promo__genre'),
			movieList = document.querySelector('.promo__interactive-list'),
			confirmBtn = document.querySelector('.add button'),
			inputField = document.querySelector('.adding__input'),
			favorite = document.querySelector('.add input[type = checkbox]');
			

adv.forEach(item => {
	item.remove();
});

genre.textContent = 'Драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';


movieDB.movies.forEach(function (item, index , array) {
	array[index] = item.toUpperCase();
});
movieDB.movies.sort();


function addEventDelete() {
	let deleteFilm = document.querySelectorAll('.delete');
	
	deleteFilm.forEach((item, index) => {
		item.addEventListener('click', function() {
			movieDB.movies.splice(index, 1);
			item.parentElement.remove();
			renderList();

			console.log(movieDB.movies);
		}, { once: true });
	});
}

function renderList() {

	movieList.innerHTML = '';
	
	movieDB.movies.sort();
	
	movieDB.movies.forEach((film, i) => {
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
	addEventDelete();
}

renderList();


confirmBtn.addEventListener('click', function (evt) {
	evt.preventDefault();
	if (inputField.value != '' && inputField.value.charAt(0) !== ' ' || inputField.value == null) {
		movieDB.movies.push(inputField.value.toUpperCase());
		renderList();
		console.log(movieDB.movies);
		if (favorite.checked) { console.log("Добавляем любимый фильм"); }
	}
});






