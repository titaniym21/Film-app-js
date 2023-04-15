// requests() функция, которая возвращает объект с запросами к API
// bigPosterImg() - функция, которая возвращает большой постер фильма


const API_KEY = "b8147d9a2b320232dcbd7689528ce05a";
const sorted = 'sort_by=popularity.desc';



function requests(page = 1) {
    let ganres = {
        Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
        Action: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=revenue.desc&page=${page}&with_genres=28`,
        Adventure: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=12`,
        Animation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=16`,
        Comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=35`,
        Crime: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=80`,
        Documentary: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=99`,
        Drama: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=18`,
        Family: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=10751`,
        Fantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=14`,
        History: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=36`,
        Horror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=27`,
        Music: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=10402`,
        Mystery: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=9648`,
        Romance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=10749`,
        ScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=878`,
        Tv: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=10770`,
        Thriller: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=53`,
        War: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=10752`,
        Western: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&with_genres=37`,
    };

    return ganres;
};


module.exports = {requests, API_KEY};
