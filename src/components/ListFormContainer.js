import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListForm from './ListForm';
import { AddToList } from '../actions/list-actions';

const ListFormContainer = props => (
    <ListForm {...props} />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            AddToList
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(ListFormContainer);