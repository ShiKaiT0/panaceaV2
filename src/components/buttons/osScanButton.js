const { EmbedBuilder } = require('discord.js')
let sleep = async (ms) => await new Promise(r => setTimeout(r,ms));

module.exports = {
    data: {
        name: "osScanButton"
    },
    async execute(interaction, client){
        const scanEmbed = new EmbedBuilder()
            .setAuthor({ name: 'Scanner Républicain',iconURL:"https://cdn3.emoji.gg/emojis/5212-activity.png"})
            .setDescription("> La vérification de votre patient à été lancée. Procédure utilisée : interne.")
            .setColor(0x0000FF)
            .setThumbnail("https://www.lompocvmc.com/images/blog/ct-scan.jpg")
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
        let clr = "";
        let dgt = "";
        if(roll>60){
            clr = 0x000FF00;
            dgt = `Dégâts internes légers. Proposition : revérifier pour dénicher des blessures non vue/trop légères pour l'être qui risqueraient de s'aggraver. (roll ${roll})`;
        }else if(roll > 20 && roll < 59){
            clr = 0xFFFF00;
            dgt = `Dégâts internes moyens. Possible présence d'os fêlé ou brisure légère (nette?), ou déchirure/ligaments ou tendons rompus. (roll ${roll})`;
        }else{
            clr = 0xff0000;
            dgt = `Dégâts critiques, soins prioritaire absolus précaunisés. Préparer bloc opératoire au plus vite. (roll ${roll})`;
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