import React from 'react'
import Navigation from './components/Navigation'
import Banner from './components/Banner'
import Content from './components/Content'
import Event_API from './apis/Event_API'
import Get_Attraction from './apis/Get_Attraction'
import Event from "./components/Event"
import "./css/App.css"
import "./css/Banner.css"
import "./css/Content.css"
import "./css/Event.css"


class App extends React.Component {

    state = { 
        userLocation: 'NY',
        events: [],
        eventType: '',
        content: '',

        showEvent: false,
        eventObject: []
    } 

    setContent = () => {

        if (this.state.events !== 'undefined') {
            return this.setState({content: <Content 
                    events={this.state.events} 
                    onLearnMore={this.onLearnMore}
                    />
                    
            }) 
        } else {
            return this.setState({ content: <div className='no_events_return'> 
            
                <h2> No events have been found... sorry! </h2>
            
            </div> })
        }

    }

    componentDidMount() {

        this.onTermSubmit('concert');

    }

    updateUserLocation = async (userUpdatedLocation) => {

        await this.setState({ userLocation: userUpdatedLocation })
        
        //this.onTermSubmit(this.state.eventType);

    }

    onTermSubmit = async (passedTerm) => {

        this.setState({ 
            eventType: passedTerm,
            showEvent: false, })

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
                events: response.data._embedded.events,
            })

        } else {

            this.setState({
                events: 'undefined'
            })
        }
        

        this.setContent()

    }

    onGoBack = () => {

        console.log('hey on goback')
        this.setState({ showEvent: false})

    }

    onLearnMore = async (passedID) => {

        console.log('ran onLearnMore', passedID)

        const response = await Get_Attraction.get(`/events/${passedID}`)
        this.setState({eventObject: response})
        this.setState({showEvent: true})
        

    }

    printEvent = (e) => {

        //e.stopPropagation();
        this.setState(({showEvent}) => ({showEvent: !showEvent}));
        console.log('show event run', this.state.showEvent)

    }

    render() {

        return (

            <div className='main_body' onClick={this.closeDropdown} >
                {/*<button onClick={this.printEvent}> content </button>*/} 
                <Banner 
                    onTermSubmit={this.onTermSubmit} 
                    updateUserLocation={this.updateUserLocation}
                /> {/* Function passed two levels: Banner -> SearchBar */}
                
                {
                    this.state.showEvent ? <Event eventInfo={this.state.eventObject} onGoBack={this.onGoBack} /> : this.state.content
                }
                
            </div>

        )

    }
}

export default App 
