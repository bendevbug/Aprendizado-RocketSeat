class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou a fila!`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}

const fila = new Queue()

fila.enqueue('Ben')
fila.enqueue('Benny')
fila.enqueue('Bento')
fila.dequeue()
fila.dequeue()

