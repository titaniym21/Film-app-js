const getHtmlData = require('../js/slider');

const fs = require('fs');
const path = require('path');


//fetchTrending.json , указали путь к файлу , распарсили и получили массив результатов
let dataTrends = JSON.parse(fs.readFileSync((path.join(__dirname, '../data/fetchTrending.json')), 'utf8')).results;
// визвали функцию для получения html вставки для слайдера, получили строку
let htmlDataTrends = getHtmlData(dataTrends);
// выбрали элемент в который будем вставлять html
const itemSliderHtml = document.querySelector('.trending_item');
// вставили html
itemSliderHtml.innerHTML = htmlDataTrends;

//функция которая выбирет случайный элемент из массива
function getRandomImageBackground(mas) {
    let poster;
    let random = Math.floor(Math.random() * mas.length);
    poster = `https://image.tmdb.org/t/p/w500${mas[random].poster_path}`;
    return poster;
}


// заставка для фона
const container = document.querySelector('.container');

let randomImage = getRandomImageBackground(dataTrends);
container.style.backgroundImage = `url(${getRandomImageBackground(dataTrends)})`;


//fetchTopRated.json
let dataTopRated = JSON.parse(fs.readFileSync((path.join(__dirname, '../data/fetchTopRated.json')), 'utf8')).results;
let htmlDataTopRated = getHtmlData(dataTopRated);
const itemSliderHtmlTopRated = document.querySelector('.top_rated_item');
itemSliderHtmlTopRated.innerHTML = htmlDataTopRated;


