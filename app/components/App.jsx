import React from 'react';
import {PropTypes} from 'react';
import Menu from '../components/Menu';
import { connect } from 'react-redux';
import { changeLanguage } from '../state/lang';

class App extends React.Component {
    render() {
      return (
        <div>
            // <Menu onLanguageChange={this.props.changeLanguage}/>
            <div className="">
                {this.props.children}
            </div>

        </div>
        );
    }

    getChildContext() {
        return {
            currentLanguage: this.props.currentLanguage
        };
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

App.childContextTypes = {
    currentLanguage: PropTypes.string.isRequired
};

function select(state){
    return {user: state.auth.user, currentLanguage: state.lang.current};
}

function mapDispatchToProps(dispatch){
    return {
        changeLanguage: (lang) => dispatch(changeLanguage(lang))
    };
}