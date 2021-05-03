import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";

const contactsPath = path.join("db/contacts.json");

// TODO: задокументировать каждую функцию
export async function listContacts() {
  try {
    const resp = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(resp);
    console.table(contacts);
  } catch (error) {
    console.log(error.message);
  }
}

export async function getContactById(contactId) {
  try {
    const resp = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(resp);
    const filtereddContact = contacts.filter(({ id }) => id === contactId);
    console.table(filtereddContact);
  } catch (error) {
    console.log(error.message);
  }
}

export async function removeContact(contactId) {
  try {
    const resp = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(resp);
    const removedContact = contacts.filter(({ id }) => id !== contactId);
    console.table(removedContact);
    await fs.writeFile(contactsPath, JSON.stringify(removedContact, null, 2));
    console.log("Contact was removed");
    return removedContact;
  } catch (error) {
    console.log(error.message);
  }
}

export async function addContact(name, email, phone) {
  try {
    const resp = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(resp);
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    const updatedContactList = [...contacts, newContact];
    await fs.writeFile(
      contactsPath,
      JSON.stringify(updatedContactList, null, 2)
    );
    console.log("Contact was add");
    return newContact;
  } catch (error) {
    console.log(error.message);
  }
}
