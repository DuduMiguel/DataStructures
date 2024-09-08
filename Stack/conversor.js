class Stack{
    
    #itens
    #count

    constructor(){
        this.#itens = {}
        this.#count = 0
    }

    push(value){
        this.#itens[this.#count] = value
        this.#count++
    }

    pop(){
        
        if(this.isEmpty()){
            return undefined
        }
        this.#count--
        const resultado = this.#itens[this.#count]
        delete this.#itens[this.#count]
        return resultado
    }
    
    isEmpty(){
        return this.#count === 0
    }

    peek(){
        
        if(this.isEmpty()){
            return undefined
        }

        return this.#itens[this.#count - 1]
    }

    size(){
        return this.#count
    }

    toString(){
        
        if(this.isEmpty()){
            return 'Pilha vazia!'
        }

        let toString = `${this.#itens[this.#count - 1]}`

        for(let i = this.#count - 2; i >= 0; i--){
            toString = `${toString},${this.#itens[i]}`
        }

        return toString
    }

}


const decimalConversor = (num, base = 2) => {

    const stack = new Stack()
    let digitos = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let resto = 0
    let resultado = ''
   
    if(base < 2 || base > 36){
        return 'So é possível converter bases entre 2 a 36'
    }

    while(num > 0){
        resto = Math.floor(num % base)
        stack.push(resto)
        num = Math.floor(num / base)
    }
    
    while(!stack.isEmpty()){
        resultado += digitos[stack.pop()]
    }

    return resultado
}

console.log(decimalConversor(10))
console.log(decimalConversor(10,16))

