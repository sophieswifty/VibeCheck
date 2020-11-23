import React from 'react';
import { Box, Button } from 'react-bulma-components';

export default class StatisticsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "artist"
        }
    }

    render() {
        return (
            <Box>
                <Button>Top Artists</Button>
                <Button>Top Tracks</Button>
            </Box>
        )
    }
}