import React from 'react'

class ContentCard extends React.Component {


    state = { imageLink: '' }

    render() {

        return (

            <div>

                <img src={ this.state.imageLink } />
                <h1> This is a content card </h1> 
                <p> This is a description of the content card </p> 

            </div> 

        )

    }

}   

export default ContentCard