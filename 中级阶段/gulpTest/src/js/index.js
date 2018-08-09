(function(){
    let name = "VV";
    console.log(name);
    console.log("hello");



    let tool = Tool();
    tool.sayHello();
    let menuItems = document.querySelector(".menu-list a");
    for(let i = 0;i < menuItems.length; i++){
        menuItems[i].onclick = function(){
            console.log(this.textContent);
        }
    }
})();