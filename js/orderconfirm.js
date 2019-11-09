$(function(){
    var orderNumber = Math.floor(Math.random() * Math.floor(1000));;
    orderNumber = 'ORD-0000' + orderNumber;
    var trackingNumber = 'TRK-0000'+orderNumber;
    $('#ordernumber').text(orderNumber);
    $("#trackingNumber").text(trackingNumber);

    $('#btnbacktoshopping').click(function(e){
        //update cart to zero
        $('#book1').val(0);
        $('#book2').val(0);
        $('#maincontainer').load('bdetails.html');
        e.preventDefault();
    });
})