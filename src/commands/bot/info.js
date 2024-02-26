const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = async (client, interaction, args) => {
  const duration = moment.duration(client.uptime).format("\`D\` [days], \`H\` [hrs], \`m\` [mins], \`s\` [secs]");

  client.embed({
    title: `ℹ・Informacion del Bot`,
    desc: `____________________________`,
    thumbnail: client.user.avatarURL({ size: 1024 }),
    fields: [
      {
        name: "ℹ️┆Informacion",
        value: `¡StarGang es un bot con el que puedes ejecutar todo tu servidor! ¡Con no menos de 500+ comandos, tenemos un bot grande con muchas opciones para mejorar tu servidor!`,
        inline: false,
      },
      {
        name: "🤖┆Nombre",
        value: `${client.user.username}`,
        inline: true,
      },
      // {
      //   name: "🆔┆Bot id",
      //   value: `${client.user.id}`,
      //   inline: true,.
      // },
      {
        name: "🔧┆Creador",
        value: `<@!${process.env.OWNER_ID}> `,
        inline: true,
      },
      {
        name: "🔧┆Developer",
        value: `<@!882172011961528340> - xPolinomias`,
        inline: true,
      },
      {
        name: "💻┆Comandoss",
        value: `\`${client.commands.size}\` comandos`,
        inline: true,
      },
      {
        name: "🌐┆Servidores",
        value: `\`${client.guilds.cache.size}\` servers`,
        inline: true,
      },
      {
        name: "👥┆Miembros",
        value: `\`${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}\` miembros`,
        inline: true,
      },
      {
        name: "🔊┆Canales conectados",
        value: `\`${client.voice.adapters.size}\` channels`,
        inline: true,
      },
      {
        name: "📺┆Canales",
        value: `\`${client.channels.cache.size}\` canales`,
        inline: true,
      },
      {
        name: "📅┆Creado",
        value: `<t:${Math.round(client.user.createdTimestamp / 1000)}>`,
        inline: true,
      },
      {
        name: "🆙┆Tiempo",
        value: `${duration}`,
        inline: true,
      },
      {
        name: "⌛┆API speed:",
        value: `\`${client.ws.ping}\`ms`,
        inline: true,
      },
      {
        name: "🏷┆Bot Version",
        value: `\`${require(`${process.cwd()}/package.json`).version}\``,
        inline: true,
      },
      {
        name: "🏷┆Node.js Version",
        value: `\`${process.version}\``,
        inline: true,
      },
      {
        name: "📂┆Discord.js Version",
        value: `\`${Discord.version}\``,
        inline: true,
      },
      {
        name: "💾┆Bot memory",
        value: `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\` MB`,
        inline: true,
      },
      {
        name: "🔗┆Links",
        value: `Add me: [[HERE]](${client.config.discord.botInvite}) \nSupport server: [[HERE]](${client.config.discord.serverInvite})`,
        inline: false,
      }],
    type: 'editreply'
  }, interaction)

}


