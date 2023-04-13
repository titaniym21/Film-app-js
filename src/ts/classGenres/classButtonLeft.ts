

class ButtonLeft {
    public buttonLeft: HTMLDivElement;

    constructor() {
        this.buttonLeft = document.createElement('div');
        this.buttonLeft.classList.add('page-buttons');
        this.buttonLeft.textContent = '<';
        return this;
    }
}

module.exports = { ButtonLeft };