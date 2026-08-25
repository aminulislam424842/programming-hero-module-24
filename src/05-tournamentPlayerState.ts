type Player = {
  name: string;
  scores: number[];
}

function getPlayerStats(player: Player): { name: string; average: number; rank: string } {
  const total = player.scores.reduce((total, score) => total + score, 0);
  const average = total / player.scores.length
  return {
    name: player.name,
    average: average,
    rank: (average >= 80) ? "MVP" : " Rookie"
  }

}

console.log(getPlayerStats({
  name: "Nova",
  scores: [90, 85, 95, 80]
})
)
console.log(getPlayerStats({
  name: "Zex",
  scores: [60, 55, 70, 50]
})
)