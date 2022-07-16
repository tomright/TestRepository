'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

if (numberOfFilms >= 250) {
    alert('Похоже ты пиздишь, братик!');
}


const personalMoveDB = {
    count: numberOfFilms,
    moves: {},
    actors: {},
    genres: [],
    private: false
};

const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const lastFilmRating = prompt('На сколько оцените последний фильм?', '');

personalMoveDB.moves[lastFilm] = lastFilmRating;

console.log(personalMoveDB);