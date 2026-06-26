
let admissionID = "";

const admission = new Promise((resolve, reject) => {

    let marks = 75;

    if (marks < 50) {

        reject("Admission Rejected");

    } else {

        setTimeout(() => {

            console.log("Application Accepted");

            resolve("PDA2026");

        }, 2000);

    }

}).then((id) => {

    admissionID = id;

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Documents Verified");

            resolve(id);

        }, 2000);

    });

}).then((id) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Fees Paid");

            resolve(id);

        }, 2000);

    });

}).then((id) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Admission Confirmed");

            resolve(id);

        }, 2000);

    });

}).catch((err) => {

    console.log(err);

}).finally(() => {

    console.log("Welcome to College ");

});