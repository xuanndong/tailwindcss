// Author: https://github.com/xuanndong/xuanndong

const topMenu = document.getElementById('ct-top-menu')
const togglleTopmenuIcon = document.getElementById('ct-toggle-top-menu-icon');

document.addEventListener("click", e => {
    if(togglleTopmenuIcon.contains(e.target)){
        // click to toggle top menu item
        topMenu.classList.toggle('ct-topmenu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        // click outsilde from toggle top menu item
        if(topMenu.classList.contains('ct-topmenu-expanded')) {
            topMenu.classList.remove('ct-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})