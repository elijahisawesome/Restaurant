const MenuScreen = (function(){
    const getScreen = function(){
        return screen;
    }

    //construction of the Menu screen
    const screen = document.createElement('div');
    screen.innerText = "I'M FUCKIN MENUIN HERE!";

    return{getScreen}
})();



export {MenuScreen};