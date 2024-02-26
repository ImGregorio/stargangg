const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  let verifLevels = {
    "0": "None",
    "1": "Low",
    "2": "Medium",
    "3": "(╯°□°）╯︵  ┻━┻",
    "4": "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"
  }

  let region = {
    "brazil": `:flag_br: `,
    "eu-central": `:flag_eu: `,
    "singapore": `:flag_sg: `,
    "us-central": `:flag_us: `,
    "sydney": `:flag_au: `,
    "us-east": `:flag_us: `,
    "us-south": `:flag_us: `,
    "us-west": `:flag_us: `,
    "eu-west": `:flag_eu: `,
    "vip-us-east": `:flag_us: `,
    "europe": `:flag_gb:`,
    "amsterdam": `:flag_nl:`,
    "hongkong": `:flag_hk: `,
    "russia": `:flag_ru: `,
    "southafrica": `:flag_za: `
  }

  let tier = {
     "0": "None",
    "1": "TIER 1",
    "2": "TIER 2",
    "3": "**TIER 3**"
  }

  const members = await interaction.guild.members.fetch();

  client.embed({
    title: `ℹ️・Informacion de Servidor`,
    desc: `Información sobre el servidor ${interaction.guild.name}`,
    thumbnail: interaction.guild.iconURL({ dynamic: true, size: 1024 }),
    image: interaction.guild.bannerURL({ size: 1024 }),
    fields: [
      {
        name: "Nombre del Servidor:",
        value: `${interaction.guild.name}`,
        inline: true,
      },
      {
        name: "ID del Servidor:",
        value: `${interaction.guild.id}`,
        inline: true,
      },
      {
        name: "Creador: ",
        value: `<@!${interaction.guild.ownerId}>`,
        inline: true
      },
      {
        name: "Nivel de Verificacion: ",
        value: `${verifLevels[interaction.guild.verificationLevel]}`,
        inline: true
      },
      {
        name: "Boost Tier: ",
        value: `${tier[interaction.guild.premiumTier]}`,
        inline: true
      },
      {
        name: "Contador de Boost:",
        value: `${interaction.guild.premiumSubscriptionCount || '0'} boosts`,
        inline: true
      },
      {
        name: "Creado el:",
        value: `<t:${Math.round(interaction.guild.createdTimestamp / 1000)}>`,
        inline: true
      },
      {
        name: "Miembros:",
        value: `${interaction.guild.memberCount} miembros!`,
        inline: true
      },
      {
        name: "Bots:",
        value: `${members.filter(member => member.user.bot).size} bots!`,
        inline: true
      },
      {
        name: "Canales de Texto: ",
        value: `${interaction.guild.channels.cache.filter(channel => channel.type === Discord.ChannelType.GuildText).size} canales!`,
        inline: true
      },
      {
        name: "Canales de Voz:",
        value: `${interaction.guild.channels.cache.filter(channel => channel.type ===  Discord.ChannelType.GuildVoice).size} canales!`,
        inline: true
      },
      {
        name: "Canales de escenario:",
        value: `${interaction.guild.channels.cache.filter(channel => channel.type ===  Discord.ChannelType.GuildStageVoice).size} canales!`,
        inline: true
      },
      {
        name: "Nuevos Canales:",
        value: `${interaction.guild.channels.cache.filter(channel => channel.type ===  Discord.ChannelType.GuildAnnouncement).size} canales!`,
        inline: true
      },
      {
        name: "Hilos públicos:",
        value: `${interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_PUBLIC_THREAD').size} hilos!`,
        inline: true
      },
      {
        name: "Hilos privados:",
        value: `${interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_PRIVATE_THREAD').size} hilos!`,
        inline: true
      },
      {
        name: "Roles:",
        value: `${interaction.guild.roles.cache.size} roles!`,
        inline: true
      },
      {
        name: "Emojis:",
        value: `${interaction.guild.emojis.cache.size} emojis`,
        inline: true
      },
      {
        name: "Stickers:",
        value: `${interaction.guild.stickers.cache.size} stickers`,
        inline: true
      }
    ],
    type: 'editreply'
  }, interaction)
}

   
