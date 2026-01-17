class UnionFind {
  parent: number[];
  rank: number[];

  constructor(size: number) {
    this.parent = new Array(size + 1);
    this.rank = new Array(size + 1).fill(0);
    for (let i = 1; i <= size; i++) {
      this.parent[i] = i;
    }
  }
  find(x: number): number {
    console.log(x, this.parent);
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x: number, y: number): void {
    const px = this.find(x);
    const py = this.find(y);
    if (px === py) return;
    if (this.rank[px] < this.rank[py]) {
      this.parent[px] = py;
    } else if (this.rank[px] > this.rank[py]) {
      this.parent[py] = px;
    } else {
      this.parent[py] = px;
      this.rank[px]++;
    }
  }
}

function areConnected(
  n: number,
  threshold: number,
  queries: number[][]
): boolean[] {
  const uf = new UnionFind(n);
  for (let d = threshold + 1; d <= n; d++) {
    for (let m = d; m <= n; m += d) {
      uf.union(m, d);
    }
  }
  const answer: boolean[] = [];
  for (const [a, b] of queries) {
    answer.push(uf.find(a) === uf.find(b));
  }
  return answer;
}
console.log(
  areConnected(5, 1, [
    [4, 5],
    [4, 5],
    [3, 2],
    [2, 3],
    [3, 4],
  ])
);

console.log(
  areConnected(6, 2, [
    [1, 4],
    [2, 5],
    [3, 6],
  ])
);
