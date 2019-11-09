$(function () {
console.log('bdetails');
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
    console.log($("#maincontainer").length);
 $('#csbookdetails, #csbookdetails1').click(function(e){
    $("#maincontainer").load("csbookdetails.html");
    e.preventDefault();
 });
 $('#mlbookdetails,#mlbookdetails1').click(function(e){
  $("#maincontainer").load("mlbookdetails.html");
  e.preventDefault();
});
  
  
  });