const HomeScreen = (function(){
    const getScreen = function(){
        return screen;
    }


    
    //construction of the Home screen
    const screen = document.createElement('div');
    screen.classList.add("bodyDiv");
    for(let x = 0; x < 3; x++){
        let newDiv = document.createElement('div');
        newDiv.id = `paragraph${x}`;
        newDiv.classList.add('subBodyDiv')
        newDiv.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
        screen.appendChild(newDiv);
    }
    

    return{getScreen}
})();



export {HomeScreen};