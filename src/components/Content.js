import React from 'react'
import ContentCard from './ContentCard'

const Content = ( { events } ) => {

    let renderedContent = ''


    renderedContent = events.map((event) => {

        return <ContentCard id={event.id} name={event.name} info={event.info} images={event.images} />
            
    })

    console.log(renderedContent[0]);



    return <div> {renderedContent} </div>

}

export default Content