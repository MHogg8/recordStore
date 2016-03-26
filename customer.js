var Album = require('./album');
var Store = require('./recordStore');


var Customer = function(name, money){
  this.name = name,
  this.money  = money,
  this.collection = []
}


Customer.prototype = {
  buysRecord: function(store, album){
    if(this.money > album.price){
      this.money -= album.price;    
      this.collection.push(album);
      store.sellRecord(album);
    }else{
      'sorry you cant afford it'
    }
  }
}

module.exports = Customer;