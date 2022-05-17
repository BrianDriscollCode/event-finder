import React from 'react'
import ContentCard from './ContentCard'

class Content extends React.Component {

    state = { events: [] }


    updateEvents = (props) => {

        console.log(this.state.events)
        console.log(props.events)

    }

    render() {

        return (

            <div onClick={this.updateEvents}> 

                <ContentCard />

            </div>

        )

    }

}

export default Content