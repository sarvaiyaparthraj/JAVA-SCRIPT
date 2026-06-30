function selectSeat(movieName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const seatNo = "B15";
            console.log(` Movie: ${movieName}`);
            console.log(` Seat Selected: ${seatNo}`);
            resolve(seatNo);
        }, 1000);
    });
}

function makePayment(seatNo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(` Payment Successful for Seat ${seatNo}`);
            resolve(seatNo);
        }, 1500);
    });
}

function generateTicket(userName, movieName, seatNo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const bookingId = Math.floor(Math.random() * 90000) + 10000;

            const ticket = {
                bookingId,
                userName,
                movieName,
                seatNo
            };

            console.log(" Ticket Generated");
            resolve(ticket);
        }, 1000);
    });
}

function sendTicket(ticket) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" Ticket Sent Successfully");
            console.log(ticket);
            resolve(" Movie Booking Completed");
        }, 1000);
    });
}

async function bookMovieTicket() {
    try {
        const movieName = "Pushpa 2";
        const userName = "Parth";

        const seat = await selectSeat(movieName);
        const payment = await makePayment(seat);
        const ticket = await generateTicket(userName, movieName, payment);
        const result = await sendTicket(ticket);

        console.log(result);
    } catch (error) {
        console.log(" Error:", error);
    }
}

bookMovieTicket();


// ex2


function selectProduct(product) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Product Selected: ${product}`);
            resolve(product);
        }, 1000);
    });
}

function makePayment(product) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Payment Successful for ${product}`);
            resolve(product);
        }, 1500);
    });
}

function shipProduct(product) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${product} Shipped`);
            resolve("Shopping Completed");
        }, 1000);
    });
}

async function shopping() {
    const product = await selectProduct("Laptop");
    const payment = await makePayment(product);
    const result = await shipProduct(payment);

    console.log(result);
}

shopping();



// ex3

function selectTrain(trainName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Train Selected: ${trainName}`);
            resolve("S5-21");
        }, 1000);
    });
}

function payFare(seatNo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Payment Done for Seat ${seatNo}`);
            resolve(seatNo);
        }, 1500);
    });
}

function generateTicket(seatNo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Train Ticket Generated");
            resolve("Journey Confirmed");
        }, 1000);
    });
}

async function bookTrainTicket() {
    const seat = await selectTrain("Rajdhani Express");
    await payFare(seat);
    const result = await generateTicket(seat);

    console.log(result);
}

bookTrainTicket();


// ex4

function orderFood(foodName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Food Ordered: ${foodName}`);
            resolve(foodName);
        }, 1000);
    });
}

function prepareFood(foodName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${foodName} is Ready`);
            resolve(foodName);
        }, 2000);
    });
}

function deliverFood(foodName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${foodName} Delivered`);
            resolve("Order Completed");
        }, 1000);
    });
}

async function foodOrder() {
    const food = await orderFood("Pizza");
    const ready = await prepareFood(food);
    const result = await deliverFood(ready);

    console.log(result);
}

foodOrder();
