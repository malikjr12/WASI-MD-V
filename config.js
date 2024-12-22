//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0l6WWJiWHY2T0UwU2o4L3hPZkQySmcrbTIxWGlONjVCeE9Bd2ZIZ2ttND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0NxNFo2OGJIRHQ5U0ZMbzh0amJ3YXJ0LzlJK2xxS1JqeFV0SjVXTmRXWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTT3pzR3FoeEdzUWl3NEFBWlFDNm1lRlU1b3NpWUtBYlhNMVJuVXRROWxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZ1hWdTdrYUFEVzU3MVA1UTFwNmNKakE2YXhhc2NRM3ZrdzRvRElGYkdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdDWnZ6RldPRXllLzluOGRrdkhtVXR2UmVLVWx0R1R1OTVXSWM4ZG13VTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl3d3RGNzI2dkNzdlk0a1ZweTlxQUZxa2N3dmFOU0dXOWlYM25RbDVHV0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUlERXEwUE0vdzMxSVNVZGtZY3ArZ09XcnRMMG5FU1RBVXp5OWdDWUUwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieG9Hd1lHai82OUF0YWNLQ3hKZS9mNHZkby9NUlFiQ1o3Vy84U05lVnNBbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBkWDBiTVF0UlFGOTQrVm4yQ2RPSVQ1aUZQakFYRzl6SjhtRXYySmlTanFJcDIrYUllaDBTT2hqVkRXWDlVYmJma1M4bnRQYVFWSkJxZTl4T2k0SWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6IjNYVGM4Snp6Mm8rTFdkcmZyZFlpbVdJOVhPNzVySDNTN3hIV2hEV2dpN1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjc1Mzc0Mjg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg3NEI1NDZCNUM1NkJEMkEwMDQ4NUEwMjNGMTU1NjY0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzQ4MDM1ODh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI3NTM3NDI4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDNzQ2MEY5MzUyNkMzNDFCODJENzFFQjcwMjIzNDczRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM0ODAzNTg4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyNzUzNzQyODVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTkxMTgxMTRBNTc0MUM5NUZFN0M0OEQxMzQwNzk2M0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNDgwMzU5MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjc1Mzc0Mjg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgxOTBGQzhDRURCNDUyMzhCRTFGQjU0MEVDOEU3N0Y5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzQ4MDM1OTF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBCdkl1TmE2UWxPb0pBdlNESl96ekEiLCJwaG9uZUlkIjoiYzFhZmNlYTktMzMzMy00MmEyLWFmZmUtMTEyYzE2NTY2NzliIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFSQU44dzk5UGMyTkhyVHRHME5USmFReEtHYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJibEZ0eTAzcUtOVC9LNSt4eE1UZm1SN3M0eDA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOEEyNjhTNUQiLCJtZSI6eyJpZCI6IjkyMzI3NTM3NDI4NTo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImFzYWRhbHRhZjIxNCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnFqcWNzR0VQV0FuTHNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaXJCSmZwenBWNFN3NG1vREFzaXdSYXVhV2Rnby96aHQxQ2ZBck9oQXhYUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibWNBa2tiNlNKczBaQ0VYNUtqSHhhemhyUWdNL2hodmUza1owMXdPc3lWSU4zRVM3RDFnLzRONzhVTUlJdjdtOXlnSjJNdmFlRmNPUlc4N25uUlNqQlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImVBNXpZYTVPMklmMHZ6Rjh2MmhrUmc1Z3Z5aE12dHNoQnBSQWQxWnNXNnBtYmRZWmY5bmdhRjA4QXNXSXA2bWlNOGZ2MUQ3M0lHZWNKK1lQd2dVRGhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjc1Mzc0Mjg1OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXF3U1g2YzZWZUVzT0pxQXdMSXNFV3JtbG5ZS1A4NGJkUW53S3pvUU1WMCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDgwMzU4NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMVXUifQ=";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
