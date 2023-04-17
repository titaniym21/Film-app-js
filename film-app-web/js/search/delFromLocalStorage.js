
export function delFromLocalStorage(arr, id, key) {
    console.log(arr);
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].id === Number(id)) {
            arr.splice(i, 1);
            localStorage.setItem(key, JSON.stringify(arr));
            return;
        }
    }
}

