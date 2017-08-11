const toggleSpMenu = function(spNav, height) {
  if(spNav.style.height === ''){
    spNav.style.height = height + 'px'
  } else {
    spNav.style.height = ''
  }
};

const toggleSpBurgerBars = function (bars) {
  for (var i = 0; i < bars.length; i++) {
    if(bars[i].classList.contains('is-open')) {
      bars[i].classList.remove('is-open')
    } else {
      bars[i].classList.add('is-open')
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const burgerBars = document.querySelectorAll('.js-burger-bar');
  const spNav = document.querySelector('.js-header-nav-sp');
  const spNavInnerHeight = document.querySelector('.js-header-nav-inner').getBoundingClientRect().height;

  document.querySelector('.js-burger').addEventListener('click', function () {
    toggleSpBurgerBars(burgerBars);
    toggleSpMenu(spNav, spNavInnerHeight);
  });
});
