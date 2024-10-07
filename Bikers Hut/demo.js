
    var boxtwo=document.querySelector(".box2")
    var pop=document.querySelector(".popupbox") 
    var buttn=document.querySelector(".but")
    buttn.addEventListener("click",function()
    { 
    
        pop.style.display="block"
        boxtwo.style.display="block"
       
    } )
    var cancelpop=document.querySelector(".cancel")
    cancelpop.addEventListener("click",function(event)
    {
        event.preventDefault()
        pop.style.display="none"
        boxtwo.style.display="none"
    

    }
        
    )

    var boxx=document.querySelector(".box")  
    var bikenameinput=document.querySelector(".biname")
    var bikemodinput=document.querySelector(".bimodel")
    var descript=document.querySelector(".descrip")
    var butt=document.querySelector(".ad")
    butt.addEventListener("click",function(event){
     event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","cont")
    div.innerHTML=`<h1>${bikenameinput.value}</h1>
    <h3>${bikemodinput.value}</h3>  
    <p>${descript.value}</p>
    <button>delete</button>`
    
    boxx.append(div)
    pop.style.display="none"
    boxtwo.style.display="none"

    }
    )










