async function getAllProducts() {
  var productResponse = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });
  var data = await productResponse.json();
  console.log(data);
  var product_card = document.getElementById("cards");
  var product_cards = "";
  for (p of data) {
    product_cards =
      product_cards +
      '<div  class="card_container">' +
      '<img src=" ' +
      p.image +
      '"  >' +
      "<h2>" +
      p.title +
      "</h2>" +
      "<h3>" +
      "Price=$" +
      p.price +
      "</h3>" +
      "<p>" +
      "Rating:" +
      p.rating.rate +
      "</p>" +
      "<p>" +
      "count:" +
      p.rating.count +
      "</p>" +
      "<h4>" +
      p.description +
      "</h4>" +
      "</div>";
  }
  product_card.innerHTML = product_cards;
}
getAllProducts();
