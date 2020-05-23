import React from 'react';
import Header from "./header";
import {connect} from 'react-redux';

const HeaderContainer = (props) => {
    return (
        <div>
            <Header
                isAuth={props.isAuth}
            />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {

})(HeaderContainer);