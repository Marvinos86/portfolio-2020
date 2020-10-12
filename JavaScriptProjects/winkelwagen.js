var ShoppingCart = (function($) {
    var productsEl = document.querySelector(".products"),
        cartEl = document.querySelector(".shopping-cart-list"),
        productQuantityEl = document.querySelector(".product-quantity"),
        emptyCartEl = document.querySelector(".empty-cart-btn"),
        cartCheckoutEl = document.querySelector(".cart-checkout"),
        totalPriceEl = document.querySelector(".total-price");
    
    // Fake JSON data array
    var products = [
      {
        id: 0,
        name: "Citroen",
        description: "Lekkere zoete citroenen vers uit Groenland",
        imageUrl: "https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg",
        productUrl: "https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg",
        price: 1
      },
      {
        id: 1,
        name: "Bananen",
        description: "Smerige zure bananen uit Rusland",
        imageUrl: "https://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg",
        productUrl: "https://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg",
        price: 2.50,
      },
      {
        id: 2,
        name: "Sinaasappel",
        description: "Verse sinaasappels uit West-Friesland",
        imageUrl: "http://www.azspagirls.com/files/2010/09/orange.jpg",
        productUrl: "http://www.azspagirls.com/files/2010/09/orange.jpg",
        price: 1.50
      }
    ],
        productsInCart = [];
    
    var generateProductList = function() {
      products.forEach(function(item) {
        var productEl = document.createElement("div");
        productEl.className = "product";
        productEl.innerHTML = `<div class="product-image">
                                  <img src="${item.imageUrl}" alt="${item.name}">
                               </div>
                               <div>
                               <div class="product-name"><span>Product:</span> ${item.name}</div>
                               <div class="product-description"><span>Omschrijving:</span> ${item.description}</div>
                               <div class="product-price"><span>Prijs:</span> €${item.price}</div>
                               </div>
                               <div class="product-add-to-cart">
                                 <a href="${item.productUrl}" target=blank class="winkel-knop see-more">Meer zien</a>
                                 <a href="#0" class="winkel-knop add-to-cart" data-id=${item.id}>Toevoegen</a>
                               </div>
                            </div>
  `;     
  productsEl.appendChild(productEl);
      });
    }

    var generateCartList = function() {
      cartEl.innerHTML = "";
      productsInCart.forEach(function(item) {
        var li = document.createElement("li");
        li.innerHTML = `${item.quantity} ${item.product.name} - €${item.product.price * item.quantity}`;
        cartEl.appendChild(li);
      });
      productQuantityEl.innerHTML = productsInCart.length;
      generateCartButtons()
    }
    
    // Build cards
    var generateCartButtons = function() {
      if(productsInCart.length > 0) {
        emptyCartEl.style.display = "block";
        cartCheckoutEl.style.display = "block"
        totalPriceEl.innerHTML = "€ " + calculateTotalPrice();
      } else {
        emptyCartEl.style.display = "none";
        cartCheckoutEl.style.display = "none";
      }
    }
    
    // Listeners
    var setupListeners = function() {
      productsEl.addEventListener("click", function(event) {
        var el = event.target;
        if(el.classList.contains("add-to-cart")) {
         var elId = el.dataset.id;
         addToCart(elId);
        }
      });
      emptyCartEl.addEventListener("click", function(event) {
        if(confirm("Are you sure?")) {
          productsInCart = [];
        }
        generateCartList();
      });
    }
    
    // Adds new items or updates existing one in array
    var addToCart = function(id) {
      var obj = products[id];
      if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
        productsInCart.push({product: obj, quantity: 1});
      } else {
        productsInCart.forEach(function(item) {
          if(item.product.id === obj.id) {
            item.quantity++;
          }
        });
      }
      generateCartList();
    }
    
    // check if project is added in productsInCart array
    var productFound = function(productId) {
      return productsInCart.find(function(item) {
        return item.product.id === productId;
      });
    }
    var calculateTotalPrice = function() {
      return productsInCart.reduce(function(total, item) {
        return total + (item.product.price *  item.quantity);
      }, 0);
    }
    var init = function() {
      generateProductList();
      setupListeners();
    }
    return {
      init: init
    };
  })(jQuery);
  
  ShoppingCart.init();
