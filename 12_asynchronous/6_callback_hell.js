function loginUser(username, callback) {

  setTimeout(() => {

    console.log("User Logged In:", username);

    callback();

  }, 1000);
}

function getProfile(callback) {

  setTimeout(() => {

    console.log("Profile Data Fetched");

    callback();

  }, 1000);
}

function getPosts(callback) {

  setTimeout(() => {

    console.log("Posts Loaded");

    callback();

  }, 1000);
}

function getComments(callback) {

  setTimeout(() => {

    console.log("Comments Loaded");

    callback();

  }, 1000);
}

function logoutUser() {

  setTimeout(() => {

    console.log("User Logged Out");

  }, 1000);
}

// Callback Hell
loginUser("Parthrajsinh", () => {

  getProfile(() => {

    getPosts(() => {

      getComments(() => {
        
        logoutUser();
      });
    });
  });
});