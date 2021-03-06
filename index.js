import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv;
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      getContactById(id);
      break;

    case "add":
      addContact(name, email, phone);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       console.log("list");
//       break;
//     case "get":
//       console.log("id", id);
//       break;
//     case "add":
//       console.log("name email phone", name, email, phone);
//       break;
//     case "remove":
//       console.log("id", id);
//       break;
//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }
// invokeAction(argv);
