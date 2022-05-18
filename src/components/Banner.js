import React from 'react'
import SearchBar from './SearchBar'

const Banner = ( {onTermSubmit} ) => {


    return (

        <div className='banner'>
            <h1> This is a banner </h1> 
            <div className='search_bar'>
                <SearchBar onTermSubmit={onTermSubmit} /> 
            </div>
            
        </div>
        

    )


}

export default Banner