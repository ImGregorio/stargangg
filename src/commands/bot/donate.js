const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("CorwinDev GitHub")
                .setURL("https://github.com/sponsors/CorwinDev")
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `${client.user.username}・Donate`,
        desc: '_____ \n\nHaga clic en el botón a continuación para acceder a la página de donacion. \n**¡Prestar atención! No es obligado donar!**',
        thumbnail: client.user.avatarURL({ dynamic: true }),
        url: "https://proximamente.com",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 