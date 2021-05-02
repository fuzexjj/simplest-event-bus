const EventBus = require('./EventBus')

class Mailer {
    constructor() {
        EventBus.getInstance().subscribe('order/new', this.sendEmail)
    }

    sendEmail(data) {
        console.log(`Email sent to the user. Ordered item: ${data}`)
    }
}

module.exports = Mailer
