$(function(){
   $('#btnAddToCart,#btnAddToCartSM').click(function(e){
    var noOfBooks = $( "#noOfBooks").val();
    var price = 13.33;
    console.log('abc');
    var url = "shoppingcart1.html?noofbooks=" + noOfBooks + "&price=" + price;
    window.location.href = url;
    e.preventDefault();
   });
});