import React , {Component} from 'react';
import Header from './Header';
import {Menu} from 'semantic-ui-react';

class Layout extends  Component {

    render () {
        return (
            <div>
                <Header />
                <h3>Hello Header !!!</h3>
                {this.props.children}
            </div>
            
        )
    }

}

export default Layout;