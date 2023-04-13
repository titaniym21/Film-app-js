"use strict";
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
