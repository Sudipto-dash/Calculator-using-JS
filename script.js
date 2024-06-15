let input = document.getElementById('inputPlace');
let buttons = document.querySelectorAll('button');

//for place holder output
let string ="";
let arrayofButtons = Array.from(buttons);
arrayofButtons.forEach(buttons =>{
    buttons.addEventListener('click', (e) =>{
        if (e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})