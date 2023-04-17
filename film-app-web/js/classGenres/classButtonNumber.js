'use strict';

export class ButtonNumber {
    constructor() {
        this.buttonNumber = document.createElement('span');
        this.buttonNumber.classList.add('page-buttons');
        return this.buttonNumber;
    }
}