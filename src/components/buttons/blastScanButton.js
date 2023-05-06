const { EmbedBuilder } = require('discord.js')
let sleep = async (ms) => await new Promise(r => setTimeout(r,ms));

module.exports = {
    data: {
        name: "blastScanButton"
    },
    async execute(interaction, client){
        const scanEmbed = new EmbedBuilder()
            .setAuthor({ name: 'Scanner Républicain',iconURL:"https://cdn3.emoji.gg/emojis/5212-activity.png"})
            .setDescription("> La vérification de votre patient à été lancée. Procédure utilisée : blaster.")
            .setColor(0x0000FF)
            .setThumbnail("https://i.etsystatic.com/19700006/r/il/985c6b/2154822384/il_570xN.2154822384_on2n.jpg")
            .setFields([
                {
                    name: "Résultat :",
                    value: "> *Merci de patienter jusqu'à la fin. Ce scan peut durer un certain temps. Nous vous rappelons qu'il est toujours nécessaire de mettre en relation l'ampleur de la blessure et sa nature.*",
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
        let clr = 0x0000000;
        let dgt = "";
        if(roll>50){
            clr = 0x000FF00;
            dgt = `La blessure blaster s'est cautérisée. Merci de nettoyer la blessure comme il se doit, ne pas oublier d'injecter l'antidouleur (roll ${roll})`;
        }else if(roll > 20 && roll < 49){
            clr = 0xFFFF00;
            dgt = `Hémorragie externe détectée, veuillez appliquer bacta/poxéine post-nettoyage, transfusion demandée si nécessaire. (roll ${roll})`;
        }else{
            clr = 0xff0000;
            dgt = `Hémorragie interne, soins prioritaire absolus précaunisés. Préparer bloc opératoire au plus vite. (roll ${roll})`;
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
            .setThumbnail("https://i.etsystatic.com/19700006/r/il/985c6b/2154822384/il_570xN.2154822384_on2n.jpg")

        interaction.editReply({
            embeds: [resEmbed]
        });

    }
}