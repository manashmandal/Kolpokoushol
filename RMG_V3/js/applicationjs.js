/**
 * Created by Manash on 7/23/2016.
 */

product = ""

//Get product type
$(document).on('click', '.dropdown-menu li a', function() {
    $('#products').val($(this).html());
    product = $(this).html();
    alert(product);
    //update the map according to the selected product
});

//