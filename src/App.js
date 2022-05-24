import React from 'react'
import Navigation from './components/Navigation'
import Banner from './components/Banner'
import Content from './components/Content'
import Event_API from './apis/Event_API'
import Event from "./components/Event"
import "./css/App.css"
import "./css/Banner.css"
import "./css/Content.css"

class App extends React.Component {

    state = { 
        userLocation: 'NY',
        events: [],
        eventType: '',
        showEvent: false,
        content: ''
    } 

    setContent = () => {

        if (this.state.events !== 'undefined') {
            return this.setState({content: <Content events={this.state.events} /> }) 
        } else {
            return this.setState({ content: <div> no content</div> })
        }

    }

    componentDidMount() {

        this.onTermSubmit('concert');

    }

    updateUserLocation = async (userUpdatedLocation) => {

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

        //console.log(response)

        console.log(response.data?._embedded?.events)

        if (typeof(response.data?._embedded?.events) !== 'undefined') {

            this.setState({
                events: response.data._embedded.events
            })

        } else {

            this.setState({
                events: 'undefined'
            })
        }
        

        this.setContent()

    }

    printEvent = (e) => {

        //e.stopPropagation();
        this.setState(({showEvent}) => ({showEvent: !showEvent}));
        console.log('show event run', this.state.showEvent)

    }

    render() {

        return (

            <div className='main_body' onClick={this.closeDropdown} >
                <button onClick={this.printEvent}> content </button> 
                <Navigation />
                <Banner 
                    onTermSubmit={this.onTermSubmit} 
                    updateUserLocation={this.updateUserLocation}
                /> {/* Function passed two levels: Banner -> SearchBar */}
                
                {
                    this.state.showEvent ? <Event /> : this.state.content
                }
                
            </div>

        )

    }
}

export default App 
