$(document).ready(function() {
  $('.button-collapse').sideNav();
});

$(document).ready(function() {
  $('.btn-flat').click(function() {
    let $this = $(this);
    let name = $this.parent().siblings('.card-content').find('span').text();
    let addPrice = $this.parent().siblings('.card-content').find('p').text();
    let td = $('<td class="col s9">' + name + '</td><td id="itemPrice" class="col 3s">' + addPrice + '</td>');

    $('#cartItems').append(td);
    });

let sum = 0;
    // function getTotal() {
    $('.btn-flat').on('click', function() {
      $('#itemPrice').each(function(){

      let value = $('#itemPrice').text().slice(1)

        if (!isNaN(value) && value.length !== 0) {
          sum = parseFloat(sum) + parseFloat(value);
        $('#subtotal').text("$" + sum);
          tax = sum * .0985;
        $('#tax').text("$" + tax.toFixed(2))
          total = sum + tax;
        $('#total').text("$" + total.toFixed(2))
        }
      // let th = $('<th class="cols3">$' + sum + '</th>');


      })
    });
      //totalPrice += parseInt(addPrice)


});
