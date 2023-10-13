export async function DataRick() {
    try {
        const dataR = await fetch('https://rickandmortyapi.com/api/character').then(res => res.json())
        console.log(dataR)
        return dataR.results
    } catch (error) {
        console.error(error)
    }
}

export async function DataAnime() {
    try {
        const dataA = await fetch ('https://nekos.best/api/v2/search?query=Senko&type=2&category=pat&amount=10').then(res => res.json())
        console.log(dataA)
        return dataA.results
    } catch (error) {
        console.error(error)
    }
}