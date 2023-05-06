const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync("./src/commands");
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        console.log(
          `Command : ${command.data.name} viens de passer par le Handler.`
        );
      }
    }

    const clientId = "1100845572711256175";
    const guildId = "984876498697748550";
    const rest = new REST({ version: "9" }).setToken(process.env.TKN);
    try {
      console.log("Début de refresh des commandes (/).");

      await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
        body: client.commandArray,
      });

      console.log("Commandes (/) refresh sans problèmes.");
    } catch (error) {
      console.error(error);
    }
  };
};
