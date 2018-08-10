import React , {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {Route , Link,Redirect } from 'react-router-dom';

class Header extends Component {


    render () {
        return(
            <Menu style={ { marginTop : '10px'} }>
            <Menu.Item header>Project Butarin</Menu.Item>
            {/* <Link route="/">
              <a className="item"> Butarin </a>   
            </Link>    

            <Menu.Menu position='right'>
            <Link route="/">
              <a className="item"> Campaigns </a>   
            </Link> 
            <Link route="/campaigns/new">
              <a className="item"> + </a>   
            </Link> 
            </Menu.Menu> */}
        </Menu>
        )

    }
}

export default Header;