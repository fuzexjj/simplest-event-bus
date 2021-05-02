class EventBus {
    channels = {}
    _instance = null

    constructor() {
        if (!EventBus._instance) {
            EventBus._instance = this
        }
        return EventBus._instance
    }

    static getInstance() {
        return this._instance
    }

    subscribe(channelName, cb) {
        if (!this.channels[channelName]) {
            this.channels[channelName] = []
        }

        this.channels[channelName].push(cb)
    }

    publish(channelName, data) {
        if (!this.channels[channelName]) {
            throw new Error('Chanel does not exist')
        }

        this.channels[channelName].forEach((cb) => cb(data))
    }
}

module.exports = EventBus
