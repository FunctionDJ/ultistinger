let chars = `Bowser
Mr. Game & Watch
Kirby
Pikachu
Pichu
Jigglypuff
Dr. Mario
Falco
Donkey Kong
Ness
Marth
Mario
Link
Luigi
Peach
Samus
Captain Falcon
Mewtwo
Ganondorf
Fox
Ice Climbers
Roy
Sheik
Yoshi
Young Link
Zelda`.split("\n")

const costumes = "44644554545554556454455655".split("")

const info = chars.map((char, i) => {
  return {
    name: char,
    amount: costumes[i]
  }
})

const result = []
for (let i = 0; i < info.length; i++) {
  const entry = info[i]

  for (let n = 1; n <= entry.amount; n++) {
    result.push(`${entry.name}_${n}`)
  }
}

console.log(result.join("\n"))