module.exports = function solveEquation(equation) {
    var arr = equation.split(' ');
    var answer = [];
    function compareNumeric(a, b) {
          if (a > b) return 1;
          if (a < b) return -1;
        }
    if(arr[7]=='-')
    {
        arr[8]=arr[8]*(-1);
    }
    if(arr[3]=='-')
    {
        arr[4] = arr[4]*(-1);
    }
    var d=Math.pow(arr[4],2)-4*arr[0]*arr[8];
    var x1=(arr[4]*(-1)-Math.sqrt(d))/(2*arr[0]);
    var x2=(arr[4]*(-1)+Math.sqrt(d))/(2*arr[0]);
    x1=Math.round(x1);
    x2=Math.round(x2);
    answer.push(x2);
    answer.push(x1);
    answer.sort(compareNumeric);
    return answer;



  // your implementation
}
