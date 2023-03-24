const API_KEY = "b8147d9a2b320232dcbd7689528ce05a";
const page = 1;

const requests = {
    topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}` ,
    popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}` ,
    actionMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=28`,
    adventureMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=12`,
    animationMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=16`,
    comedyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=35`,
    crimeMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=80`,
    documentaryMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=99`,
    dramaMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=18`,
    familyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=10751`,
    fantasyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=14`,
    historyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=36`,
    horrorMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=27`,
    musicMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=10402`,
    mysteryMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=9648`,
    romanceMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=10749`,
    scienceFictionMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=878`,
    tvMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=10770`,
    thrillerMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=53`,
    warMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=10752`,
    westernMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=37`,
}



module.exports = requests;

// модудь з сапросами у ключём API_KEY

//языки
//https://api.themoviedb.org/3/configuration/languages?api_key=b8147d9a2b320232dcbd7689528ce05a
//поиск
//https://api.themoviedb.org/3/search/movie?api_key=b8147d9a2b320232dcbd7689528ce05a&query=oblivion

// {"genres":[{"id":28,"name":"Action"},
// {"id":12,"name":"Adventure"},
// {"id":16,"name":"Animation"},
// {"id":35,"name":"Comedy"},
// {"id":80,"name":"Crime"},
// {"id":99,"name":"Documentary"},
// {"id":18,"name":"Drama"},
// {"id":10751,"name":"Family"},
// {"id":14,"name":"Fantasy"},
// {"id":36,"name":"History"},
// {"id":27,"name":"Horror"},
// {"id":10402,"name":"Music"},
// {"id":9648,"name":"Mystery"},
// {"id":10749,"name":"Romance"},
// {"id":878,"name":"Science Fiction"},
// {"id":10770,"name":"TV Movie"},
// {"id":53,"name":"Thriller"},
// {"id":10752,"name":"War"},
// {"id":37,"name":"Western"}]}