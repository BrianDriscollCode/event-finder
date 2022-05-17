import React from 'react'

class SearchBar extends React.Component {

    state = { term: "concert" } 

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

                <form onSubmit={this.onFormSubmit}>
                    <label> Search Your Destination </label> 
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={(e) => this.updateTerm(e.target.value)} 
                        />
                </form>

            </div>

        )

    }
    

}

export default SearchBar

