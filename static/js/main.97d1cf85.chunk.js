(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},42:function(e,t,n){e.exports=n(78)},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),l=n.n(i),o=n(10),u=n(11),c=n(13),s=n(12),p=n(14),d=n(81),m=n(83),g=n(80),f=n(82),v=n(3),h=n(79),b=n(84),E=n(2);function x(){var e=Object(v.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return x=function(){return e},e}function y(){var e=Object(v.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n\n  border-bottom: 5px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return y=function(){return e},e}function j(){var e=Object(v.a)(["\n  display: flex;\n"]);return j=function(){return e},e}function O(){var e=Object(v.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return O=function(){return e},e}var _=E.default.header(O()),w=E.default.ul(j()),k=E.default.li(y(),function(e){return e.current?"#3498db":"transparent"}),S=Object(E.default)(h.a)(x()),T=Object(b.a)(function(e){var t=e.location.pathname;return r.a.createElement(_,null,r.a.createElement(w,null,r.a.createElement(k,{current:"/"===t},r.a.createElement(S,{to:"/"},"Movie")),r.a.createElement(k,{current:"/tv"===t},r.a.createElement(S,{to:"/tv"},"TV")),r.a.createElement(k,{current:"/search"===t},r.a.createElement(S,{to:"/search"},"Search"))))}),R=n(8),M=n.n(R),U=n(15),z=n(9),C=n.n(z);function N(){var e=Object(v.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return N=function(){return e},e}function P(){var e=Object(v.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]);return P=function(){return e},e}function D(){var e=Object(v.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return D=function(){return e},e}var I=E.default.div(D()),F=E.default.span(P()),L=E.default.div(N()),V=function(e){var t=e.title,n=e.children;return r.a.createElement(I,null,r.a.createElement(F,null,t),r.a.createElement(L,null,n))};function A(){var e=Object(v.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return A=function(){return e},e}var B=E.default.div(A()),q=function(){return r.a.createElement(B,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f1"))};function G(){var e=Object(v.a)(["\n  color: ",";\n"]);return G=function(){return e},e}function J(){var e=Object(v.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return J=function(){return e},e}var H=E.default.div(J()),K=E.default.span(G(),function(e){return e.color}),Q=function(e){var t=e.text,n=e.color;return r.a.createElement(H,null,r.a.createElement(K,{color:n},t))};function W(){var e=Object(v.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return W=function(){return e},e}function X(){var e=Object(v.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return X=function(){return e},e}function Y(){var e=Object(v.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return Y=function(){return e},e}function Z(){var e=Object(v.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return Z=function(){return e},e}function $(){var e=Object(v.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return $=function(){return e},e}function ee(){var e=Object(v.a)(["\n  font-size: 12px;\n"]);return ee=function(){return e},e}var te=E.default.div(ee()),ne=E.default.div($(),function(e){return e.bgUrl}),ae=E.default.span(Z()),re=E.default.div(Y(),ne,ae),ie=E.default.span(X()),le=E.default.span(W()),oe=function(e){var t=e.id,a=e.imageUrl,i=e.title,l=e.rating,o=e.year,u=e.isMovie,c=void 0!==u&&u;return r.a.createElement(h.a,{to:c?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(te,null,r.a.createElement(re,null,r.a.createElement(ne,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(30)}),r.a.createElement(ae,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",l,"/10")),r.a.createElement(ie,null,i.length>18?i:"".concat(i.substring(0,18),"...")),r.a.createElement(le,null,o)))};function ue(){var e=Object(v.a)(["\n  padding: 20px 20px;\n"]);return ue=function(){return e},e}var ce=E.default.div(ue()),se=function(e){var t=e.nowPlaying,n=e.popular,a=e.upcoming,i=e.error;return e.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement("title",null,"Loading... | Netflix")),r.a.createElement(q,null)):r.a.createElement(ce,null,r.a.createElement(C.a,null,r.a.createElement("title",null,"Movies | Netflix")),t&&t.length>0&&r.a.createElement(V,{title:"Now Playing"},t.map(function(e){return r.a.createElement(oe,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)})})),a&&a.length>0&&r.a.createElement(V,{title:"Upcoming Movies"},a.map(function(e){return r.a.createElement(oe,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(V,{title:"Popular Movies"},n.map(function(e){return r.a.createElement(oe,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)})})),i&&r.a.createElement(Q,{text:i,color:"#e74c3c"}))},pe=n(39),de=n.n(pe).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"a658558021f386d42de63ce01f55a88c",language:"es-US"}});de.get("tv/popular");var me={topRated:function(){return de.get("tv/top_rated")},popular:function(){return de.get("tv/popular")},airingToday:function(){return de.get("tv/airing_today")},showDetail:function(e){return de.get("tv/".concat(e),{parms:{append_to_response:"videos"}})},search:function(e){return de.get("search/tv",{params:{query:encodeURIComponent(e)}})}},ge={nowPlaying:function(){return de.get("movie/now_playing")},upcoming:function(){return de.get("movie/upcoming")},popular:function(){return de.get("movie/popular")},movieDetail:function(e){return de.get("/movie/".concat(e),{parms:{append_to_response:"videos"}})},search:function(e){return de.get("search/movie",{params:{query:encodeURIComponent(e)}})}},fe=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(U.a)(M.a.mark(function e(){var t,n,a,r,i,l;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ge.nowPlaying();case 3:return t=e.sent,n=t.data.results,e.next=7,ge.upcoming();case 7:return a=e.sent,r=a.data.results,e.next=11,ge.popular();case 11:i=e.sent,l=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't get Movies information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,l=e.loading;return r.a.createElement(se,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:l})}}]),t}(r.a.Component);function ve(){var e=Object(v.a)(["\n  padding: 20px 20px;\n"]);return ve=function(){return e},e}var he=E.default.div(ve()),be=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.error;return e.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement("title",null,"Loading... | Netflix")),r.a.createElement(q,null)):r.a.createElement(he,null,r.a.createElement(C.a,null,r.a.createElement("title",null,"TV | Netflix")),t&&t.length>0&&r.a.createElement(V,{title:"Top Rated Shows"},t.map(function(e){return r.a.createElement(oe,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(V,{title:"Popular Shows"},n.map(function(e){return r.a.createElement(oe,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)})})),a&&a.length>0&&r.a.createElement(V,{title:"Airing Today"},a.map(function(e){return r.a.createElement(oe,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)})})),i&&r.a.createElement(Q,{text:i,color:"#e74c3c"}))},Ee=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(U.a)(M.a.mark(function e(){var t,n,a,r,i,l;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me.topRated();case 3:return t=e.sent,n=t.data.results,e.next=7,me.popular();case 7:return a=e.sent,r=a.data.results,e.next=11,me.airingToday();case 11:i=e.sent,l=i.data.results,this.setState({topRated:n,popular:r,airingToday:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't Get TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,l=e.loading;return r.a.createElement(be,{topRated:t,popular:n,airingToday:a,error:i,loading:l})}}]),t}(r.a.Component);function xe(){var e=Object(v.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return xe=function(){return e},e}function ye(){var e=Object(v.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return ye=function(){return e},e}function je(){var e=Object(v.a)(["\n  padding: 20px 20px;\n"]);return je=function(){return e},e}var Oe=E.default.div(je()),_e=E.default.form(ye()),we=E.default.input(xe()),ke=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,l=e.loading,o=e.updateTerm,u=e.handleSubmit;return r.a.createElement(Oe,null,r.a.createElement(C.a,null,r.a.createElement("title",null,"Search | Netflix")),r.a.createElement(_e,{onSubmit:function(e){return u(e)}},r.a.createElement(we,{placeholder:"Search Movies or TV Shows..",value:a,onChange:o})),l?r.a.createElement(q,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(V,{title:"Movie Results"},t.map(function(e){return r.a.createElement(oe,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(V,{title:"TV Results"},n.map(function(e){return r.a.createElement(oe,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)})})),i&&r.a.createElement(Q,{text:i,color:"#e74c3c"}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(Q,{text:"Nothing Found",color:"#95a5a6"})))},Se=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.handleSubmit=function(e){e&&e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.searchByTerm=Object(U.a)(M.a.mark(function e(){var t,a,r,i,l;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({loading:!0}),e.prev=2,e.next=5,ge.search(t);case 5:return a=e.sent,r=a.data.results,e.next=9,me.search(t);case 9:i=e.sent,l=i.data.results,n.setState({movieResults:r,tvResults:l}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"Can't find results."});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}},e,this,[[2,14,17,20]])})),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.handleSubmit()}},{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,l=e.loading;return r.a.createElement(ke,{movieResults:t,tvResults:n,searchTerm:a,error:i,loading:l,updateTerm:this.updateTerm,handleSubmit:this.handleSubmit})}}]),t}(r.a.Component);function Te(){var e=Object(v.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 2;\n  width: 50%;\n"]);return Te=function(){return e},e}function Re(){var e=Object(v.a)(["\n  margin: 0 10px;\n"]);return Re=function(){return e},e}function Me(){var e=Object(v.a)([""]);return Me=function(){return e},e}function Ue(){var e=Object(v.a)(["\n  margin: 20px 0;\n"]);return Ue=function(){return e},e}function ze(){var e=Object(v.a)(["\n  font-size: 32px;\n  margin-bottom: 20px;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(v.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(v.a)(["\n  width: 30%;\n  height: 100%;\n\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n"]);return Ne=function(){return e},e}function Pe(){var e=Object(v.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n"]);return Pe=function(){return e},e}function De(){var e=Object(v.a)(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return De=function(){return e},e}function Ie(){var e=Object(v.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return Ie=function(){return e},e}var Fe=E.default.div(Ie()),Le=E.default.div(De(),function(e){return e.bgImage}),Ve=E.default.div(Pe()),Ae=E.default.div(Ne(),function(e){return e.bgImage}),Be=E.default.div(Ce()),qe=E.default.h3(ze()),Ge=E.default.div(Ue()),Je=E.default.span(Me()),He=E.default.span(Re()),Ke=E.default.p(Te()),Qe=function(e){var t=e.result;e.error;return e.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement("title",null,"Loading... | Netflix")),r.a.createElement(q,null)):r.a.createElement(Fe,null,r.a.createElement(C.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ","| Netflix")),r.a.createElement(Le,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(Ve,null,r.a.createElement(Ae,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(30)}),r.a.createElement(Be,null,r.a.createElement(qe,null,t.original_title?t.original_title:t.original_name),r.a.createElement(Ge,null,r.a.createElement(Je,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(He,null,"\u2219"),r.a.createElement(Je,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(He,null,"\u2219"),r.a.createElement(Je,null,t.genres&&t.genres.map(function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))),r.a.createElement(Ke,null,t.overview))))},We=function(e){function t(e){var n;Object(o.a)(this,t),n=Object(c.a)(this,Object(s.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(U.a)(M.a.mark(function e(){var t,n,a,r,i,l,o,u;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(e.prev=5,!r){e.next=13;break}return e.next=9,ge.movieDetail(i);case 9:o=e.sent,l=o.data,e.next=17;break;case 13:return e.next=15,me.showDetail(i);case 15:u=e.sent,l=u.data;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(5),this.setState({error:"Can't find anything..:("});case 22:return e.prev=22,this.setState({loading:!1,result:l}),console.log(this.state),e.finish(22);case 26:case"end":return e.stop()}},e,this,[[5,19,22,26]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return r.a.createElement(Qe,{result:t,error:n,loading:a})}}]),t}(r.a.Component),Xe=function(){return r.a.createElement(d.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(m.a,null,r.a.createElement(g.a,{path:"/",exact:!0,component:fe}),r.a.createElement(g.a,{path:"/tv",component:Ee}),r.a.createElement(g.a,{path:"/search",component:Se}),r.a.createElement(g.a,{path:"/movie/:id",component:We}),r.a.createElement(g.a,{path:"/show/:id",component:We}),r.a.createElement(f.a,{from:"*",to:"/"}))))},Ye=n(40),Ze=n.n(Ye);function $e(){var e=Object(v.a)(["\n  ",";\n  a{\n    text-decoration:none;\n    color:inherit;\n  }\n  *{\n    box-sizing:border-box;\n  }\n  body{\n    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size:12px;\n    background-color:rgba(20, 20, 20, 1);\n    color:white;\n    padding-top:50px;\n  }\n"]);return $e=function(){return e},e}var et=Object(E.createGlobalStyle)($e(),Ze.a),tt=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe,null),r.a.createElement(et,null))}}]),t}(a.Component);l.a.render(r.a.createElement(tt,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.97d1cf85.chunk.js.map