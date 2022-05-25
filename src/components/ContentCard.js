import React, { useEffect, useState } from 'react'

const ContentCard = ( { id, name, info, images, onLearnMore} ) => {

    const [boxShadow, setBoxShadow] = useState({ boxShadow: 'none' })
    const [button, setButton] = useState({ backgroundColor: '#636363' })


    const setShadow = () => {


        setBoxShadow({ boxShadow:'rgba(255,255,255, 0.9) 0px 0px 0px 2px, rgba(255,255,255, 0.9) 0px 4px 6px -1px, rgba(255,255,255, 0.9) 0px 1px 0px inset' })

    }

    const removeShadow = () => {

        setBoxShadow({ width: 'none'})

    }

    const setButtonHover = () => {

        setButton({ backgroundColor: '#464646'}) 

    }

    const setButtonOut = () => {

        setButton({ backgroundColor: '#636363'}) 

    }

    return (
        
        <div 
            key={ "event" + id } 
            className="content_card" 
            onMouseOver={setShadow}
            onMouseOut={removeShadow}
            style={boxShadow}> 

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

                <button 
                    class="event_buttons" 
                    onClick={() => onLearnMore(id)}
                    style={button}
                    onMouseOver={setButtonHover}
                    onMouseOut={setButtonOut}
                    > Learn more </button>
        
            </div>

        </div>

    )
    

}

export default ContentCard