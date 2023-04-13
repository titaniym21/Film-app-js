

class ButtonRight {
    public buttonRight: HTMLDivElement;

    constructor() {
        this.buttonRight = document.createElement('div');
        this.buttonRight.classList.add('page-buttons');
        this.buttonRight.textContent = '>';
        return this;
    }
}

module.exports = { ButtonRight };