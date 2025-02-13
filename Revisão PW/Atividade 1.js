document.addEventListener("DOMContentLoaded", function(){
    const galleryItems=document.querySelectorAll('img.fotos')
    galleryItems.forEach(galleryItem=>{
        galleryItem.addEventListener('click', function(){
            alert("Foto do 2º ano de DS")
        })
    })
})