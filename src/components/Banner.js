import React from 'react'
import SearchBar from './SearchBar'

const Banner = ( {onTermSubmit} ) => {


    return (

        <div>
            <h1> This is a banner </h1> 
            <SearchBar onTermSubmit={onTermSubmit} /> 
        </div>
        

    )


}

export default Banner