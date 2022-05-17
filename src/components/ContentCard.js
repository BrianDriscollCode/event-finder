import React from 'react'

const ContentCard = ( { id, name, info, images } ) => {

    return (

        <div key={ id }> 

            <h2> { name } </h2> 
            {
                images.map((image) => {

                    if (image.ratio == '3_2' 
                        && image.height < 500 
                        && image.height > 250) 
                    {
                        return <img src={image.url} /> 
                    }
                    

                })
            }
            <p> { info } </p>
            <hr />

        </div>

    )
    

}

export default ContentCard