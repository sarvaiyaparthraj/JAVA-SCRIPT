 document.getElementById("btn").addEventListener("click", async () => {
    const image = document.getElementById("img");

    try {
        const response = await fetch(
             "https://dog.ceo/api/breeds/image/random"
        );

        const data = await response.json();

        image.src = data.message;
        image.width = 300;
    } catch (error) {
        console.log("Error:", error);
    }
});