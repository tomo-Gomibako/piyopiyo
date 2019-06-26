function answerOfA(m) {
  var sum1 = 0;
  var sum2 = 0;
  for (var i = 0; i < m.length; i++) {
    sum1 += m[i] * m[i];
    sum2 += m[i];
  }
  sum2 = sum2 * sum2;
  return Math.abs(sum1 - sum2);
}


function answerOfB(ave, member, M, N) {
  var sum = 0;
  var counts = 0;
  for (var i = 0; i < N; i++) {
    sum += ave[i] * member[i];
    counts += member[i];
  }
  return sum / counts;
}

function answerOfC(m) {
  var directions = [[0,1],[1,0],[0,-1],[-1,0]];
  var score = 0;
  for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m[i].length; j++) {
      var target = m[i][j];
      var matches = 0;
      directions.forEach(function (direction) {
        var _i = direction[0];
        var _j = direction[1];
        if (typeof m[i+_i] !== "undefined" && target === m[i+_i][j+_j]) {
          matches++;
        }
      });
      if (target === matches) {
        score += target * target;
      }
    }
  }
  return score;
}