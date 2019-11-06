$(function(){
   $('#btnAddToCart').click(function(e){
    var noOfBooks = $( "#noOfBooks").val();
    var price = 13.33;
    var url = "shoppingcart2.html?noofbooks=" + noOfBooks + "&price=" + price;
    window.location.href = url;
    e.preventDefault();
   });
});