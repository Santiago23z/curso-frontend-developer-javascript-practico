const email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const MenuHam = document.querySelector('.menu');
const MobileMenu = document.querySelector('.mobile-menu');
const carOfBuys = document.querySelector('.car');
const DetailOpenProduct = document.querySelector('#producto-info');
const CloseProductDetail = document.querySelector('.product-detail-close');
const CARDSCONTAINER = document.querySelector('.cards-container')
const aside = document.querySelector('.product-detail'); 

email.addEventListener('click', toggleDektopMenu);
MenuHam.addEventListener('click', toggleMenuMobile);
carOfBuys.addEventListener('click', toggleAsideMenu);
CloseProductDetail.addEventListener('click', closeProductInfo);

function toggleDektopMenu () {
  const IsAsideClosed = aside.classList.contains('inactive');

  if (!IsAsideClosed) {
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile () {
  const IsAsideOpen = !aside.classList.contains('inactive');
  const IsImageProductDetailOpen = !DetailOpenProduct.classList.contains('inactive')
  if (IsAsideOpen) {
    aside.classList.add('inactive');
  } else if (IsImageProductDetailOpen) {
    DetailOpenProduct.classList.add('inactive');
  }
  MobileMenu.classList.toggle('inactive');
}
function openProductDetail() {
  const IsAsideOpen = !aside.classList.contains('inactive');

  if (IsAsideOpen) {
    aside.classList.add('inactive');
}
DetailOpenProduct.classList.remove('inactive')
}

function closeProductInfo() {
  DetailOpenProduct.classList.add('inactive');
}


function toggleAsideMenu () {
  const IsImageProductDetailOpen = !DetailOpenProduct.classList.contains('inactive');
  const IsMenuMobileOpen = !MobileMenu.classList.contains('inactive');
  const IsDesktopOpen = !desktopMenu.classList.contains('inactive');

  if (IsMenuMobileOpen) {
    MobileMenu.classList.add('inactive');
  } else if (IsDesktopOpen) {
    desktopMenu.classList.add('inactive');
  } else if (IsImageProductDetailOpen) {
    DetailOpenProduct.classList.add('inactive');
  }
  aside.classList.toggle('inactive');
}

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

const ProductList = [];

ProductList.push({
  name: 'Bike',
  price: 120,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

ProductList.push({
  name: 'Cap',
  price: 10,
  Image: 'https://cdn-images.farfetch-contents.com/17/27/57/99/17275799_35580724_600.jpg',
});
ProductList.push({
  name: 'Car',
  price: 1200,
  Image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/19609-maseratimc20cielo-dynamic-1653551091.jpg',
});

function functionLists(arr) {
  for (const iterator of arr) {
    const DivProductCard = document.createElement('div');
    DivProductCard.classList.add('product-card');
  
    const img = document.createElement('img');
    img.setAttribute('src', iterator.Image);
    img.addEventListener('click', openProductDetail)
  
    const divProductInfo = document.createElement('div');
    divProductInfo.classList.add('product-info');
  
    const DIV = document.createElement('div')
    const Price = document.createElement('p');
    Price.innerText = '$' + iterator.price;
  
    const NameOfProduct = document.createElement('p');
    NameOfProduct.innerText = iterator.name;
  
    const figure = document.createElement('figure');
    const imgOfFigure = document.createElement('img');
    imgOfFigure.setAttribute('src', './icons/bt_added_to_cart.svg');
  
    figure.append(imgOfFigure);
    DIV.append(Price, NameOfProduct);
    divProductInfo.append(DIV);
    DivProductCard.append(img, divProductInfo);
  
    CARDSCONTAINER.append(DivProductCard);
  }
}

functionLists(ProductList);