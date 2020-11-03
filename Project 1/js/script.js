'use strict';

let numberOfFilms;

function start() {
	numberOfFilms	= +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
		numberOfFilms	= +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
	for (let i = 0; i<2; i++) {

		const a = prompt('Один из последних просмотренных фильмов?', 'Чики'),	
					b = prompt('На сколько оцените его?', 5);
				
					if (a != null && b != null && a != '' && b != '' && a.length < 50) {
						
						personalMovieDB.movies[a] = b;
	
					} else {
						i--; 
					}
	}
}

rememberMyFilms()

function detectPersonalLevel() {
	
	if (personalMovieDB.count < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		alert('Вы классический зритель');
	} else if (personalMovieDB.count > 30) {
		alert('Вы киноман');
	} else {
		alert('Произошла ошибка');
	}

}

detectPersonalLevel();

console.log(personalMovieDB);

