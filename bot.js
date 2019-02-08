const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTQzMTk0NTg5ODU1NDgxODY3.Dz7sNw.EsM0zvrqKyFfOpengTFQYdobWPc'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message' , function(message){
    if(message.content == 'Test')
    {
        message.channel.sendMessage('Testing what?' + ' , ' + message.author);
    }
});
bot.on('ready' , function(){
    console.log('Ready');
})
clientInformation.login(process.env.BOT_TOKEN);

bot.on('guildMemberAdd', member => {
    console.log('that event fired')
    member.guild.channels.get('492391181553106944').send(`<:VMark:542425026624749621>${member} (${member.user.tag}) has joined the server.\nTotal Member Count: ${member.guild.memberCount} members!`);
});+ 

bot.on('guildMemberRemove', member => {
    console.log('that event fired')
    member.guild.channels.get('492391181553106944').send(`<:deny:542778303313084457>${member} (${member.user.tag}) has left the server\nTotal Member Count: ${member.guild.memberCount} members`);
});+ 

bot.on('message' , function(message){
    if(message.content == 'Hey bot')
    {
        message.channel.sendMessage('Hello There' + ' , ' + message.author);
    }
});
