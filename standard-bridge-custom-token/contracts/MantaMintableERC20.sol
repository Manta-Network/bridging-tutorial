// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import {OptimismMintableERC20} from "@eth-optimism/contracts-bedrock/src/universal/OptimismMintableERC20.sol";

contract MantaMintableERC20 is OptimismMintableERC20 {
    constructor(
        address _bridge,
        address _remoteToken,
        string memory _name,
        string memory _symbol,
        uint8 _decimals
    ) OptimismMintableERC20(_bridge, _remoteToken, _name, _symbol, _decimals) {}
}
