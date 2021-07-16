const TaskBar = (function(){
    let self = this;

    const returnsTaskBar = function(){
        return taskBar;
    }

    const swapScreen = function(mainDiv,currentScreen,prevScreen){
        if(!!prevScreen){mainDiv.removeChild(prevScreen)};
        mainDiv.appendChild(currentScreen);
    }

    const divFactory = function(name){
        let newDiv = document.createElement('div');
        newDiv.id = name;
        newDiv.classList.add('navButton');
        newDiv.innerText = name.slice(0,-6);
        newDiv.append(chevronSpan(name))
        return newDiv;
    }
    const chevronSpan = function(name){
        let newSpan = document.createElement('span');
        newSpan.id = name;
        newSpan.classList.add('chevronSpan');
        return newSpan
    }

    //Construction of the task bar
    let taskBar = document.createElement('div');
    taskBar.id = "TaskBar";
    const menuDiv = divFactory("menuScreen");
    const contactDiv = divFactory("contactScreen");
    const homeDiv = divFactory("homeScreen");

    taskBar.append(homeDiv,menuDiv,contactDiv);
    

    return{returnsTaskBar, swapScreen};
})();



export {TaskBar};