
let secnumber = Math.trunc(Math.random() * 20) + 1;

let scorenumber = 20;

let highScore = 0;

// document.querySelector('.number').textContent = secnumber;
// console.log(secnumber);

document.querySelector('.check').addEventListener('click',function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess)
    {
        document.querySelector('.message').textContent = "No Number Dude!"
    }
    else if(guess === secnumber)
    {
       document.querySelector('.message').textContent = "Correct Number,You Got It!";
       document.querySelector('body').style.backgroundColor = "green";

    //    const guess = Number(document.querySelector('.guess').value);
    //     console.log(guess);
        if(scorenumber > highScore)
        {
            highScore = scorenumber;
            document.querySelector('.highScore').textContent = highScore;
        }

    }
    else if(guess < secnumber)
    {
        if(scorenumber > 1)
        {
        document.querySelector('.message').textContent = "Too Low 📉 Number";
        scorenumber--;
        document.querySelector('.score').textContent = scorenumber;
        }
        else
        {
            document.querySelector('.message').textContent = "Buddy You Lost the Game 🤯👎";
            document.querySelector('.score').textContent = 0; 
            document.querySelector('body').style.backgroundColor = "red";
        }
    }
    else if(guess > secnumber)
    {
        if(scorenumber > 1)
        {
            document.querySelector('.message').textContent = "Too High 📈 Number";
            scorenumber--;
            document.querySelector('.score').textContent = scorenumber;
        }
        else
        {
            document.querySelector('.message').textContent = "Buddy Lost the Game 🤯";
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = "red";

        }
       
    }

});


document.querySelector('.again').addEventListener('click', function()
{
    scorenumber = 20;
 
    secnumber = Math.trunc(Math.random() * 20) + 1;
     
    document.querySelector('.message').textContent = 'start guessing..';
    
    document.querySelector('.score').textContent = scorenumber;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = "black";

})