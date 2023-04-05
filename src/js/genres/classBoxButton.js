'use strict';

const { beforeFiveButtons } = require('./beforeAfterButtons');
const { afterFiveButtons } = require('./beforeAfterButtons');
    
class BoxButton {
    constructor() {
        this.boxButton = document.createElement('div');
        this.boxButton.setAttribute('id', 'boxButton');
        this.boxButton.classList.add('box-button');
        this.boxButton.addEventListener('click', (event) => {
            if (event.target.textContent === '<') {
                beforeFiveButtons();
            } else if (event.target.textContent === '>') {
                afterFiveButtons();
            }
        });
        this.buttonLeft = document.createElement('div');
        this.buttonLeft.classList.add('page-buttons');
        this.buttonLeft.textContent = '<';
        this.boxButton.append(this.buttonLeft)
        for (let i = 1; i < 6; i += 1) {
            this.buttonNumber = document.createElement('span');
            this.buttonNumber.classList.add('page-buttons');
            this.buttonNumber.textContent = i;
            this.boxButton.append(this.buttonNumber)
        }
        this.buttonRight = document.createElement('div');
        this.buttonRight.classList.add('page-buttons');
        this.buttonRight.textContent = '>';
        this.boxButton.append(this.buttonRight)
        return this.boxButton;
    }
}

module.exports = { BoxButton };