const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6281368176386','6283802603905'] //ur owner number
global.ownername = "owner sayang" //ur owner name
global.developer = "owner sayang" //nama lu
global.ytname = "YT: BEDAH FILM" //ur yt chanel name
global.socialm = "https://instagram.com/jarotr_" //ur github or insta name
global.sgc = "https://chat.whatsapp.com/IqZke0cAG6G3iVsnB9myfL"
global.location = "sumut" //ur location

//bot bomdy 
global.owner = ['6281368176386','6283802603905'] //ur number
global.ownernomer = "6281368176386,"6283802603905" //ur number
global.ownertag = '6281368176386','6283802603905' //ur tag number
global.premium = ['6281368176386','6283802603905'] //ur premium number
global.botname = 'pemburu janda' //ur bot name
global.ownername = "owner sayang"
global.linkz = "https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ" //your theme url which will be displayed on whatsapp
global.dana = "6281368176386"
global.pulsa = "6281368176386"
global.websitex = "https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ" //ur website to be displayed
global.websitex1 = "https://youtube.com/shorts/N6cPd_V-IME?feature=share"
global.botscript = 'https://github.com/Doramisi1' //script link
global.themeemoji = "🦄" //ur theme emoji
global.packname = "dibuat oleh" //ur sticker watermark packname
global.author = "owner sayang" //ur sticker watermark author
global.wm = "jangan di maling" //ur watermark

// Other
global.sessionName = 'Session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done✓',
    admin: 'hanya buat admin grup!!',
    botAdmin: 'bot harus jadi admin dulu',
    premime: 'khusus premium!',
    owner: 'khusus Owner!',
    group: 'hanya bisa di grup',
    private: 'hanya bisa di chat pribadi!',
    bot: '𝘉𝘰𝘵 𝘖𝘯𝘭𝘺!',
    wait: 'sabar ya kak....',    linkm: 'link nya mana?',
    endLimit: 'limit habis,akan direset saat 12 malam',
    nsfw: 'nsfw tidak aktif,minta owner untuk mengaktifkan',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thum = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Media/theme/jarot.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Media/theme/jarot.jpg") //ur error pic
global.thumb = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//module api
module.exports = {
api:{
     removebg: ['zNKnayDFH1nugtA81fkPMzXn','5CyygkXiT5vrki2Z6ZsUCE8u','Mz4yJkagrCLotdgsr4Ms39ud','vEeWnzQws9kJoYNMYKhbT1s6','2arViktax9HUdMqy9U7wFLKT','sfZpRHNwVPAG57nZVHijYZ9v','oqVVyQ2rBDYdUrxThg4GdjhA','rGp4axHpQ56Y5tRLX7J789QC','NfPx6NgTkpVYLnKUZHCAM1P3'],//https://remove.bg/api
     unscreen: ['N6J4Bjbyh2V4eqhAPTWYtFER','fcKJkPstNXp4pjntYt3bR38E'],
     upscaling: '1255173112',
     imgsuper: ['198f69d4b2msh0021bb0690669a6p1f3a80jsn9cab1ae485cc','85731a45bbmshf7bd86f09b300c2p14e544jsncd18a8d5dba2'],//https://super-image1.p.rapidapi.com/
     speechtotext: ['897beebb3ac74ceeaa6f8d0903b2297a']
   }
   }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
