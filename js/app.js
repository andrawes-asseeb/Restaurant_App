
// menu drop
let menu = document.querySelector('.menu')
const drop_down_menu = document.getElementById('drop-down-menu')
const menuSpan = Array.from(document.querySelectorAll('.menu span'))

menu.addEventListener('click', function() {
  if(this.style.transform == 'rotate(0deg)' || this.style.transform == '') {
    drop_down_menu.style.cssText = 'height: 350px;'
    menuSpan[1].style.display = 'none';
    menuSpan[0].style.cssText = 'transform: rotate(45deg);';
    menuSpan[2].style.cssText = 'transform: translateY(-10px) rotate(-45deg);'
    this.style.cssText = 'transform: rotate(360deg)'
  } else {
    drop_down_menu.style.cssText = 'height: 0'
    menuSpan[1].style.display = 'block';
    menuSpan[0].style.cssText = 'transform: rotate(0deg);';
    menuSpan[2].style.cssText = 'transform: translateY(0) rotate(0deg);'
    this.style.cssText = 'transform: rotate(0deg)'
  }
})

// activating slider show

const sliderShowElements = document.querySelectorAll('.slider-show > div')
const sliderControlsButtons = document.querySelectorAll('.slider-controls span')

function SliderShowAcive() {
  setTimeout(() => {
    sliderShowElements[0].style.cssText = 'right: 100%';
    sliderControlsButtons[0].classList.remove('active')
    sliderControlsButtons[1].classList.add('active')
    setTimeout(() => {  
      sliderShowElements[1].style.cssText = 'right: 0';
      setTimeout(() => {
        sliderShowElements[1].style.cssText = 'right: 100%';
        sliderControlsButtons[1].classList.remove('active');
        sliderControlsButtons[2].classList.add('active');
        setTimeout(() => {
          sliderShowElements[2].style.cssText = 'right: 0';
          setTimeout(() => {
              sliderShowElements[0].style.cssText = 'right: 0';
              sliderShowElements[1].style.cssText = 'right: -100%';
              sliderShowElements[2].style.cssText = 'right: -100%';
              sliderControlsButtons[2].classList.remove('active')
              sliderControlsButtons[0].classList.add('active')
              SliderShowAcive()
          }, 5000);
        }, 1000)
      }, 5000);
    }, 1000)
  }, 5000);
}

SliderShowAcive() 

// dark mood 
const mood = document.querySelectorAll('.mood i')

mood.forEach((ele) => {
  ele.addEventListener('click', function() {
    if(document.body.getAttribute('mood') == 'dark') {
      document.body.setAttribute('mood', 'light')
      this.classList.replace('fa-moon', 'fa-sun')
    } else {
      document.body.setAttribute('mood', 'dark')
      this.classList.replace('fa-sun', 'fa-moon')
    }
  })
})

// setting scroll for header 
const header = document.querySelector('body header')

document.onscroll = function (e) {
  if(window.scrollY > 0) {
    header.className = 'header-special-scroll'
  } else {
    header.className = ''
  }
}

// styling the chosen page link
const links = Array.from(document.querySelectorAll('.links ul li a'))
const currentPage = window.location.pathname.split("/").pop();

links.forEach((link, i) => {
  if(link.getAttribute('href') === currentPage) {
    link.classList.add('active')
  }
})

// activating menu page choices

let menuCont = document.querySelector('.menu-links ul')
let foodLinks = document.querySelectorAll('.menu-links ul li')
let menuFoodItems = document.querySelectorAll('.menu-table .item')

menuCont == null? null : menuCont.addEventListener('click', function(e) {
  const item = e.target.closest('li');
  if(!item) {
    return
  }
  foodLinks.forEach((ele) => {
    ele.classList.remove('active')
  })
  item.classList.add('active')
  currentFood(item.innerText.toLowerCase())
})

function currentFood(ChosedFood) {
  if(!ChosedFood) {
    return
  }
  menuFoodItems.forEach((ele) => {
    if(ele.getAttribute('data-food').toLowerCase() == ChosedFood) {
      ele.classList.remove('hidden')
    } else if(ChosedFood == 'all') {
      ele.classList.remove('hidden')
    } else {
      ele.classList.add('hidden') 
    }
  })
}
