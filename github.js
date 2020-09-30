class GitHub {
  constructor(){
    this.client_id = 'c0dc4d68277b65c35c7e';
    this.client_secret = '2bda510a1496b7317de639f9aa429ef134a79a56'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json();

    return {
      profile
    }
  }





}