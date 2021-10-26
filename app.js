$('.customer-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./assets/images/arrow-left.png"/></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="./assets/images/arrow-right.png"/></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
});

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const activeClass = 'is-show';
toggle.addEventListener('click', function () {
  menu.classList.toggle(activeClass);
  toggle.classList.toggle('is-active');
});
