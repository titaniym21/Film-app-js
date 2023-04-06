const API_KEY = "b8147d9a2b320232dcbd7689528ce05a";

function randomSort() {
    let sortedType = ['', 'sort_by=popularity.desc', 'sort_by=release_date.desc', 'sort_by=revenue.desc','sort_by=primary_release_date.desc','sort_by=original_title.desc', 'sort_by=vote_average.desc', 'sort_by=vote_count.desc'];
    let random = Math.floor(Math.random() * sortedType.length);
    let sorted = sortedType[random];
    // let sorted = [];
    // for(key in requests){
    //     sorted.push(sortedType[random]);
    // }

    return sorted;
}


function requests(page = 1, sorted) {
    let ganres = {

        //netflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
        //netflixPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
        //netflixTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
        // netflixAction: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=10759&with_original_language=en`,
        // netflixAnimation: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=16&with_original_language=en`,
        // netflixComedy: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=35&with_original_language=en`,
        // netflixCrime: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=80&with_original_language=en`,
        // netflixDocumentary: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=99&with_original_language=en`,
        // netflixDrama: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=18&with_original_language=en`,
        // netflixFamily: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=10751&with_original_language=en`,
        // netflixKids: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=10762&with_original_language=en`,
        // netflixMystery: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=9648&with_original_language=en`,
        // netflixReality: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=10764&with_original_language=en`,
        // netflixSciFi: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=10765&with_original_language=en`,
        // netflixSoap: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=10766&with_original_language=en`,
        // netflixTalk: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=10767&with_original_language=en`,
        // netflixWar: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=10768&with_original_language=en`,
        // netflixWestern: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=37&with_original_language=en`,
        
        TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
        Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
        Action: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=28`,
        Adventure: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=12`,
        Animation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=16`,
        Comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=35`,
        Crime: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=80`,
        Documentary: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=99`,
        Drama: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=18`,
        Family: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=10751`,
        Fantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=14`,
        History: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=36`,
        Horror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=27`,
        Music: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=10402`,
        Mystery: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=9648`,
        Romance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=10749`,
        ScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=revenue.desc&page=${page}&without_genres=878`,
        Tv: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=10770`,
        Thriller: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=53`,
        War: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=10752`,
        Western: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&${sorted}&page=${page}&without_genres=37`,
    };

    return ganres;
};

function bigPosterImg() {
    return 'https://image.tmdb.org/t/p/original//';
}


module.exports = { requests, API_KEY, bigPosterImg };

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