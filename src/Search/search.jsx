import "./search.css";
import { CiSearch } from "react-icons/ci";
import { Add } from "../Add/add";
import { useState } from "react";
import { useStore } from "../userState";

export const Search  = () => {
    const [value, setValue] = useState();
    const {setSearch} = useStore();
    return (
        <div className="search">
            <div className="content">
                <button onClick={() => setSearch(value)}>
                    <CiSearch />
                </button>
                <input 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                type="text" 
                placeholder="Find Product"
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        setSearch(value)
                    }
                }}
                />  
            </div>
            <Add />
        </div>
    )
}