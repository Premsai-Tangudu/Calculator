let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }

        else if(e.target.innerHTML=='C'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='Del'){
            string=string.substring()
          
            
            
        }
        else{

        
        string += e.target.innerHTML;
        input.value=string;
        }
    })
})






