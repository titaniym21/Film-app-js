
// функции для модального окна - информация о фильме
// получает массив видео, ищет тип видео - триллер, когда находит возращает ключ к этому ютуб ролику

interface Video {
  type: string;
  key: string;
}

function getTrailer(arrVideo: Video[]): string {
  let keyYouTube: string = '';
  for (let i = 0; i < arrVideo.length; i += 1) {
    if (arrVideo[i].type === 'Trailer') {
      keyYouTube = arrVideo[i].key;
      break;
    }
  }
  return keyYouTube;
}

// получает массив объектов с жанрами, возвращает строку жанров

interface Genre {
    name: string;
}

function getGenres(arrGenres: Genre[]): string {
    let genresInfo: string = 'Genres: ';
    for (let i = 0; i < arrGenres.length; i += 1) {
        if (i === arrGenres.length - 1) {
            genresInfo += `${arrGenres[i].name}.`;
        } else {
            genresInfo += `${arrGenres[i].name}, `;
        }
    }
    return genresInfo;
}

// получает массив объектов с названием компаний, возвращает строку названий

interface PC {
    name: string;
}

function getProductionCompanies(arrPC: PC[]): string {
    let pcInfo: string = 'Production Companies: ';
    for (let i = 0; i < arrPC.length; i += 1) {
        if (i === arrPC.length - 1) {
            pcInfo += `${arrPC[i].name}.`;
        } else {
            pcInfo += `${arrPC[i].name}, `;
        }
    }
    return pcInfo;
}

module.exports = {
    getTrailer,
    getGenres,
    getProductionCompanies
}