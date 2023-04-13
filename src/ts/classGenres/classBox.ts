
const { beforeFiveButtons } = require('../genres/beforeAfterButtons');
const { afterFiveButtons } = require('../genres/beforeAfterButtons');

class Box {
    public box: HTMLDivElement;

    constructor() {
        this.box = document.createElement('div');
        this.box.setAttribute('id', 'boxButton');
        this.box.classList.add('box-button');
        this.box.addEventListener('click', (event) => {
            if ((event.target as HTMLDivElement).textContent === '<') {
                beforeFiveButtons();
            } else if ((event.target as HTMLDivElement).textContent === '>') {
                afterFiveButtons();
            }
        });
        return this;
    }
}

module.exports = { Box };