import axios from 'axios';
import './style.css'
import {useEffect, useState} from "react";

export const Search = () => {
    const [data , setData] = useState('')
    const [query, setQuery] = useState("");

    const axios = require('axios').default;
    const getAllData = () => {
        axios.get('https://api.giphy.com/v1/gifs')
            .then((response) => {
                console.log(response.data.data);
                setData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const searchAllData = () => {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=fDggi4oAFWzNjZ2sZIQ2Wk5KX2dQAg33&q=${query}`)
            .then((response) => {
                setData(response.data.data);
                console.log(response.data.data);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = e => {
        setQuery(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        searchAllData();
    }

    useEffect(() => {
        getAllData();
        searchAllData()
    }, [])


    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div>
                    <input type="text" id="simple-search"
                           placeholder="Search"
                           onChange = {handleChange} required />
                </div>
                <button type="submit"> Search
                </button>
            </form>


            {data ? data.map(data => {
                return (
                    <div className="">
                       <img src={data.images} alt='' width='200px' height='200px' />
                    </div>


                )

            } ) : <h3> No data yet</h3>}

        </>
    )
}