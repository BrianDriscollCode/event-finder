import React from 'react'
import SearchBar from './SearchBar'

const Banner = ( {onTermSubmit, updateUserLocation, updateFormReference } ) => {


    return (

        <div className='banner'>
            <h1> This is a banner </h1> 
            <div className='search_bar'>
                <SearchBar 
                    onTermSubmit={onTermSubmit} 
                    updateUserLocation={updateUserLocation}
                />
            </div>
        </div>
        

    )


}

export default Banner