const quests = require('./questList.json').data
const {prequalifierCheckTx, prequalifierCheckEvent} = require("./index")

const filteredQuests = quests.filter(item => !!item.config);


const main = async () => {

    let userAddress = "0xF9963dbe9438A5ECb62e5e7c2C081C3d12D48dd5"
    const pretx = await prequalifierCheckTx(userAddress, filteredQuests)
    console.log("********** | TRANSACTIONS | **********")
    console.log(pretx)

    const preev = await prequalifierCheckEvent(userAddress, filteredQuests)
    console.log("********** | EVENTS | **********")
    console.log(preev)
}

main()