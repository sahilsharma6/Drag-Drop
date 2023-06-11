

let list = document.getElementsByClassName("list")
let drop = document.querySelector(".drop")
let drag = document.querySelector(".drag")
let suc = document.querySelector(".suc")
console.log(list);

for(li of list){
    li.addEventListener("dragstart", function(e){
        let select = e.target
       

        select.style.backgroundColor="#9bcb"

     drop.addEventListener("dragover", function(e){
            e.preventDefault();
            drag.style.backgroundColor="white"

        })

     drop.addEventListener("drop", function(e){
         drop.appendChild(select)
         
            suc.style.top = "40px";
            suc.style.transition="all .6s";
            drag.style.backgroundColor="white"

            setTimeout(function(){
                    suc.style.display="none"
            },3000)
          
            select=null;
        })
    })
}

const cancel = ()=>{
    suc.style.display="none"
}

const reload = ()=>{
    window.location.reload()
}


