var state = sessionStorage.getItem('state');
var page_title = document.querySelector('h1');

if(state === 'a34EH234EGHwegertre') {
    page_title.style.color = '#3a6';
} else {
    page_title.style.color = '#000';
}
