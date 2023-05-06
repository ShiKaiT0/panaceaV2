const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('scan')
        .setDescription('Effectuer un scan du patient.'),
    async execute(interaction, client){
        embed = new EmbedBuilder()
            .setAuthor({
                name: "Utilitaire d'aide Médical",
                iconURL: "https://static.wikia.nocookie.net/c__/images/5/5f/MedicalCross.png/revision/latest?cb=20140619000406&path-prefix=clone"
            })
            .setTitle("Initiation d'une procédure de scan")
            .setDescription("Lancement de l'utilitaire d'aide...terminé.")
            .setFields([
                {
                    name:"En attente",
                    value: "Merci de choisir quel type de scan vous souhaitez utiliser.",
                    inline: true,
                },
            ])
            .setColor(0xff0000)
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            })
        
        
        const buttonOne = new ButtonBuilder()
            .setCustomId('totScanButton')
            .setEmoji("<:scantotal:1102233338548338778>")
            .setLabel("Scan total ?")
            .setStyle(ButtonStyle.Success);

        const buttonTwo = new ButtonBuilder()
            .setCustomId('blastScanButton')
            .setEmoji("<:scanblaster:1102233336140791938>")
            .setLabel("Scan Blaster ?")
            .setStyle(ButtonStyle.Danger);    
        
        const buttonThree = new ButtonBuilder()
            .setCustomId('osScanButton')
            .setEmoji("<:scanos:1102233342419685486>")
            .setLabel("Scan Interne ?")
            .setStyle(ButtonStyle.Danger);
            
        

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(buttonOne),new ActionRowBuilder().addComponents(buttonTwo),new ActionRowBuilder().addComponents(buttonThree)],
            embeds: [embed],
        });

    }
}