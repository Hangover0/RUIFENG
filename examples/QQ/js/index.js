$(function(){
    $.ajax({
        url: "../json/data.json",
        type: "GET",
        dataType: "json",
        success:(response) => {
            let schoolmates = response["schoolmate"];
            let friends= response["friends"];
            let games= response["games"];
            get(schoolmates, ".schoolmates", ".scount", ".sline");
            get(friends, ".friends", ".fcount", ".fline");
            get(games, ".games", ".gcount", ".gline");
        }
    })

    state(".school",".schoolmates");
    state(".fri",".friends");
    state(".gas",".games");
    $(".add").on("click", () => {
        htmlStr = `
            <li class="btn">
                <p>>qq分组 <span class="fline">0</span>/<span class="fcount">0</span></p>
                <ul class="friends submenu-list">         
                </ul>
            </li>
    `; 
        $(".game").after(htmlStr);
    })
})