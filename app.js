const github = new GitHub;
const ui = new UI;

//Search Input
const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
   
    if(userText !== ''){
     github.getUser(userText)
     .then(data => {
       if(data.profile.message === 'Not Found'){
         //show alert

       }else {
        //show profile
        ui.showProfile(data.profile);
       }
     })
    } else {
      //clear profile

    }

})