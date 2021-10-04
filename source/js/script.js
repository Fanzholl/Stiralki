var number = document.querySelector('.poper'),
numberTop = number.getBoundingClientRect().top,
start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
          if(window.pageYOffset > numberTop - window.innerHeight / 2) {
                    this.removeEventListener('scroll', onScroll);
                    var interval = setInterval(function() {
                              number.innerHTML = ++start;
                              if(start == end) {
                                        clearInterval(interval);
                              }
                    }, 1000);
          }
});

var numberr = document.querySelector('.numberr'),
numberrTop = numberr.getBoundingClientRect().top,
start2 = +numberr.innerHTML, end2 = +numberr.dataset.max;

window.addEventListener('scroll', function onScroll() {
          if(window.pageYOffset > numberrTop - window.innerHeight / 2) {
                    this.removeEventListener('scroll', onScroll);
                    var intervall = setInterval(function() {
                              numberr.innerHTML = ++start2;
                              if(start2 == end2) {
                                        clearInterval(intervall);
                              }
                    }, 4);
          }
});

var numberrr = document.querySelector('.numberrr'),
numberrrTop = numberrr.getBoundingClientRect().top,
start3 = +numberrr.innerHTML, end3 = +numberrr.dataset.max;

window.addEventListener('scroll', function onScroll() {
          if(window.pageYOffset > numberrrTop - window.innerHeight / 2) {
                    this.removeEventListener('scroll', onScroll);
                    var intervalll = setInterval(function() {
                              numberrr.innerHTML = ++start3;
                              if(start3 == end3) {
                                        clearInterval(intervalll);
                              }
                    }, 5);
          }
});
