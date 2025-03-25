import Web3 from 'web3'; 
import { AbiItem } from 'web3-utils'; 

// Ethereum provider URL, replace with the actual URL of your node or RPC endpoint
const providerUrl = 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID';
const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));

// Define the smart contract ABI (Application Binary Interface)
// The ABI should match the smart contract deployed on Ethereum, replace with your contract's ABI.
const contractAbi: AbiItem[] = [
    {
        "constant": true,
        "inputs": [
            { "name": "address", "type": "address" }
        ],
        "name": "getBalance",
        "outputs": [
            { "name": "", "type": "uint256" }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            { "name": "amount", "type": "uint256" }
        ],
        "name": "trade",
        "outputs": [
            { "name": "", "type": "bool" }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    }
];

// Initialize the contract instance
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Function to get balance of a specific address in the contract
const getBalance = async (address: string): Promise<number> => {
    try {
        const balance = await contract.methods.getBalance(address).call();
        console.log(`Balance for address ${address}: ${balance}`);
        return balance;
    } catch (error) {
        console.error('Error fetching balance:', error);
        throw error;
    }
};

// Function to initiate a trade transaction
const initiateTrade = async (amount: number): Promise<void> => {
    try {
        // Construct the transaction data
        const data = contract.methods.trade(amount).encodeABI();

        // Prepare the transaction object
        const transactionObject = {
            to: contractAddress,
            data: data,
            gas: 2000000,  // Gas limit for the transaction
            gasPrice: await web3.eth.getGasPrice(),  // Dynamic gas price
            from: senderAddress,
        };

        // Sign the transaction with the private key
        const signedTransaction = await web3.eth.accounts.signTransaction(transactionObject, privateKey);

        // Send the signed transaction
        const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
        console.log('Transaction successful, receipt:', receipt);
    } catch (error) {
        console.error('Error during trade:', error);
    }
};

// Function to check if the sender's balance is sufficient before initiating a trade
const checkAndTrade = async (amount: number): Promise<void> => {
    try {
        const balance = await getBalance(senderAddress);

        // Check if the sender has enough balance for the trade
        if (balance >= amount) {
            console.log(`Balance is sufficient. Proceeding with trade of amount: ${amount}`);
            await initiateTrade(amount);
        } else {
            console.log('Insufficient balance for the trade');
        }
    } catch (error) {
        console.error('Error checking balance:', error);
    }
};

// Main function to simulate a trade scenario
const main = async () => {
    const amountToTrade = 1000; // Example amount to trade, replace as necessary
    console.log(`Starting trade process for amount: ${amountToTrade}`);
    await checkAndTrade(amountToTrade);
};

// Call the main function to start the process
main().catch((error) => {
    console.error('Error in main function:', error);
});
