export default roads = [
    "Alice's House-Bob's House",
    "Alice's House-Post Office",
    "Daria's House-Ernie's House",
    "Ernie's House-Grete's House",
    "Grete's House-Shop",
    "Marketplace-Post Office",
<<<<<<< HEAD
    "Marketplace-Town Hall",
    "Alice's House-Cabin",
=======
];
"Alice's House-Cabin",
>>>>>>> 8ada5a1946a1a6988702090d98d88fea6e17c903
    "Bob's House-Town Hall",
    "Daria's House-Town Hall",
    "Grete's House-Farm",
    "Marketplace-Farm",
    "Marketplace-Shop",
    "Shop-Town Hall"

<<<<<<< HEAD
]
=======
    function buildGraph(edges) {
        let graph = Object.create(null);
        function addEdge(from, to) {
          if (graph[from] == null) {
            graph[from] = [to];
          } else {
            graph[from].push(to);
          }
        }
        for (let [from, to] of edges.map(r => r.split("-"))) {
          addEdge(from, to);
          addEdge(to, from);
        }
        return graph;
      }
      
      const roadGraph = buildGraph(roads);
>>>>>>> 8ada5a1946a1a6988702090d98d88fea6e17c903
