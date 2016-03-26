var assert = require('chai').assert;
var Store = require('../recordStore');
var Album = require('../album');
var Customer = require('../customer')

describe('Record Store', function(){
  it('should check record store name', function(){
    store1 = new Store('Pips Records', 'Edinburgh');
    store2 = new Store('Chappies', 'Glasgow');
    store3 = new Store('Breaks', 'Alnwick');
    assert.equal('Pips Records', store1.name);
    assert.equal('Chappies', store2.name);
    assert.equal('Breaks', store3.name);
  });
  it('should check record store city', function(){
    store1 = new Store('Pips Records', 'Edinburgh');
    store2 = new Store('Chappies', 'Glasgow');
    store3 = new Store('Breaks', 'Alnwick');
    assert.equal('Edinburgh', store1.city);
    assert.equal('Alnwick', store3.city);
    assert.equal('Glasgow', store2.city);
  });
  it('should check record store balance', function(){
    store1 = new Store('Pips Records', 'Edinburgh');
    store2 = new Store('Chappies', 'Glasgow');
    store3 = new Store('Breaks', 'Alnwick');
    assert.equal(0, store1.balance);
    assert.equal(0, store3.balance);
    assert.equal(0, store2.balance);
  });
  it('should check record store stock', function(){
    store1 = new Store('Pips Records', 'Edinburgh');
    album1 = new Album('Tom Waits', 'Bad as Me', 20);
    store1.addAlbum(album1);
    assert.deepEqual([{ artist: 'Tom Waits', title: 'Bad as Me', price: 20 }], store1.stock);
  });
  it('should check record store balance', function(){
    store1 = new Store('Pips Records', 'Edinburgh');
    album1 = new Album('Tom Waits', 'Bad as Me', 20);
    album2 = new Album('Spacehog', 'telephone', 32);
    album3 = new Album('Maiden', 'Wicker Man', 32);
    album4 = new Album('System', 'pickle', 42);
    store1.addAlbum(album1);
    store1.addAlbum(album2);
    store1.addAlbum(album3);
    store1.addAlbum(album4);
    store1.sellRecord(album1);
    store1.sellRecord(album2);
    store1.sellRecord(album3);
    assert.equal(84, store1.balance);
    assert.deepEqual([{ artist: 'System', title: 'pickle', price: 42 }], store1.stock);
  });
  it('should return the finance of the store', function(){
    store1 = new Store('Pips Records', 'Edinburgh');
    album1 = new Album('Tom Waits', 'Bad as Me', 20);
    album2 = new Album('Spacehog', 'telephone', 32);
    album3 = new Album('Maiden', 'Wicker Man', 32);
    store1.addAlbum(album1);
    store1.addAlbum(album2);
    store1.addAlbum(album3);
    store1.sellRecord(album1);
    store1.sellRecord(album2);
    assert.deepEqual([ 'Store Balance: £52',  'Stock Value: £32'], store1.storeFinance());
  });

})

