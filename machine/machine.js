function clicmenu(){
    if(links.style.display== 'block'){
        links.style.display='none'
    } else{
        links.style.display='block'
    }
}
function MudouTamanho(){
    if(window.innerWidth>=768){
        links.style.display='block'
    }else{links.style.display='none'}
}