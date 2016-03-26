var assert = require('chai').assert;
var Customer = require('../customer');
var Album = require('../album');
var Store = require('../recordStore');

describe('Customer', function(){
  it('should return customers name', function(){
    customer1 = new Customer('Hans', 1002)
    assert.equal('Hans', customer1.name)
  });
  it('should return customers cash', function(){
    customer1 = new Customer('Hans', 1002)
    assert.equal(1002, customer1.money)
  });
  it('should return customers buy record', function(){
    customer1 = new Customer('Hans', 1002);
    customer2 = new Customer('steve', 19);
    store1 = new Store('Pips Records', 'Edinburgh');
    album1 = new Album('Tom Waits', 'Bad as Me', 20);
    album2 = new Album('Spacehog', 'telephone', 32);
    album3 = new Album('Maiden', 'Wicker Man', 32);
    album4 = new Album('System', 'pickle', 42);
    store1.addAlbum(album1);
    store1.addAlbum(album2);
    store1.addAlbum(album3);
    store1.addAlbum(album4);
    customer1.buysRecord(store1, album1);
    customer2.buysRecord(store1, album1);
    assert.equal(982, customer1.money);
    assert.deepEqual([{ artist: 'Tom Waits', title: 'Bad as Me', price: 20 }], customer1.collection);
    assert.deepEqual([{ artist: 'Spacehog', title: 'telephone', price: 32 }, { artist: 'Maiden', title: 'Wicker Man', price: 32 }, { artist: 'System', title: 'pickle', price: 42 }], store1.stock);
    assert.equal(20, store1.balance);
    assert.equal(19, customer2.money);
    assert.deepEqual([], customer2.collection);
  });
it('should let customers sell record', function(){
  customer1 = new Customer('Hans', 1002);
  store1 = new Store('Pips Records', 'Edinburgh');
  album1 = new Album('Tom Waits', 'Bad as Me', 20);
  album2 = new Album('Spacehog', 'telephone', 32);
  album3 = new Album('Maiden', 'Wicker Man', 32);
  album4 = new Album('System', 'pickle', 42);
  store1.addAlbum(album1);
  store1.addAlbum(album2);
  store1.addAlbum(album3);
  store1.addAlbum(album4);
  customer1.buysRecord(store1, album1);
  customer1.buysRecord(store1, album2);
  customer1.buysRecord(store1, album3);

  ///////then we call the customer sells
  customer1.sellsRecord(store1, album2);
  assert.deepEqual([{ artist: 'Tom Waits', title: 'Bad as Me', price: 20 },{ artist: 'Maiden', title: 'Wicker Man', price: 32 }], customer1.collection);
  assert.equal(950, customer1.money);
  assert.deepEqual([{ artist: 'System', title: 'pickle', price: 42 }, { artist: 'Spacehog', title: 'telephone', price: 32 }], store1.stock);
  assert.equal(52, store1.balance);
});
});
 