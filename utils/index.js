export const getUser = () => {
    return new Promise((resolve, reject) => {
      data = data.trim();
      // localStorage allows us to save key/value pairs in the browser
      const user = JSON.parse(localStorage.getItem(user));
      if (user) {
        resolve(user);
      } else {
        reject("No user");
      }
    });
  };
  // payload is the data we want to save in localStorage (HTTP response)
  
  export const getToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return "bearer " + token;
    } else {
      return null;
    }
  };
  
  export const fetcher = {
    get: (endpoint, token) => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", token);
      myHeaders.append("Content-Type", "application/json");
  
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
  
      fetch("http://localhost/AmethystBackend/" + endpoint, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          return result;
        })
        .catch((error) => console.log("error", error));
    },
  };
  
  // export const getUserId = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     return user.id;
  //   }
  //   return null;
  // }
  
  // export const getUserRole = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     return user.role;
  //   }
  //   return null;
  // }
  
  // export const getUserName = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     return user.name;
  //   }
  //   return null;
  // }
  
  // export const getUserEmail = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     return user.email;
  //   }
  //   return null;
  // }
  
  // export const getUserPhone = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     return user.phone;
  //   }
  //   return null;
  // }
  
  // export const getUserAddress = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     return user.address;
  //   }
  //   return null;
  // }
  
  // export const getUserCity = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     return user.city;
  //   }
  //   return null;
  // }
  