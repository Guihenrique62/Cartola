//Variáveis dos elementos


const playerDisp = document.querySelectorAll('.playerDisp')
const playerEsc = document.querySelectorAll('.playerEsc')
const listEsc = document.getElementById('listEsc')
const listDisp = document.getElementById('listDisp')


//Criação dos botôes
const createAddBtn = document.createElement('button')
createAddBtn.classList = 'addBtn'
createAddBtn.id = 'addBtn'
createAddBtn.innerText = '+'

const createDelBtn = document.createElement('button')
createDelBtn.classList = 'delBtn'
createDelBtn.id = 'delBtn'
createDelBtn.innerText = '-'

// Array que irá registrar todos os player que foram modificados
const movedPlayers = []
const newMovedPlayers = []
const newMovedPlayers1 = []

//funçoes para criar um novo span em cada list
function addElementDisp(text){
    const newLi = document.createElement('li')
    newLi.classList.add('butt')
    const newSpan = document.createElement('span');
    newSpan.classList.add('spans','playerDisp')
    const newP = document.createElement('p');
    newP.innerText = text

    function handleAddBtnClick() {
        const playerName = newLi.firstChild.firstChild.textContent
        if (!newMovedPlayers1.includes(playerName)) {
            addElementEsc(playerName)
            newMovedPlayers1.push(playerName)
        }
        newLi.remove()
    }

    newLi.addEventListener('mouseenter', () =>{
        const addBtn = createAddBtn
        newLi.firstChild.append(addBtn)
        addBtn.addEventListener('click', handleAddBtnClick)
    })
    newLi.addEventListener('mouseleave', () => {
        const addBtn = createAddBtn
        newLi.firstChild.removeChild(addBtn)
        addBtn.removeEventListener('click', handleAddBtnClick)
    })

    newSpan.append(newP);
    newLi.append(newSpan)
    listDisp.append(newLi);
}
function addElementEsc(text){
    const newLi = document.createElement('li')
    newLi.classList.add('butt')
    const newSpan = document.createElement('span');
    newSpan.classList.add('spans','playerEsc')
    const newP = document.createElement('p');
    newP.innerText = text

    function handleDelBtnClick() {
        const playerName = newLi.firstChild.firstChild.textContent
        if (!newMovedPlayers.includes(playerName)) {
            addElementDisp(playerName)
            newMovedPlayers.push(playerName)
        }
        newLi.remove()
    }

    newLi.addEventListener('mouseenter', () =>{
        const delBtn = createDelBtn
        newLi.firstChild.append(delBtn)
        delBtn.addEventListener('click', handleDelBtnClick)
    })
    newLi.addEventListener('mouseleave', () => {
        const delBtn = createDelBtn
        newLi.firstChild.removeChild(delBtn)
        delBtn.removeEventListener('click', handleDelBtnClick)
    })
    newSpan.append(newP);
    newLi.append(newSpan)
    listEsc.append(newLi);
}

//forEach iterando sobre cada elemento da node list, adicionando os eventos

playerDisp.forEach(player => {
    const addBtn = createAddBtn
    function handleAddBtnClick() {
        const playerName = player.firstChild.nextSibling.textContent
        if (!movedPlayers.includes(playerName)) {
            addElementEsc(playerName)
            movedPlayers.push(playerName)
        }
        player.parentNode.remove()
        player.remove()
        
    }

    player.addEventListener('mouseenter',()=>{
        player.append(addBtn)
        addBtn.addEventListener('click', handleAddBtnClick)
    })


    player.addEventListener('mouseleave', () => {
        player.removeChild(addBtn)
        addBtn.removeEventListener('click', handleAddBtnClick)
    })
    
});

playerEsc.forEach(player => {
    const delBtn = createDelBtn
    function handleDelBtnClick() {
        const playerName = player.firstChild.nextSibling.textContent
        if (!movedPlayers.includes(playerName)) {
            addElementDisp(playerName)
            movedPlayers.push(playerName)
        }
        player.parentNode.remove()
        player.remove()
    }

    player.addEventListener('mouseenter',()=>{
        player.append(delBtn)
        delBtn.addEventListener('click', handleDelBtnClick)
    })


    player.addEventListener('mouseleave', () => {
        player.removeChild(delBtn)
        delBtn.removeEventListener('click', handleDelBtnClick)
    })
});



