var prodcutcontainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist=prodcutcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredtext=event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1){
        var productname=productlist[count].querySelector("p").textContent
        if (productname.toUpperCase().indexOf(enteredtext)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block" 
        }

    }
})