import Swiper from 'swiper';

function toggleModal() {
    let btns = document.querySelectorAll('.animal__btn .btn'),
        modals = document.querySelectorAll('.modal'),
        btnClose = document.querySelectorAll('.modal__close-btn');


    btns.forEach(function(item) {
        item.onclick = function(e) {
            e.preventDefault();
            let id = e.target.dataset.pets;
            let modal = document.querySelector(`#${id}`);
                modal.classList.add('active');
                document.body.classList.add('overflow');
        }
    });
    btnClose.forEach(function(btn) {
        btn.onclick = function() {
            modals.forEach(function(modal) {
                modal.classList.remove('active');
                document.body.classList.remove('overflow');
            })
        }
    })
};

toggleModal();

new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
      nextEl: '.our-friends__swap--next',
      prevEl: '.our-friends__swap--prev',
    },
    breakpoints: {
        768: {
        slidesPerView: 3,
        
        },

        481: {
          slidesPerView: 2,
          
        },
        300: {
            slidesPerView: 1,
            
          },
         
      }
  });




  