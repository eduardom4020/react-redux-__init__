import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Display from './Display';
import Display2 from './Display2';

const DisplayContainer = props => (
    props.display === 2 ?
        <Display2 {...props} />
    :
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