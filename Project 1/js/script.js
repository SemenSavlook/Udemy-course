'use strict';

let numberOfFilms;

// function start() {
// 	numberOfFilms	= +prompt('Сколько фильмов вы уже посмотрели?', '10');
// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
// 		numberOfFilms	= +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	}
// }

// start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	rememberMyFilms: function () {

		for (let i = 0; i < 2; i++) {

			const a = prompt('Один из последних просмотренных фильмов?', 'Чики'),
				b = prompt('На сколько оцените его?', 5);

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
			} else {
				i--;
			}
		}
	},

	detectPersonalLevel: function () {

		if (personalMovieDB.count < 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			alert('Вы классический зритель');
		} else if (personalMovieDB.count > 30) {
			alert('Вы киноман');
		} else {
			alert('Произошла ошибка');
		}
	},

	showMyDB: function (hidden) {
		if (!hidden) {
		console.log(personalMovieDB);
		}
	},

	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, 'Боевик');
			if (personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1] == '') {
				i--;
			}
		}
	},

	toggleVisibleMyDB: function(checker) {
		if (checker) { this.privat = false; } else { this.privat = true; }
	}
};

personalMovieDB.writeYourGenres();


personalMovieDB.genres.forEach (function (cvalue, index) {
	console.log(`Любимый жанр #${index+1}: ${cvalue}`);
});




