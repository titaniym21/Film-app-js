
let arrWindow = [];
const { ModalWindow } = require('../classSearch/classModalWindow');
const { Content } = require('../classSearch/classContent');
const { ButtonClose } = require('../classSearch/classButtonClose');
const { ButtonAdd } = require('../classSearch/classButtonAdd');
const { Video } = require('../classSearch/classVideo');





class CreateModalWindowPlayer {
    constructor(obj) {
        this.modalWindow = new ModalWindow();
        this.modalWindow.classList.add('modal-window-player');
        this.content = new Content();
        this.buttonClose = new ButtonClose();
        this.buttonAdd = new ButtonAdd();
        this.video = new Video(obj);
        this.content.append(this.video);
        this.modalWindow.append(this.content, this.buttonClose, this.buttonAdd);
        arrWindow.push(this.name);
        console.log('arrWindow');
        return this.modalWindow;
    }
}

module.exports = {
    CreateModalWindowPlayer
}