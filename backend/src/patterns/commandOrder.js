
class Command{ execute(){ throw 'execute not implemented'; } }
class PlaceOrderCommand extends Command{
  constructor(receiver, data){ super(); this.receiver = receiver; this.data = data; }
  execute(){ return this.receiver.place(this.data); }
}
class CancelOrderCommand extends Command{
  constructor(receiver, id){ super(); this.receiver = receiver; this.id = id; }
  execute(){ return this.receiver.cancel(this.id); }
}
class UpdateStatusCommand extends Command{
  constructor(receiver, id, status){ super(); this.receiver = receiver; this.id = id; this.status = status; }
  execute(){ return this.receiver.updateStatus(this.id, this.status); }
}
module.exports = { PlaceOrderCommand, CancelOrderCommand, UpdateStatusCommand };
