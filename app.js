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

		let sentence = ""

		switch (this.structure) {
			case "stack":
				sentence += [
					`Stack ${this.distance} ${this.color} blocks`,
					`${["place", "put"][Math.floor(Math.random()*2)]} ${this.distance} ${this.color} blocks in a stack`,
					`${["build", "make", "create", "add"][Math.floor(Math.random()*4)]} a ${this.color} ${["tower","pillar", "vertical line"][Math.floor(Math.random()*3)]} by stacking ${this.distance} blocks`
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
					`${Keywords[Math.floor(Math.random()*6)]} a ${this.structure} of ${this.distance} ${this.color} blocks`,
					`${Keywords[Math.floor(Math.random()*6)]} a ${this.color} ${this.structure} with ${this.distance} blocks`,
				][Math.floor(Math.random()*2)]
				break
		}

		sentence += " "

		const gap = [1,2][Math.floor(Math.random()*2)]
		switch (this.position) {
			case "center":
			case "middle":
				sentence += [
					`${gap} space${gap > 1 ? "s" : ""} away from the ${["center", "middle"][Math.floor(Math.random()*2)]}`,
					`${gap} block${gap > 1 ? "s" : ""} away from the ${["center", "middle"][Math.floor(Math.random()*2)]}`,
					`at the ${["center", "middle"][Math.floor(Math.random()*2)]}`,
					`near the ${["center", "middle"][Math.floor(Math.random()*2)]}`,
					`around the ${["center", "middle"][Math.floor(Math.random()*2)]}`,
					`in the ${["center", "middle"][Math.floor(Math.random()*2)]}`,
					`toward the ${["center", "middle"][Math.floor(Math.random()*2)]}`
				][Math.floor(Math.random()*7)]
				break
			case "edges":
				sentence += [
					`${gap} space${gap > 1 ? "s" : ""} away from an edge`,
					`${gap} block${gap > 1 ? "s" : ""} away from an edge`,
					`near an edge`,
					`on an edge`,
					`along an edge`,
					`against an edge`
				][Math.floor(Math.random()*6)]
				break
			case "corner":
				sentence += [
					`on the corner`,
					`on a corner`,
					`in a corner`,
					`in the corner`
				][Math.floor(Math.random()*4)]
				break
		}

		const board = ["grid", "board"][Math.floor(Math.random()*2)]

		sentence += [
			``,
			` of the ${board}`
		][Math.floor(Math.random()*2)]


		sentence = sentence.replace(' a orange', ' an orange')
		this.sentence = sentence.trim()
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