let number = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML =='='){
            number = eval(number);
        document.querySelector('input').value = number;
        }
        else if(e.target.innerHTML =='C'){
            number = "";
        document.querySelector('input').value = number;
        }
        else if(e.target.innerHTML == 'X'){
        document.querySelector('input').value = number.slice(0, -1);
        }
        else{
        number = number + e.target.innerHTML;
        document.querySelector('input').value = number;
    }
    })
})