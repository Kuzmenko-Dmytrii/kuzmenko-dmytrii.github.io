const container = document.getElementById('container')
const colors = ['#ffd319', '#ff901f', '#ff2975', '#ff222ff', '#8c1eff','#D30CB8']
const squares = 800

for (let i = 0; i < squares; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)

}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = '0 0 2 px ${color}, 0 0 10px  ${color}'

}

function removeColor(element) {
    element.style.background = '#3c345c'
    element.style.boxShadow = '0 0 2px #000'

}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]

}