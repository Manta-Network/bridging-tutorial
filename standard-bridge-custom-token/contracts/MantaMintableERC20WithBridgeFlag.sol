// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import {OptimismMintableERC20} from "@eth-optimism/contracts-bedrock/src/universal/OptimismMintableERC20.sol";

contract MantaMintableERC20WithBridgeFlag is OptimismMintableERC20 {
    address public admin;
    bool public bridgePaused;

    modifier onlyAdmin() {
        require(admin == msg.sender, "MantaMintableERC20WithBridgeFlag: Only Admin");
        _;
    }

    constructor(
        address _bridge,
        address _remoteToken,
        string memory _name,
        string memory _symbol,
        uint8 _decimals
    ) OptimismMintableERC20(_bridge, _remoteToken, _name, _symbol, _decimals) {
        admin = msg.sender;
        bridgePaused=true;
    }

    function setAdmin(address _newAdmin) external onlyAdmin {
        require(
            _newAdmin != address(0),
            "MantaMintableERC20WithBridgeFlag: invalid new admin"
        );
        admin = _newAdmin;
    }

    function pause() external onlyAdmin {
        bridgePaused = true;
    }

    function unPause() external onlyAdmin {
        bridgePaused = false;
    }

    function burn(address _from, uint256 _amount) external override onlyBridge {
        require(!bridgePaused, "MantaMintableERC20WithBridgeFlag: bridge paused");

        _burn(_from, _amount);
        emit Burn(_from, _amount);
    }
}
