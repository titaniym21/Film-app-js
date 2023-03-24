const fs = require('fs');
const path = require('path');




// функция для записи данных в файл, что бы не делать запросы каждый раз к серверу
async function fetchMovies(obj) {
  for (let key in obj) {
    try {
      const response = await fetch(obj[key]);
      const data = await response.json();
      console.log(data);
      let filePath = path.join(__dirname, `../data/${key}.json`);
      fs.writeFileSync(filePath, JSON.stringify(data), (err) => {
        if (err) {
          console.log('Error writing file', err);
        } else {
          console.log('Successfully wrote file');
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
  const logFilePath = path.join(__dirname, `../data/log.json`);
  if (!fs.existsSync(logFilePath)) {
    fs.writeFileSync(logFilePath, '[]', 'utf8');
  }
  const logFileData = JSON.parse(fs.readFileSync(logFilePath, 'utf8'));
  console.log(logFileData);
  const currentDate = new Date();
  logFileData.push({
    date: currentDate.toISOString(),
    data: 'Новые данные',
  });
  fs.writeFileSync(logFilePath, JSON.stringify(logFileData), 'utf8');
}

//для создания и записи данных временеми в файл, от которого будет зависить запросы к серверу раз в 24 часа
function checkLogFile(obj) {
  // проверяем  существует ли файл log.json
  const logFilePath = path.join(__dirname, `../data/log.json`);
  if (!fs.existsSync(logFilePath)) {
    fetchMovies(obj);
    console.log('Данные успешно добавлены');
  } 
  // если файл существует, то проверяем время последнего обновления
  else {
    const logFileData = JSON.parse(fs.readFileSync(logFilePath, 'utf8'));
    const lastUpdate = new Date(logFileData[logFileData.length - 1].date);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - lastUpdate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // если прошло больше 24 часов, то обновить данные
    if (diffDays > 1) {
      fetchMovies(obj);
      console.log('Данные успешно обновлены');
    }
    else {
      console.log('Данные обновлялись менее 24 часов назад');
    }
  }
}



module.exports = checkLogFile;
