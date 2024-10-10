class Book{
    constructor(title,author){
        this.title=title;
        this.author =author;
      
        
    }
    //method
    describe(){
        return `${this.title} by ${this.author}`
    }
}
let myBook =new Book("javascript",'Chris')
console.log(myBook.author,myBook.title);
console.log(myBook.describe())