import {contactText} from './contactText.js';
import contactImgs from './contactImages.js';

const ContactScreen = (function(){
    const getScreen = function(){
        return screen;
    }
    let newDivs= [];

    const pictureGetter = function(x){
        let contactPicture = document.createElement('img');
        contactPicture.src = contactImgs[`img${x}`];
        contactPicture.style.height = '100px';
        contactPicture.style.width = 'auto';
        contactPicture.style.display = 'block';
        contactPicture.classList.add("imageCenter");
        return contactPicture;
    }
    const divCustomizer = function(x){
        newDivs[x] = document.createElement('div');
        newDivs[x].id = `paragraph${x}`;
        newDivs[x].classList.add('subBodyDiv');
        return newDivs[x];
    }
    const pGetter = function(x){
        const newP = document.createElement('p');
        newP.innerText = contactText[`text${x}`];
        return newP;
    }
    


    //construction of the Contact screen
    const screen = document.createElement('div');
    screen.classList.add("bodyDiv");
    for(let x = 0; x<2; x++){
        newDivs[x] = divCustomizer(x);
        if(!!contactImgs[`img${x}`]){
            newDivs[x].appendChild(pictureGetter(x));
        }
        newDivs[x].appendChild(pGetter(x));
        screen.appendChild(newDivs[x]);
    }

    return{getScreen}
})();



export {ContactScreen};