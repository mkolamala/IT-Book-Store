// Update Cart
function updateCartItems() {
    var totalCartItems = parseInt($('#book1').val()) + parseInt($('#book2').val());
    $("#cartitems").text(totalCartItems);
}
