const butao = document.querySelector('button')
const ispraite = document.querySelector('.image')
butao.addEventListener('click', ()=>{
    ver()
})
async function ver() {
    const resposta = await fetch(`https://dog.ceo/api/breeds/image/random`)
    const data = await resposta.json()
    const url = data.message
    ispraite.src = url
    ispraite.style.display = 'block'
}

