import { baseUrl} from "../variable.js";


async function getUser(userName) {                     //Dessa forma (USERNAME) basta informar o nome do usuário que as informações vão vir
    const response = await fetch(`${baseUrl}${userName}`);
    return await response.json();
}

export { getUser }