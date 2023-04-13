
// функция удаляет по id элемент с избранного и сохраняет изминения 

function delFromLocalStorage(arr: [string, number][], id: string, key: string): void {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][1] === Number(id)) {
      arr.splice(i, 1);
      localStorage.setItem(key, JSON.stringify(arr));
      return;
    }
  }
}

module.exports = delFromLocalStorage;