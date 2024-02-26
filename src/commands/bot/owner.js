const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Creador",
            value: `Polinomias`,
            inline: true,
        },
        {
            name: "🏷┆Discord",
            value: `polinomias`,
            inline: true,
        },
        {
            name: "🏢┆Organizacion",
            value: `StarGang`,
            inline: true,
        },
        {
            name: "🌐┆Discord",
            value: `https://discord.gg/VTVEMJavHX`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 