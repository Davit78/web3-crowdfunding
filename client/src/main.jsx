import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
	<ThirdwebProvider desiredChainId={ChainId.Mumbai}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThirdwebProvider>
);
