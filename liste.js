function TriTableau(tab) {
  for (let i = 0; i < tab.length - 1; i++) {
    for (s = 0; s < tab.length - i - 1; s++) {
      if (tab[s] > tab[s + 1]) {
        var tmp = tab[s];
        tab[s] = tab[s+ 1];
        tab[s + 1] = tmp;
       
      }
    }
  }
}

let tableau = [
  2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42,
];
console.log(tableau);
TriTableau(tableau);
console.log(tableau);
