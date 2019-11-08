import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/index';
import { SmurfData } from './SmurfData';

export function SmurfForm(props) {
    useEffect(() => {
        props.fetchSmurfs();
        console.log(props);
    }, []);
    // <div>
    //     {props.smurfs ? (
    //         <p>Loading</p>
    //     ) : (

    //     )}
    // </div>

    if (!props.smurfs) {
        return (
            <p>Loading</p>
        )
    } else {
        console.log(props.smurfs);
        return (
            <div>
                {props.smurfs.map(smurf => (
                    <div>
                    {/* <h1>Smurf</h1> */}
                    <SmurfData
                        key={smurf.id}
                        name={smurf.name}
                        age={smurf.age}
                        height={smurf.height}
                    />
                    </div>
                ))}
            </div>
        )
    };
};

function mapStateToProps(state) {
    return {
        ...state,
        smurfs: state.smurf.smurfs,
        isSmurfLoading: state.smurf.isLoading,
        smurfError: state.smurf.error
    };
};

const mapDispatchToProps = {
    fetchSmurfs
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SmurfForm);