document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')

//Function para section WATCH
    for(let i = 0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            console.log(botao)
            const tabSelected = botao.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${tabSelected}]`)
            hideList();
            tab.classList.add('watch__list--is-active')
            removeActiveBtn()
            botao.target.classList.add('watch__tabs__button--is-active')
        })
    }
})

//Esconde List do WATCH
function hideList() {
    const lists = document.querySelectorAll('[data-tab-id]')
    
    for(let i = 0; i<lists.length; i++) {
        lists[i].classList.remove('watch__list--is-active')
    }
}

//Remove active do button do WATCH
function removeActiveBtn() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i=0; i < buttons.length; i++) {
        buttons[i].classList.remove('watch__tabs__button--is-active')
    }
}
