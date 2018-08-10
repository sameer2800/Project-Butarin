import React , {Component} from 'react';
import Header from './Header';
import {Menu} from 'semantic-ui-react';

class Layout extends  Component {

    render () {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
            
        )
    }

}

export default Layout;