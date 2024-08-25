import { ethers } from "hardhat";

// Define a test suite for Sender and Receiver contracts.
describe("Sender and Receiver", function () {
    // Define a chain selector for the test scenario.
    const chainSelector = "16015286601757825753";
    // A fixture to deploy necessary contracts before each test.
    it("should measure gas consumption of ccipReceive and adjust gas limit", async function () {
        // Get signers, with the first one typically being the deployer.
        const [owner] = await ethers.getSigners();

        const Router = await ethers.getContractFactory("MockCCIPRouter");
        const Sender = await ethers.getContractFactory("Sender");
        const TransferUSDC = await ethers.getContractFactory("TransferUSDC");
        const Receiver = await ethers.getContractFactory("Receiver");
        const BurnMintERC677 = await ethers.getContractFactory("BurnMintERC677");

        // Instantiate the contracts.
        const router = await Router.deploy();
        const usdc = await BurnMintERC677.deploy(
            "USDC Token",
            "USDC",
            18,
            BigInt(1e27)
        );
        const link = await BurnMintERC677.deploy(
            "ChainLink Token",
            "LINK",
            18,
            BigInt(1e27)
        );
        const sender = await Sender.deploy(router, link);
        const receiver = await Receiver.deploy(router);
        const transferUSDC = await TransferUSDC.deploy(router, usdc, link);

        // Setup allowlists for chains and sender addresses for the test scenario.
        await sender.allowlistDestinationChain(chainSelector, true);
        await receiver.allowlistSourceChain(chainSelector, true);
        await receiver.allowlistSender(sender, true);
        await transferUSDC.allowlistDestinationChain(16015286601757825753, true);

        // Test scenario to send a CCIP message from sender to receiver and assess gas usage.
        // Deploy contracts and load their instances.

        // Define parameters for the tests.
        const gasUsageReport = []; // To store reports of gas used for each test.

        //send 3 LINK
        await sender.sendMessagePayLINK(chainSelector, transferUSDC, 3, 400000);

        // Loop through each test parameter to send messages and record gas usage.
        // Send the message with an initial gas limit.
        await transferUSDC.transferUsdc(16015286601757825753, receiver, 1000000, 500000);

        // Retrieve gas used from the last message executed by querying the router's events.
        const mockRouterEvents = await router.queryFilter(
            router.filters.MsgExecuted
        );
        const mockRouterEvent = mockRouterEvents[mockRouterEvents.length - 1]; // check last event
        const gasUsed = mockRouterEvent.args.gasUsed;

        // Calculate the new gas limit by increasing the gas used by 10%
        const newGasLimit = Math.ceil(Number(gasUsed) * 1.1);

        // Push the report of iterations, gas used, and new gas limit to the array.
        gasUsageReport.push({
            gasUsed: gasUsed.toString(),
            newGasLimit
        });

        // Now send the message again with the adjusted gas limit
        await transferUSDC.transferUsdc(16015286601757825753, receiver, 1000000, newGasLimit);


        // Log the final report of gas usage for each iteration.
        console.log("Final Gas Usage Report:");
        gasUsageReport.forEach((report) => {
            console.log(
                "Gas used: %d - New Gas Limit: %d",
                report.gasUsed,
                report.newGasLimit
            );
        });
    });
});
