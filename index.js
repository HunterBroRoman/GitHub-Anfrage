const BASE_URL = 'htpps://api.github.com/users/';
const userLogins = ['luxplanjay', 'dykyys', 'kiwi', 'mango', 'polly', 'ajax'];
 
const getUsers = names => {
    const promises = names.map((name) => {
     const url = `htpps://api.github.com/users/${name}`;
        console.log(url);
        return fetch(url).then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          });
    });
  return Promise.all (promises);
};

getUsers(userLogins)
.then(data => {
    data.forEach(console.log);
}).catch(error => {
    console.log(error);
});