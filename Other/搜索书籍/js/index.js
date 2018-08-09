// ======== 调用函数区域 ========
loadData(bookInfo);

/**
 * 加载数据
 * @param { Array } data 书籍对象
 */
function loadData(data) {
    // tbody
    var bookTbody = document.getElementById('bookTbody');
    // 获取数据条数
    var bookLength = data.length;

    // 表格行的字符串
    var trString = '';
    // 将数据遍历进tbody
    for (var i = 0; i < bookLength; i++) {
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
        </tr>
    `;
    }
    bookTbody.innerHTML = trString;
}


// 搜索按钮
var btnSearch = document.getElementById('btnSearch');
btnSearch.onclick = function () {
    // tbody
    var bookTbody = document.getElementById('bookTbody');
    // 清空tbody
    bookTbody.innerHTML = '';

    // 获取输入框当前的值
    var searchVal = document.getElementById('searchVal').value;
    if(searchVal !== "") {
        // 返回符合条件组成的数组
        var filterResult = bookInfo.filter(function (item) {
            // 将正则匹配结果为true的对象添加到一个数组并在filter循环结束后返回该数组
            return new RegExp(searchVal, 'i').test(item.name);
        });
        // 加载搜索后的数据
        loadData(filterResult);
    } else {
        alert('请先输入书籍名称');
        // 加载原始数据
        loadData(bookInfo);
    }
}