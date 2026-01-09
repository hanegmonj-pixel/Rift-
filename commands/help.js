module.exports = {
    name: 'help',
    description: 'Provides help for bot commands.',
    async execute(interaction) {
        await interaction.reply('Here are some commands you can use...');
    }
};