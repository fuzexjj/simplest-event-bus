const EventBus = require('./EventBus')
const Mailer = require('./Mailer')
const Order = require('./Order')

new EventBus()
new Mailer()

const order = new Order('Apple')
order.send()
