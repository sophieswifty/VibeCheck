import React from 'react';
import { Container } from 'react-bootstrap';

export default class Layout extends React.Component{
    render() {
        return (
            <div className="has-text-centered">
                {this.props.children}
            </div>
        );
    }
}
