let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let arr = [
    {
        id: 0,
        namaGame: 'POU (BEST SELLER)',
        harga: '$500.99',
        gambar: "assets/poubaru.jpg"
    },
    {
        id: 1,
        namaGame: 'DOTA2',
        harga: '$30.99',

        gambar: "assets/dotabaru.png"
    },
    {
        id: 2,
        namaGame: 'CSGO',
        harga: '$12.99',
        gambar: "assets/csgologo.jpg"
    },
    {
        id: 3,
        namaGame: 'FIFA',
        harga: '$24.99',
        gambar: 'assets/fifalogo.jpg'
    },
    {
        id: 4,
        namaGame: 'GTA V',
        harga: '$59.99',
        gambar: 'assets/gtalogo.jpg'
    },
    {
        id: 5,
        namaGame: 'NBA-2K21',
        harga: '$49.99',
        gambar: 'assets/nbalogobaru.jpg'
    },
    {
        id: 6,
        namaGame: 'THE SIMS',
        harga: '$35.99',
        gambar: 'assets/sims.png'
    },
    {
        id: 7,
        namaGame: 'SUBWAY SURF',
        harga: '$25.99',
        gambar: 'assets/subway.jpg'
    },


]


let content = ''
for (let i = 0; i < arr.length; i++) {

    let idGame = arr[i].id
    let perNamaGame = arr[i].namaGame
    let perHarga = arr[i].harga
    let perGambar = arr[i].gambar

    content = content + `
        <div class="box">
        <img src= "${perGambar}" alt= "${perNamaGame}">
        <h3>${perNamaGame}</h3>
        <div class="price"><span>${perHarga}</span></div>
        <a data-id = "${idGame}" class="btn btn-add-to-cart">add to cart</a>
        </div>
   `
}

const boxContainer = document.querySelector('#box-container-Menu')
boxContainer.innerHTML = content

let cart = '' // nampung semua data yang di cart
let button = document.querySelectorAll(".btn-add-to-cart")

let itemCart = []
function addItem(idGame, namaGame, hargaGame) {
    itemCart.push({
        id: idGame,
        namaGame: namaGame,
        harga: hargaGame
    }
    )
}


function showItem(itemCart) {
    let items = ''

    for (let i = 0; i < itemCart.length; i++) {
        let perId = itemCart[i].id
        let perNamaGame = itemCart[i].namaGame
        let perHarga = itemCart[i].harga

        items = items + `
    <div class="cart-item">
    <span class="fas fa-times delete-cart" data-id = "${i}"></span>
    <div class="content">
        <h3>${perNamaGame}</h3>
        <div class="price">${perHarga}</div>
    </div>
    </div>
   `
    }
    const cartItems = document.querySelector('#carts-item')
    cartItems.innerHTML = items
}


button.forEach(function (el) {
    el.onclick = () => {
        let id = el.getAttribute("data-id")
        for (let i = 0; i < arr.length; i++) {

            let idGame = arr[i].id
            let perNamaGame = arr[i].namaGame
            let perHarga = arr[i].harga

            console.log('berhasil')
            if (id == idGame) {
                addItem(idGame, perNamaGame, perHarga)
                showItem(itemCart)
                //console.log(itemCart)

                let deleteCart = document.querySelectorAll(".delete-cart")

                deleteCart.forEach(function (o) {
                    o.onclick = () => {
                        let idCart = o.getAttribute("data-id")
                        itemCart.splice(idCart, 1)
                        showItem(itemCart)

                    }
                })
            }
        }
    }
})