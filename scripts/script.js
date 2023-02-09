const userChoice = "";
const compChoice = "";

let userScore = 0;
let compScore = 0;

const userScoreEl = document.querySelector('.user-score');
const compScoreEl = document.querySelector('.comp-score');

 
const getCompChoice = function(){
    const randomNumber = Math.floor(Math.random()*5)+1;

    if (randomNumber === 1){
return 'rock'
    }else if (randomNumber === 2){
        return 'paper'
    }else if (randomNumber === 3){
        return 'scissors'
    }else if (randomNumber === 4){
        return 'lizard'
    }else if (randomNumber === 5){
        return 'spock'
    }
}

const getUserChoice = function(userChoice){
 console.log(userChoice);
}

const playGame = function(weapon){
    const user = weapon;
    const comp  = getCompChoice();

    const result =  getResult(user,comp)
    console.log(result );

    if (result === 'WON'){
      userScore = userScore + 1;  
    } else if (result === "LOST"){
        compScore = compScore + 1;
    }
    userScoreEl.innerText =   userScore;
    compScoreEl.innerText =     compScore;


    document.querySelector('.User-choice').innerText=`User selected ${user}`;
    document.querySelector('.Comp-choice').innerText=`Computer selected ${comp}`;
    document.querySelector('.Final-result').innerText=`The result is ${result}`;
    
}

const getResult = function(userChoice,compChoice){
if (userChoice === 'rock'){
if(compChoice === 'rock'){
    return 'DRAW'
}else if (compChoice === 'paper'){
    return 'LOST'
}else if (compChoice === 'scissors'){
    return 'WON'
}else if (compChoice === 'lizard'){
    return 'WON'
}
else if (compChoice === 'spock'){
    return 'LOST'
}
}else if (userChoice === 'paper'){
    if(compChoice === 'rock'){
        return 'WON'
    }else if (compChoice === 'paper'){
        return 'DRAW'
    }else if (compChoice === 'scissors'){
        return 'LOST'
    }else if (compChoice === 'lizard'){
        return 'LOST'
    }else if (compChoice === 'spock'){
        return 'WON'
    }
}else if (userChoice === 'scissors'){
    if(compChoice === 'rock'){
        return 'LOST'
    }else if (compChoice === 'paper'){
        return 'WON'
    }else if (compChoice === 'scissors'){
        return 'DRAW'
    }else if (compChoice === 'lizard'){
        return 'WON'
    }else if (compChoice === 'spock'){
        return 'LOST'
    }
}else if (userChoice === 'lizard'){
    if(compChoice === 'rock'){
        return 'LOST'
    } else if (compChoice === 'paper'){
        return 'WON'
    }else if (compChoice === 'scissors'){
        return 'LOST'
    }else if (compChoice === 'lizard'){
        return 'DRAW'
    }else if (compChoice === 'spock'){
        return 'WON'
    }
}else if (userChoice === 'spock'){
    if(compChoice === 'rock'){
        return 'WON'
    }else if (compChoice === 'paper'){
        return 'LOST'
    }else if (compChoice === 'scissors'){
        return 'WON'
    }else if (compChoice === 'lizard'){
        return 'LOST'
    }else if (compChoice === 'spock'){
        return 'DRAW'
    }
}

}
 
//   console.log(getCompChoice ());