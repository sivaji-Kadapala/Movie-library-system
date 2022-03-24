package springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import springboot.entity.Movie;
import springboot.exception.ResourceNotFoundException;

import springboot.repository.MovieRepository;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "*")
public class MovieController {

	@Autowired
	private MovieRepository repository;

	// get all movies
	@GetMapping("/getAll")
	public List<Movie> getAllMovies() {
		return this.repository.findAll();
	}

	// get movie by id
	@GetMapping("/get/{id}")
	public Movie getmovieById(@PathVariable (value = "id") long movieId) {
		return this.repository.findById(movieId)
				.orElseThrow(() -> new ResourceNotFoundException("Movie not found with id :" + movieId));
	}

	// create movie
	@PostMapping("/add")
	public Movie createmovie(@RequestBody Movie movie) {
		return this.repository.save(movie);
	}
	
	// update movie
	@PutMapping("/update/{id}")
	public Movie updatemovie(@RequestBody Movie movie, @PathVariable ("id") long movieId) {
		Movie existingMovie = this.repository.findById(movieId)
			.orElseThrow(() -> new ResourceNotFoundException("Movie not found with id :" + movieId));
		 existingMovie.setName(movie.getName());
		 existingMovie.setLanguage(movie.getLanguage());
		 existingMovie.setDirector(movie.getDirector());
		 existingMovie.setGenre(movie.getGenre());
		 return this.repository.save(existingMovie);
	}
	
	// delete movie by id
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Movie> deletemovie(@PathVariable ("id") long movieId){
		 Movie existingMovie = this.repository.findById(movieId)
					.orElseThrow(() -> new ResourceNotFoundException("Movie not found with id :" + movieId));
		 this.repository.delete(existingMovie);
		 return ResponseEntity.ok().build();
	}
	
}
