import React from 'react';
import { Box, Button } from 'react-bulma-components';

export default class StatisticsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "artist"
        }

        this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleButtonPress = e => {
        console.log(e);

        // Set the active tab
    }

    render() {
        return (
            <React.Fragment>
                <Box>
                    <Button onClick={this.handleButtonPress}>Top Artists</Button>
                    <Button onClick={this.handleButtonPress}>Top Tracks</Button>
                </Box>
                <Box>
                    {this.state.active === "artist" &&
                        <div>test</div>
                    }
                    {this.state.active === "track" &&
                        <div>test2</div>
                    }
                </Box>
            </React.Fragment>
        )
    }
}