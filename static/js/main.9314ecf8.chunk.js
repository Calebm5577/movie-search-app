(this.webpackJsonpmoviesearch=this.webpackJsonpmoviesearch||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),s=a(17),n=a.n(s),l=a(2),o=a(3),c=a(6),v=a(5),d=a(4),u=a.n(d),h=(a(16),function(e){Object(c.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={trendingMovies:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("caf02a958f137f43327649b2b8721302")).then((function(t){var a=t.data.results.slice(1);e.setState({trendingMovies:a})}))}},{key:"render",value:function(){return i.a.createElement("div",{class:"third-div-Popularlist"},i.a.createElement("div",{class:"third-div-Popularlist-1st"},i.a.createElement("h1",{class:"third-div-Popularlist-1st-title"},"Trending")),i.a.createElement("div",{class:"third-div-Popularlist-2nd"},this.state.trendingMovies.length&&this.state.trendingMovies.map((function(e){return i.a.createElement("h1",{class:"third-div-Popularlist-2nd-movies"},e.title)}))))}}]),a}(i.a.Component)),p=function(e){Object(c.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={title:"",popularity:"",poster:"",background:"",results:"",similarMovies:[],overview:"",release:"",voteAVG:""},e.clickHandler=function(t){if(13===t.keyCode){var a=t.target.value;u.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("caf02a958f137f43327649b2b8721302","&query=").concat(a)).then((function(t){e.setState({results:t.data.results});var a=t.data.results.slice(1);e.setState({similarMovies:a});var r=t.data.results[0].poster_path;e.setState({poster:r});var i=t.data.results[0].backdrop_path;e.setState({background:i});var s=t.data.results[0].title;e.setState({title:s});var n=t.data.results[0].popularity;e.setState({popularity:n});var l=t.data.results[0].overview;e.setState({overview:l});var o=t.data.results[0].release_date;e.setState({release:o});var c=t.data.results[0].vote_average;e.setState({voteAVG:c})}))}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t={backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), \n  url(https://image.tmdb.org/t/p/w500".concat(this.state.background,")"),backgroundSize:"cover",height:"100vh"};return i.a.createElement("div",{id:"main-div",style:t},i.a.createElement("div",{id:"second-div container"},i.a.createElement("input",{type:"search",id:"search",onKeyDown:function(t){return e.clickHandler(t)},placeholder:"Search for a Movie"}),i.a.createElement("div",{class:"format-div row"},i.a.createElement("img",{id:"poster",src:"https://image.tmdb.org/t/p/w500".concat(this.state.poster)}),i.a.createElement("input",{type:"search",id:"search-desktop",onKeyDown:function(t){return e.clickHandler(t)},placeholder:"Search for a Movie"}),i.a.createElement("h1",{class:"format-div-title"},"Title: ",this.state.title),i.a.createElement("h1",{class:"format-div-popularity"},"Popularity: ",this.state.popularity),i.a.createElement("h1",{class:"format-div-release"},"Release: ",this.state.release),i.a.createElement("h1",{class:"format-div-voteAVG"},"Vote AVG: ",this.state.voteAVG),i.a.createElement("h1",{class:"format-div-overview"},"Overview: ",this.state.overview),i.a.createElement("ol",{id:"related-searches"},this.state.similarMovies.length&&this.state.similarMovies.map((function(e){return i.a.createElement("li",null,e.title)})))),i.a.createElement(h,null)))}}]),a}(i.a.Component);var m=function(){return i.a.createElement("div",null,i.a.createElement(p,null))};n.a.render(i.a.createElement(m,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9314ecf8.chunk.js.map