pragma solidity ^0.4.17;

contract OnlineJudge {
    address public manager;
    address public owner ;
    string public managerKey;
    uint public contractValue;
    mapping( address => string) participantsIPFS;
    mapping(address => uint) participantsGasValue;
    address[] public participants;
    
    function onlineJudge(string description, string publicKey) public payable {
        owner = 0xAe70D0F5daC31074782E8CE65bf92eD3DfF6D25E;
        manager = msg.sender;
        managerKey = publicKey;
        contractValue = msg.value;
    }
    
    function getManagerPublicKey() public view returns(string) {
        return managerKey;
    }
    
    function getManagerAddress() public view returns(address) {
        return manager;
    }
    
    function submitSolutionDetails(address particpant, uint gas,string hash) public {
        require(msg.sender == owner);
        participantsIPFS[msg.sender] = hash;
        participantsGasValue[msg.sender] = gas;
    }
    
    function rewardWinner(address participant) public {
        require(msg.sender == manager);
        participant.transfer(contractValue);
    }
    
    function getParticipant(uint index) public view returns(address) {
        return participants[index];
    }
    
}