const {cmd , commands} = require('../command')
const fg= require(`api-dylux`)
const yts = require(`yt-search`)
cmd({
    pattern: "song",
    desc: "Song downlod
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (q) retrun  reply("*🧑‍🔧Please give me a text or url that I want to search!🧑‍🔧*")
const search = await  yts(q)
const data =search .videos[0]:
const url = data.url

let desc =`🎶 *SHAGEE MD AUDIO DOWNLODER* 🎶  
|__________
|\_ ℹ️ 𝚃𝚒𝚝𝚕𝚎 : ${data.title}
|
|\_🗒️ Description : ${data.description}
|
|\_🕘 𝚃𝚒𝚖𝚎 : ${data.timestamp}
|
|\_📌 𝙰𝚐𝚘 :${data.ago}
|
|\_📉 𝚅𝚒𝚎𝚠𝚜 :${data.views}
|__________

*_DOWNLODING YOUR SONG..._*

> POWERED by DINETH Ofc🚀📩
> downlod by SHAGEE MD 
`
  await conn.sendMassge(from,{image:{url data.thumbnail},caption:desc},{quoted:mek}):

  // downlod audio 

let down = await fg.yta(url)
let downlodUrl = down.dl_url

// send audio massge
await conn.sendMassge(from,{audio:{url:downlodUrl},minetype:"audio/mpeg"},{quoted:mek})


}catch(e){
console.log(e)
 reply(`${e}`)
}
}}
