var assert = require ("chai").assert;
var checkFollowerFunction = require("../lib/follower-functions");

describe ("Get names in social network", function() {
  it("should pass if it lists all names of people in social network 'data'", function() {
    assert.equal({names:["bob", "alice"]},checkFollowerFunction.getNames({1:{name: "bob", age: 30}},{2: {name: "alice", age: 25}}));
  });
});
