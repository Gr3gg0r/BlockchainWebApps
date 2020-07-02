$(function(){

    var userABI = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_fname",
                    "type": "string"
                },
                {
                    "name": "_age",
                    "type": "uint256"
                }
            ],
            "name": "setUser",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getUser",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];

    var userAddress ='0xb5bAdE0520be5E2745009AEcCb5F82FcCb083bD7'

if(typeof web3 !== 'undefined'){
    web3 = new Web3(web3.currentProvider);
}else{
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var UserContract = new web3.eth.Contract(userABI,userAddress);

console.log(UserContract);

var userFunction = UserContract.methods;

userFunction.getUser().call(function(error,result) {
    if(!error){
        $('#instructor').html(result[0] +  '( ' + result[1] + ' Years old )');
    }
});

$('#button').click(function(){

    userFunction.setUser($('#name').val(),$('#age').val()).send({from:'0x1B9f79Ef93CBaBf351f938534220BFCa5905751A'})

});



});