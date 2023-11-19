import "./search.css";
import { CiSearch } from "react-icons/ci";
import { Button } from "../Button/button";

export const Search  = () => {
    return (
        <div className="search">
            <div className="content">
                <button>
                    <CiSearch />
                </button>
                <input type="text" placeholder="Find Product"/>  
            </div>
            <Button />
        </div>
    )
}