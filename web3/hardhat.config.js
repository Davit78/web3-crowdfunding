require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: {
		version: "0.8.17",
		defaultNetwork: "polygon_mumbai",
		networks: {
			hardhat: {},
			polygon_mumbai: {
				url: "https://rpc.ankr.com/polygon_mumbai",
				accounts: [process.env.PRIVATE_KEY],
			},
		},
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
