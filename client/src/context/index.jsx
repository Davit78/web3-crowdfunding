import React, { useContext, createContext } from "react";
import {
	useAddress,
	useContract,
	useMetamask,
	useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
	const { contract } = useContract(
		"0x42802497CAa751ea23AeE48Ad66290544BcE38D5"
	);

	const { mutateAsync: createCampaign } = useContractWrite(
		contract,
		"createCampaign"
	);

	const address = useAddress();
	const connect = useMetamask();

	const publishCampaign = async (form) => {
		try {
			const data = await createCampaign({
				args: [
					address, // owner
					form.title, // title
					form.description, // description
					form.target,
					new Date(form.deadline).getTime(), // deadline,
					form.image,
				],
			});

			console.log("contract call success", data);
		} catch (error) {
			console.log("contract call failure", error);
		}
	};

	return (
		<StateContext.Provider
			value={{ address, contract, connect, createCampaign: publishCampaign }}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
