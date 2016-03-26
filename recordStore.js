var Album = require('./album');
var Customer = require('./customer');

var Store = function(name, city){
  this.name = name,
  this.city = city,
  this.stock = [],
  this.balance = 0
}

Store.prototype = {
  addAlbum: function(album){
    this.stock.push(album);
  },
  sellRecord: function(album){
      this.balance += album.price;
      for(var albums of this.stock){
        if(albums.title === album.title){
          var result = this.stock.indexOf(album);
          this.stock.splice(result, 1);
      }
    }
  },
  storeFinance: function(){
    report = [], 
    stockValue = 0;
    report.push('Store Balance: £' + this.balance);
    for(var albums of this.stock){
      stockValue += albums.price;
      report.push('Stock Value: £' + stockValue);
    }
    return report;
  },
}
    





module.exports = Store;

