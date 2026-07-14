const carItems = [
  {
    name: "BMW M4 Competition",
    price: 8499000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?q=80&w=1074&auto=format&fit=crop"
  },
  {
    name: "Mercedes-Benz G-Class",
    price: 17200000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1718128769487-7ecc0ec06f97?q=80&w=687&auto=format&fit=crop"
  },
  {
    name: "Audi RS7",
    price: 19400000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=1174&auto=format&fit=crop"
  },
  {
    name: "Lamborghini Huracán EVO",
    price: 40000000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=1170&auto=format&fit=crop"
  },
  {
    name: "Ferrari 488 GTB",
    price: 39000000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1597687210367-a4915552d886?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Rolls-Royce Phantom",
    price: 95000000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1696233016084-30c8345d85ff?q=80&w=687&auto=format&fit=crop"
  },
  {
    name: "Porsche 911 Turbo S",
    price: 34000000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1679478878852-bb238b7db287?q=80&w=1170&auto=format&fit=crop"
  },
  {
    name: "Bugatti Chiron",
    price: 300000000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?q=80&w=687&auto=format&fit=crop"
  },
  {
    name: "McLaren 720S",
    price: 46500000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1664713907576-1c00104ca1ba?q=80&w=627&auto=format&fit=crop"
  },
  {
    name: "Tesla Model S Plaid",
    price: 11000000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1698514326382-603bb5b273de?q=80&w=687&auto=format&fit=crop"
  },
  {
    name: "Ford Mustang GT",
    price: 8500000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1547744152-14d985cb937f?q=80&w=1170&auto=format&fit=crop"
  },
  {
    name: "Toyota Supra GR",
    price: 9200000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1643947867681-bd2a3e22eb02?q=80&w=764&auto=format&fit=crop"
  }
];


function showProduct() {

  const product = document.getElementById("product-list");

  product.innerHTML = "";

  carItems.forEach((e) => {

    product.innerHTML += `
      <div class="col-md-4 mb-4">

        <div class="card h-100 shadow">

          <img src="${e.image}" class="card-img-top" style="height:220px; object-fit:cover;" alt="${e.name}">

          <div class="card-body">

            <h5 class="card-title">${e.name}</h5>

            <p class="card-text fw-bold text-success">
              ₹${e.price.toLocaleString("en-IN")}
            </p>

            <p>Quantity : ${e.quantity}</p>

            <button
class="btn btn-success w-100"
onclick="addToCart(${carItems.indexOf(e)})">
Add To Cart
</button>



          </div>

        </div>

      </div>
    `;

  });

}

showProduct();



const data = {
  name: "PARTH",
  work: "Web Developer"
};

// Save
localStorage.setItem("data", JSON.stringify(data));

// Get
const user = JSON.parse(localStorage.getItem("data"));

console.log(user);



let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function addToCart(index){

    let product = carItems[index];

    let exist = cart.find(item => item.name === product.name);

    if(exist){

        exist.quantity++;

    }else{

        cart.push({
            ...product
        });

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    alert("Product Added Successfully");

}

function updateCartCount(){

    document.getElementById("cart-count").innerHTML = cart.length;

}
function updateCartCount(){

    let count = document.getElementById("cart-count");

    if(count){

        count.innerHTML = cart.length;

    }

}