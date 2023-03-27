const playerDisp = document.querySelectorAll('.playerDisp')
const playerEsc = document.querySelectorAll('.playerEsc')
const lists = document.getElementById('list')

const createAddBtn = document.createElement('button')
createAddBtn.classList = 'addBtn'
createAddBtn.id = 'addBtn'
createAddBtn.innerText = '+'

const createDelBtn = document.createElement('button')
createDelBtn.classList = 'delBtn'
createDelBtn.id = 'delBtn'
createDelBtn.innerText = '-'



//Cria botão Del
playerEsc.forEach(player => {
    player.addEventListener('mouseenter', ()=>{
        player.append(createDelBtn)
        const delBtn = document.getElementById('delBtn')
        delBtn.addEventListener('click',()=>{
            
        })
    })
    player.addEventListener('mouseleave', ()=>{
        player.removeChild(createDelBtn)
    })
});

  //Cria botão Add
playerDisp.forEach(player => {
    player.addEventListener('mouseenter', ()=>{
        player.append(createAddBtn)
        const addBtn = document.getElementById('addBtn')
        addBtn.addEventListener('click',()=>{
            console.log('teste')
        })
    })
    player.addEventListener('mouseleave', ()=>{
        player.removeChild(createAddBtn)
    })
});
 


/*
//Add event player disponiveis
for(let i = 0; i <= playerDisp.length; i++){
    playerDisp[i].addEventListener('mouseover',()=>{
    addBtn[i].style.display = 'block'
    })
    playerDisp[i].addEventListener('mouseout',()=>{
       addBtn[i].style.display = 'none'
    })
}

//Add event player Escalado
for(let j = 0; j <= playerEsc.length; j++){
    playerEsc[j].addEventListener('mouseover',()=>{
       delBtn[j].style.display = 'block'
    })
    playerEsc[j].addEventListener('mouseout',()=>{
       delBtn[j].style.display = 'none'
    })
}*/
