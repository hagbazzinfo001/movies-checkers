// import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
 
const MovieCard = ({ movies }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movies.poster_path}`;
  const detailedUrl=`/movies/${movies.id}`
  return (
    <div className="col-lg-4 col-md-4 col-6 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={`${movies.original_title} poster`}
        />
        <div className="card-body">
          <h5 className="card-title">{movies.original_title}</h5>
          <Link to={detailedUrl} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const Searchview = ({ keyword = "", searchResult = [], loading = false, error = null }) => {
  const title = `You are searching for "${keyword}"`;

  if (loading) {
    return (
      <>
        <Hero content={title} />
        <div className="container my-4">
          <div className="alert alert-info" role="alert">
            Loading movies...
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Hero content={title} />
        <div className="container my-4">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      </>
    );
  }

  if (searchResult.length === 0) {
    return (
      <>
        <Hero content={title} />
        <div className="container my-4">
          <div className="alert alert-warning" role="alert">
            No results found. Try searching for another movie.
          </div>
        </div>
      </>
    );
  }

  const resultHtml = searchResult.map((obj) => (
    <MovieCard movies={obj} key={obj.id} />
  ));

  return (
    <>
      <Hero content={title} />
      <div className="container">
        <div className="row">{resultHtml}</div>
      </div>
     </>
  );
};


export default Searchview;
