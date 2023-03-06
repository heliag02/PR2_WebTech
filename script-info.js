class Movie{
    constructor (title, genre, year){
        this.title = title;
        this.genre = genre;
        this.year = year;
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
titanic = new Movie("Titanic", "Romance/Drama", 1998);
cameron = new Director("James Cameron", 1954, ['Avatar', 'Avatar: The Way of Water', 'Terminator 2: Judgement Day']);
//cameron = new Writer('James Cameron', 1954, []);
dicaprio = new Actor('Leonardo DiCaprio', 1974, ['The Wolf of Wallstreet', 'The Revenant', 'Romeo + Juliet'], "character-photos/leonardo_dicaprio.jpg");
winslet = new Actor('Kate Winslet', 1975, ['Avatar: The Way of Water', 'Mare of Easttown', 'The Holiday'], "character-photos/kate_winslet.jpg");
zane = new Actor('Billy Zane', 1966, ['The Phantom', 'Dead Calm', 'Back to the Future Part II'], "character-photos/billy_zane.jpg");
bates = new Actor('Kathy Bates', 1948, ['Misery', 'Dolores Claiborne', 'Fried Green Tomatoes'], "character-photos/kathy_bates.jpg");
fisher = new Actor('Frances Fisher', 1952, ['Holidate', 'Unforgiven', 'The Sinner'], "character-photos/francis_fisher.jpg");

function createListMovies(person){
    var moviesList = document.createElement('ul');
    person.movies.forEach(movie => {
        var listItem = document.createElement('li');
        listItem.append(movie);
        moviesList.appendChild(listItem);
    })
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
var filmGenre = document.createTextNode("Genre: ");
var filmGenrePar = document.createElement('p');
filmGenrePar.append(filmGenre,titanic.genre);

var filmJaar = document.createTextNode("Year: ");
var filmJaarPar = document.createElement('p');
filmJaarPar.append(filmJaar,titanic.year);

var filmSection = createSection(titanic.title + " (movie)");
filmSection.append(filmGenrePar,filmJaarPar);

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

actors.forEach(actor => {  
    var actorName = document.createTextNode("Name: ");
    var actorNamePar = document.createElement('p');
    actorNamePar.append(actorName,actor.name);
    var actorBirthYear = document.createTextNode("Birth year: ");
    var actorBirthYearPar = document.createElement('p');
    actorBirthYearPar.append(actorBirthYear,actor.birthyear)
    var actorMovies = document.createTextNode("Movies: ");
    var actorMoviesList = createListMovies(actor);
    
    var actorMoviesPar = document.createElement('p');
    actorMoviesPar.append(actorMovies,actorMoviesList);

    var linkPhoto = document.createElement('a');
    var photoText = document.createTextNode("Photo");
    const targetBlank = document.createAttribute("target");
    targetBlank.value = "_blank";
    linkPhoto.append(photoText);
    linkPhoto.href = actor.photo;
    linkPhoto.setAttributeNode(targetBlank);
   
    actorsSection.append(actorNamePar,actorBirthYearPar,actorMoviesPar, linkPhoto);
})

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


var enter = document.createElement("br");

main.append(filmSection,directorSection,actorsSection,linkPoster,enter,linkTrailer);














