$(function () {
    $('#noofbooks1selected').text('No of Books Selected - ' + $('#book1').val());
    $('#noofbooks2selected').text('No of Books Selected - ' + $('#book2').val());
    var totalPrice = 0;
    var book1totalprice = parseFloat($('#book1').val())*parseFloat($('#book1price').val());
    var book2totalprice = parseFloat($('#book2').val())*parseFloat($('#book2price').val());
    totalPrice = book1totalprice + book2totalprice;
    $('#totalprice').text(totalPrice.toFixed(2));

    //back to home page
    $("#btnBack,#btnBack2").click(function(e){
        var url = "bdetails.html";
        $("#maincontainer").load(url);
        e.preventDefault();
    });

    $("#btnCheckout").click(function (e) {
        var url = "checkout.html";
        $("#maincontainer").load(url);
        e.preventDefault();
    });
 
});