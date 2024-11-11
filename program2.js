const decodeTheRing = function (s, p) {

    // write your code here
    const m=s.length;
    const n=p.length;
    const dp=Array(n+1).fill(false).map(()=>Array(m+1).fill(false));

    dp[0][0]=true; 

    for(let i=1;i<=n;i++){
      if(key[i-1]==='*'){
        dp[i][0]=dp[i-1][0];
      }
    }

  };
  
  module.exports = decodeTheRing;