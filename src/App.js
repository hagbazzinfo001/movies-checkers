// import "./App.css";
// import { useState, useEffect } from "react";
// import Navbar from "./Components/Navbar";
// import Home from "./Components/Home";
// import { Route, Routes } from "react-router-dom";
// import NoPage from "./Components/Nopage";
// import About from "./Components/About";
// import Searchview from "./Components/Searchview";


//  function App() {
//   const [searchText, setSearchText] = useState("");
//   const [searchResult, setSearchResult] = useState([]);
 

//   useEffect(() => 
//     {
//       if(searchText){
//         fetch(`    https://api.themoviedb.org/3/search/movie?api_key=4a5ba954080b45fbd9836bca79d140af&language=en-US&query=${searchText}&page=1&include_adult=false`)
//         .then(response=>response.json())
//         .then(data=>{
//           setSearchResult(data.results)
//         })
//       }},
//     [searchText]);

//   return (
//     <div className="App">
//       <header className="">
//         <Navbar searchText={searchText} setSearchText={setSearchText} />
//         <Routes>
//           <Route index element={<Home searchText={searchText} />} />
//           <Route path="about" element={<About />} />
//           <Route path="*" element={<NoPage />} />
//           <Route
//             path="/searchview"
//             element={
//               <Searchview keyword={searchText} searchResult={searchResult} />
//             }
//           />
//         </Routes>
//       </header>
//     </div>
//   );
// }

// export default App;


// updated raw codes
import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NoPage from "./Components/Nopage";
import About from "./Components/About";
import Searchview from "./Components/Searchview";
import MovieView from "./Components/MovieView";
 

function App() {
  const [searchText, setSearchText] = useState(""); 
  const [searchResult, setSearchResult] = useState([]);  
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchText) {
        // Clear results if search text is empty
        setSearchResult([]);
        setError(null);
        return;
      }

      try {
        setLoading(true); 
        setError(null); 
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=4a5ba954080b45fbd9836bca79d140af&language=en-US&query=${searchText}&page=1&include_adult=false`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        if (data.results.length === 0) {
          setError("No movies found for your search.");
        }

        setSearchResult(data.results);
      } catch (err) {
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setLoading(false); 
      }
    };

    fetchMovies();
  }, [searchText]);

  return (
    <div className="App">
      <header>
        <Navbar searchText={searchText} setSearchText={setSearchText} />
        <Routes>
          <Route index element={<Home searchText={searchText} />} />
          <Route path="about" element={<About />} />
          <Route path="/movies/:id" element={<MovieView />} />
          <Route path="*" element={<NoPage />} />
          <Route
            path="/searchview"
            element={
              <Searchview
                keyword={searchText}
                searchResult={searchResult}
                loading={loading}
                error={error}
              />
            }
          />
 
        </Routes>
      </header>
     </div>
  );
}

export default App;
