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

function createFillIn(index){
    return index.charAt(0).toUpperCase() + index.slice(1) + ": ";
}

function showTooltip(e){
    var actor = e.target.id;
    const tooltip = document.getElementById(actor+"__tooltip");
    tooltip.style.display = 'block';
};

function hideTooltip(e){
    var actor = e.target.id;
    const tooltip = document.getElementById(actor+"__tooltip");
    tooltip.style.display = 'none';
};

var main = document.getElementById('main');

var titel = document.createElement('h2');
titel.append("Information");
main.appendChild(titel);

//film info 
var filmSection = createSection(titanic.title + " (movie)");
for (let index in titanic){
    let par = document.createElement('p');
    par.append(createFillIn(index) + titanic[index]);
    filmSection.appendChild(par);
}

//director info
var directorSection = createSection(cameron.name + " (director/writer)");
for (let index in cameron){
    let value = cameron[index]
    if (index=='movies'){
        value = createListMovies(cameron);
    }
    let par = document.createElement('p');
    par.append(createFillIn(index), value);
    directorSection.appendChild(par);
}

//actors info
var actors = [dicaprio,winslet,zane,bates,fisher];
var actorsSection = createSection("Actors");
var actorPar = document.createElement('p')

for (let actor of actors) {  
    let actorNamePar = document.createElement('p');
    actorNamePar.className = "tooltip";
    actorNamePar.id = actor.name;
    
    let tooltip = document.createElement('span');
    tooltip.className = "tooltip__text";
    tooltip.id=actor.name+"__tooltip"; 

    for (let index in actor){
        let par = document.createElement('p');
        let value = actor[index]
        if (index=='photo'){
            break;
        }
        
        if (index=='movies'){
            value = createListMovies(actor);
        }

        par.append(createFillIn(index), value)
        tooltip.append(par)
    }

    let linkPhotoPar = document.createElement('p');
    let linkPhoto = document.createElement('a');
    linkPhoto.setAttribute('target', '_blank');
    linkPhoto.setAttribute('href', actor.photo);
    linkPhoto.append('Go to the photo of ' + actor.name);
    linkPhotoPar.append(linkPhoto);
    
    let enter = document.createElement('br');
    actorNamePar.append(actor.name,tooltip);
    actorsSection.append(actorNamePar,linkPhotoPar,enter);
}

var linkSection = createSection("See also");
var linkPar = document.createElement('p');
//poster
var linkPoster = document.createElement('a');
linkPoster.setAttribute('target','_blank');
linkPoster.setAttribute('href',"poster.jpg");
linkPoster.setAttribute('class',"link-button");
linkPoster.append('Go to the film poster');

//trailer
var linkTrailer = document.createElement('a');
linkTrailer.setAttribute('href',"home.html#trailer");
linkTrailer.setAttribute('class',"link-button");
linkTrailer.append('Go to the film trailer');

linkPar.append(linkPoster,linkTrailer);
linkSection.appendChild(linkPar);
main.append(filmSection, directorSection,actorsSection,linkSection);

const targets = document.getElementsByClassName("tooltip");
for (let target of targets){
    target.addEventListener('mouseover', showTooltip, false);
    target.addEventListener('mouseleave', hideTooltip, false);
}
  














