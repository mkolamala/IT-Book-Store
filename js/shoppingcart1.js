$(function () {
    //read the parameters from url 
    var params = {};

    if (location.search) {
        var parts = location.search.substring(1).split('&');
        for (var i = 0; i < parts.length; i++) {
            var nv = parts[i].split('=');
            if (!nv[0]) continue;
            params[nv[0]] = nv[1] || true;
        }
    }

    // Assign the values to HTML elements
    var noOfBooks = parseInt(params.noofbooks);
    var price = params.price;
    var cart = parseInt($("#cartitems").text());
    if (isNaN(cart)) {
        cart = 0;
    }
    $("#cartitems").text(cart + noOfBooks);
    $("#bookprice").text(noOfBooks * price);

    //back to home page
    $("#btnBack,#btnBack2").click(function () {
        location.href = "http://localhost:3000/?cart=" + noOfBooks;
    });

    $("#btnCheckout").click(function () {
        location.href = "http://localhost:3000/checkout.html";
    });

});