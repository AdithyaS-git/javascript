//Define the constructor function

function Book(title,author){
    this.title=title;
    this.author =author;
    this.getDescription =function(){
        return `${this.title} by ${this.author}`
    }
}

//create instances of the constructor

const book1 = new Book ("Hamlet","Willaim Shakespeare");
const book2 = new Book("Murder on the orient express","Agatha");

//Use the object instances
 console.log(book1.getDescription());
 console.log(book2.getDescription());