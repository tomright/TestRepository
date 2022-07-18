"use strict";

const personalMoveDB = {
  count: 0,
  moves: {},
  actors: {},
  genres: [],
  private: false,
};

// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
// personalMoveDB.count = numberOfFilms;
// if (personalMoveDB.count < 10) {
//   alert("Просмотренно слишком мало фильмов");
// } else if (personalMoveDB.count >= 10 && personalMoveDB.count <= 30) {
//   alert("Вы классический зритель!");
// } else if (personalMoveDB.count > 30) {
//   alert("Вы киноман");
// } else {
//   alert("Произошла ошибка");
// }

let lastFilm = "";
let lastFilmRating = "";
let counter = 3;
goToBack: while (counter) {
  lastFilm = prompt("Один из последних просмотренных фильмов?", "");
  if (
    lastFilm == null ||
    lastFilm.length == 0 ||
    lastFilm == "" ||
    lastFilm == " " ||
    lastFilm.length > 50
  ) {
    alert(
      "Название фильма должно иметь не более 50 символов и не быть пустым! Попробуйте еще раз."
    );
    counter++;
  } else {
    lastFilmRating = +prompt("На сколько оцените последний фильм?", "");
    if (
      lastFilmRating == null ||
      lastFilmRating.length == 0 ||
      lastFilmRating == "" ||
      lastFilmRating == " " ||
      lastFilmRating.length > 50 ||
      isNaN(lastFilmRating)
    ) {
      alert(
        "Рейтинг фильма должно иметь не более 50 символов и не быть пустым! Попробуйте еще раз."
      );
      counter++;
    } else {
      personalMoveDB.moves[lastFilm] = lastFilmRating;
      counter--;
    }
  }
}
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

console.log(personalMoveDB);
