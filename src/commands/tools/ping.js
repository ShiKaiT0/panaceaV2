const { SlashCommandBuilder } = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Renvoie le ping du bot.'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
        });
        
        const newMessage = `Latence d'API:  ${client.ws.ping}\nPing Client : ${message.createdTimestamp - interaction.createdTimestamp}`
        await interaction.editReply({
            content : newMessage
        });
    }
}