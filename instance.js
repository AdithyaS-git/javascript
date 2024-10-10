class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height =height;
    }
    calculatearea(){
        return `${this.width*this.height}`;
    }
    calculatePerimeter(){
        return 2*(this.width+this.height)
    }
}

let myRectangle=new Rectangle(5,10);
console.log(myRectangle.calculatearea());
console.log(myRectangle.calculatePerimeter());

