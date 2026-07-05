import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function Modules(){
    const { search } = useContext(SearchContext);
    return(
        <div>
            Modules
        </div>
    )
}