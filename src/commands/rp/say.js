const { SlashCommandBuilder, EmbedBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
        .addStringOption(option=>
            option.setName("text")
                .setDescription("Le texte qui sera utilisé.")
                .setRequired(true)
                .setMaxLength(4096)) // Ici, c'est pour la DESCRIPTION.
        .setName('say')
        .setDescription('Fait parler le bot.'),

        
    async execute(interaction, client){
        embed = new EmbedBuilder()
            .setAuthor({
                name: client.user.tag,
                iconURL: client.user.displayAvatarURL()
            })
            .setColor('DarkGold')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Closed_Book_Icon.svg/1200px-Closed_Book_Icon.svg.png')
            .setTitle('Création de votre message en cours...')
            .setDescription('> *Merci de bien vouloir renseigner ci-dessous le type de message que vous voulez envoyer.*')
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            })

            const menu = new StringSelectMenuBuilder()
                .setCustomId('say-menu')
                .setPlaceholder('Sélectionnez type du message')
                .addOptions(
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Narration')
                        .setEmoji("<:narration:1102530243526398033>")
                        .setDescription("Message narration d'action")
                        .setValue("msgNara"),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Message Système')
                        .setEmoji('<:systeme:1102532220834545684>')
                        .setDescription("Message système de l'IA")
                        .setValue('msgSysteme'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Message Administratif')
                        .setEmoji('<:admin:1102533276205318205>')
                        .setDescription("Message administratif du corps médical")
                        .setValue('msgAdmin'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Message Simple')
                        .setEmoji('<:Emojislash:1002251071651065966>')   
                        .setDescription('Message sans embed, juste le texte.')
                        .setValue('msgEmpty'),                     
                )

            const row = new ActionRowBuilder()
                    .addComponents(menu);

            global.sayText = interaction.options.getString('text');

        sentMsg = interaction.reply({
            embeds: [embed],
            components: [row],
            ephemeral: true,
        });


    }
}