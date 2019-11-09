$(function(){
    var totalItems = parseInt($('#book1').val()) + parseInt($('#book2').val());
    $('#spntotalItems').text(totalItems);

    var book1Totalprice = parseInt($('#book1').val()) * parseFloat($('#book1price').val());
    var book2Totalprice = parseInt($('#book2').val()) * parseFloat($('#book2price').val());
    var orderTotal = book1Totalprice + book2Totalprice;
    $("#spnOrderTotal").text(orderTotal.toFixed(2));
    var shippingCharges = parseFloat($('#hdnshippingCharges').val());
    var TotalPrice = parseFloat((orderTotal + shippingCharges).toString());
    $("#spnTotalPrice").text(TotalPrice.toFixed(2));

    $('#orderconfirm').click(function(e){
        $('#book1').val(0);
        $('#book2').val(0);
        $('#book1price').val(0);
        $('#book2price').val(0);
        updateCartItems();
        $('#maincontainer').load('orderconfirmation.html');
        e.preventDefault();
    });

})