$(function(){
    var orderNumber = Math.floor(Math.random() * Math.floor(1000));;
    orderNumber = 'ORD-0000' + orderNumber;
    var trackingNumber = 'TRK-0000'+orderNumber;
    $('#ordernumber').text(orderNumber);
    $("#trackingNumber").text(trackingNumber);
})