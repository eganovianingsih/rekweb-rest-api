function getMovies(ketword) 
{
    let xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState === 4 && xhr.status === 200)
        {
            //ketika ajax siap
            let movies = JSON.perse(xhr.response);
            showMovies(movie.Search);

        }
    }
    xhr.open('get','http://www.omdbapi.com/?apikey=330a3ddf&s=' + keyword);
    xhr.send();
}
// menampilkn film

 function showMovies(movies)
  {
    let cards = '';
    movies.forEach(function(movie){
        cards += '<div class="col-4 my-3">
        <div class="card">
            <img src="${movie.Poster}" class="card-img-top" >
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                  <a href="deatail.php?id=${movie.imdID}" class="btn btn-primary">show details</a>
              </div>
        </div>

    </div>';
        
    });
            movieList.innerHTML = cards; 
        }
        let movieList = document.querySelector('.movie-List');
        let inputKeyword = document.querySelector('.input-keyword');
        let buttonSearch = document.querySelector('.button-Search');
        // ketika halaman dibuka
        getMovies('dilan');

        //ketika film dicari
        buttonSearch.addEventListener("click"function()
        {
            getMovies(inputKeyword.value);
        });