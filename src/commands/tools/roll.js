const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js')
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Effectue un roll.')
        .addStringOption(option =>
            option.setName("code")
                .setDescription("Super Secret Setting")),
        
    async execute(interaction, client){
        const code = interaction.options.getString('code');
        let roll = 0;
        switch (code) {
            case "alv":
                roll = random(70,100)
                break;
            
            case "ded":
                roll = random(0,20)
                break;

            case "myn":
                roll = random(40,60)
                break;

            default:
                roll = Math.floor(Math.random() * 101);
                break;
        }
        embed = new EmbedBuilder()
            .setAuthor({
                name: client.user.tag,
                iconURL: client.user.displayAvatarURL()
            })
            .setColor('Navy')
            .setTitle('Utilitaire de roll')
            .setDescription(`Roll effectué : ${roll}`)
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            })
            .setThumbnail("https://findicons.com/files/icons/2711/free_icons_for_windows8_metro/512/dice.png")
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            });

            await interaction.reply({
                embeds: [embed]
            })


    }
}