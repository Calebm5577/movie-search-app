import React from 'react';
import axios from 'axios';
import Popularlist from "./Popularlist";
import "../CSS/main.scss";
// import 'dotenv/config';

export default class Movielist extends React.Component {
  state = {
    title: "",
    popularity: "",
    poster: "",
    background: "",
    results: "",
    similarMovies: [],
    overview: "",
    release: "",
    voteAVG: ""
  }


  componentDidMount() {
    const API_KEY = process.env.REACT_APP_API;  //'caf02a958f137f43327649b2b8721302'
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=joker`)
    .then(res => {

      //Related Searches
      this.setState({ results: res.data.results })

      const similarMovies = res.data.results.slice(1);
      this.setState({ similarMovies })

      
      //Background and Moive pictures
      const poster = res.data['results'][0]['poster_path']
      this.setState({ poster });

      const background = res.data['results'][0]['backdrop_path']
      this.setState({ background })


      //Searched Movie information
      const title = res.data['results'][0]['title'];
      this.setState({ title });

      const popularity = res.data['results'][0]['popularity']
      this.setState({ popularity });

      const overview = res.data['results'][0]['overview']
      this.setState({ overview });

      const release = res.data['results'][0]['release_date']
      this.setState({ release });

      const voteAVG = res.data['results'][0]['vote_average']
      this.setState({ voteAVG });



  })
  }

    clickHandler = (event) => {
        if (event.keyCode === 13) {
           const query = event.target.value;
           const API_KEY = process.env.REACT_APP_API;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
      .then(res => {

        //Related Searches
        this.setState({ results: res.data.results })

        const similarMovies = res.data.results.slice(1);
        this.setState({ similarMovies })

        
        //Background and Moive pictures
        const poster = res.data['results'][0]['poster_path']
        this.setState({ poster });

        const background = res.data['results'][0]['backdrop_path']
        this.setState({ background })


        //Searched Movie information
        const title = res.data['results'][0]['title'];
        this.setState({ title });

        const popularity = res.data['results'][0]['popularity']
        this.setState({ popularity });

        const overview = res.data['results'][0]['overview']
        this.setState({ overview });

        const release = res.data['results'][0]['release_date']
        this.setState({ release });

        const voteAVG = res.data['results'][0]['vote_average']
        this.setState({ voteAVG });






      })
      .catch(error =>{
        alert("no such movie")
      })
        }
    }

  render() {
    const backgroundStyle = {
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
  url(https://image.tmdb.org/t/p/w500${this.state.background})`,

      backgroundSize: "cover",
      height: "100vh"
  }


    return (
      <>
      <div className="movielist" style={backgroundStyle}>
      <input type="search" className="movielist-search" onKeyDown={event => this.clickHandler(event)} placeholder="Search for a Movie"/>
      <img className="movielist-poster" src={`https://image.tmdb.org/t/p/w500${this.state.poster}`} />
        <div className="movielist-div1"> 
            <h1 className="movielist-div1-title"><span className="titles">Title:</span> {this.state.title}</h1>
            <h1 className="movielist-div1-popularity"><span className="titles">Popularity:</span> {this.state.popularity}</h1>
            <h1 className="movielist-div1-release"><span className="titles">Release:</span> {this.state.release}</h1>
            <h1 className="movielist-div1-voteAVG"><span className="titles">Vote AVG:</span> {this.state.voteAVG}</h1>
            <h1 className="movielist-div1-overview"><span className="titles">Overview:</span> {this.state.overview}</h1>
              
              <div className="Popular-Related-wrapper">
            <div className="movielist-div1-related-searches">
              <h1><span className="titles">Related Searches</span></h1>
            {
              this.state.similarMovies.length && this.state.similarMovies.map(movie => (
                <h1>{movie.title}</h1>
              ))
            }
          </div>
          <Popularlist />
            </div>
        </div>
    </div>
  </>
    )
  }
}










