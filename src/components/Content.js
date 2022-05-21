import React from 'react'
import ContentCard from './ContentCard'

const Content = ( { events } ) => {

    let renderedContent = ''    
    let filteredContent = ''

    renderedContent = events.map((event) => {

            return (
                <ContentCard 
                    id={'event' + event.id} 
                    name={event.name} 
                    info={event.info} 
                    images={event.images} 
                    />
            )
    })
    
    //Remove repeated entries of events
    //based on name. Would like to upgrade so that it
    //uses the first 4 letters of a string for more accuracy
    if (renderedContent.length > 1) {

        for (let i = 0; i < renderedContent.length; i++) {

            let currentName = renderedContent[i].props.name

            for (let n = 1; n < renderedContent.length; n++) {

                if (currentName == renderedContent[n].props.name) {

                    renderedContent.splice(n,n);

                }
            }
        }
    }
    
    return <div className="rendered_content"> {renderedContent} </div>
}

export default Content