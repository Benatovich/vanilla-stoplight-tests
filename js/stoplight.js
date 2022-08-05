class Stoplight {
    constructor() {
        this.state = 'red'
        
    }
        change() {
            if(this.state === 'red'){
                this.state = 'green'
            } else if (this.state === 'green'){
                this.state = 'yellow'
            } else if (this.state === 'yellow') {
                this.state = 'red'
            } else if (this.state !== ('red' || 'yellow' || 'green')) {
                throw new Error()
            }
        }
}
    
module.exports = Stoplight
