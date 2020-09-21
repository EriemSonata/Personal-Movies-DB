'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i <= 1; i++) {
        let quest = prompt('Один из последних просмотренных фильмов?', ''),
            answ = prompt('На сколько оцените его?', '');
        
            if (quest != null && answ != null && quest !='' && answ !='' && quest.length < 50) {
                personalMovieDB.movies[quest] = answ;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
    }
}
rememberMyFilms();


function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log('Промотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы класический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        // let questGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();


