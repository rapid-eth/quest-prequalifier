const quests = require('./exampleQuests.json').quests
const {prequalifierCheckTx, prequalifierCheckEvent} = require("./index")


const main = async () => {

    let userAddress = "0xb68CDa5e9327461Bfe63704e68c2a33b9c077cdf"
    
    const pretx = await prequalifierCheckTx(userAddress, quests)
    console.log(pretx)


    const preev = await prequalifierCheckEvent(userAddress, quests)
    console.log(preev)
}

main()