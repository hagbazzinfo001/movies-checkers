import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState,   } from "react";
import { useNavigate} from "react-router-dom";
 

// function MovieView(props) {
//   const { id } = useParams();
//   const [movieDetails, setMovieDetails] = useState({});
//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${id}?api_key=4a5ba954080b45fbd9836bca79d140af&language=en-US`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setMovieDetails(data);
//       });
//   }, [id]);
//   const poster=`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path} || "this image is missing"`
//   return (
//         <div>
//       <Hero content={movieDetails.original_title || "LOADING...."} />
//       <div className="container">
//         <div className="row">
//         <div className="col-md-3">
//             <img src={poster} alt="movieDetails.name" srcset="" className="img-fluid shadow rounded" />
//              </div>
//             <div className="col-md-3">
//             <h2>{movieDetails.original_title}</h2>
//             <p> <strong>Overview</strong>: {movieDetails.overview}</p>
//             <p > <strong>Movie status:</strong>  {movieDetails.status}</p>
//             <p > <strong>Movie status:</strong>  {movieDetails.genres.name}</p>

//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieView;

function MovieView(props) {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const navigate=useNavigate()
const backtohome=(e)=>{
  navigate('/searchview')
}

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4a5ba954080b45fbd9836bca79d140af&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      });
  }, [id]);
  

  const poster = movieDetails.poster_path
  ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
  : null;
  const backDropUrl=`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
   
  return (
    <div>
      <Hero content={movieDetails.original_title || "LOADING...."} backdrop={backDropUrl} />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
               
          {poster ? (
              <img
                src={poster}
                alt={movieDetails.original_title}
                className="img-fluid shadow rounded"
              />
            ) : (
              <p className="text-muted">Poster is not available.</p>
            )}
          </div>
          <div className="col-md-9">
            <h2>{movieDetails.original_title}</h2>
            <p>
              <strong>Overview:</strong> {movieDetails.overview}
            </p>
            <p>
              <strong>Movie Status:</strong> {movieDetails.status}
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {movieDetails.genres
                ? movieDetails.genres.map((genre) => genre.name).join(", ")
                : "N/A"}
            </p>
            <button onClick={backtohome} type="button" class="btn btn-success">Go Back</button>
          </div>
        </div>
      </div>
     </div>
  );
}

export default MovieView;
