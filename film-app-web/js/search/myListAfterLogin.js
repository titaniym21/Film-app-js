'use strict'
import {addFilmToList} from './addFilmToList.js';
//const addFilmToList = require('./addFilmToList');
let key = `key-${localStorage.getItem('loggedInUsername')}`;

/** @module myListAfterLogin */

/** 
 * The myListAfterLogin function reads data from the storage, iterates over an array of objects, <br/>
 * and each iteration calls the function passing the array object into it. <br/>
 * The myListAfterLogin function uses various functions of the addFilmToList module: <br/>
 * [addFilmToList]{@link module:addFilmToList~addFilmToList}. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 * @returns {undefined}
 */

export function myListAfterLogin() {
    let arr = JSON.parse(localStorage.getItem(key));
    if (arr !== null) {
        for (let i = 0; i < arr.length; i += 1) {
            addFilmToList(arr[i]);
        }
    }
}


/** 
 * The addLastElemList function reads data from the storage, <br/>
 * calls the element drawing function, passing the last object <br/>
 * from the array into the argument.
 * The addLastElemList function uses various functions of the addFilmToList module: <br/>
 * [addFilmToList]{@link module:addFilmToList~addFilmToList}. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 * @returns {undefined}
 */

export function addLastElemList() {
    let arr = JSON.parse(localStorage.getItem(key));
    console.log(arr);
    addFilmToList(arr[arr.length - 1]);
}
