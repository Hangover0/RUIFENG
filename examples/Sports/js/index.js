$(function(){
    loadingImgs();
    get((response) => {
        loadingHtml(response);          
    })
    banner($(".banner-img > img"))
    Imgs();
});