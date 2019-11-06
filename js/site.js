$(function () {
  $(function () {
    console.log('carousel');
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });
  // $('#mainContainer').append('bookslist.html');
  // $.get('http://localhost:3000/bookslist.html', function (data, textStatus, jqXHR) {
  //     $('#mainContainer').html(data);
  // });
  //$('#mainContainer').html('bookslist.html');
  $('#btnLogin').click(function(e){
    $('.toast').toast('show');
    $('#loginModal').modal('hide')
    e.preventDefault();
  });

  //read the parameters from url 
  var params = {};

  if (location.search) {
      var parts = location.search.substring(1).split('&');
      for (var i = 0; i < parts.length; i++) {
          var nv = parts[i].split('=');
          if (!nv[0]) continue;
          params[nv[0]] = nv[1] || true;
      }

      var noOfBooks = parseInt(params.cart);
      $("#cartitems").text(noOfBooks);
  }
 
});