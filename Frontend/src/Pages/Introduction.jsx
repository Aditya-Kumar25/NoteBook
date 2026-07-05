import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function Introduction(){
    const { search } = useContext(SearchContext);
    return(
        <div>
            Introduction
        </div>
    )
}