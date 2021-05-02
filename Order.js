const EventBus = require('./EventBus')

class Order {
    constructor(name = 'Unselected') {
        this.itemName = name
    }

    send() {
        console.log(`Order was sent to the store. Ordered item: ${this.itemName}`)
        EventBus.getInstance().publish('order/new', this.itemName)
    }
}

module.exports = Order
