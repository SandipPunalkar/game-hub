import genres from "../data/genres";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//Server data
const useGenres = () => useData<Genre>("/genres");

//static data
//const useGenres = () => ({ data: genres, loading: false, error: null });

export default useGenres;
