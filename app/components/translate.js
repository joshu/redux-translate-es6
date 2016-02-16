import { default as React } from 'react';
import en from '../i18n/en';
import fr from '../i18n/fr';

const languages = {
    en,
    fr
};

export default function translate(key) {
    return Component => {
        class TranslationComponent extends React.Component {
            render() {
                console.log('current language: ', this.context.currentLanguage);
                var strings = languages[this.context.currentLanguage][key];
                return <Component {...this.props} {...this.state} strings={strings} />;
            }
        }

        TranslationComponent.contextTypes = {
            currentLanguage: React.PropTypes.string
        };

        return TranslationComponent;
    };
}