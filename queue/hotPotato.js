class Queue{
    
    #itens
    #count
    #lowestCount

    constructor(){
        this.#itens = {}
        this.#count = 0
        this.#lowestCount = 0
    }

    enqueue(value){
        this.#itens[this.#count] = value
        this.#count++
    }

    dequeue(){
        
        if(this.isEmpty()){
            return undefined
        }

        const result = this.#itens[this.#lowestCount]
        delete this.#itens[this.#lowestCount]
        this.#lowestCount++
        return result
    }

    isEmpty(){
        return this.size() === 0
    }

    size(){
        return this.#count - this.#lowestCount
    }

    clear(){
        this.#itens = {}
        this.#count = 0
        this.#lowestCount = 0
    }

    peek(){
        if(this.isEmpty()){
            return undefined
        }

        return this.#itens[this.#lowestCount]
    }

    toString(){
        if(this.isEmpty()){
            return ''
        }

        let objString = this.#itens[this.#lowestCount]

        for(let i = this.#lowestCount + 1; i < this.#count; i++){
            objString = `${objString},${this.#itens[i]}`
        }

        return objString
    }
}


const hotPotato = (names, number) => {

    const queue = new Queue()
    const elimitatedList = []

    for(let i = 0; i < names.length; i++){
        queue.enqueue(names[i])
    }

    while(queue.size() > 1){
        
        for(let i = 0; i < number; i++){
            queue.enqueue(queue.dequeue())
        }

        elimitatedList.push(queue.dequeue())
    }

    return{
        elimitated: elimitatedList,
        winner: queue.dequeue()
    }
}


const names = ['Dudu','Pedro','João']
const result = hotPotato(names,5)

result.elimitated.forEach(name => {
    console.log(`${name} was eliminated from the hot potato game.`)
})

console.log(`The winner is: ${result.winner}`)


