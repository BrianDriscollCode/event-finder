import React from 'react'
import Navigation from './components/Navigation'
import Banner from './components/Banner'
import Content from './components/Content'
import Event_API from './apis/Event_API'
import "./css/App.css"
import "./css/Banner.css"
import "./css/Content.css"

class App extends React.Component {

    state = { 
        userLocation: 'NY',
        events: [],
        eventType: ''
    } 

    componentDidMount() {

        this.onTermSubmit('concert');

    }

    updateUserLocation = async (userUpdatedLocation) => {

        console.log('update user location run')
        console.log(userUpdatedLocation)
        await this.setState({ userLocation: userUpdatedLocation })
        
        this.onTermSubmit(this.state.eventType);

    }

    onTermSubmit = async (passedTerm) => {

        this.setState({ eventType: passedTerm })

        const response = await Event_API.get('/events', {
            params: {
                keyword: passedTerm,
                stateCode: this.state.userLocation,
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

            <div className='main_body'> 
                <Navigation />
                <Banner onTermSubmit={this.onTermSubmit} updateUserLocation={this.updateUserLocation} /> {/* Function passed two levels: Banner -> SearchBar */}
                <Content events={this.state.events} />
            </div>

        )

    }
}

export default App 
