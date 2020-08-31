import React from "react"
import axios from 'axios';
import "../CSS/main.scss"

export default class Popularlist extends React.Component {
    state = {
        trendingMovies: []
    }

    componentDidMount() {
           const API_KEY = 'caf02a958f137f43327649b2b8721302';
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
            .then(res => {

                const trendingMovies = res.data.results.slice(1);
                this.setState({ trendingMovies })


            })
        }
    
    

    render () {
        return (
            <div class="Popularlist">
                <div class="Popularlist-Div__popular-map">
                <h1 class="Popularlist-Div__popular-map-title"><span className="titles">Trending Searches</span></h1>
            {
              this.state.trendingMovies.length && this.state.trendingMovies.map(movie => (
                <h1 class="Popularlist-2nd-movies">{movie.title}</h1>
              ))
            }
            </div>
            </div>
        )
    }
}
