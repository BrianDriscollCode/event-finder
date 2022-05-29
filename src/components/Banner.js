import React, { useRef, useEffect } from 'react'
import SearchBar from './SearchBar'
import Navigation from './Navigation'
import Video from '../video/concertv2.mp4'

const Banner = ( {onTermSubmit, updateUserLocation, updateFormReference } ) => {

    const vidRef = useRef();

    useEffect(() => { vidRef.current.play(); },[]);

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

            <video ref={ vidRef } src={Video} className="video_player" autoPlay={true} loop controls = ''> </video>
        </div>
        

    )


}

export default Banner