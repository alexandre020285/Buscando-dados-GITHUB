import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";

import { user } from "./objects/users.js";
import { screen } from "./objects/screen.js";

document.querySelector('#btn-search').addEventListener('click', () => { //buscando informações pelo nome do usuário
    const userName = document.querySelector('#input-search').value;
    if (userName.length === 0) {
        alert('Por favor, digite o nome do usuário do GitHub!')
        return
    }
    if (validateEmptyInput(userName)) return 
    getUserData(userName)
})

document.querySelector('#input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode            //cada tecla tem um número (enter=13),
    const isEnterPressed = key === 13

    if (isEnterPressed) {
        if (userName.length === 0) {
            alert('Por favor, digite o nome do usuário do GitHub!')
            return
        }
        if (validateEmptyInput(userName)) return 
        getUserData(userName)
    }
})

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert('Por favor, digite o nome do usuário do GitHub!')
        return true
    }
}

async function getUserData(userName) {    
    const userResponse = await getUser(userName)

    if (userResponse.message === 'Not Found') {
        console.log(userResponse)

        screen.renderNotFound()
        return
        
    }

    const repositoriesResponse = await getRepositories(userName)

   user.setInfo(userResponse)

   user.setRepositories (repositoriesResponse)
   console.log(user)
   
   screen.renderUser(user)

}              
    



///////////////////////////////////aqui dava certo//////////////////////////////////////
///////////////////////////////////aqui dava certo//////////////////////////////////////
///////////////////////////////////aqui dava certo//////////////////////////////////////
///////////////////////////////////aqui dava certo//////////////////////////////////////