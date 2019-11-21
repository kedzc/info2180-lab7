window.load;
// alert info about country
$(document).ready(function(){
let lookUp = document.getElementById('lookup');

lookUp.addEventListener('click', function(){
  
        var checkbox = document.getElementById('check');
        var country = document.getElementById('country').value;
        if(checkbox.checked ==false){
              var listen = new XMLHttpRequest();
            listen.open('GET', `world.php?country=${country}`, true)
             listen.send();
    listen.onreadystatechange = function()
    {
        if (listen.readyState == 4){
            if (listen.status === 200)
            {
                     
            var respond = listen.responseText;
        
            
            let result = document.getElementById('result');
            result.innerHTML = respond;
            
            
            }else{
                alert('Request Error')
    
            
        }
        }
     }
            
        } else if(checkbox.checked == true){
   var listen = new XMLHttpRequest();
    listen.open('GET', `world.php?all=true`, true)
    listen.send();
        }
    request.onreadystatechange = function()
    {
        if (listen.readyState == 4){
            if (listen.status === 200)
            {
                     
            var respond = listen.responseText;
        
            
            let result = document.getElementById('result');
            result.innerHTML = respond;
            
            
            }else{
                alert('Request Error')
    
            
        }
        }
     }
})



})