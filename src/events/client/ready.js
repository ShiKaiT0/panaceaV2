module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(
      `Prêt, ${client.user.tag} viens de se lancer et de se connecter.`
    );
  },
};
