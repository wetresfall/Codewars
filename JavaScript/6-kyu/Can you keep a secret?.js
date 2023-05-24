// https://www.codewars.com/kata/5351b35ebaeb67f9110012d2

function createSecretHolder(secret) {
  let _secret = secret;
  return {
    setSecret: function(s) {
      _secret = s;
    },
    getSecret: function() {
      return _secret;
    }
  };
}
