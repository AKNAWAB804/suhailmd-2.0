const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_02_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDgwLFxuICAgICAgICA3OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzLFxuICAgICAgICAzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODksXG4gICAgICAgIDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDY2LFxuICAgICAgICAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY0LFxuICAgICAgICAzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgwLFxuICAgICAgICA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4bGpSWkdZLzIxMnZVb2lPL3FvVHMzOWVEbFVvbDJBVG9WMUM3VDFOeEk4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE0NDM4MDkxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0M2NDIyMEZEQzUxOTdGM0RFQTNGNEQ1OEQ4QTMzQzBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMzg0MTMwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTQ0MzgwOTE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBRTg2RUM4MDI3OTQyN0YwMzk1RUU0QUQyQTAyRDJCRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEzODQxMzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNDQzODA5MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYzMUE1NzgxOTFERDI3OTc0MDEzMDk0NUJCMDA0NEU0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTM4NDEzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHU056bVRrQVQ2eUxpOWxqYzdORldRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ3NTkxZTlhLTNhNWItNGQyOC1hNjU4LTlmMWMyNmVkZWRiY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMTQzLFxuICAgICAgMTA1LFxuICAgICAgMTQ0LFxuICAgICAgMjQwLFxuICAgICAgMTM0LFxuICAgICAgMTczLFxuICAgICAgMTczLFxuICAgICAgMjM3LFxuICAgICAgMjUyLFxuICAgICAgNDcsXG4gICAgICAxMjQsXG4gICAgICA5NyxcbiAgICAgIDIwNSxcbiAgICAgIDgwLFxuICAgICAgOTcsXG4gICAgICAxMjcsXG4gICAgICAxNzcsXG4gICAgICAyMDEsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMTEsXG4gICAgICAxODUsXG4gICAgICAyMSxcbiAgICAgIDI1NSxcbiAgICAgIDE5NyxcbiAgICAgIDE2MCxcbiAgICAgIDE0MSxcbiAgICAgIDE4MyxcbiAgICAgIDEsXG4gICAgICAxNixcbiAgICAgIDE0NCxcbiAgICAgIDY1LFxuICAgICAgMTYyLFxuICAgICAgMTMsXG4gICAgICAyMTEsXG4gICAgICAxODQsXG4gICAgICA1NyxcbiAgICAgIDEyLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlZSSEZLVlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE0NDM4MDkxNDo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAxMDQ3OTg5NTU1Mjc3OjU4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tyMjY4c0JFTDJteTdrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibURGOTl6TWxOZ05PUDljWGlCM21MVDl2ZVBaNGNQczZDN0s4ZiszeW5uOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZNkFqSGZML0oyU1FKSE9BQjlkTGhUWHdkWk5pOXZjQlIxSnJFRFhCTGVQb2cwWURMQlVEWlhZaWV1dUg0aXZWaFJCWHJUSEd2bmV1cFhTQnNINW9EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxYnovWEZ0bWJxZEkvcFlPQzZLNDZpTmJmODlxSWkvZU9hU0gxaDJBa20vdFlmeGZnd0dGWXVETy9IZVFWeU9TRC85dWUvUGxpZStzYXd0SG9MQTBpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNDQzODA5MTQ6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMzg0MTI4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
