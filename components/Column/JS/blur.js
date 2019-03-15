//blur rental offerings
//grab all preview divs
//loop and add mouseover listener adding style blur



class Blur{
    constructor(element){
        console.log('blurring');
        this.element = element;
        this.element.addEventListener('mouseenter',this.b.bind(this))
        this.element.addEventListener('mouseout',this.nb.bind(this))
    }

    b(){
        document.querySelectorAll('.preview').forEach((currentValue) =>currentValue.classList.add('blurry'));
        document.querySelector('.sp').classList.remove('no-show');
        document.querySelector('.sp').classList.remove('blurry');
        document.querySelector('.four').classList.remove('no-show');
        document.querySelector('.four').classList.remove('blurry');

    }
    nb(){
        document.querySelectorAll('.preview').forEach((currentValue) =>currentValue.classList.remove('blurry'));
        document.querySelector('.sp').classList.add('no-show');
    }
}

const previews = document.querySelectorAll('.preview');
previews.forEach( (currentValue) => new Blur(currentValue));
const btns = document.querySelectorAll('.pr');
btns.forEach( (currentValue) => new Blur(currentValue));
const pric = document.querySelectorAll('.priz');
pric.forEach( (currentValue) => new Blur(currentValue));
const content = document.querySelectorAll('.grid-content');
content.forEach( (currentValue) => new Blur(currentValue));
const exploreBtn = document.querySelectorAll('.sp');
exploreBtn.forEach( (currentValue) => new Blur(currentValue));
const linksp = document.querySelectorAll('a.linksp');
linksp.forEach( (currentValue) => new Blur(currentValue));