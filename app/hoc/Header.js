import React , {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {BrowserRouter, Route , Link,Redirect } from 'react-router-dom';
import Compete from '../components/compete/index';
import { withRouter } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            activeItem : ''
        }
      }

      handleItemClick = (e, {name}) => {
            this.setState({
                activeItem : name
            })

            if(name === 'compete') {
                this.props.history.push('/compete');
            }

            if(name === 'practice') {
                this.props.history.push('/practice');
            }

      } 

    render () {
        return(
            <Menu style={ { marginTop : '10px'} }>
                <Menu.Item header name='logo' active={this.state.activeItem === 'logo'} onClick={this.handleItemClick}>
                Project Butarin
                </Menu.Item>
            
            <Menu.Menu position='right'>
                <Menu.Item name='practice' active={this.state.activeItem === 'practice'} onClick={this.handleItemClick}>
                Practice
                </Menu.Item>
                <Menu.Item  name='compete' active={this.state.activeItem === 'compete'} onClick={this.handleItemClick}>
                Compete
                </Menu.Item>
                <Menu.Item name='leaderboard'  active={this.state.activeItem === 'leaderboard'} onClick={this.handleItemClick}>
                CryptoGeeks
                </Menu.Item>
            </Menu.Menu> 

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

export default withRouter(Header);