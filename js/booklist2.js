$(function(){
   $('#btnAddToCart,#btnAddToCartSM').click(function(e){
      $('#book2').val($("#noOfBooks").val());
      $('#book2price').val($("#bookprice").text());
    var url = "shoppingcart2.html";
    updateCartItems();
    $('#maincontainer').load(url);
    e.preventDefault();
   });
});