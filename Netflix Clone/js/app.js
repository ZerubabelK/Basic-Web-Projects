const api_key = 'api_key=55c8e7cf87b15cbb141e9c682909a121';
const BASE_URL = 'http://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?'+ api_key;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w780'
const IMAGE_URL2 = 'https://image.tmdb.org/t/p/w1280'
const search_url = BASE_URL + '/search/movie?' + api_key;

BASE_URL + '/trending/movie/day?api_key=<<api_key>>'

const requests = {
  fetchPopular: `${BASE_URL}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api_key}`,
  fetchTrending: `${BASE_URL}/trending/movie/week?${api_key}`,
  fetchNetflixOrignals: `${BASE_URL}/discover/tv?${api_key}&with_networks=213`,
  fetchActionMovies: `${BASE_URL}/discover/movie?${api_key}&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?${api_key}&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?${api_key}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?${api_key}&with_genres=35`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?${api_key}&with_genres=27`,
};

//testing trailers

fetch('https://api.themoviedb.org/3/movie/423108/videos?api_key=55c8e7cf87b15cbb141e9c682909a121&language=en-US')
.then(res=>res.json())
.then(data =>{
  console.log(data.results)
})

//const row = document.querySelector('.row')

function fetchMovies(url,title){
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    showMovies(data.results,title);
    return data.results;
  })
}

function showMovies(movies,title){
  const headrow = document.querySelector('.headrow');
  const row = document.createElement('div');

  row.classList.add('row');
  
  row.insertAdjacentHTML('afterbegin',`<h2 class="row_title">${title}</h2>`);

  const posters = document.createElement('div');
    
  movies.forEach(movie=>{
      //console.log(movie)  

      posters.classList.add('row_posters');
  
      const poster = document.createElement('div');
  
      poster.classList.add('row_poster');

      poster.innerHTML = `<a id="${movie.id}" onclick="getID(this.id)"><img src="${IMAGE_URL2+movie.backdrop_path}"></a>`
  
      posters.appendChild(poster);
    
    
    })

row.appendChild(posters)
  
headrow.appendChild(row);
  // row.insertAdjacentHTML('afterbegin',`<h2 class="row_title">${title}</h2>`);
  // movies.forEach(movie=>{
  //   console.log(movie);
  //   posters.insertAdjacentHTML('beforeend',`
  //   <div class="row_poster">
  //   <img src="${IMAGE_URL+movie.poster_path}">
  //   </div>
  //   `)
  // })
}

fetchMovies(requests.fetchPopular,'Popular')

fetchMovies(requests.fetchTrending,'Trending');
fetchMovies(requests.fetchNetflixOrignals,'Netflix Originals');
fetchMovies(requests.fetchActionMovies,'Action');
fetchMovies(requests.fetchComedyMovies,'Comedy');
fetchMovies(requests.fetchHorrorMovies,'Horror');
fetchMovies(requests.fetchRomanceMovies,'Romance');
fetchMovies(requests.fetchDocumentaries,'Documentaries');
//For popular movies
// fetchMovies(API_URL).then(
//   (data)=>{
//     console.log(data);
//   },
//   (err)=>{
//     console.log(err)
//   }
// )
 ///Banner

 fetch(requests.fetchNetflixOrignals)
 .then(res=>res.json())
 .then(data =>{
  const index = Math.floor(Math.random()*20);
  const banner_content = document.querySelector('.banner_contents');
  //  banner_content.insertAdjacentHTML('afterbegin', `<h2 class="banner_title">${data.results[index].title}</h2>`)
  
  const banner_title = document.createElement('h1');
  banner_title.classList.add('banner_title');
  
  const banner = document.querySelector('.banner');
  banner.style.backgroundImage = `url('${IMAGE_URL2+data.results[index].backdrop_path}')`
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = '';
  banner_title.innerText = `${data.results[index].name}`;
  banner_content.insertAdjacentElement('afterbegin',banner_title)
  const overview = document.createElement('p');
  overview.classList.add('banner_description');
  overview.innerText = data.results[index].overview;
  banner_content.insertAdjacentElement('beforeend',overview)
 })

 document.body.addEventListener('scroll',()=>{
   document.querySelector('.nav-bar').classList.add('active')
 })

function getID(id){
  console.log(id)
  showDetails(id);
}


//DETAILS PAGE

// function showDetails(id){
//   document.querySelector('.container').innerHTML = '';
  
//   const details = document.createElement('div');
//   details.classList.add('details');


//   const poster = document.createElement('div');
//   poster.classList.add('poster');


//   const overview = document.createElement('div');
//   overview.classList.add('overview')


//   const casts = document.createElement('div');
//   casts.classList.add('casts');

//   const trailer = document.createElement('div');
//   trailer.classList.add('trailer');
// }

function getID(id){
  module.exports = id;
}






