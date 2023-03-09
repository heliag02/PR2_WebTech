class Movie{
    constructor (title, genre, year,plot){
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.plot = plot;
    }
}

class Artist{
    constructor(name, birthyear)
    {
        this.name = name;
        this.birthyear = birthyear;
    }
}
class Director extends Artist{
    constructor(name, birthyear, movies){
        super(name, birthyear)
        this.movies = movies;
    }
}
class Writer extends Artist{
    constructor(name, birthyear, books)
    {
        super(name, birthyear)
        this.books = books;
    }
}
class Actor extends Artist{
    constructor(name, birthyear, movies, photo)
    {
        super(name, birthyear)
        this.movies = movies;
        this.photo = photo; 
    }
}
titanic = new Movie("Titanic", "Romance/Drama", 1998,"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.");
cameron = new Director("James Cameron", 1954, ['Avatar', 'Avatar: The Way of Water', 'Terminator 2: Judgement Day']);
//cameron = new Writer('James Cameron', 1954, []);
dicaprio = new Actor('Leonardo DiCaprio', 1974, ['The Wolf of Wallstreet', 'The Revenant', 'Romeo + Juliet'], "character-photos/leonardo_dicaprio.jpg");
winslet = new Actor('Kate Winslet', 1975, ['Avatar: The Way of Water', 'Mare of Easttown', 'The Holiday'], "character-photos/kate_winslet.jpg");
zane = new Actor('Billy Zane', 1966, ['The Phantom', 'Dead Calm', 'Back to the Future Part II'], "character-photos/billy_zane.jpg");
bates = new Actor('Kathy Bates', 1948, ['Misery', 'Dolores Claiborne', 'Fried Green Tomatoes'], "character-photos/kathy_bates.jpg");
fisher = new Actor('Frances Fisher', 1952, ['Holidate', 'Unforgiven', 'The Sinner'], "character-photos/francis_fisher.jpg");

function createListMovies(person){
    var moviesList = document.createElement('ul');
    for (let index in person.movies){
        let listItem = document.createElement('li');
        listItem.append(person.movies[index]);
        moviesList.appendChild(listItem);
    }
    return moviesList;
}

function createSection(title){
    var titel = document.createElement('h3');
    titel.append(title);
    var section = document.createElement('section');
    section.appendChild(titel);
    return section;
}

var main = document.getElementById('main');

var titel = document.createElement('h2');
titel.append("Information");
main.appendChild(titel);

//film info 
var filmSection = createSection(titanic.title + " (movie)");
for (let index in titanic){
    let par = document.createElement('p');
    par.append(index.charAt(0).toUpperCase() + index.slice(1) + ": " + titanic[index]);
    filmSection.appendChild(par);
}

//director info
var directorBirthYearPar = document.createElement('p');
directorBirthYearPar.append("Birth year: "+ cameron.birthyear);
var directorMoviesList = createListMovies(cameron);

var directorMoviesPar = document.createElement('p');
directorMoviesPar.append("Movies: ", directorMoviesList);
var directorSection = createSection(cameron.name + " (director/writer)");
directorSection.append(directorBirthYearPar,directorMoviesPar);

//actors info
var actors = [dicaprio,winslet,zane,bates,fisher];
var actorsSection = createSection("Actors");

for(let actor of actors) {  
    let actorNamePar = document.createElement('p');
    actorNamePar.append("Name: " + actor.name);
    let actorBirthYearPar = document.createElement('p');
    actorBirthYearPar.append("Birth year: "+actor.birthyear)
    let actorMoviesList = createListMovies(actor);
    let actorMoviesPar = document.createElement('p');
    actorMoviesPar.append("Movies: ",actorMoviesList);

    let linkPhotoPar = document.createElement('p');
    let linkPhoto = document.createElement('a');
    linkPhoto.setAttribute('target','_blank');
    linkPhoto.setAttribute('href',actor.photo);
    linkPhoto.append('Go to the photo of ' + actor.name);
    linkPhotoPar.append(linkPhoto);
   
    actorsSection.append(actorNamePar,actorBirthYearPar,actorMoviesPar, linkPhotoPar);
}

var linkSection = createSection("See also");
var linkPar = document.createElement('p');
//poster
var linkPoster = document.createElement('a');
linkPoster.setAttribute('target','_blank');
linkPoster.setAttribute('href',"poster.jpg");
linkPoster.setAttribute('class',"info-link");
linkPoster.append('Go to the film poster');

//trailer
var linkTrailer = document.createElement('a');
linkTrailer.setAttribute('href',"home.html#trailer");
linkTrailer.setAttribute('class',"info-link");
linkTrailer.append('Go to the film trailer');

linkPar.append(linkPoster,linkTrailer);
linkSection.appendChild(linkPar);
main.append(filmSection, directorSection,actorsSection,linkSection);














