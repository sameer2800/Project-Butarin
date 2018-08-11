pragma solidity ^0.4.17;

contract Question {
    address public manager;
    address public owner ;
    string public managerKey;
    string public questionDescription ;
    uint public contractValue;
    mapping( address => string) participantsIPFS;
    mapping(address => uint) participantsGasValue;
    address[] public participants;
    
    function Question(address questionManager,  string description, string publicKey, address judgeOwner ) public  {
      
        owner = judgeOwner;
        manager = questionManager;
        managerKey = publicKey;
        questionDescription = description;
    }
    
    function setContractMoney() public payable {
        require(msg.sender == manager);
        
    }
    
    function getManagerPublicKey() public view returns(string)  {
        return managerKey;
    }
    
    function getManagerAddress() public view returns(address)  {
        return manager;
    }
    
    function submitSolutionDetails(address particpant, uint gas,string hash) public {
        require(msg.sender == owner);
        participantsIPFS[msg.sender] = hash;
        participantsGasValue[msg.sender] = gas;
    }
    
    function rewardWinner(address participant) public {
        require(msg.sender == manager);
        participant.transfer(this.balance);
    }
    
    function getParticipant(uint index) public view returns(address) {
        return participants[index];
    }
    
    function getQuestionDescription() public view returns (string) {
        return questionDescription;
    }
    
    function getContractValue() public view returns(uint) {
        return contractValue;
    }
    
    function getBalance() public view returns(uint) {
        return this.balance;
    }
    
}