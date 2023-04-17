'use strict';

// const { beforeFiveButtons } = require('../genres/beforeAfterButtons');
// const { afterFiveButtons } = require('../genres/beforeAfterButtons');

import { beforeFiveButtons } from '../genres/beforeAfterButtons.js';
import { afterFiveButtons } from '../genres/beforeAfterButtons.js';

export class Box {
    constructor() {
        this.box = document.createElement('div');
        this.box.setAttribute('id', 'boxButton');
        this.box.classList.add('box-button');
        this.box.addEventListener('click', (event) => {
            if (event.target.textContent === '<') {
                beforeFiveButtons();
            } else if (event.target.textContent === '>') {
                afterFiveButtons();
            }
        });
        return this.box;
    }
}
