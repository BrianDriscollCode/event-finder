import React from 'react'
import Navigation from './components/Navigation'
import Banner from './components/Banner'
import Content from './components/Content'
import Event_API from './apis/Event_API'

class App extends React.Component {

    state = { 
        searchTerm: '', 
        events: []
    } 

    onTermSubmit = async (passedTerm) => {

        const response = await Event_API.get('/events', {
            params: {
                keyword: passedTerm,
                stateCode: 'CA',
                size: 200
            }
        })
            

        console.log(response.data._embedded.events)

        this.setState({
            events: response.data._embedded.events
        })

    }

    render() {

        return (

            <div> 
                <Navigation />
                <Banner onTermSubmit={this.onTermSubmit} /> {/* Function passed two levels: Banner -> SearchBar */}
                <Content events={this.state.events} />
            </div>

        )

    }
}

export default App 
