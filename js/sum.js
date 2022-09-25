function getPrice(type) {
  var obj = document.getElementById(type);
  var price = obj.options[obj.selectedIndex].getAttribute("data-price");
  if (price == null)
    price = 0;
  return parseInt(price);
}

function updatePrice() {
  document.getElementById("price").innerHTML = "Total: LKR " +
    (getPrice("color") + getPrice("size") + getPrice("style"));
}