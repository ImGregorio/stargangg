const model = require('../../database/models/badge');
const Schema = require('../../database/models/profile');
const CreditsSchema = require("../../database/models/votecredits");

module.exports = async (client, interaction, args) => {

    const badgeFlags = {
        DEVELOPER: client.emotes.badges.developer,
        EVENT: client.emotes.badges.event,
        BOOSTER: client.emotes.badges.booster,
        BUGS: client.emotes.badges.bug,
        MANAGEMENT: client.emotes.badges.management,
        PREMIUM: client.emotes.badges.premium,
        SUPPORTER: client.emotes.badges.supporter,
        TEAM: client.emotes.badges.team,
        BOOSTER: client.emotes.badges.booster,
        PARTNER: client.emotes.badges.partner,
        VOTER: client.emotes.badges.voter,
        SUPPORT: client.emotes.badges.support,
        MODERATOR: client.emotes.badges.moderator,
        DESIGNER: client.emotes.badges.designer,
        MARKETING: client.emotes.badges.marketing,
        ACTIVE: client.emotes.badges.active,
        VIP: client.emotes.badges.vip
    }

    const flags = {
        ActiveDeveloper: "👨‍💻・Active Developer",
        BugHunterLevel1: "🐛・Discord Bug Hunter",
        BugHunterLevel2: "🐛・Discord Bug Hunter",
        CertifiedModerator: "👮‍♂️・Certified Moderator",
        HypeSquadOnlineHouse1: "🏠・House Bravery Member",
        HypeSquadOnlineHouse2: "🏠・House Brilliance Member",
        HypeSquadOnlineHouse3: "🏠・House Balance Member",
        HypeSquadEvents: "🏠・HypeSquad Events",
        PremiumEarlySupporter: "👑・Early Supporter",
        Partner: "👑・Partner",
        Quarantined: "🔒・Quarantined", // Not sure if this is still a thing
        Spammer: "🔒・Spammer", // Not sure if this one works
        Staff: "👨‍💼・Discord Staff",
        TeamPseudoUser: "👨‍💼・Discord Team",
        VerifiedBot: "🤖・Verified Bot",
        VerifiedDeveloper: "👨‍💻・(early)Verified Bot Developer",
    }

    const user = interaction.options.getUser('user') || interaction.user;

    Schema.findOne({ User: user.id }, async (err, data) => {
        if (data) {
            let Badges = await model.findOne({ User: user.id });

            let credits = 0;
            const creditData = await CreditsSchema.findOne({ User: user.id });

            if (Badges && Badges.FLAGS.includes("DEVELOPER")) {
                credits = "∞";
            }
            else if (creditData) {
                credits = creditData.Credits;
            }

            if (!Badges) Badges = { User: user.id };

            const userFlags = user.flags ? user.flags.toArray() : [];

            client.embed({
                title: `${client.user.username}・Perfil`,
                desc: '_____',
                thumbnail: user.avatarURL({ dynamic: true }),
                fields: [{
                    name: "👤┆Usuario",
                    value: user.username,
                    inline: true
                },
                {
                    name: "📘┆Discriminador",
                    value: user.discriminator,
                    inline: true
                },
                {
                    name: "🆔┆ID",
                    value: user.id,
                    inline: true
                },
                {
                    name: "👨‍👩‍👦┆Sexo",
                    value: `${data.Gender || 'No establecido'}`,
                    inline: true
                },
                {
                    name: "🔢┆Edad",
                    value: `${data.Age || 'No establecido'}`,
                    inline: true
                },
                {
                    name: "🎂┆Cumpleaños",
                    value: `${data.Birthday || 'No establecido'}`,
                    inline: true
                },
                {
                    name: "🎨┆Color favorito",
                    value: `${data.Color || 'No establecido'}`,
                    inline: true
                },
                {
                    name: "🐶┆Mascota favorita",
                    value: `${data.Pets.join(', ') || 'Not establecido'}`,
                    inline: true
                },
                {
                    name: "🍕┆Comida favorita",
                    value: `${data.Food.join(', ') || 'Not establecido'}`,
                    inline: true
                },
                {
                    name: "🎶┆Cancion favorita",
                    value: `${data.Songs.join(', ') || 'Not establecido'}`,
                    inline: true
                },
                {
                    name: "🎤┆Artista favorito",
                    value: `${data.Artists.join(', ') || 'No establecido'}`,
                    inline: true
                },
                {
                    name: "🎬┆Pelicula favorita",
                    value: `${data.Movies.join(', ') || 'No establecido'}`,
                    inline: true
                },
                {
                    name: "👨‍🎤┆Actor favorito",
                    value: `${data.Actors.join(', ') || 'No establecido'}`,
                    inline: true
                },
                {
                    name: "🏴┆Pais",
                    value: `${data.Orgin || 'No establecido'}`,
                    inline: true
                },
                {
                    name: "🎮┆Hobby",
                    value: `${data.Hobbys.join(', ') || 'No establecido'}`,
                    inline: true
                },
                {
                    name: "😛┆Estado",
                    value: `${data.Status || 'No establecido'}`,
                    inline: true
                },
                {
                    name: "📛┆Insignias de robots",
                    value: `${Badges.FLAGS ? Badges.FLAGS.map(flag => badgeFlags[flag]).join(' ') : 'Ninguno'}`,
                    inline: true
                },
                {
                    name: "🏷️┆Insignias de discord",
                    value: `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'Ninguno' || 'Ninguno'}`,
                    inline: true
                },
                {
                    name: "💳┆Plata",
                    value: `${credits || 'Nada'}`,
                    inline: true
                },
                {
                    name: "ℹ️┆Sobre mi",
                    value: `${data.Aboutme || 'No establecido'}`,
                    inline: false
                },], type: 'editreply'
            }, interaction);
        }
        else {
            return client.errNormal({ error: "¡No se encontró ningún perfil! Abrir un perfil con /profile create", type:'editreply' }, interaction);
        }
    })
}

 