var author=document.querySelector("#author_me12")
author.addEventListener('mouseover',function(){
    
    author.textContent="Mouse currently over ";
})
author.addEventListener('mouseout',function(){
    author.textContent="";
})