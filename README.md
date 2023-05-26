# AU week4 project

The objective of this project is to emit the winner event of this contract:

<https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code>

I will use another contract for calling it because there is a require where the tx.origin (the EOA who originated the transaction) will not be equal to the msg.sender.

I use Interface method of Solidity. Also I will use javascript for depolying the contract using HardHat
