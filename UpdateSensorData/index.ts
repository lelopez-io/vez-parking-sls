import { AzureFunction, Context } from "@azure/functions"

import { CosmosDB } from "../SharedCode/CosmosDB";

const IoTHubTrigger: AzureFunction = async function (context: Context, IoTHubMessages: any[]): Promise<void> {
    context.log(`Eventhub trigger function called for message array: ${IoTHubMessages}`);
    
    IoTHubMessages.forEach(message => {
        context.log(`Processed message: ${message}`);
        
        // TODO: Read the actual values of the message and create another object

        // eventData will be a structure Typescript calls them interfaces
        // messages will mostly likely be an array of eventData
        // this interface file will be in SharedCode since it also get's checked
        // on the iot device

    });

    // TODO: once you can read the eventData we need to save that to the DB
    // 

    let databaseHandle = new CosmosDB();
    
    // these are only used once can remove them later
    await databaseHandle.CreateDatabase("vez");
    await databaseHandle.CreateCollection("test-parkinglot")
    // above two will be removed after

    // Once a database exists we can connect to it and start adding/updating
    // the parking spots
    await databaseHandle.SetConnectionTo("vez", "test-parkinglot");


};

export default IoTHubTrigger;
