const github = new GitHub;

//Search Input
const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
   
    if(userText !== ''){
     github.getUser(userText)
     .then(data => {
       console.log(data)
     })
    }

})