//about grid constructor
//set grid container property
//set columns and rows property
//grid-row-gap property
//method for adding grid items
//new grid item class
//array of grid items to feed to class

class Grid{
    constructor(grid,col,row){
        this.grid = grid;
        this.col = col;
        this.row = row;
        this.media = window.matchMedia('(max-width: 680px)');

        this.grid.style.display = "grid";
        this.grid.style.gridTemplateColumns = `repeat(${col},1fr)`;
        this.grid.style.gridTemplateRows = `repeat(${row},1fr)`;
        this.grid.style.gridRowGap = "20px";
        this.grid.style.gridColumnGap ="40px";
        this.grid.style.margin = "6%";
        this.media.addListener(this.shrink.bind(this));
        
    }

    shrink(event){
        if(event.matches){
        console.log('greater');
        console.log('condition working');
     
        this.grid.style.display = "flex";
        this.grid.style.flexWrap = "wrap";
        }
         else{
            this.grid.style.display = "grid";
           
            console.log('anything');
        }
    }
}

function fire (){
    const media = window.matchMedia('(min-width: 300px)');
    if (media.matches){
        console.log('flex firing');
       let grid = document.querySelector('.grid-container')
       grid.style.display = "flex";
       grid.style.flexDirection = "column";

    }
};



const our_grid = document.querySelectorAll('.grid-container');
console.log(our_grid);
our_grid.forEach(function(currentValue){
    console.log('for each running');
    return new Grid(currentValue);
});

fire();

//grid item constructor
//only worry about grid position here