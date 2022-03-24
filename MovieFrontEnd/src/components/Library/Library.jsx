import React from "react";

import styled from "./Library.module.css";

import { getAll, deleteMovie } from "../../service/MovieService";
import { useEffect } from "react";
import { useState } from "react";


import {Link} from 'react-router-dom';

const Library = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAll()
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const deleteHandler = (id) =>{
    deleteMovie(id)
    .then(response=>{
      console.log(response)
      setMovies(movies.filter(movie=>movie.id!==id))
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <React.Fragment>
      <Link to="/form" state={{action:"add"}}><button className="btn btn-light mt-5" style={{boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"}}>Add Movie</button></Link>
      <div className={styled.library}>
        <table className="table table-dark" style={{boxShadow: "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"}}>
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Movie Director</th>
              <th>Movie Language</th>
              <th>Movie Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return (
                <tr>
                  <td>{movie.name}</td>
                  <td>{movie.director}</td>
                  <td>{movie.language}</td>
                  <td>{movie.genre}</td>
                  <td>
                    <Link to="/form" state={{action:"update", movie:movie}}><button className="btn btn-primary m-1 btn-sm">Update</button></Link>
                    <button onClick={()=>deleteHandler(movie.id)} className="btn btn-danger m-1 btn-sm">Delete</button>
                   
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Library;
