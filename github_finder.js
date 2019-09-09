class Github {
  constructor() {
    this.client_id = 'eff53028a982f9fb2a48';
    this.client_secret = "2ec72947ef3aab362e9e532f3245788ecd9f6054";
    this.repos_count = 5;
    this.repos_sort = "created asc"
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();

    const repos = await repoResponse.json();
    return {
      profile,
      repos
    }
  }
}