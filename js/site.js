$(function () {
  $(function () {
    console.log('carousel');
    $('.owl-carousel').owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 2,
          nav:false
        },
        600: {
          items: 2,
          nav:false
        },
        1000: {
          items: 3
        }
      }
    });
  });

  $('#btnLogin').click(function (e) {
    $('.toast').toast('show');
    $('#loginModal').modal('hide')
    e.preventDefault();
  });

  //read the parameters from url 
  var params = {};

  retrieveUrlSearchParameters(params);

  var cart = parseInt(params.cart);
  if (isNaN(cart)) {
    cart = 0;
  }
  $("#cartitems").text(cart);


});