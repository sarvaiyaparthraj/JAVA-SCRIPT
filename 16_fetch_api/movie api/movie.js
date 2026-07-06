document.getElementById("form").addEventListener("submit", async (e) => {

    e.preventDefault();

    const movie = document.getElementById("movie").value.trim();

    const container = document.getElementById("container");

    container.innerHTML = "";

    try {

        const API = await fetch(`https://www.omdbapi.com/?apikey=c47dcf9e&s=${movie}`);

        const Data = await API.json();

        console.log(Data);

        if (Data.Response !== "True") {

            container.innerHTML = "<h1>Movie Not Found</h1>";
            return;
        }

        Data.Search.forEach((movies) => {

            const img = document.createElement("img");

            img.src = movies.Poster;
            img.alt = movies.Title;
            img.style.width = "250px";
            img.style.margin = "15px";

            container.appendChild(img);

        });

    } catch (error) {

        console.log(error.message);

    }

});