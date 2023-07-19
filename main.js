const increase = document.querySelector('#add-btn')
const reduce = document.querySelector('#lower-btn')
const card = document.querySelector('.card')
const title = document.querySelector('.title')
let count = 0

increase.addEventListener('click',add)

function add() {
    
        count++
        title.textContent = count
        title.style.color = 'red'
    
   
}


reduce.addEventListener('click',azaltma)

function azaltma() {
    
    count--
    title.textContent = count
    title.style.color = 'green'
    
}

