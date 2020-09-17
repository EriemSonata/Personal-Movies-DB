let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let q1 = prompt("Один из последних просмотренных фильмов?", ""),
    a1 = prompt("На сколько оцените его?", ""),
    q2 = prompt("Один из последних просмотренных фильмов?", ""),
    a2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[q1] = a1;
personalMovieDB.movies[q2] = a2;

console.log(personalMovieDB);
