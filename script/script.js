const playerLi = document.querySelectorAll('.playerli')
const addBtn = document.querySelectorAll('.addBtn')

for(let i = 0; i <= playerLi.length; i++){
    playerLi[i].addEventListener('mouseover',()=>{
    addBtn[i].style.display = 'block'
    })
    playerLi[i].addEventListener('mouseout',()=>{
       addBtn[i].style.display = 'none'
    })
}
