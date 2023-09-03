

// {
//     type: 'INCREASE_COUNT'
// }
// {
//     type: 'DECREASE_COUNT'
// }

//Action types
export const ADD_MOVIES = 'ADD_MOVIES';

//action Creaters
export function addMovies(movies){
    return {
        type : ADD_MOVIES,
        movies
    }
}