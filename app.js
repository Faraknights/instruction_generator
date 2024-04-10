const Color = ["red", "orange", "blue", "purple", "green", 'yellow']
const Keywords = ["add", "place", "build", "make", "create", "put"]
const Structure = ["row", "line", "pillar", "stack", "tower"]
const Position = ["center", "edges", "middle", "corner"]
const Direction = ["vertical", "horizontal", "diagonal"]

class SentenceGenerator {
    constructor() {
        this.color = null
        this.structure = null
        this.position = null
        this.direction = null
        this.distance = null
				this.sentence = ""
    }

    generate() {
        this.color = Color[Math.floor(Math.random() * Color.length)]
        this.structure = Structure[Math.floor(Math.random() * Structure.length)]
        this.position = Position[Math.floor(Math.random() * Position.length)]
        this.direction = Direction[Math.floor(Math.random() * Direction.length)]
        this.distance = Math.ceil(Math.random() * 9) + 1

				var sentence = ""

        switch (this.structure) {
					case "stack":
						sentence += [
							`Stack ${this.distance} ${this.color} blocks`,
							`${["place", "put"][Math.floor(Math.random()*2)]} ${this.distance} ${this.color} blocks into a stack`,
							`${["build", "make", "create", "add"][Math.floor(Math.random()*4)]} a ${this.color} ${["tower","pillar", "vertical line"][Math.floor(Math.random()*2)]} by stacking ${this.distance} blocks`
						][Math.floor(Math.random()*3)]
						break
					case "line":
						sentence += [
							`${["add", "place", "put"][Math.floor(Math.random()*3)]} ${this.distance} ${this.color} blocks in a ${this.direction} line`,
							`${["build", "make", "create"][Math.floor(Math.random()*3)]} a ${this.direction} line using ${this.distance} ${this.color} blocks`,
						][Math.floor(Math.random()*2)]
						break
					default:
						sentence += [
							`${["place", "put"][Math.floor(Math.random()*2)]} ${this.distance} ${this.color} blocks into a ${this.structure}`,
							`${Keywords[Math.floor(Math.random()*6)]} a ${this.structure} of ${this.distance} ${this.color} blocks`,
							`${Keywords[Math.floor(Math.random()*6)]} a ${this.color} ${this.structure} with ${this.distance} blocks`,
							`${Keywords[Math.floor(Math.random()*6)]} a ${this.distance} ${this.color} blocks ${this.structure}`
						][Math.floor(Math.random()*4)]
						break
				}

				sentence += " "

        switch (this.position) {
					case "center":
					case "middle":
						sentence += [
							`at the ${["center", "middle"][Math.floor(Math.random()*2)]}`,
							`in the ${["center", "middle"][Math.floor(Math.random()*2)]}`,
							`toward the ${["center", "middle"][Math.floor(Math.random()*2)]}`
						][Math.floor(Math.random()*3)]
						break
					case "edges":
						sentence += [
							`against the edges`,
							`onto the edges`,
							`against the edges`
						][Math.floor(Math.random()*3)]
						break
					case "corner":
						sentence += [
							`at the corner`,
							`into the corner`,
							`at the corner`
						][Math.floor(Math.random()*3)]
						break
				}
				
				const board = ["grid", "board"][Math.floor(Math.random()*2)]

				sentence += [
					``,
					` of the ${board}`
				][Math.floor(Math.random()*2)]


				sentence = sentence.replace(' a orange', ' an orange')
				this.sentence = sentence
    }
}

const instruction = document.querySelector("#instruction")
const sentenceGenerator = new SentenceGenerator()

sentenceGenerator.generate()
instruction.innerHTML = sentenceGenerator.sentence

document.querySelector("#generateButton").addEventListener('click', (event) => {
	sentenceGenerator.generate()
	instruction.innerHTML = sentenceGenerator.sentence
	navigator.clipboard.writeText(sentenceGenerator.sentence)
})