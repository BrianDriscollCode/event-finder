import React from 'react'
import Navigation from './components/Navigation'
import Banner from './components/Banner'
import Content from './components/Content'
import Hotel_API from './apis/Hotel_API'

class App extends React.Component {

    state = { 
        searchTerm: '', 
        events: []
    } 

    onTermSubmit = async (passedTerm) => {

        console.log(passedTerm, 'passedterm')
        const response = await Hotel_API.get()
            
    
        
        console.log(response.data._embedded.events)
        this.setState({
            events: response.data._embedded.events
        })
        console.log(this.state.events, '-events')
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
