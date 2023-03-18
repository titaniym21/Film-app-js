const fs = require('fs');
const path = require('path');




// функция для записи данных в файл, что бы не делать запросы каждый раз к серверу
function fetchMovies( obj ) {
    for (let key in obj) {
        fetch(obj[key])
            .then((response) => response.json())
            .then((data) => {
                let filePath = path.join(__dirname, `../data/${key}.json`);  
                fs.writeFile(filePath, JSON.stringify(data), (err) => {
                    if (err) {
                        console.log('Error writing file', err);
                    } else {
                        console.log('Successfully wrote file');
                    }
                });
            })
            .catch((error) => console.log(error)
        );
    }
}

// для создания и записи данных временеми в файл, от которого будет зависить запросы к серверу раз в 24 часа
function checkLogFile( obj ) {
    const logFilePath = path.join(__dirname,`../data/log.json`);
    if (!fs.existsSync(logFilePath)) {
      fs.writeFileSync(logFilePath, '[]', 'utf8');
    }
    const logFileData = JSON.parse(fs.readFileSync(logFilePath, 'utf8'));
    console.log(logFileData);
    const currentDate = new Date();
    const lastLogDate = logFileData.length > 0 ? new Date(logFileData[logFileData.length - 1].date) : new Date(0);
    const diffInHours = (currentDate - lastLogDate) / (1000 * 60 * 60);
    if (diffInHours > 24) {
      fetchMovies(obj);
      logFileData.push({
        date: currentDate.toISOString(),
        data: 'Новые данные',
      });
      fs.writeFileSync(logFilePath, JSON.stringify(logFileData), 'utf8');
    }
  }

// тут еще нужно записать что бы подгружать данные из каждой категории, а не все сразу
// дальше нужно выносить в отдельный файл

exports.checkLogFile = checkLogFile;
//exports.fetchMovies = fetchMovies;
