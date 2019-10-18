
class MovieModel {
    constructor({Title, Year, imdbID, Type, Poster} ={}) {
        this.imdbID = imdbID;
        this.poster = Poster;
        this.title = Title;
        this.type = Type;
        this.year = Year;
    }
}

export { MovieModel };