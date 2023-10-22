var button = document.querySelector('.clickme');
var box = document.querySelector('.clickmecontent');

function changeColor(){
    console.log('changecolor')
    if (box.style.background == 'blueviolet'){
        box.style.background = 'red';
    }else{ 
        console.log('changecolor')
        box.style.background = 'blueviolet';
    }

}

button.addEventListener('click' , changeColor)