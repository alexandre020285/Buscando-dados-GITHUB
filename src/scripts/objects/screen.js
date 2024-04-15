const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =
            `<div class="info">
        <img src="${user.avatarUrl}" alt="imagem de perfil do usuário"/>

            <div class="data">
                <h1>${user.name ?? 'Nome não informado 😥'}</h1>
                <p>${user.bio ?? 'Bio não informada 😥'}</p>
            </div>
        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo =>  repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)
            if (user.repositories.length > 0) {
                this.userProfile.innerHTML += `<div ul class="repositories section">
                                                    <h2>Repositórios</h2> 
                                                    <ul>${repositoriesItens}</ul>
                                                </div>`
            }
        },
        renderNotFound(){
            this.userProfile.innerHTML = "<h3> Usuário não encontrado 😥</h3>"
        }
    }


export { screen }