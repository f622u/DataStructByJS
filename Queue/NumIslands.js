/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  this.island = 0;
  for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j <grid[0].length; j++) {
          if (grid[i][j] == '1') {
              this.island++;
              infect(i, j, grid);
          }
      }
  }
  return this.island;
};

function infect (i, j, grid) {
  grid[i][j] = '2';
  if(i < grid.length -1 && grid[i+1][j] == '1') infect(i+1, j, grid);
  if(j < grid[0].length -1 && grid[i][j+1] == '1') infect(i, j+1, grid);
  if(i > 0 && grid[i-1][j] == '1') infect(i-1, j, grid);
  if(j > 0 && grid[i][j-1] == '1') infect(i, j-1, grid);
}

// 感染法