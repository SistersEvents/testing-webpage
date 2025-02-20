$(document).ready(function () {
  const basket = [];

  // Tab Navigation
  $(".tab").click(function () {
    $(".tab").removeClass("active");
    $(this).addClass("active");
  });

  // Add to Basket
  $(".item").click(function () {
    const itemId = $(this).data("id");
    if (basket.length < 12) {
      basket.push(itemId);
      updateBasket();
    } else {
      alert("Basket is full!");
    }
  });

  // Update Basket
  function updateBasket() {
    $(".slot").removeClass("filled");
    basket.forEach((item, index) => {
      $(".slot").eq(index).addClass("filled");
    });
  }
});
