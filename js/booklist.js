$(function () {
   $('#btnAddToCart,#btnAddToCartSM').click(function (e) {
      $('#book1').val($("#noOfBooks").val());
      $('#book1price').val($("#bookprice").text());
      console.log('no of books selected - ' + $("#noOfBooks").val());
      console.log('book price - ' + $("#bookprice").text());
      var url = "shoppingcart1.html";
      //window.location.href = url;
      console.log('man container - ' + $('#maincontainer').length);

      updateCartItems();
      $('#maincontainer').load(url);
      e.preventDefault();
   });


});