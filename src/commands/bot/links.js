const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.StringSelectMenuBuilder()
                .setCustomId('Bot-linkspanel')
                .setPlaceholder('❌┆Selecciona aqui')
                .addOptions([
                    {
                        label: `Servidor Soporte`,
                        description: `Entra en el servidor de soporte`,
                        emoji: "❓",
                        value: "support-linkspanel",
                    },
                    {
                        label: `Invitar al Bot`,
                        description: `Invita al Bot a tu servidor`,
                        emoji: "📨",
                        value: "invite-linkspanel",
                    },
                    {
                        label: `StarGang eSports`,
                        description: `Entra a StarGang`,
                        emoji: "🌍",
                        value: "community-linkspanel",
                    },
                    {
                        label: `Top.gg`,
                        description: `Cooming Soon...`,
                        emoji: "📃",
                        value: "top.gg-linkspanel",
                    },
                ]),
        );

    client.embed({
        title: `🔗・Links`,
        desc: `¡Obtenga acceso a todos los enlaces de Bot! Elige el enlace que necesitas en el menú de abajo`,
        image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 