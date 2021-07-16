import bootLogo from './Drawing.png';
import './style.css';
import {TaskBar as taskBar} from './taskBar.js';
import {HomeScreen as homeScreen} from './home.js';
import {MenuScreen as menuScreen} from './menu.js';
import {ContactScreen as contactScreen} from './contact.js';

let screens = {homeScreen:homeScreen.getScreen(), menuScreen:menuScreen.getScreen(), contactScreen:contactScreen.getScreen()};




const Main = (function(){
    const imageAppender = function() {
        const leftImg = new Image();
        const rightImg = new Image();
        leftImg.src = bootLogo;
        rightImg.src = bootLogo;
        leftImg.id = 'left';
        rightImg.id = 'right';
        
        mainDiv.append(leftImg, rightImg);
    }

    const mainDiv = document.getElementById('content');
    mainDiv.appendChild(taskBar.returnsTaskBar());
    imageAppender();

    taskBar.swapScreen(mainDiv, screens.homeScreen);
    let currentScreen = screens.homeScreen;
    let prevScreen;



    taskBar.returnsTaskBar().childNodes.forEach(element => {
        element.addEventListener('click', function(e){
            prevScreen = currentScreen;
            currentScreen = screens[`${e.target.id}`];
            taskBar.swapScreen(mainDiv,currentScreen,prevScreen);
        });
    });

})();