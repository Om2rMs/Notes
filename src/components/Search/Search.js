import React from "react";
import './Search.css'
import { MdSearch } from "react-icons/md";

const Search = ({ searchNote }) => {
    return (
        <div className="search" >
            <MdSearch className='search-icons' size="1.3em" />
            <input
                onChange={(event) => searchNote(event.target.value)
                }
                type="text"
                placeholder="ابحث هنا">

            </input>
        </div >
    )
}

export default Search; 