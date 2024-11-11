const getTotalIsles = function (grid) {
  if(!grid||grid.length===0) return 0;
  const rows=grid.length;
  const cols=grid[0].length;
  let count=0;
  const dfs=(i,j)=>{
    if(i<0||i>=rows||j<0||j>=cols||grid[i][j]==='W') return;
    grid[i][j]='0';
    dfs(i+1,j);
    dfs(i-1,j);
    dfs(i,j+1);
    dfs(i,j-1);
  }

  // write your code here

};

module.exports = getTotalIsles;