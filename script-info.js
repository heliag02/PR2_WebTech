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
    var titelTekst = document.createTextNode(title);
    titel.append(titelTekst);
    var section = document.createElement('section');
    section.appendChild(titel);
    return section;
}

var main = document.getElementById('main');

var infoTitel = document.createTextNode("Information");
var titel = document.createElement('h2');
titel.appendChild(infoTitel);
main.appendChild(titel);

//film info 
var filmSection = createSection(titanic.title + " (movie)");
for (let index in titanic){
    let genre = document.createTextNode(index + ": ");
    let par = document.createElement('p');
    par.append(genre,titanic[index]);
    filmSection.append(par);
}

//director info
var directorBirthYear = document.createTextNode("Birth year: ");
var directorBirthYearPar = document.createElement('p');
directorBirthYearPar.append(directorBirthYear,cameron.birthyear);
var directorMovies = document.createTextNode("Movies: ");
var directorMoviesList = createListMovies(cameron);

var directorMoviesPar = document.createElement('p');
directorMoviesPar.append(directorMovies,directorMoviesList);
var directorSection = createSection(cameron.name + " (director/writer)");
directorSection.append(directorBirthYearPar,directorMoviesPar);

//actors info
var actors = [dicaprio,winslet,zane,bates,fisher];
var actorsSection = createSection("Actors");

for(let actor of actors) {  
    let actorName = document.createTextNode("Name: ");
    let actorNamePar = document.createElement('p');
    actorNamePar.append(actorName,actor.name);
    let actorBirthYear = document.createTextNode("Birth year: ");
    let actorBirthYearPar = document.createElement('p');
    actorBirthYearPar.append(actorBirthYear,actor.birthyear)
    let actorMovies = document.createTextNode("Movies: ");
    let actorMoviesList = createListMovies(actor);
    
    let actorMoviesPar = document.createElement('p');
    actorMoviesPar.append(actorMovies,actorMoviesList);

    let linkPhoto = document.createElement('a');
    let photoText = document.createTextNode("Photo");
    const targetBlank = document.createAttribute("target");
    targetBlank.value = "_blank";
    linkPhoto.append(photoText);
    linkPhoto.href = actor.photo;
    linkPhoto.setAttributeNode(targetBlank);
   
    actorsSection.append(actorNamePar,actorBirthYearPar,actorMoviesPar, linkPhoto);
}

//poster
var linkPoster = document.createElement('a');
var posterText = document.createTextNode("Poster");
const targetBlank = document.createAttribute("target");
targetBlank.value = "_blank";
linkPoster.append(posterText);
linkPoster.href = "poster.jpg";
linkPoster.setAttributeNode(targetBlank);
linkPoster.classList.add("info-link");


//trailer
var linkTrailer = document.createElement('a');
var trailerText = document.createTextNode("Trailer");
linkTrailer.append(trailerText);
linkTrailer.href = "home.html#trailer";
linkTrailer.classList.add("info-link");

main.append(filmSection, directorSection,actorsSection,linkPoster,linkTrailer);














