'use strict';

// const { Box } = require('./classBox');
// const { ButtonLeft } = require('./classButtonLeft');
// const { ButtonNumber } = require('./classButtonNumber');
// const { ButtonRight } = require('./classButtonRight');

import { Box } from './classBox.js';
import { ButtonLeft } from './classButtonLeft.js';
import { ButtonNumber } from './classButtonNumber.js';
import { ButtonRight } from './classButtonRight.js';


export class BoxButton {
    constructor() {
        this.boxButton = new Box();
        this.buttonLeft = new ButtonLeft();
        this.boxButton.append(this.buttonLeft)
        for (let i = 1; i < 6; i += 1) {
            this.buttonNumber = new ButtonNumber();
            this.buttonNumber.textContent = i;
            this.boxButton.append(this.buttonNumber)
        }
        this.buttonRight = new ButtonRight();
        this.boxButton.append(this.buttonRight)
        return this.boxButton;
    }
}
