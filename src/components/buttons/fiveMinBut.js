const { EmbedBuilder, Embed } = require('discord.js')
let sleep = async (ms) => await new Promise(r => setTimeout(r,ms));
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

module.exports = {
    data: {
        name: "fiveMinBut"
    },
    async execute(interaction, client){
        msg = await interaction.reply({
            content:"Début d'un scan de cinq minutes.."
        })
        await sleep(300*1000);
        let roll = random(30,70);
        embed = new EmbedBuilder()
            .setAuthor({
                name:"Analyseur d'échantillon",
                iconURL: "https://cdn-icons-png.flaticon.com/512/4974/4974172.png"
            })
            .setTitle("Résultat :")
            .setColor('DarkGreen')
            .setFooter({
                text:`Éxécuté par : ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL()
            })
            .setDescription(`Roll obtenu : ${roll}`)
            .setThumbnail("https://cdn-icons-png.flaticon.com/512/2201/2201544.png");

        await interaction.editReply({
            embeds: [embed]
        })

    }
}