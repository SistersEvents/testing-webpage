$(document).ready(function () {
  const products = {
    food: [
      { name: "Caramel Milk Cake", emoji: "🍰", image: "cake.jpg" },
      { name: "Chocolate Cupcakes", emoji: "🧁", image: "cupcake.jpg" },
    ],
    decor: [
      { name: "Balloon Arch", emoji: "🎈", image: "balloon.jpg" },
      { name: "Event Frame", emoji: "🖼️", image: "frame.jpg" },
    ],
    flowers: [
      { name: "Rose Bouquet", emoji: "🌹", image: "rose.jpg" },
      { name: "Tulip Bouquet", emoji: "🌷", image: "tulip.jpg" },
    ],
    rentals: [
      { name: "Wedding Frame", emoji: "💒", image: "wedding-frame.jpg" },
      { name: "Themed Box", emoji: "🎁", image: "themed-box.jpg" },
    ],
  };

  let basket = [];

  // Landing Page Navigation
  $(".option").click(function () {
    const category = $(this).data("category");
    $(".landing-page").addClass("hidden");
    $(".product-selection").removeClass("hidden");
    loadProducts(category);
  });

  // Load Products
  function loadProducts(category) {
    $(".products").empty();
    products[category].forEach((product) => {
      $(".products").append(`
        <div class="product" data-name="${product.name}" data-emoji="${product.emoji}">
          <img src="${product.image}" alt="${product.name}">
          <p>${product.name}</p>
        </div>
      `);
    });
  }

  // Add to Basket
  $(document).on("click", ".product", function () {
    const name = $(this).data("name");
    const emoji = $(this).data("emoji");
    basket.push({ name, emoji });
    updateBasket();
  });

  // Update Basket
  function updateBasket() {
    $(".basket-items").empty();
    basket.forEach((item) => {
      $(".basket-items").append(`<span>${item.emoji}</span>`);
    });
  }

  // Back Button
  $(".back-btn").click(function () {
    $(".product-selection, .checkout").addClass("hidden");
    $(".landing-page").removeClass("hidden");
  });

  // Checkout
  $(".checkout-btn").click(function () {
    if (basket.length === 0) {
      alert("Your basket is empty!");
    } else {
      alert("Order placed successfully!");
      basket = [];
      updateBasket();
    }
  });
});
