const user = {
    avatarUrl: '',
    name: '',
    userame: '',
    bio: '',
    repositories: [],

    setInfo(githubUser) {  // PEGANDO AS INFORMAÇOES DO USUARIO NO OBJ, 
        this.avatarUrl = githubUser.avatar_url
        this.name = githubUser.name
        this.userame = githubUser.login
        this.bio = githubUser.bio
    },

    setRepositories(repositories) {
        this.repositories = repositories
    }
}

export { user }