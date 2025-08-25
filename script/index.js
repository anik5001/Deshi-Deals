function getEleById(id) {
  return document.getElementById(id);
}

document.getElementById("products-all").addEventListener("click", function (e) {
  if (e.target.className.includes("add-cart-btn")) {
    const cartButton = e.target;
    const price = cartButton.parentNode.children[3].children[0].innerText;

    // cart item add
    const title = cartButton.parentNode.children[2].innerText;

    let div = document.createElement("div");

    const parentDiv = getEleById("cart-add-parent");

    div.innerHTML = `
 <div class="flex justify-between bg-[#1111110d] p-2 mt-3 rounded-xl">

            <img class="w-12" src="./assets/kitchen-1.png" alt="">

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
    document.getElementById("total-price").innerText = total;

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

      console.log(removePrice);

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
