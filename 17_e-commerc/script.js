

let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let editId = null;



async function getProducts() {

    try {

        const response = await fetch("https://fakestoreapi.com/products");

        products = await response.json();

        showProducts(products);

        updateCartCount();

    }

    catch (error) {

        console.log(error);

    }

}

getProducts();

function showProducts(data) {

    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    data.forEach((p) => {

        productList.innerHTML += `

        <div class="col-lg-4 col-md-6 mt-4">

            <div class="card h-100 shadow">

                <img src="${p.image}"
                class="card-img-top"
                style="height:250px; object-fit:contain;">

                <div class="card-body text-center">

                    <h5>${p.title}</h5>

                    <h4 class="text-success">
                        ₹${Math.round(p.price * 85)}
                    </h4>

                    <button
                    class="btn btn-success w-100 mt-2"
                    onclick="addToCart(${p.id})">

                    Add To Cart

                    </button>

                    <button
                    class="btn btn-warning w-100 mt-2"
                    onclick="editProduct(${p.id})"
                    data-bs-toggle="modal"
                    data-bs-target="#addProductModal">

                    Edit

                    </button>

                    <button
                    class="btn btn-danger w-100 mt-2"
                    onclick="deleteProduct(${p.id})">

                    Delete

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}



function searchProduct() {

    let value = document.getElementById("search").value.toLowerCase();

    let filterData = products.filter((item) =>
        item.title.toLowerCase().includes(value)
    );

    showProducts(filterData);

}





const productForm = document.getElementById("productForm");

productForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let title = document.getElementById("productName").value;

    let price = document.getElementById("productPrice").value;

    let image = document.getElementById("productImage").value;

    let newProduct = {

        id: Date.now(),

        title: title,

        price: Number(price),

        image: image

    };

    products.unshift(newProduct);

    showProducts(products);

    productForm.reset();

    let modal = bootstrap.Modal.getInstance(document.getElementById("addProductModal"));

    modal.hide();

    alert("Product Added Successfully");

});



function editProduct(id) {

    editId = id;

    let product = products.find((item) => item.id === id);

    document.getElementById("productName").value = product.title;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productImage").value = product.image;

    document.querySelector(".modal-title").innerHTML = "Edit Product";

    document.querySelector("#productForm button[type='submit']").innerHTML = "Update Product";
}






productForm.addEventListener("submit", function (e) {

    if (editId == null) return;

    e.preventDefault();

    let product = products.find((item) => item.id === editId);

    product.title = document.getElementById("productName").value;

    product.price = Number(document.getElementById("productPrice").value);

    product.image = document.getElementById("productImage").value;

    showProducts(products);

    productForm.reset();

    editId = null;

    document.querySelector(".modal-title").innerHTML = "Add Product";

    document.querySelector("#productForm button[type='submit']").innerHTML = "Add Product";

    let modal = bootstrap.Modal.getInstance(document.getElementById("addProductModal"));

    modal.hide();

    alert("Product Updated Successfully");

});





function deleteProduct(id) {

    let check = confirm("Are you sure you want to delete this product ?");

    if (check) {

        products = products.filter((item) => item.id !== id);

        showProducts(products);

        alert("Product Deleted Successfully");

    }

}




function addToCart(id) {

    let product = cart.find((item) => item.id === id);

    if (product) {

        product.qty++;

    } else {

        let newProduct = products.find((item) => item.id === id);

        cart.push({

            ...newProduct,

            qty: 1

        });

    }

    updateLocalStorage();

    updateCartCount();

    alert("Product Added Successfully");

}






function updateLocalStorage() {

    localStorage.setItem("cart", JSON.stringify(cart));

}






function updateCartCount() {

    let total = 0;

    cart.forEach((item) => {

        total += item.qty;

    });

    document.getElementById("cartCount").innerHTML = total;

}





function showCartModal() {

    let modal = new bootstrap.Modal(document.getElementById("cartModal"));

    modal.show();

    showCartItems();

}




function showCartItems() {

    let cartTable = document.getElementById("cartTable");

    cartTable.innerHTML = "";

    let totalQty = 0;

    let grandTotal = 0;

    cart.forEach((p) => {

        totalQty += p.qty;

        grandTotal += Math.round(p.price * 85) * p.qty;

        cartTable.innerHTML += `

        <tr>

            <td>${p.id}</td>

            <td>
                <img src="${p.image}" width="60" height="60" style="object-fit:contain;">
            </td>

            <td>${p.title}</td>

            <td>₹${Math.round(p.price * 85)}</td>

            <td>

                <button
                class="btn btn-success btn-sm"
                onclick="increaseQty(${p.id})">

                +

                </button>

                <span class="mx-2">${p.qty}</span>

                <button
                class="btn btn-danger btn-sm"
                onclick="decreaseQty(${p.id})">

                -

                </button>

            </td>

            <td>

                ₹${Math.round(p.price * 85) * p.qty}

            </td>

            <td>

                <button
                class="btn btn-danger btn-sm"
                onclick="removeItem(${p.id})">

                Remove

                </button>

            </td>

        </tr>

        `;

    });

    document.getElementById("totalQty").innerHTML = totalQty;

    document.getElementById("grandTotal").innerHTML = grandTotal;

}





function increaseQty(id) {

    let product = cart.find((item) => item.id === id);

    if (product) {

        product.qty++;

    }

    updateLocalStorage();

    updateCartCount();

    showCartItems();

}




function decreaseQty(id) {

    let product = cart.find((item) => item.id === id);

    if (product) {

        if (product.qty > 1) {

            product.qty--;

        } else {

            cart = cart.filter((item) => item.id !== id);

        }

    }

    updateLocalStorage();

    updateCartCount();

    showCartItems();

}





function removeItem(id) {

    cart = cart.filter((item) => item.id !== id);

    updateLocalStorage();

    updateCartCount();

    showCartItems();

}




function clearCart() {

    let check = confirm("Are you sure you want to clear the cart?");

    if (check) {

        cart = [];

        updateLocalStorage();

        updateCartCount();

        showCartItems();

    }

}