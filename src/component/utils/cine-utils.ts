function getImageUrl(name:string){
    return new URL (`../../assets/movie-covers/${name}`,import.meta.url).href
}
export {getImageUrl}