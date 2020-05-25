import React from 'react';
import Header from "./header";
import {connect} from 'react-redux';
import TemporaryDrawer from "./Drawer";

const HeaderContainer = (props) => {
    return (
        <div>
            <Header
                isAuth={props.isAuth}
            />
            {/*<TemporaryDrawer />*/}
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