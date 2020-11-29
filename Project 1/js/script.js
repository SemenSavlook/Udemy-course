'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '10');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},

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
		if (hidden) {
			console.log(personalMovieDB);
		} else {console.log('База скрыта');}
	},

	toggleVisibleMyDB: function (checker) {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},

	writeYourGenres: function () {
		for (let i = 1; i < 2; i++) {	
			let genres = prompt(`Введите ваши любимые жанры, через запятую`, 'Боевик, Комедия, Триллер');
				if (genres == null || genres == '') {
					i--;
				} else {
					personalMovieDB.genres = genres.split(', ');
					}
			}
		personalMovieDB.genres.forEach((item, index) => {
			
			console.log(`Любимый жанр #${index + 1}: ${item}`);
		});
	}

};

personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);








