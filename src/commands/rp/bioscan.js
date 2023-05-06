const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Embed} = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('bioscan')
        .setDescription('Scanner un échantillon donné')
        .addStringOption(option =>
            option.setName("nom")
                .setDescription("Nom de l'échantillon étudié")
                .setMinLength(2)
                .setRequired(true)),
    async execute(interaction, client){
        embed = new EmbedBuilder()
            .setAuthor({
                name:"Analyseur d'échantillon",
                iconURL: "https://cdn-icons-png.flaticon.com/512/4974/4974172.png"
            })
            .setTitle("Pannel de scan Biologiste")
            .setColor('Green')
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            })
            .setDescription(`> *Une requête de scan à été effectuée et est actuellement en cours de traitement. Merci de bien choisir le temps nécessaire à l'analyse. A noter qu'un temps plus haut augmentera vos chances de réussite.*\nEn cours d'analyse de : ${interaction.options.getString('nom')}`)
            .setThumbnail("https://cdn-icons-png.flaticon.com/512/2201/2201544.png");

            const buttonOne = new ButtonBuilder()
            .setCustomId('oneMinBut')
            .setEmoji("<:temps:1102589223053312051>")
            .setLabel("Scan d'une minute.")
            .setStyle(ButtonStyle.Primary);

            const buttonTwo = new ButtonBuilder()
            .setCustomId('fiveMinBut')
            .setEmoji("<:temps:1102589223053312051>")
            .setLabel("Scan de cinq minutes.")
            .setStyle(ButtonStyle.Secondary);

            const buttonThree = new ButtonBuilder()
            .setCustomId('tenMinBut')
            .setEmoji("<:temps:1102589223053312051>")
            .setLabel("Scan de dix minutes.")
            .setStyle(ButtonStyle.Secondary);

            const buttonFour = new ButtonBuilder()
            .setCustomId('fifteenMinBut')
            .setEmoji("<:temps:1102589223053312051>")
            .setLabel("Scan de quinze minutes.")
            .setStyle(ButtonStyle.Secondary);

            msg = await interaction.reply({
                components: [new ActionRowBuilder().addComponents(buttonOne),new ActionRowBuilder().addComponents(buttonTwo),new ActionRowBuilder().addComponents(buttonThree),new ActionRowBuilder().addComponents(buttonFour)],
                embeds: [embed],
            });

        }




}