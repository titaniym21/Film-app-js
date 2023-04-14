
const addFilmToFavoritesMain = require('../mainJs/addFilmToFavoritesMain');
const { ModalWindow } = require('../classSearch/classModalWindow');
const { Content } = require('../classSearch/classContent');
const { ButtonClose } = require('../classSearch/classButtonClose');
const { ButtonAddMain } = require('./classButtonAddMain');
const { Video } = require('../classSearch/classVideo');
class CreateModalWindowPlayer {
    name;
    modalWindow;
    content;
    buttonClose;
    buttonAdd;
    video;
    constructor(obj) {
        this.name = { title: obj.title, id: obj.id };
        this.modalWindow = new ModalWindow();
        this.modalWindow.classList.add('modal-window-player');
        this.content = new Content();
        this.buttonClose = new ButtonClose();
        this.buttonAdd = new ButtonAddMain();
        this.buttonAdd.addEventListener('click', () => {
            addFilmToFavoritesMain(this.name);
        });
        this.video = new Video(obj);
        this.content.append(this.video);
        this.modalWindow.append(this.content, this.buttonClose, this.buttonAdd);
        //arrWindow.push(this.name);
    }
    getModalWindow() {
        return this.modalWindow;
    }
}
module.exports = {
    CreateModalWindowPlayer,
}