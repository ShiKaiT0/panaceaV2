const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('synthethiser')
        .setDescription('Démarrer la synthèse du vaccin.')
        .addIntegerOption(option => 
            option.setName("roll")
                .setDescription("Roll obtenu après le /bioscan.")
                .setRequired(true)),
    async execute(interaction, client){
        embed = new EmbedBuilder()
            .setAuthor({
                name:"Matériel Biotechnique Républicain",
                iconURL:"https://cdn-icons-png.flaticon.com/512/4974/4974172.png"
            })
            .setTitle("Pannel de création de Vaccin")
            .setColor("DarkNavy")
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            })
            .setDescription(`> *En attente de confirmation du début de la manoeuvre...*`)
            .setThumbnail("https://cdn-icons-png.flaticon.com/512/2201/2201544.png");

            const startButton = new ButtonBuilder()
            .setCustomId('startButton')
            .setEmoji("<:EmojiV:1002251100205887520>")
            .setLabel("Débuter le scan")
            .setStyle(ButtonStyle.Success);

        global.synthGotRoll = interaction.options.getInteger("roll")

        interaction.reply({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(startButton)]
        })

    }
}