import { Client, isFullBlock } from "@notionhq/client";
import { BlockObjectResponse, GetBlockResponse, PartialBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: "secret_XH9K9VrCuWFmzVBRtInUoc1Eokg66McnSHyYUxo6FmF"
});
/*
(async () => {
  //const blockId = '76bc09ae-e513-4d68-864a-3b5a92bc29a7'; // page
  const blockId = 'f23b516a-6c19-4760-999f-1250005edc8d'; //table
  //const blockId = 'bc89ff88-3765-48be-b30b-39c04561958a'; //table_row
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  console.log(response);
})();*/

(async () => {
  // const blockId = 'f23b516a-6c19-4760-999f-1250005edc8d'; // table
  const blockId = 'bc89ff88-3765-48be-b30b-39c04561958a'; //table_row

  await notion.blocks.retrieve({
    block_id: blockId}).then((result: GetBlockResponse) => {
      
      if (isTableRow(result)) {
        console.log(result.type);
      }

      if (isFullBlock(result, "table_row")) {
        console.log(result.type);
        //console.log(result.table_row);
      }

      console.log(result);
      return result;
    })
    
})();





/*const { Client } = require("@notionhq/client");
const dotenv = require("dotenv");

const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)*/

// Initializing a client
//console.log(process.env.NOTION_TOKEN);
//console.log(process.env);
/*const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const listUsersResponse = notion.users.list({});

console.log(listUsersResponse);*/


function isTableRow <T extends Record<string, unknown>>(obj: T): obj is T & { type: 'table_row' } {
  return 'type' in obj && obj.type === 'table_row';
}