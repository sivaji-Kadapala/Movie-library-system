import axios from "axios";

const BASE_URL="http://localhost:8080/movies";

export const getAll = () =>{
    return axios.get(BASE_URL+"/getAll")
}


export const addMovie = (movie) =>{
    return axios.post(BASE_URL+"/add",{
        name : movie.name,
        director: movie.director,
        language : movie.language,
        genre: movie.genre
    })
}

export const updateMovie = (movie, id) =>{
    return axios.put(BASE_URL+`/update/${id}?id=`+id,{
        name : movie.name,
        director: movie.director,
        language : movie.language,
        genre: movie.genre
    })
}


export const deleteMovie = (id) =>{
    return axios.delete(BASE_URL+`/delete/${id}?id=`+id)
}