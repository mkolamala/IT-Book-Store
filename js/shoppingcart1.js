$(function () {
    //read the parameters from url 
    // var params = {};

    // retrieveUrlSearchParameters(params);

    // // Assign the values to HTML elements
    // var noOfBooks = parseInt(params.noofbooks);
    // var price = params.price;
    // var cart = parseInt($("#cartitems").text());
    // if (isNaN(cart)) {
    //     cart = 0;
    // }
    // $("#cartitems").text(cart + noOfBooks);
    // $("#bookprice").text(noOfBooks * price);

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