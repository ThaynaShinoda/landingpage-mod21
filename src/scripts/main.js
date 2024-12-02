document.addEventListener('DOMContentLoaded', function() {
    //Usar na section WATCH
    const buttons = document.querySelectorAll('[data-tab-button]')

    //Usar na section FAQ
    const questions = document.querySelectorAll('[data-faq-question]')

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

//Function para FAQ
    for(let i=0; i<questions.length; i++) {
        questions[i].addEventListener('click', openCloseAnswer)
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

//Abre e fecha resposta do FAQ
function openCloseAnswer(elemento) {
    const classe = 'faq__list__item--is-open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}