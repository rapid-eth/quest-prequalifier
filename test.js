const quests = require('./questList.json').data
const {prequalifierCheckTx, prequalifierCheckEvent} = require("./index")

const filteredQuests = quests.filter(item => !!item.config);


const main = async () => {

    let userAddress = "0x1ceb4c4e01fba4c8a4513bca2929f3c68715514d"
    
    const pretx = await prequalifierCheckTx(userAddress, filteredQuests)
    console.log(pretx)


    const preev = await prequalifierCheckEvent(userAddress, filteredQuests)
    console.log(preev)
}

main()