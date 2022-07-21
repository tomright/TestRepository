"use strict";

const personalMoveDB = {
  count: 0,
  moves: {},
  actors: {},
  genres: [],
  private: false
};

let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
  while (
    numberOfFilms == isNaN(numberOfFilms) ||
    numberOfFilms == null ||
    numberOfFilms == ""
  ) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
  }
}
start();
function detectPersonalLevel() {
  personalMoveDB.count = numberOfFilms;
  if (personalMoveDB.count < 10) {
    console.log("Просмотренно слишком мало фильмов");
  } else if (personalMoveDB.count >= 10 && personalMoveDB.count <= 30) {
    console.log("Вы классический зритель!");
  } else if (personalMoveDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
// detectPersonalLevel();
const arr = ['1', 2, 3, 4, 5, 6, '1', 2, 3, 4, 5, 6];
let lastFilm = "";
let lastFilmRating = "";
let counter = 3;

function remeberMyFilms() {
  for (let i = 0; i < 2; i++) {
    lastFilm = prompt("Один из последних просмотренных фильмов?", "").trim();
    lastFilmRating = +prompt("На сколько оцените последний фильм?", "").trim();
    if (
      lastFilm !== null &&
      lastFilm !== 0 &&
      lastFilm !== "" &&
      lastFilm.length < 50 &&
      lastFilmRating !== null &&
      lastFilmRating.length !== 0 &&
      lastFilmRating !== "" &&
      !isNaN(lastFilmRating)
    ) {
      personalMoveDB.moves[lastFilm] = lastFilmRating;
    } else {
      alert(
        "Название фильма должно иметь не более 50 символов и не быть пустым и рейтинг фильма должно иметь не более 50 символов и не быть пустым! Попробуйте еще раз."
      );
      i--;
    }
  }
}
// remeberMyFilms();

function showMyDB(hidden) {
  if (hidden == false) {
    console.log('Master object:');
    console.log(personalMoveDB);
  } else {
    console.log('Not Master objectn');
  }
}

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    let genres = prompt(`Ваш любимый жанр под номером ${i}: `).trim();
    if (genres !== null && genres !== 0 && genres !== "") {
      personalMoveDB.genres[i-1] = genres;
    } else {
      i--;
    }
  }
}

// writeYourGenres();
personalMoveDB.private = true;
showMyDB(personalMoveDB.private);
console.log(personalMoveDB.moves);
// while (counter) {
//   lastFilm = prompt("Один из последних просмотренных фильмов?", "");
//   if (
//     lastFilm == null ||
//     lastFilm.length == 0 ||
//     lastFilm == "" ||
//     lastFilm == " " ||
//     lastFilm.length > 50
//   ) {
//     alert(
//       "Название фильма должно иметь не более 50 символов и не быть пустым! Попробуйте еще раз."
//     );
//     counter++;
//   } else {
//     lastFilmRating = +prompt("На сколько оцените последний фильм?", "");
//     if (
//       lastFilmRating == null ||
//       lastFilmRating.length == 0 ||
//       lastFilmRating == "" ||
//       lastFilmRating == " " ||
//       lastFilmRating.length > 50 ||
//       isNaN(lastFilmRating)
//     ) {
//       alert(
//         "Рейтинг фильма должно иметь не более 50 символов и не быть пустым! Попробуйте еще раз."
//       );
//       counter++;
//     } else {
//       personalMoveDB.moves[lastFilm] = lastFilmRating;
//       counter--;
//     }
//   }
// }
// goToBack: for (let i = 0; i < 3; i++) {
//   for (let k = 0; k < 3; k++) {
//     lastFilm = prompt("Один из последних просмотренных фильмов?", "");
//     if (
//       lastFilm.length == 0 ||
//       lastFilm == null ||
//       lastFilm == "" ||
//       lastFilm == " " ||
//       lastFilm.length > 50
//     ) {
//       alert(
//         "Название фильма должно иметь не более 50 символов и не быть пустым! Попробуйте еще раз."
//       );
//       continue goToBack;
//     } else {
//       lastFilmRating = +prompt("На сколько оцените последний фильм?", "");
//       if (
//         lastFilmRating.length == 0 ||
//         lastFilmRating == null ||
//         lastFilmRating == "" ||
//         lastFilmRating == " " ||
//         lastFilmRating.length > 50
//       ) {
//         alert(
//           "Рейтинг фильма должно иметь не более 50 символов и не быть пустым! Попробуйте еще раз."
//         );
//         continue goToBack;
//       } else {
//         personalMoveDB.moves[lastFilm] = lastFilmRating;
//       }
//     }
//   }
// }
      
