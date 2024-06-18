var element = document.getElementsByTagName("li")
var screen = document.querySelectorAll('p')[0]
var clear = document.getElementsByClassName('clear')[0]

for(var i=0; i < element.length; i+=1)
    {
        if(element[i].innerHTML==="=")
            {
            element[i].addEventListener('click',calculate(i))         
            }
        else{
            element[i].addEventListener('click',addtoCurrentValue(i))
            }
    }


function addtoCurrentValue(i)
{
    return function()
    {
        if(element[i].innerHTML === "x")
            {
                screen.innerHTML += "*"
            }
        
            else
            {
                screen.innerHTML += element[i].innerHTML
            }
    }
}

function calculate (i)
{
    return function(){
        screen.innerHTML = eval(screen.innerHTML)
    }
}
clear.onclick = function()
{
    screen.innerHTML = ''
}