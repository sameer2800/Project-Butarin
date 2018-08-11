pragma solidity ^0.4.17;

import './question.sol';

contract onlineJudge {
    address[] public deployedQuestions;
    address public owner ;
    
    function onlineJudge() public {
        owner = msg.sender;
    }
    
    function createQuestion(string description, string publicKey) public {
        address newQuestion = new Question( msg.sender, description , publicKey, owner);
        deployedQuestions.push(newQuestion);
    }
    
    function getDeployedQuestions() public view returns(address[]) {
        return deployedQuestions;
    }
    
    function getBalance() public view returns(uint) {
        return this.balance;
    }
    
}

