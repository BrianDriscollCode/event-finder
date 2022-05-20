import React from 'react'

class SearchBar extends React.Component {

    state = { 
            
        term: "concert",
        open: false,
        states_in_USA : [

            'AZ',
            'CA',
            'NY',
            'WA'
    
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
                            <div className="text"> label </div>
                            <div className={`menu ${this.state.open ? 'visible transition' : ''}`}>
                                {

                                    this.state.states_in_USA.map((state) => {

                                        return <div className='item'> { state } </div>

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

