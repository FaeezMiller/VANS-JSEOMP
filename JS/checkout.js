var taxRate = 0.05;
var shipping = 15.0;
$(function() {
  var jsonData = [
    {
      title: "LEATHER OLD SKOOL",
      price: 1000,
      quantity: 0,
      total: 0
    },
    {
      title: "CLASSIC OLD SKOOL",
      price: 1100,
      quantity: 0,
      total: 0
    },
    {
      title: "SKATE OLD SKOOL PRO",
      price: 1100,
      quantity: 0,
      total: 0
    },
    {
      title: "ERA",
      price: 900,
      quantity: 0,
      total: 0
    },
    {
      title: "SKATE ERA",
      price: 1900,
      quantity: 0,
      total: 0
    },
    {
      title: "ERA PIG SUEDE",
      price: 2000 ,
      quantity: 0,
      total: 0
    },
    {
      title: "CLASSIC SLIP-ON",
      price: 1000,
      quantity: 0,
      total: 0
    },
    {
      title: "CLASSIC SLIP-ONS CHECKERBOARD",
      price: 1000,
      quantity: 0,
      total: 0
    },
    {
      title: "GREY CHECKER SLIP-ON",
      price: 1100,
      quantity: 0,
      total: 0
    },
    {
      title: "SKATEISTAN-SKATE-SK8-HI",
      price: 2200,
      quantity: 0,
      total: 0
    },
    {
      title: "SK8-HI TAPERED ECO THEORY",
      price: 2300,
      quantity: 0,
      total: 86
    },
    {
      title: "VANS X ONE PIECE SKATE SK8-HI",
      price: 2500,
      quantity: 0,
      total: 0
    },
    {
      title: "OLD SKOOL SOLID BLACK",
      price: 1500,
      quantity: 0,
      total: 0
    },
    {
      title: "PRIMARY CHECK OLD SKOOL",
      price: 1500,
      quantity: 0,
      total: 0
    },
    {
      title: "OLD SKOOL VANS COLLAGE",
      price: 1500,
      quantity: 0,
      total: 0
    },
    
    
  ];
  var html = "<tbody>";
  $.each(jsonData, function() {
    html +=
      '<tr class="cart-item">' +
      "        <td>" +
      '          <input type="checkbox" class="cart-item-check" checked />' +
      "        </td>" +
      "        <td>" +
      "          " +
      this.title +
      "        </td>" +
      "        <td>$" +
      this.price +
      "</td>" +
      "        <td>" +
      '          <input class="input is-primary cart-item-qty" style="width:100px" type="number" min="1" value="' +
      this.quantity +
      '" data-price="' +
      this.price +
      '">' +
      "        </td>" +
      '        <td class="cart-item-total">$' +
      this.total +
      "</td>" +
      "        <td>" +
      '          <a class="button is-small">DELETE</a>' +
      "        </td>" +
      "      </tr>";
  });
  html += "</tbody>";
  $(".shopping-cart").append(html);
  
  recalculateCart();

  $(".cart-item-check").change(function() {
    recalculateCart();
  });

  $(".cart-item-qty").change(function() {
    var $this = $(this);
    var parent = $this.parent().parent();
    parent.find(".cart-item-check").prop("checked", "checked");
    var price = $this.attr("data-price");
    var quantity = $this.val();
    var total = price * quantity;
    parent.find(".cart-item-total").html(total.toFixed(2));
    recalculateCart();
  });

  $(".button").click(function() {
    var parent = $(this)
      .parent()
      .parent();
    parent.remove();
    recalculateCart();
  });
});
function recalculateCart() {
  var subTotal = 0;
  var grandTotal = 0;
  var tax = 0;
  var items = $(".cart-item");
  $.each(items, function() {
    var itemCheck = $(this).find(".cart-item-check");
    var itemQuantity = $(this).find(".cart-item-qty");
    if (itemCheck.prop("checked")) {
      var itemTotal = itemQuantity.val() * itemQuantity.attr("data-price");
      subTotal += itemTotal;
    }
  });
  if (subTotal > 0) {
    tax = subTotal * taxRate;
    grandTotal = subTotal + tax + shipping;
    $(".totals,.checkout").show();
  } else {
    $(".totals,.checkout").hide();
  }
  $("#cart-subtotal").html(subTotal.toFixed(2));
  $("#cart-total").html(grandTotal.toFixed(2));
  $("#cart-tax").html(tax.toFixed(2));
  $("#cart-shipping").html(shipping.toFixed(2));
}





