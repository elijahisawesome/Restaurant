const ContactScreen = (function(){
    const getScreen = function(){
        return screen;
    }

    const screen = document.createElement('div');
    screen.innerText = "I'M FUCKIN CONTACTIN HERE!";

    return{getScreen}
})();



export {ContactScreen};