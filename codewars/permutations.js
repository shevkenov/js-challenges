function permutations (string) {
    if (string.length === 1) { return [string]; }
  
    var split = string.split("")
      , perms = []
      , i, l;
  
    for(i = 0, l = split.length; i < l; i++) {
      var remainder = split.slice(0)
        , firstChar = remainder.splice(i, 1)[0]
        , remainderPerms = permutations(remainder.join(""));
  
      remainderPerms.forEach(function (perm) {
        perm = firstChar + perm;
        if (perms.indexOf(perm) === -1) { perms.push(perm) };
      });
    }
  
    return perms;
  }

  console.log(permutations('abc'));

  //aabb
  //[a,a,b,b] => [a,b,b]