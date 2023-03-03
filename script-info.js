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
class Writer extends Writer{
    constructor(name, birthyear, books){
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
director = new Director("James Cameron", 1954, ['Avatar', 'Avatar: The Way of Water', 'Terminator 2: Judgement Day']);
writer = new Writer('James Cameron', 1954, ['no books written']);
dicaprio = new Actor('Leonardo DiCaprio', 1974, ['The Wolf of Wallstreet', 'The Revenant', 'Romeo + Juliet'], character-photos/leonardo_dicaprio.jpg);
winslet = new Actor('Kate Winslet', 1975, ['Avatar: The Way of Water', 'Mare of Easttown', 'The Holiday'], character-photos/kate_winslet.jpg);
zane = new Actor('Billy Zane', 1966, ['The Phantom', 'Dead Calm', 'Back to the Future Part II'], character-photos/billy_zane.jpg);
bates = new Actor('Kathy Bates', 1948, ['Misery', 'Dolores Claiborne', 'Fried Green Tomatoes'], character-photos/kathy_bates.jpg);
fisher = new Actor('Frances Fisher', 1952, ['Holidate', 'Unforgiven', 'The Sinner'], character-photos/francis_fisher.jpg);

var body = document.getElementsByTagName('body');
var nav = document.getElementsByTagName('nav')
var article = document.createElement('article');
body.appendChild(article); 
var title = document.createElement('p');
var text = document.createTextNode('hoi')
article.appendChild(text);