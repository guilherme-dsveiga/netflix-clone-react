const API_KEY = '9956490e1415628c81699df97e0ef81a';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
        const req = await fetch(`${API_BASE}${endpoint}`);
        const json = await req.json();
        return json;
}

export default {
        getHomeList: async () => {
                return [
                        {
                                slug: 'originals',
                                title: 'Originais do Netflix',
                                items: await basicFetch(`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_networks=213&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`)
                        },
                        {
                                slug: 'trending',
                                title: 'Recomendados para você',
                                items: await basicFetch(`/trending/all/week?language=pt-Br&api_key=${API_KEY}`)
                        },
                        {
                                slug: 'toprated',
                                title: 'Em alta',
                                items: await basicFetch(`/movie/top_rated?language=pt-Br&api_key=${API_KEY}`)
                        },
                        {
                                slug: 'actions',
                                title: 'Ação',
                                items: await basicFetch(`/discover/movie?with_genres=28&anguage=pt-Br&api_key=${API_KEY}`)
                        },
                        {
                                slug: 'comedy',
                                title: 'Comédia',
                                items: await basicFetch(`/discover/movie?with_genres=35&anguage=pt-Br&api_key=${API_KEY}`)
                        },
                        {
                                slug: 'horror',
                                title: 'Terror',
                                items: await basicFetch(`/discover/movie?with_genres=27&anguage=pt-Br&api_key=${API_KEY}`)
                        },
                        {
                                slug: 'romance',
                                title: 'Romance',
                                items: await basicFetch(`/discover/movie?with_genres=10749&anguage=pt-Br&api_key=${API_KEY}`)
                        },
                        {
                                slug: 'documentary',
                                title: 'Documentário',
                                items: await basicFetch(`/discover/movie?with_genres=99&anguage=pt-Br&api_key=${API_KEY}`)
                        },
                ];
        },
        getMovieInfo: async (movieId, type) => {
                let info = {};

                if(movieId){
                        switch(type){
                                case 'movie':
                                        info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                                break;
                                case 'tv':
                                        info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                                break;
                                default:
                                        info = null;
                                break;
                        }
                }

                return info;
        }
}