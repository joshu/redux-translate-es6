import { default as React, PropTypes } from 'react';
import translate from './translate';

class MyComponent extends React.Component {
    render() {

        return (
             <div>
                { this.props.strings.someTranslatedText }
             </div>
        );
    }
}

MyComponent.propTypes = {
    strings: PropTypes.object
};

MyComponent.defaultProps = {
     strings: {
         someTranslatedText: 'Hello World'
    }
};

export default translate('MyComponent')(MyComponent);