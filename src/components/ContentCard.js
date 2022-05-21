import React, { useEffect } from 'react'

const ContentCard = ( { id, name, info, images} ) => {

    return (

        <div key={ id } className="content_card"> 

            {
                images.map((image) => {


                    if (image.ratio == '3_2' 
                        && image.height < 250 
                        && image.height > 50) 
                    {
                        return <img key={'image' + id} className="content_images" src={image.url} /> 
                    }
                    
                })
            }

            <div className='content_title'>
                <h2 className='title_h2'> { name } </h2>
            </div>
             
            <div className='content_description'> 

                <button> Learn more </button>
        
            </div>

        </div>

    )
    

}

export default ContentCard