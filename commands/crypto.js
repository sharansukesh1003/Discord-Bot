const { MessageEmbed } = require('discord.js')
const CoinGecko = require('coingecko-wrapper-api')
const client = new CoinGecko()

module.exports = {
    crypto: function (query, message) {
        client.coins.fetch(query)
            .then(res => {
                console.log(res)
                const image = res.data.image.large
                const rank = String(res.data.market_cap_rank)
                const created = new Date(res.data.genesis_date).toLocaleString('en-us',{month:'short', year:'numeric'})
                console.log(created)
                const price = String(res.data.market_data.current_price.usd)
                const totaltSupply = String(res.data.market_data.total_supply)
                const maxSupply = String(res.data.market_data.max_supply)
                const circulatingSupply = String(res.data.market_data.circulating_supply)
                const description = res.data.description.en
                const name = res.data.name
                const embed = new MessageEmbed()
                    .setColor('#FFA500')
                    .setTitle(name)
                    .setDescription(description.length < 300 ? description : description.slice(0, 301) + '...')
                    .setThumbnail(image)
                    .addFields({
                        name: 'Rank',
                        value: `**${rank}**`,
                        inline : true
                    },
                    {
                        name: 'Current Price',
                        value: '**USD** ' + price,
                        inline : true
                    },
                    {
                        name: 'Created',
                        value: created,
                        inline : true
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: false,
                    },
                    {
                        name: 'Max Supply',
                        value: maxSupply == 'null' ? '**N/A**' : maxSupply,
                        inline : true
                    },
                    {
                        name: 'Total Supply',
                        value: totaltSupply == 'null' ? '**N/A**' : totaltSupply,
                        inline : true
                    },
                    {
                        name: 'Circulating Supply',
                        value: circulatingSupply == 'null' ? '**N/A**' : circulatingSupply,
                        inline : true
                    }
                     )
                message.channel.send({
                    embeds : [embed],
                })
            }).catch((err) => {
                const embed = new MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Something went wrong')
                .setDescription("If the crypto you're looking for has a space in it's name example '*basic attention token*' replace the spaces with '**-**'")
                message.channel.send({
                    embeds: [embed],
                })
            })
    }
}