let imagens = [
    'https://images.unsplash.com/photo-1625151936268-e1ffba534f20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    'https://images.unsplash.com/photo-1689877020200-403d8542d95d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    'https://images.unsplash.com/photo-1740895307920-0ba63bffc1c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    'https://images.unsplash.com/photo-1740895307943-7878df384db1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
]
function trocarimagem(){
    let numero = Math.floor(Math.random() * imagens.length)
    document.getElementById('imagem-slide'). src = imagens[numero]
}
setInterval(trocarimagem, 8000)

const btnmenu = document.getElementById('btn-mobile')
function menu(){
    let menu = document.getElementById('menu')
    let simbol = document.getElementById('simbol')
    menu.classList.toggle('active')
    if(menu.classList.contains('active')){
        simbol.innerHTML = 'Close'
    }else{
        simbol.innerHTML = 'menu'
    }
}
btnmenu.addEventListener('click', menu)

const elementos = document.querySelectorAll('.reveal')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible')
        }
    });
}, {
    threshold: 0.2
})
elementos.forEach((elemento) => {
    observer.observe(elemento)
})

