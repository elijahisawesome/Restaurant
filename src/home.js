const HomeScreen = (function(){
    const getScreen = function(){
        return screen;
    }

    const screen = document.createElement('div');
    screen.innerText = "I'M FUCKIN EATIN HERE!";

    return{getScreen}
})();



export {HomeScreen};