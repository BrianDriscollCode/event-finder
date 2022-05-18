import React, { useEffect } from 'react'

const ContentCard = ( { id, name, info, images } ) => {

    let description = ''    

    return (

        <div key={ id } className="content_card"> 

            {
                images.map((image) => {

                    if (image.ratio == '3_2' 
                        && image.height < 250 
                        && image.height > 50) 
                    {
                        return <img className="content_images" src={image.url} /> 
                    }
                    

                })
            }
            
            <div className='content_title'>
                <h2> { name } </h2>
            </div>
             
            <p className='content_description'> 

            {info ? info: 
            
                "The user did not add a description to this event. That's fine! We are sure this is an awesome event that you should attend!"}
            

                
                
            </p>

        </div>

    )
    

}

export default ContentCard