loadDate(bookInfo);
function loadDate(data) {
    var bookTbody = document.getElementById("bookTbody");
    var bookLength = data.length;
    var trString = '';
    for (var i = 0;i < bookLength; i++){
        trString += `
        <tr>
            <td title="${data[i].name}">
                <div class="ellipsis">${data[i].name}</div>
            </td>
            <td title="${data[i].describe}">
                <div class="ellipsis">${data[i].describe}</div>
            </td>
            <td title="${data[i].author}">
                <div class="ellipsis">${data[i].author}</div>
            </td>
        `;
    }
    bookTbody.innerHTML = trString;
}
var btnSearch = document.getElementById("btnSearch");
btnSearch.onclick = function () {
    var bookTbody = document.getElementById("bookTbody");
    bookTbody.innerHTML = "";
    var searchVal = document.getElementById("searchVal").value;
    if(searchVal !== ""){
        var filterResult = bookInfo.filter(function (item) {
            return new RegExp(searchVal, "i").test(item.name);
        });
        loadDate(filterResult);
    }else {
        alert("请先输入书籍名称");
        loadDate(bookInfo);
    }
}