import { useState } from "react";
import axios from 'axios';
const MovieSearch = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async() => {
        const response = await axios.get(`/api/movies/search?query=${query}`);
        setMovies(response.data);
    };

    return (
        <div>
            <input type='text' value={query} onClick={(e) => setQuery(e.target.value)}/>
            <button onClick={searchMovies}>Search</button>

            <div>
                {movies.map(movie => (
            <div key={movie.id}>
                <h3>{movie.title}</h3>
                <button onClick={() => addToWatchlist(movie.id)}>+ Watchlit</button>
            </div>
            ))}

            </div>
            
        </div>
        
    );
};