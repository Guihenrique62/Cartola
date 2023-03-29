const playerDisp = document.querySelectorAll('.playerDisp')
const playerEsc = document.querySelectorAll('.playerEsc')
const listEsc = document.getElementById('listEsc')
const listDisp = document.getElementById('listDisp')

const createAddBtn = document.createElement('button')
createAddBtn.classList = 'addBtn'
createAddBtn.id = 'addBtn'
createAddBtn.innerText = '+'

const createDelBtn = document.createElement('button')
createDelBtn.classList = 'delBtn'
createDelBtn.id = 'delBtn'
createDelBtn.innerText = '-'

const movedPlayers = []

function addElementDisp(text){
    const newLi = document.createElement('li')
    newLi.classList.add('butt')
    const newSpan = document.createElement('span');
    newSpan.classList.add('spans','playerDisp')
    const newP = document.createElement('p');
    newP.innerText = text

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

    newSpan.append(newP);
    newLi.append(newSpan)
    listEsc.append(newLi);
}

playerDisp.forEach(player => {
    const addBtn = createAddBtn
    function handleAddBtnClick() {
        const playerName = player.firstChild.nextSibling.textContent
        if (!movedPlayers.includes(playerName)) {
            addElementEsc(playerName)
            movedPlayers.push(playerName)
        }
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

