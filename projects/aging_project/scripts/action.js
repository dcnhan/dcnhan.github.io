function overSelectedMenuFunc(obj){
        document.getElementById(obj.id).setAttribute("data-state", "menu selected over link notMobile");        
    }
    
function overMenuFunc(obj){
        document.getElementById(obj.id).setAttribute("data-state", "menu over link notMobile");        
    }

function leaveMenuFunc(obj){
        document.getElementById(obj.id).setAttribute("data-state", "menu idle link notMobile");        
    }