const { EmbedBuilder, Embed } = require('discord.js')
let sleep = async (ms) => await new Promise(r => setTimeout(r,ms));
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

module.exports = {
    data: {
        name: "startButton"
    },
    async execute(interaction, client){

        embed = new EmbedBuilder()
        .setAuthor({
            name:"Matériel Biotechnique Républicain",
            iconURL:"https://cdn-icons-png.flaticon.com/512/4974/4974172.png"
        })
        .setTitle("Création du produit en cours...")
        .setColor("DarkNavy")
        .setFooter({
          text:`Éxécuté par : ${interaction.user.tag}`,
          iconURL: interaction.user.displayAvatarURL()
        })
        .setDescription(`> *En attente....*`)
        .setThumbnail("https://cdn-icons-png.flaticon.com/512/2201/2201544.png");

        await interaction.reply({
            embeds: [embed]
        })

        let t;
        failed = false;
        easter = false;
        gotLoc = global.synthGotRoll
        if(gotLoc > 94 && gotLoc <= 100){
            t = 60;
        }else if(gotLoc > 50){
            t = 300;
        }else if(gotLoc < 21 && gotLoc > 5){
            failed = true;
            t = 60;
        }else if(gotLoc < 5){
            easter = true;
            t = 1;
        }

        await sleep(t*1000);

        if(easter){
            embedEaster = new EmbedBuilder()
            .setAuthor({
                name:"COVID-48",
                iconURL:"https://cdn-icons-png.flaticon.com/512/2925/2925867.png"
            })
            .setTitle("Fail monumental")
            .setColor('Red')
            .setFooter({
              text:`Éxécuté par : ${interaction.user.tag}`,
              iconURL: interaction.user.displayAvatarURL()
            })
            .setDescription(`> *Dans votre incompétence exceptionnelle, vous avez décidé de continuer votre synthèse avec de très bas résultats. De ce fait, vous avez réussi l'illustre exploit de créer un nouveau variant. Maintenant, prenez un peu de temps pour réfléchir sur la question, vous en aurez besoin.*`)
            .setThumbnail("https://cdn-icons-png.flaticon.com/512/2201/2201544.png")
            .setURL("https://www.youtube.com/watch?v=mLirlyAUtJQ")

            await interaction.editReply({
                embeds: [embedEaster]
            })
        }else if(failed){
            embedFailed = new EmbedBuilder()
            .setAuthor({
                name:"Problème Système",
                iconURL:"https://cdn-icons-png.flaticon.com/512/2925/2925867.png"
            })
            .setTitle("Impossible de finir le scan.")
            .setColor('Red')
            .setFooter({
              text:`Éxécuté par : ${interaction.user.tag}`,
              iconURL: interaction.user.displayAvatarURL()
            })
            .setDescription(`> *Il semblerait qu'une erreur soit arrivée, le système manque certainement d'informations pour procéder à un scan correct, merci d'étayer les informations avec un nouveau scan du produit.*`)
            .setThumbnail("https://cdn-icons-png.flaticon.com/512/2201/2201544.png")

            await interaction.editReply({
                embeds: [embedFailed]
            })
        }else{
            finishedEmbed = new EmbedBuilder()
            .setAuthor({
                name:"Matériel Biotechnique Républicain",
                iconURL:"https://cdn-icons-png.flaticon.com/512/4974/4974172.png"
            })
            .setTitle("Fin de création du produit.")
            .setColor('Green')
            .setFooter({
              text:`Éxécuté par : ${interaction.user.tag}`,
              iconURL: interaction.user.displayAvatarURL()
            })
            .setDescription(`> *Synthèse complète.*`)
            .setThumbnail("https://cdn-icons-png.flaticon.com/512/2201/2201544.png");

            await interaction.editReply({
                embeds: [finishedEmbed]
            })
        }
    }
}

// 95-100 : 1mn
// > 50 : 5mn
// < 50 : 
//  < 20 : 1mn + fail 
// 0-5 : nouveau variant