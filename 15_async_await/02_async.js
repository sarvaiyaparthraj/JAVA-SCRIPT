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