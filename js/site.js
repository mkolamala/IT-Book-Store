$(function () {
  $(function () {
    console.log('carousel');
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 5
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
 
});