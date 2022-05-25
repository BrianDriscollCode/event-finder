import React from 'react'
import ContentCard from './ContentCard'

const Content = ( { events, onLearnMore } ) => {

    let renderedContent = ''   
    let splicePosition = [] 

    renderedContent = events.map((event) => {

            return (
                <ContentCard 
                    id={event.id} 
                    name={event.name} 
                    info={event.info} 
                    images={event.images} 
                    onLearnMore={onLearnMore}
                    />
            )
    })
    
    //Remove repeated entries of events
    //based on name. Would like to upgrade so that it
    //uses the first 4 letters of a string for more accuracy
    // if (renderedContent.length > 1) {

        for (let i = 0; i < renderedContent.length; i++) {

            let currentName = renderedContent[i].props.name

            for (let n = 1; n < renderedContent.length; n++) {

                if (currentName === renderedContent[n].props.name) {
                    
                    renderedContent.splice(n, 1)
                    n -= 1
                    

                }

            }   
        }
    
    
    return <div className="rendered_content"> {renderedContent} </div>
}

export default Content