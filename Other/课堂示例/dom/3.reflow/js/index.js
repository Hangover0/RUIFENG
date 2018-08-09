var main = document.getElementById('main');
// 创建一个h1标签节点
var h1 = document.createElement('h1');
var h1_txt = document.createTextNode('DOM的重排（回流）');
h1.appendChild(h1_txt);
document.body.insertBefore(h1, main);

var memo = document.querySelector('.memo'),
    memo_button = memo.querySelectorAll('button'),
    memo_button_leng = memo_button.length;

for (var i = 0; i < memo_button_leng; i++) {
    memo_button[i].onclick = function () {
        this.parentElement.style.cssText = `
            background-color: #06b965;
            color: #fff;
        `;
    }
}

var addPoetry = document.querySelector('.addPoetry');
addPoetry.onclick = function () {
    // memo.innerHTML += `
    //     <li>
    //         <div class="poetry">何以解忧，唯有杜康</div>
    //         <button type="button">编辑</button>
    //     </li>
    // `;
    var newPoetry = document.createElement('li');
    newPoetry.innerHTML += `
        <div class="poetry">何以解忧，唯有杜康</div>
        <button type="button">编辑</button>
    `;
    
    newPoetry.lastElementChild.onclick = function () {
        this.parentElement.style.cssText = `
            background-color: #06b965;
            color: #fff;
        `;
    }
    memo.appendChild(newPoetry);
}