module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);
      if (!command) return;

      try {
        await command.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content:
            "Quelque chose s'est mal passé..Dommage, une autre fois peut-être.",
          ephemeral: true,
        });
      }
    } else if (interaction.isButton()){
      const { buttons } = client;
      const { customId } = interaction;
      const button = buttons.get(customId);
      if (!button) return new Error("Pas de code pour ce bouton..");

      try {
        await button.execute(interaction, client);
      } catch (error) {
        console.error(error)
      }
    } else if (interaction.isStringSelectMenu()){
      const { selectMenus } = client;
      const { customId } = interaction;
      const menu = selectMenus.get(customId);
      if (!menu) return new Error("Pas de code pour ce menu.")

      try {
        await menu.execute(interaction,client);
      } catch (error) {
        console.error(error);
      }

    }
  },
};
