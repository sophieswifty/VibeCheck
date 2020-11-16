import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions.js';

export default class Redirect extends React.Component {
  componentDidMount() {
    const history = this.props.history;
    const location = this.props.location;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/');
      }
      const access_token = getParamValues(location.hash);
      history.push('/');
    } catch (error) {
      history.push('/');
    }
  }
  render() {
    return null;
  }
}