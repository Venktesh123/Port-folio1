var navmenuAnchortags=document.querySelectorAll('.nav-menu a');
for(var i=0;i<navmenuAnchortags.length;i++)
{
    navmenuAnchortags[i].addEventListener('click',function(event){
        event.preventDefault();
    
    var tragetsectionid=this.textContent.trim().toLowerCase();
    var trasaction=document.getElementById(tragetsectionid);
    var interval=setInterval(function(){
        var lengtfhoftio=trasaction.getBoundingClientRect();
        if(lengtfhoftio.top()<=0)
        {
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);

},50);
});
}
                        