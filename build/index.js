"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@notionhq/client");
const notion = new client_1.Client({
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    // const blockId = 'f23b516a-6c19-4760-999f-1250005edc8d'; // table
    const blockId = 'bc89ff88-3765-48be-b30b-39c04561958a'; //table_row
    yield notion.blocks.retrieve({
        block_id: blockId
    }).then((result) => {
        if (isTableRow(result)) {
            console.log(result.type);
        }
        console.log(result);
        return result;
    });
}))();
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
function isTableRow(obj) {
    return 'type' in obj && obj.type === 'table_row';
}
