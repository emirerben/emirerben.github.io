console.log('Hello, World!');

/*
function scrolll(){
    var left = document.querySelector(".container");
    left.scrollBy(-500,0);
}

let button = document.getElementById('vamos');
button.onclick = function(){
    let container = document.getElementById(".container");
    sideScroll(container, 'right', 25, 100, 100);
};
*/

//Makes all buttons clickable, but doesn't remove past answer if another option is chosen

const listofquestions = ['#q1-answers a', '#q2-answers a', '#q3-answers a'];
for(let question = 0; question < listofquestions.length; question++){
    const buttons = document.querySelectorAll(listofquestions[question]);
    let clickedButton = -1;
    console.log(listofquestions[question]);
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function onClick(){
            
            //make the old selection back to normal
            if(clickedButton>-1){
                buttons[clickedButton].style.backgroundColor = '#E5E5E5';
                buttons[clickedButton].style.color = '#000000';
                console.log('anananna');
            }
    
            clickedButton = i;
            //new chosen one
            
            buttons[i].style.backgroundColor = '#ffa500';
            buttons[i].style.color = 'white';
            
            
    
            console.log(i);
        });
    } 
}


/*
onst buttons = document.querySelectorAll('#q1-answers a');
let clickedButton = -1;
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function onClick(){
        
        //make the old selection back to normal
        if(clickedButton>-1){
            buttons[clickedButton].style.backgroundColor = '#E5E5E5';
            buttons[clickedButton].style.color = '#000000';
            console.log('anananna');
        }

        clickedButton = i;
        //new chosen one
        
        buttons[i].style.backgroundColor = '#ffa500';
        buttons[i].style.color = 'white';
        
        

        console.log(i);
    });
} 
*/


/*
var btn = document.getElementsByClass('Turkey');
console.log(btn); 
btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = 'orange';
    btn.style.color = 'white';
});
*/
//store answer q1
let answers = [];
var q1_choice = '';
document.querySelector('#PuertoRico').onclick = function() {
    q1_choice = "Puerto Rico";
}
document.querySelector('#Turkey').onclick = function() {
    q1_choice = "Turkey";
}
document.querySelector('#Mexico').onclick = function() {
    q1_choice = "Mexico";
}
document.querySelector('#DominicanRepublic').onclick = function() {
    q1_choice = "Dominican Republic";
}
document.querySelector('#Brazil').onclick = function() {
    q1_choice = "Brazil";
}
document.querySelector('#Other').onclick = function() {
    q1_choice = "Other";
}
answers.push(q1_choice);


document.querySelector('#vamos').onclick = function() {
    console.log(answers);
}



function shareMessage(){
    let message = 'Want to learn which Un Verano Sin Ti song you are? I got Party!!!';
    window.open('whatsapp://send?text=' + message);
}


/*
var button = document.getElementById('vamos');
button.onclick = function () {
    document.getElementById('cont').scrollLeft += 1300; // for right scroll
    console.log("anan");
    behavior: 'smooth';
    
};

*/
