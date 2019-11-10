$(function () {

    $('#noofbooksselected').text('No of Books Selected - ' + $('#book1').val());
    var totalPrice = 0;
    totalPrice = parseFloat($('#book1').val())*parseFloat($('#book1price').val());
    $('#totalprice').text(totalPrice.toFixed(2));
    //back to home page
    $("#btnBack,#btnBack2").click(function (e) {
        var url = "bdetails.html";
        $('#maincontainer').load(url);
        e.preventDefault();
    });

    $("#btnCheckout").click(function () {
        var url =  "checkout.html";
        $('#maincontainer').load(url);
    });

});