// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

interface IContract {
    function attempt() external;
}

contract Caller {
    address addr;

    constructor(address _addr) {
        addr = _addr;
    }

    function callContract() public {
        IContract(addr).attempt();
    }
}
