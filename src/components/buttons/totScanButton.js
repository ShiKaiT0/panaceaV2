const { EmbedBuilder } = require('discord.js')
let sleep = async (ms) => await new Promise(r => setTimeout(r,ms));

module.exports = {
    data: {
        name: "totScanButton"
    },
    async execute(interaction,client){
        const scanEmbed = new EmbedBuilder()
            .setAuthor({ name: 'Scanner Républicain',iconURL:"https://cdn3.emoji.gg/emojis/5212-activity.png"})
            .setDescription("La vérification de votre patient à été lancée. Procédure utilisée : scan total.")
            .setColor(0x808080)
            .setThumbnail("https://static.wikia.nocookie.net/starwars/images/e/e1/PortableScanner.jpg/")
            .setFields([
                {
                    name: "Résultat :",
                    value: "Merci de patienter jusqu'à la fin.",
                    inline: true,
                },
            ])
            .setTimestamp(Date.now())
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            })
        

        sentMSG = await interaction.reply({
            embeds: [scanEmbed]
        });

        await sleep((Math.floor(Math.random()*15))*1000);
        let roll = Math.floor(Math.random() * 101);
        let clr = "";
        let dgt = "";
        if(roll>60){
             clr = 0x000FF00;
             dgt = `Dégâts légers. (roll ${roll})`;
        }else if(roll > 20 && roll < 59){
            clr = 0xFFFF00;
            dgt = `Dégâts moyens, veuillez revérifier au besoin. (roll ${roll})`;
        }else{
            clr = 0xff0000;
            dgt = `Dégâts critiques, soins prioritaire précaunisés. (roll ${roll})`
        }

        const resEmbed = new EmbedBuilder()
            .setAuthor({ name: 'Scanner Républicain',iconURL:"https://cdn3.emoji.gg/emojis/5212-activity.png"})
            .setDescription("> La vérification de votre patient à été finalisée, merci de bien prendre en compte les circonstances de l'incident, afin d'avoir un diagnostic correct.")
            .setColor(clr)
            .setFields([
                {
                    name: "Résultat :",
                    value: `> ${dgt}`,
                    inline: true,
                },
            ])
            .setTimestamp(Date.now())
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            })
            .setThumbnail("https://static.wikia.nocookie.net/starwars/images/e/e1/PortableScanner.jpg/")

        interaction.editReply({
            embeds: [resEmbed]
        });
        
    }
}