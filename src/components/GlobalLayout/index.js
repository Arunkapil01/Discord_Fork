import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import Global from '../Global';

import './../ModestaCSS/css/modesta.min.css';
import './../ModestaCSS/css/twemoji.min.css';
import './../index.scss';

import enData from 'react-intl/locale-data/en';
import frData from 'react-intl/locale-data/fr';

import locales from '../../locales';

const messages = {};
Object.keys(locales).map((key) => messages[key] = locales[key].data);

addLocaleData([...enData, ...frData]);

class GlobalLayout extends React.Component {
  render() {
    return (
      <IntlProvider locale={this.props.locale} messages={messages[this.props.locale]}>
        <div className="main-window">
          <Global />
          {this.props.children}
        </div>
      </IntlProvider>
    );
  }
}

GlobalLayout.propTypes = {
  children: PropTypes.any,
  locale: PropTypes.string
};

export default GlobalLayout;
