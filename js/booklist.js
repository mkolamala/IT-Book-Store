$(function(){
   $('#btnAddToCart').click(function(e){
    var noOfBooks = $( "#noOfBooks").val();
    var price = 13.33;
    console.log('abc');
    var url = "shoppingcart.html?noofbooks=" + noOfBooks + "&price=" + price;
    window.location.href = url;
    e.preventDefault();
   });
});