
module.exports = async (client, interaction, args) => {
    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `🏳️‍🌈・Radio de Gay`,
        desc: `Eres ${result}% gay!`,
        type: 'editreply'
    }, interaction)
}

 