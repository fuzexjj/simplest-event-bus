class Mailer {
    sendEmail() {
        console.log('Email sent to the user')
    }
}

class Order {
    constructor(name = 'Unselected') {
        this.itemName = name
    }

    send() {
        console.log(`Order was sent to the store. Ordered item: ${this.itemName}`)
    }
}

class EventBus {
    channels = {}

    subscribe(channelName, cb) {
        if (!this.channels[channelName]) {
            this.channels[channelName] = []
        }

        this.channels[channelName].push(cb)
    }

    publish(channelName) {
        if (!this.channels[channelName]) {
            throw new Error('No one is subscribed to this channel')
        }
    }
}

const order = new Order('Apple')
order.send()
