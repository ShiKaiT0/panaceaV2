const { EmbedBuilder } = require('discord.js')

module.exports= {
    data: { 
        name:"say-menu"
    },
    async execute(interaction,client){

        const type = interaction.values[0];

        if(type == "msgNara"){
            embed = new EmbedBuilder()
                .setAuthor({
                    name:"Narration",
                    iconURL:"https://cdn3.emoji.gg/emojis/3389-yellowbook.gif"
                })
                .setTitle("L'action continue...")
                .setColor('Yellow')
                .setDescription(`> *${global.sayText}*`)
                .setThumbnail("https://cdn-icons-png.flaticon.com/512/1183/1183807.png")
                .setFooter({
                    text:`Émis par : ${interaction.user.tag}`,
                    iconURL: interaction.user.displayAvatarURL()
                })

            await interaction.reply({
                embeds: [embed]
            });

        }

        if(type == "msgSysteme"){
            embed = new EmbedBuilder()
                .setAuthor({
                    name:"Système",
                    iconURL:"https://cdn3.emoji.gg/emojis/4887-databaseerror.png"
                })
                .setTitle("Message Système - Lire attentivement")
                .setColor('Blue')
                .setDescription(`> ${global.sayText}`)
                .setThumbnail("https://cdn-icons-png.flaticon.com/512/2286/2286729.png")
                .setFooter({
                    text:`Émis par : ${interaction.user.tag}`,
                    iconURL: interaction.user.displayAvatarURL()
                })

            await interaction.reply({
                embeds: [embed]
            });

        }

        if(type == "msgAdmin"){
            embed = new EmbedBuilder()
                .setAuthor({
                    name:"Administration du Corps Médical",
                    iconURL:"https://static.wikia.nocookie.net/c__/images/5/5f/MedicalCross.png/revision/latest?cb=20140619000406&path-prefix=clone"
                })
                .setTitle("Message Administratif - Lire attentivement")
                .setColor('Red')
                .setDescription(`> ${global.sayText}`)
                .setThumbnail("https://i.imgur.com/ZG8ihSG.png")
                .setFooter({
                    text:`Émis par : ${interaction.user.tag}`,
                    iconURL: interaction.user.displayAvatarURL()
                })

            await interaction.reply({
                embeds: [embed]
            });

        }

        if(type == "msgEmpty"){
            await interaction.reply({
                content: global.sayText
            });
        }


    }
}