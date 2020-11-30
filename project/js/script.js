/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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
let advBlock = document.querySelector('.promo__adv');
let advBlockImg = advBlock.querySelectorAll('img');
let promoBg = document.querySelector('.promo__bg');
let genreName = document.querySelector('.promo__genre');
let movieListItem = document.querySelectorAll('.promo__interactive-item');
let movieList = document.querySelector('.promo__interactive-list');

advBlockImg.forEach(item => item.remove());

genreName.textContent = 'Драма';

promoBg.style.backgroundImage= 'url("img/bg.jpg")';

let moviesArray = movieDB.movies.sort();

movieListItem.forEach(item => item.remove());


moviesArray.forEach(function(item, index){
    let newList = movieListItem.innerHTML(`<li class="promo__interactive-item"> ${item} <div class="delete"></div></li>`);
    movieList.append(newList);

});






