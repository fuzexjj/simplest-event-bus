const EventBus = {
    channels: {},
    subscribe(channelName, cb) {
        if (!this.channels[channelName]) {
            this.channels[channelName] = []
        }

        this.channels[channelName].push(cb)
    },
    publish(channelName, data) {
        if (!this.channels[channelName]) {
            throw new Error('Chanel does not exist')
        }

        this.channels[channelName].forEach((cb) => cb(data))
    },
}

class Mailer {
    constructor() {
        EventBus.subscribe('order/new', this.sendEmail)
    }

    sendEmail(data) {
        console.log(`Email sent to the user. Ordered item: ${data}`)
    }
}

class Order {
    constructor(name = 'Unselected') {
        this.itemName = name
    }

    send() {
        console.log(`Order was sent to the store. Ordered item: ${this.itemName}`)
        EventBus.publish('order/new', this.itemName)
    }
}

const mailer = new Mailer()
const order = new Order('Apple')

order.send()
