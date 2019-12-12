const {verifyEvent} = require('./verifyEvent')

module.exports = async (address, quests) => {
    let verifiedEvents = []
    let eventQuests = quests.filter(q => q.config.type === "event")
    //for each quest event, run verify event
    for (let i = 0; i < eventQuests.length; i++) {
        const q = eventQuests[i];
        let b = { userAddress: address, config: q.config}
        let v = await verifyEvent(b)
        if (v) {
            verifiedEvents.push(q)
        }
    }
    //console.log(verifiedEvents)
    return verifiedEvents
}