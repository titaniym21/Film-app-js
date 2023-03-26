const getHtmlData = require('../js/dataToHtml');
const initSlaider = require('../js/slider');
const animationDropList = require('../js/dropDownList');
const fs = require('fs');
const path = require('path');

let masElemetLisener = [];


async function addGanresSlider() {
    try {
        const files = await fs.promises.readdir(path.join(__dirname, '../data'));

        for (const file of files) {
            if (file !== 'log.json') {
                const movies = JSON.parse(await fs.promises.readFile((path.join(__dirname, `../data/${file}`)), 'utf8')).results;
                const fileWithoutExt = file.split('.')[0];

                const htmlItemGanres = `<div class="arrow_slider">
                    <button id="left_arrow_${fileWithoutExt}" class="arrow"><</button>
                    <div id="${fileWithoutExt}_item" class="item_slider"></div>
                    <button id="right_arrow_${fileWithoutExt}" class="arrow">></button>
                </div>`;

                const sliderBox = document.querySelector('.slider_box');
                sliderBox.innerHTML += htmlItemGanres;

                const htmlData = await getHtmlData(movies);

                let item = document.getElementById(`${fileWithoutExt}_item`);
                item.innerHTML = htmlData;

                let leftArrow = document.getElementById(`left_arrow_${fileWithoutExt}`);
                let rightArrow = document.getElementById(`right_arrow_${fileWithoutExt}`);

                masElemetLisener.push({leftArrow, rightArrow, item}); ;
            }
        }
    } catch (err) {
        console.error(err);
    }
}
addGanresSlider().then(() => {
    try {
        masElemetLisener.forEach((element) => {
            console.log(element);
            initSlaider(element.leftArrow, element.rightArrow, element.item);
        });
    } catch (err) {
        console.error(err);
    }
    
});






