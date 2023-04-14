"use strict";

/** @module delFromLocalStorage */

/** 
 * Module: delFromLocalStorage~delFromLocalStorage. <br/>
 * The delFromLocalStorage function iterates over an array of objects <br/>
 * and checks the equality of the id field with the id variable, <br/>
 * if true, this object is removed from the array and overwritten <br/>
 * in the storage by the active user key.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 * @param {Array} arr - array of active user selected by key from storage
 * @param {string} id - reads the id from the element on which the handler worked
 * @param {string} key - it contains favorites data for the active user
 * @returns {undefined}
 */

function delFromLocalStorage(arr, id, key) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].id === Number(id)) {
            arr.splice(i, 1);
            localStorage.setItem(key, JSON.stringify(arr));
            return;
        }
    }
}
module.exports = delFromLocalStorage;
