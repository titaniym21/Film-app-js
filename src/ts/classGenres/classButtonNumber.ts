

class ButtonNumber {
    public buttonNumber: HTMLSpanElement;

    constructor() {
        this.buttonNumber = document.createElement('span');
        this.buttonNumber.classList.add('page-buttons');
        return this;
    }
}

module.exports = { ButtonNumber };