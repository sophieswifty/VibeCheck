import React from 'react'
import './Dots.css'
import { Heading, Box } from 'react-bulma-components'

function Dots(props) {
    return (
        <Box className="loadingg">
            <Heading className="loading-text">{props.title}</Heading>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </Box>
    )
}

export default Dots
