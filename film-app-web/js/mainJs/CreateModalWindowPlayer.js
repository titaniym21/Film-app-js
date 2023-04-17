
import { addFilmToFavoritesMain } from '../mainJs/addFilmToFavoritesMain.js';
//const addFilmToFavoritesMain = require('../mainJs/addFilmToFavoritesMain');
import { ModalWindow } from '../classSearch/classModalWindow.js';
//const { ModalWindow } = require('../classSearch/classModalWindow');
import { Content } from '../classSearch/classContent.js';
//const { Content } = require('../classSearch/classContent');
import { ButtonClose } from '../classSearch/classButtonClose.js';
//const { ButtonClose } = require('../classSearch/classButtonClose');
import { ButtonAddMain } from './classButtonAddMain.js';
//const { ButtonAddMain } = require('./classButtonAddMain');
import { Video } from '../classSearch/classVideo.js';
//const { Video } = require('../classSearch/classVideo');
export class CreateModalWindowPlayer {
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
