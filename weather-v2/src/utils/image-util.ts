function getImageURL(name: string, folder: string) {
    return new URL(`../assets/${folder}/${name}.png`, import.meta.url).href
}

export { getImageURL };