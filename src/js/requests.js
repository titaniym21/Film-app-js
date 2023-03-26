const API_KEY = "b8147d9a2b320232dcbd7689528ce05a";
const page = 1;

const requests = {

    netflixLatest: `https://api.themoviedb.org/3/tv/latest?api_key=${API_KEY}&language=en-US`,
    netflixPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    netflixTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    netflixAction: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&without_genres=10759&with_original_language=en`,
    
    // topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}` ,
    // popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}` ,
    // actionMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=28`,
    // adventureMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=12`,
    // animationMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=16`,
    // comedyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=35`,
    // crimeMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=80`,
    // documentaryMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=99`,
    // dramaMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=18`,
    // familyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=10751`,
    // fantasyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=14`,
    // historyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=36`,
    // horrorMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=27`,
    // musicMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=10402`,
    // mysteryMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=9648`,
    // romanceMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=10749`,
    // scienceFictionMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=878`,
    // tvMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=10770`,
    // thrillerMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=53`,
    // warMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=10752`,
    // westernMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&without_genres=37`,
}



module.exports = { requests, API_KEY };

// модудь з сапросами у ключём API_KEY

//языки
//https://api.themoviedb.org/3/configuration/languages?api_key=b8147d9a2b320232dcbd7689528ce05a
//поиск
//https://api.themoviedb.org/3/search/movie?api_key=b8147d9a2b320232dcbd7689528ce05a&query=oblivion

	
// genres	
// 0	
// id	10759
// name	"Action & Adventure"
// 1	
// id	16
// name	"Animation"
// 2	
// id	35
// name	"Comedy"
// 3	
// id	80
// name	"Crime"
// 4	
// id	99
// name	"Documentary"
// 5	
// id	18
// name	"Drama"
// 6	
// id	10751
// name	"Family"
// 7	
// id	10762
// name	"Kids"
// 8	
// id	9648
// name	"Mystery"
// 9	
// id	10763
// name	"News"
// 10	
// id	10764
// name	"Reality"
// 11	
// id	10765
// name	"Sci-Fi & Fantasy"
// 12	
// id	10766
// name	"Soap"
// 13	
// id	10767
// name	"Talk"
// 14	
// id	10768
// name	"War & Politics"
// 15	
// id	37
// name	"Western"