# CCIP Homework 3

+ Measure Gas Consumption: Measure the gas used for each iteration
+ Increase by 10%: After measuring add 10% of the values measured before
+ Adjust and validate transaction with the new gas Limit value

| Number of iterations | Gas used during local testing | Gas limit on testnet | Gas used on testnet |
| -------------------- | ----------------------------- | -------------------- | ------------------- |
| 0                    | 5168                          | 5685                 | 5031                |
| 50                   | 14718                         | 16190                | 14581               |
| 99                   | 24077                         | 26485                | 23940               |

**Remark**: Compare this with the results from the [Foundry guide](../foundry/README.md).
