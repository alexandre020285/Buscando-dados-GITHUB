import { baseUrl,respositoriesQtd } from "../variable.js";

async function getRepositories(userName) {                     //Buscar dados do repositóro
    const response = await fetch(`${baseUrl}${userName}/repos?per_page=${respositoriesQtd}`); //?per_page=${} Quantidade de repositórios
    return await response.json();
}

export { getRepositories }