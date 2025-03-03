import MovieProps from "./MoviesProps";

type BookmarkSawProps ={
    id:number;
    rating?:number | null
    note?:string
    movie:MovieProps;
};

export default BookmarkSawProps;