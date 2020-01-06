const {verifyEvent} = require('./verifyEvent')

module.exports = async (address, quests) => {
    let verifiedEvents = []
    const eventQuests = quests.filter(q => !!q.config && q.config.type === "event" && !!q.config.contractAddress)
    //for each quest event, run verify event
    for (let i = 0; i < eventQuests.length; i++) {
        const q = eventQuests[i];

        let b = { userAddress: address, config: q.config}
        let v = await verifyEvent(b)
        if (v) {
            let ev = {
                id: q.id,
                config: q.config,
                certificate: q.certificate
            }
            verifiedEvents.push(ev)
        }
    }
    return verifiedEvents
}