package springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springboot.entity.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long>{

	

}
