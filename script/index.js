function getEleById(id) {
  return document.getElementById(id);
}

document.getElementById("products-all").addEventListener("click", function (e) {
  if (e.target.className.includes("add-cart-btn")) {
    const cartButton = e.target;
    let price = cartButton.parentNode.children[3].children[0].innerText;
    console.log(price);

    const imgSrc = cartButton.parentNode.children[0].children[0].src;

    // cart item add
    const title = cartButton.parentNode.children[2].innerText;

    let div = document.createElement("div");

    const parentDiv = getEleById("cart-add-parent");

    div.innerHTML = `
 <div class="flex justify-between bg-[#1111110d] p-2 mt-3 rounded-xl">

            <img class="w-12" src="${imgSrc}" alt="">

           <button class="btn btn-dash btn-success ">Remove</button>
            <div>
              <h1 class="font-semibold">${title}</h1>
              <p class="text-[#11111180]"><span>${price}</span>tk</p>
            </div>
          </div>
    `;
    parentDiv.appendChild(div);

    const totalPrice = document.getElementById("total-price").innerText;
    let total = Number(price) + Number(totalPrice);
    document.getElementById("total-price").innerText = total.toFixed(2);

    // total quantity update

    const totalQuantity = document.getElementById("total-quantity").innerText;

    total = Number(totalQuantity) + 1;
    document.getElementById("total-quantity").innerText = total;
  }
});

document
  .getElementById("cart-add-parent")
  .addEventListener("click", function (e) {
    const target = e.target;
    // const targetParent = ;

    if (target.innerText === "Remove") {
      const removePrice =
        target.parentNode.children[2].children[1].children[0].innerText;

      const totalPrice = document.getElementById("total-price").innerText;
      let total = Number(totalPrice) - Number(removePrice);
      document.getElementById("total-price").innerText = total;

      // total quantity update

      const totalQuantity = document.getElementById("total-quantity").innerText;

      total = Number(totalQuantity) - 1;
      document.getElementById("total-quantity").innerText = total;

      target.parentNode.remove();
    }
  });

// make purchases button

document
  .getElementById("make-purchases-btn")
  .addEventListener("click", function () {
    const totalQuantity = document.getElementById("total-quantity").innerText;
    if (Number(totalQuantity) > 0) {
      alert("Thank you for Purchases product again come!");
    } else {
      alert("please add to  cart product");
    }
  });
