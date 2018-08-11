import React , {Component} from 'react';
import Layout from '../../hoc/Layout';
import { Card, Button } from 'semantic-ui-react'
import OnlineJudge from 'Embark/contracts/OnlineJudge';
import EmbarkJS from 'Embark/EmbarkJS';

class Compete extends Component {

    state = {
        balance : 0 ,
        deployedQuestions : ''
    }

    async componentDidMount() {
     
        OnlineJudge.methods.getBalance().call()
          .then(_value => {
                console.log("value is " + _value)
                this.setState({balance: _value})
          } )

        console.log("contract balance " + this.state.balance)  

          OnlineJudge.methods.getDeployedQuestions().call()
            .then(_value => {
                console.log("value is " + _value)
                this.setState({deployedQuestions : _value}) 
                } 
            )
      
    }

    renderQuestions =  () => {
        return (
            <div>
                Questions to load here
            </div>
        )
    }
 
    createNewQuestionHandler = () => {
        this.props.history.push('/compete/new');
    }

    render () {
        return (
            
            <div>
                
                <div>Open Competetions !!</div>
             
                 <a>   
                <Button  floated='right' content='Create Competition' icon='add circle' primary  
                onClick = {this.createNewQuestionHandler}  />
                  </a>  
                
                {this.renderQuestions()}
            </div>
           
        )
    }
}

export default Compete;