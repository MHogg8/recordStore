var assert = require('chai').assert;
var Album = require('../album');

describe('Albums', function(){
  it('should check album artist', function(){
    album1 = new Album('Dream Theater', 'The Astonishing', 32);
    album2 = new Album('Puccini', 'Arias', 12);
    album3 = new Album('Pain of Salvation', 'Remedy Lane', 18);
    assert.equal('Dream Theater', album1.artist);
    assert.equal('Puccini', album2.artist);
    assert.equal('Pain of Salvation', album3.artist);
  });
  it('should check album title', function(){
    album1 = new Album('Dream Theater', 'The Astonishing', 32);
    album2 = new Album('Puccini', 'Arias', 12);
    album3 = new Album('Pain of Salvation', 'Remedy Lane', 18);
    assert.equal('The Astonishing', album1.title);
    assert.equal('Arias', album2.title);
    assert.equal('Remedy Lane', album3.title);
  });
  it('should check album price', function(){
    album1 = new Album('Dream Theater', 'The Astonishing', 32);
    album2 = new Album('Puccini', 'Arias', 12);
    album3 = new Album('Pain of Salvation', 'Remedy Lane', 18);
    assert.equal(32, album1.price);
    assert.equal(12, album2.price);
    assert.equal(18, album3.price);
  });
})