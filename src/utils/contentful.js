import { createClient } from 'contentful';
const client = createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_TOKEN
});

const searchBLogs = (query) => {};
