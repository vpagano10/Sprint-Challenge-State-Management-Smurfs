import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newSmurfs } from '../actions/index';

function AddSmurf(props) {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    function handleChanges(e) {
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
    }

    function handleSubmit() {
        props.newSmurfs(newSmurf);
    }

    return (
        <form>
            <input
                name='name'
                placeholder='name'
                onChange={handleChanges}
            /><br />
            <input
                name='age'
                placeholder='age'
                onChange={handleChanges}
            /><br />
            <input
                name='height'
                placeholder='height'
                onChange={handleChanges}
            /><br />
            <button type='submit' onClick={handleSubmit}>Create Smurf</button>
        </form>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
        smurfs: state.smurf.smurfs
    }
}

const mapDispatchToProps = {
    newSmurfs
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddSmurf);