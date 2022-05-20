import React from 'react'

class SearchBar extends React.Component {

    state = { 
            
        term: "concert",
        open: false,
        chosenState: 'NY',
        states_in_USA : [

            'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT',
            'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN',
            'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA',
            'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV',
            'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH',
            'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN',
            'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI',
            'WY'
    
        ]
    } 

    //opens and closes drop down menu
    onOpen = () => {

        console.log('open run before')
        this.setState( { open: !this.state.open } )
        console.log('open is run')

    }

    updateTerm(newTerm) {

        this.setState({ term: newTerm })

    }

    updateFormLocation = (location) => {

        this.setState({ chosenState: location })
        this.updateLocation(location)

    }

    updateLocation(userLocation) {

        this.props.updateUserLocation(userLocation)
        
    }

    onFormSubmit= (event) => {

        event.preventDefault()
        this.props.onTermSubmit(this.state.term)

    }

    render() {

        return (

            <div> 

                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className='field'>
                        <label className='label'> Search the type of event ('concert' is recommended) : </label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.updateTerm(e.target.value)} 
                            />
                    </div>
                </form>

                <div className="ui form banner_dropdown">

                    <div className="field"> 

                        <label className='label'> Select a state </label>
                        <div class={`ui selection dropdown ${this.state.open ? 'visible active' : ''}`}> 
                            <i className="dropdown icon" onClick={this.onOpen} > </i>
                            <div className="text"> {this.state.chosenState } </div>
                            <div className={`menu ${this.state.open ? 'visible transition' : ''}`}>
                                {

                                    this.state.states_in_USA.map((state) => {

                                        return <div className='item' onClick={() => this.updateFormLocation(state)}> { state } </div>

                                    })
                                    
                                }
                            </div> 
                        </div>

                    </div>

                </div> 

            </div>

        )

    }
    

}

export default SearchBar

