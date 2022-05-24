import React from 'react'
import SearchBar from './SearchBar'
import Navigation from './Navigation'

const Banner = ( {onTermSubmit, updateUserLocation, updateFormReference } ) => {


    return (

        <div className='banner'>
            <Navigation />
        
                <h1> FIND YOUR NEXT EXPERIENCE </h1> 
          
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