const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_28_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgODksXG4gICAgICAgIDY5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDk4LFxuICAgICAgICA1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA3LFxuICAgICAgICA1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk3LFxuICAgICAgICA5NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4ZTVwN2orNVFZdkRycVBwMnJhbk1UaHhlajFlaG12SmZSNVlOQWh0bDlZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNY2JtVngxTFFkQzVMdXMxVFpNeDBnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMzMDg3Y2E2LWRjYWUtNDk3Ny04YmM5LWU1ZmY1ZTdkMzk2YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAxODIsXG4gICAgICAyMjEsXG4gICAgICAyMzEsXG4gICAgICAxNTMsXG4gICAgICAxMCxcbiAgICAgIDQzLFxuICAgICAgMTEwLFxuICAgICAgMTE2LFxuICAgICAgMTQ2LFxuICAgICAgODQsXG4gICAgICAyNDQsXG4gICAgICAxNjEsXG4gICAgICAxOTUsXG4gICAgICA1MyxcbiAgICAgIDIzOCxcbiAgICAgIDE1MixcbiAgICAgIDExNixcbiAgICAgIDIyNixcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICAzNyxcbiAgICAgIDQ5LFxuICAgICAgOTcsXG4gICAgICA3NyxcbiAgICAgIDUwLFxuICAgICAgMjAyLFxuICAgICAgMTY5LFxuICAgICAgNDgsXG4gICAgICAxNjEsXG4gICAgICAyMzcsXG4gICAgICA1MCxcbiAgICAgIDE1NCxcbiAgICAgIDEwMyxcbiAgICAgIDI0LFxuICAgICAgNzAsXG4gICAgICAxMjIsXG4gICAgICA1OSxcbiAgICAgIDE5OCxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWRkVIVzZTUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDA1NDUyNjU4OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1Njc1Mzk5OTg0NzUzNDo2M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYktpdk1CRUxYcmxMUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdic2JHdWJLeE9FZE5HZjJ4RGNiNGh6Tkhlemk3MU9Vek9UbUVHNFFNRG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT3QvUHFLdXRwLzB4dDdVS3daNkJ0cWJUQUZ0MU80YmNKSE1VeU9mb1oyeXMrUDBRcmR5ZXFjWVV4Zndhb3pxUHdIaXN5SElsSzZpM1FobW9Gd3pvQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZkNSN1g1d3hqOUFNSzZHNDNZRHdSanBMdHFkVmNCdnZoZG1FdUZRUlpnMktURG8wMS80TDYrL1o3T2VNZFhzRTlKdk1MWG11RDBLWDVlOGowYzVnamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDA1NDUyNjU4OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDAwNjA3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUkxOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTE5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRHJNZFJ2ekRhM0F0cGtLVEMwV095NDlyblZTUnhtbmdtSjNiRkFFb082VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MDk3ODEzMTcsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsN119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
