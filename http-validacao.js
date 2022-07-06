const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

function manejaErros(erro) {
    throw new Error(erro.message)
}

async function validaStatus(arrayUrls) {
    try {
        const arrayStatus = await Promise.all(arrayUrls.map(async (url) => {
            const response = await fetch(url)
            return `${response.status} - ${response.statusText}`
        }))

        return arrayStatus
    } catch (error) {
        manejaErros(error)
    }

}

function geraArrayUrl(arrayLinks) {
    // Object.values(arrayLinks)
    const links = arrayLinks.map((link) => {
        return Object.values(link).join()
    })
    return links;
}

async function validaUrls(arrayLinks) {
    const links = geraArrayUrl(arrayLinks)
    const statusLinks = await validaStatus(links)

    const result = arrayLinks.map((objeto, indice) => {
        return { ...objeto, status: statusLinks[indice] }
    })
    return result
}

module.exports = validaUrls