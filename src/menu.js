import menuImages from './menuImages.js';
import {textList as menuText} from './menuText.js';

const MenuScreen = (function(){
    let newDivs = [];

    const getScreen = function(){
        return screen;
    }
    
    const pictureGetter = function(x){
        let menuPicture = document.createElement('img');
        menuPicture.src = menuImages[`img${x}`];
        menuPicture.style.height = '100px';
        menuPicture.style.width = 'auto';
        menuPicture.style.display = 'block';
        menuPicture.classList.add("imageCenter");
        return menuPicture;
    }
    const textGetter = function(x){
        let newText = menuText[`text${x}`];
        return newText;
    }
    const pGetter = function(x){
        const newP = document.createElement('p');
        newP.innerText = textGetter(x);
        return newP;
    }
    const divCustomizer = function(x){
        newDivs[x] = document.createElement('div');
        newDivs[x].id = `paragraph${x}`;
        newDivs[x].classList.add('subBodyDiv');
        return newDivs[x];
    }



    //construction of the Menu screen
    const screen = document.createElement('div');
    screen.classList.add("bodyDiv");
    for(let x = 0; x < 5; x++){
        
        newDivs[x] = divCustomizer(x);
        let menuPicture = pictureGetter(x);
        screen.appendChild(newDivs[x]);
        newDivs[x].appendChild(menuPicture);
        newDivs[x].appendChild(pGetter(x));
    }
    

    return{getScreen}
})();



export {MenuScreen};