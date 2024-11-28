 
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;


///////////////////


module.exports = { session: process.env.SESSION_ID || 'Byte,,,H4sIAAAAAAAAA5VUW3OiSBj9L/2KM3JTxKpULQhBiRij4G1rHhposAW5dDcCpvzvW8Skkoed2SxPXUCfPn0u3yvIckzRE2rB+BUUBF8gQ92StQUCY6BXUYQI6IEQMgjGgJ/6A/+UO5MSE3ndDtK0KNvJ9iKbw+CwCjXRViJ6Fp1IMB/ArQeKyk9x8AfAUNasZDVtxLkdVUm82SRxHTypyjyv5lHT111uwgUagVsheAC3DhFigrPYLI7ojAhMn1C7hJh8j/7eOFr9o6I+H4LSPu85R+DMi8FfRdEvh5vSo3bfFR7dgmX89+hffG8bmtBBSV/NmlTknhebmFUOaeDuoMn7uBF05kNqHc07fYrjDIWzEGUMs/bbupeGR4wLqpNCf+aQU27ni4yWlWane2V2bLRZSktVqJG0i79HfEKpIQSFfxanZWY7zWNgry7HjetPV9Pp3tUa3c+DyaUthPor8SX5yEryf3SfOUmol7v90dsIOLwQzW8Wwdw9LU55sdTKg7V8nJ/sPHas2ffoVzHvvWRYdiqP1yNueq2HPBNZFnJGlja8eULN1utbnuN6n/Qhq8ifWMaF52ScXe1GrmzJxUy17RS6E79pV550ZoTAJ2O+yitvKmSWJwdXcXGSFqtn5ewTI/ET5DdKtSvoNAigy+0PtXmV4/jh7UYJamchGAu3HiAoxpQRyHCede9EUegBGF7WKCCIvckLOgbpi9BI4c6Dc7TQJOm42aS8N+IiY30d1s623MdhNEu9B9ADBckDRCkKp5iynLQOohTGiILx3796IEMNuxvXHScJPRBhQpmXVUWaw/DD1Y+PMAjyKmPrNgsm3QIRMOY/XyPGcBbTTscqgyQ44guaHCGjYBzBlKJbD4ToggPU4QHa4ow5c7LaWFDXoeDZTy6tO8rHPLv/EgzVoQAl4UekjqIfshCoP3yeH/3whQgGUEIyLyqgB/B7Z7o9v7Vw1Zw3pxHnX650ESQirp7m1WVyal6k+zy6a48ICsGYkQr1gA+DpCrcPEHZH3ClhTWzH015kFZ9KsGIwy+RfYqGG6P+gnv3FIxfP+fUJA87vP3g8dEeuQbogfNbBHF3c3EgK4KqqIqoSGNR+ov+rDshYVH8zBDrcN9F73aEiEGc0q67TwYa2NQ0nyck9nPL0sxYm8Qa+DTpI+33NCnn7ZU/yKMJny6S0SqeKnahL/dZ/vx4sBvDnZLQpIhVsh4//AsIGAMkKYdQhVM0zfh8Wxekyer+Io6G0eJ6UaWa1oZ52h2QnK0Mexic5/TYXx5GM2Jvy8F5bXGPV9zHCeVX5aKuuHVksKHeVeMjLF8Ps0dNKuWKvBqddaZi2VmvZ2HqvpQ7U7RbCx/jTXNS1tZoxDcwIcTeb4YobT1hWQk7fSPBqZkIKkEH3O7n7XVoivPNqb738G0OpO/zF7815PU9WhFGb+Msg51F/2XO15Tzt94XjPcB+Zsk6WiQUtVCS43Z7mFp7nWuhS+uaA+N43YdvPDNUFrNp8SvtD243X71QJFCFuXkDMYAZiHJcQh6IIWUaZ9FdfEZUQbPBRgLiiSKQ3Uw4Hvg3GpFsWaQffQbaN1jNWtw+wcq3e7Y+wcAAA==
////////////////////////////////



    PREFIXE: process.env.PREFIX || ".",



///////////////////////////
    A_REACT : process.env.AUTO_REACTION || 'on',
    CHATBOT: process.env.CHAT_BOT || "off",
    OWNER_NAME: process.env.OWNER_NAME || "TALKDROVE",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "923072380380",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'BYTE-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Update ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
