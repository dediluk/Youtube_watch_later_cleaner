let video_sections = document.querySelectorAll('.style-scope .ytd-playlist-video-list-renderer'),
    index = 5;
function deleting() {
    popup_menu_button = video_sections[index].querySelector('#menu #button');
    if (!popup_menu_button) {
        console.log('thats all, folks');
        clearInterval(interval);
    }
    popup_menu_button.click();
    document.querySelectorAll('.style-scope .ytd-menu-popup-renderer')[3].click();
    index++;
}

let interval = setInterval(deleting, 800);
