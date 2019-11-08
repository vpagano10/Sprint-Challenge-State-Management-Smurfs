import React from 'react';
import { connect } from 'react-redux';

export function SmurfData(props) {
    return (
        <>
            <div>
                <h2>{props.name}</h2>
                <p>{props.age}</p>
                <p>{props.height}</p>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps
)(SmurfData);