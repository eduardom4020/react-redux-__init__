import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Display from './Display';

const DisplayContainer = props => (
    <Display {...props} />
);

const mapStateToProps = ({list}) => ({list});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);