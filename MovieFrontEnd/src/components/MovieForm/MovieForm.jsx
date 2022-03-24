import React from "react";
import { useState } from "react";

import styled from "./MovieForm.module.css";

import { addMovie, updateMovie } from "../../service/MovieService";

import { useNavigate , useLocation } from 'react-router-dom';
import { useEffect } from "react";

const MovieForm = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const{state} = location;


    const [movie, setMovie] = useState({name:"",director:"",laguage:"",genre:""})

    useEffect(()=>{
        if(state.action==="update"){
            setMovie(state.movie)
        }
    },[state.action,state.movie])

    const onChangeHandler = (e) =>{
        setMovie({...movie, [e.target.name]: e.target.value})
    }

    const submitHandler=(e)=>{

        e.preventDefault();

        if(state.action==="add"){
        addMovie(movie)
        .then(reponse=>{
            console.log(reponse);
            navigate("/library")
        })
        .catch(err=>{
            console.log(err);
        })
        }

        if(state.action==="update"){
            updateMovie(movie, state.movie.id)
            .then(reponse=>{
                console.log(reponse);
                navigate("/library")
            })
            .catch(err=>{
                console.log(err);
            })
            }

    }

  return (
    <React.Fragment>
        <div className={styled.movieForm}>
            <div className=" btn-dark mt-2 pt-2 pb-2">{state.action==="update"?"Update Movie": "Add Movie"}</div>
      <form className="mb-2" class="was-validated">
        <div className="form-group">
          <label for="name">Enter Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Name"
            name="name"
            onChange={onChangeHandler}
            value={movie.name} required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div class="form-group">
          <label for="director">Enter Director</label>
          <input
            type="text"
            class="form-control"
            id="director"
            placeholder="Enter Director"
            name="director"
            onChange={onChangeHandler}
            value={movie.director} required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div class="form-group">
          <label for="language">Enter Language</label>
          <input
            type="text"
            class="form-control"
            id="language"
            placeholder="Enter Language"
            name="language"
            onChange={onChangeHandler}
            value={movie.language} required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div class="form-group">
          <label for="genre">Enter Genre</label>
          
          <input
            type="text"
            class="form-control"
            id="genre"
            placeholder="Enter Genre"
            name="genre"
            onChange={onChangeHandler}
            value={movie.genre} required
          />
        </div>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
        <button type="submit" class="btn btn-primary" onClick={submitHandler}>
          {state.action==="update"?"Update Movie":"Add Movie"}
        </button>
      </form>
      </div>
    </React.Fragment>
  );
};

export default MovieForm;
