//функция для загрузки данных с сервера и сохранения их в localStorage
async function fetchMovies(obj) {
  for (let key in obj) {
      try {
          const keyName = `${key}`;
          //console.log(keyName);
          const storedData = localStorage.getItem(keyName);
          if (storedData && (new Date().getTime() - JSON.parse(storedData).timestamp) < 24 * 60 * 60 * 1000) {
              //console.log(`Используем данные ${key} из localStorage.`);
            } else {
              // Если данных нет в localStorage или время последней записи больше 24 часов назад, получаем новые данные
              const response = await fetch(obj[key]);
              const data = await response.json();
              // Обновляем метку времени и сохраняем данные в localStorage
              const timestamp = new Date().getTime();
              const newData = {...data, timestamp};
              localStorage.setItem(keyName, JSON.stringify(newData));
              //console.log(`Добавляем/обновляем данные ${key} и добавляеми их в localStorage.`);
            }
        } catch (err) {
          console.log(err);
        }
    }
    
}


module.exports = {fetchMovies};
