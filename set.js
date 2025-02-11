const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhvVXQ2RVlPUjk4YmNtdWtpQkgrU3Eyc09JRW9qSnV0SUtoNEpKZEswMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidElpajhTczB1WDVCT3FmZmpxSXBQUzM3UTlNd014K0dyMTRkdWpkUyttRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSytJbWdSSFZDUEp6S3d6dmJxTEttVkZjUXprT0RXSG1EbDRUbGxKTkdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUXY4eXZHTXovajgxSEZMWjFDMkFHbTZ6QnBHTmxucG5xNy80L1luSGpvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMM29wNlc0S2llZEQzWEhlSjVOcjI4YUpnWExlZXJQaGxuNzhoQ3lnM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGSXdRQzQ3WUpZT2hKWEFLU3Qvc3RCaG14U0RoNHU1aGdycDRaQjhSUU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VoTmlzUGVYOTNzUWRNOEdHZUV1Rko2Y05XclNsdkdDMW5qUGhDYXgzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDdtTEVKN2Z2eU9DdmJ2dDR3c2NTQUhFczJJSFlqUVdkbU13SjRGeThsbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRoM2w0UGd0Tnl0cDU0Q0FlRE5tamdEUkgwSFdiVVdFOXBObDNaV3d4RlB1S2JoQ2tiQXNBamJGaXRkdkVkWURZMmVmQm95OUpVd05VY00vZ2FCUmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA5LCJhZHZTZWNyZXRLZXkiOiIvQUhjL3lObzRNc2pqcmtlTjQ0SEN2TUptUUxqTE5OL203dm1hODZ3OUVvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjMXpLSkNwVVJ0bUs2Ty1OTWhNb1pnIiwicGhvbmVJZCI6IjRlNmRkYTQ0LTMwNzUtNDZjNC05NjU2LTFkYmY2OWEyODk4ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Mm5xQXpWSVZydEFIZnFoM0ZrZzZFZmd3NUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzYwUUxsRW5CQ0lHblJkK2RFdHBuZEpFK3V3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZESEQ1RVg5IiwibWUiOnsiaWQiOiIyNjM3NzgwNzE0MTk6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG56aTU4R0VNNnNxcjBHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidkNsNzdROU9BZW5iL0VPdnl5YzVjNzVMdzdDU0RuSDZqeDNwOUpBVGJWOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOHZ0MnNjU1N2Qk14eVpsbUNLRmIvM05NV2pBYkdIQUgvMkVxcWJVTExFUGZFV1NucHgwUm1Sd0RnWDBJbEY2VWJlRHpla2ZZTlJCeFU2YXZnTzJkRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkFvb0E5alpQS1BOdFJwVnRyRncxSFdVMFJtL0txR1NwNTVNelpDaWpQOE5LR0F0dVJxNndQY2hxOVhZRzhwRXJNUTNaWWNpdTVZQm52T05qR21WdWlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzc4MDcxNDE5OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYndwZSswUFRnSHAyL3hEcjhzbk9YTytTOE93a2c1eCtvOGQ2ZlNRRTIxZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczOTIzMjg1OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPZ2cifQ==| 'FLASH-MD-WA-BOT;;;=>',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "bleu.rainz",
    OWNER_NUMBER : process.env.OWNER_NUMBER || "0786313048", 
    A_REACT : process.env.AUTO_REACTION || 'off',     
    AUTO_READ_STATUS: process.env.AUTO_VIEW_STATUS || "on",
AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "off",
CHATBOT: process.env.CHAT_BOT || "on",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_SAVE_STATUS || 'off',
    BOT : process.env.BOT_NAME || 'FLASH-MD',
    //OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || '',
    MODE: process.env.BOT_MODE || "public",
    PM_PERMIT: process.env.PM_PERMIT || 'off',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    PRESENCE : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_MESSAGE || "on",
//    ADM : process.env.ANTI_DELETE_MESSAGE || 'off',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd" : "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
