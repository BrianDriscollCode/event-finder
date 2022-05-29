import React from 'react'


const Event = ( {eventInfo, onGoBack} ) => {


    const goToPage = () => {

        console.log('button clicked')
        window.open(eventInfo.data.url)
    }

    return (
    <div className='eventInfo'> 
        <div className='giveEventMargin eventContainer'>

        <div className="back_option">
            <label className='event_text_size'> Search for more events: </label>
            <button onClick={onGoBack} className="event_buttons" style={{marginLeft: '20px'}}>  Go back </button>
        </div>
        

        <div className="giveEventMargin"> 
            <h2 className="event_title">
                {eventInfo.data.name} 
            </h2>
            
        </div>

        <div className="giveEventMargin">
           <img src={eventInfo.data.images[5].url} />
        </div>


        {eventInfo.data?.info ?
            <div className="giveEventMargin event_info_text event_text_size"> {eventInfo.data.info} </div> :
            <div className="giveEventMargin event_info_text event_text_size"> **No info has been provided for this event but we are sure it is going to be a blast!** </div>

        }

        <h3 style={{ fontSize: '30px'}}> Seat map </h3> 
        
        {eventInfo.data?.seatmap?.staticUrl ? 
        
        <div> <img className="giveEventMargin" src={eventInfo.data.seatmap.staticUrl} /> </div> :
        <div className="giveEventMargin"> **No Seatmap** </div>
    
        }
        
        {eventInfo.data?.ticketing?.url ?
 
        <div className="giveEventMargin event_text_size"> <p>{eventInfo.data.ticketing.url}</p> </div> :
        <div className="giveEventMargin event_text_size"> **No Ticketing Link** </div>

        }

        <h3> Event Link: </h3>

        {eventInfo.data?.url ?
        
        <div className="giveEventMargin bottom_url event_text_size"> <button className='event_buttons' onClick={() => goToPage()} value={eventInfo.data.url}> Check Event Page </button> </div> :
        <div className="giveEventMargin bottom_url event_text_size"> No Link </div>

        }

        </div>
    
        
        
        
        
    
    
    
    
    </div>) 


}

export default Event