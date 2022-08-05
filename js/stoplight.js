class Stoplight {
    constructor() {
        this.state = 'red'
        console.log('state|', this.state);
    }
        change() {
            if(this.state === 'red'){
                this.state = 'green'
            } else if (this.state === 'green'){
                this.state = 'yellow'
            } else if (this.state === 'yellow') {
                this.state = 'red'
            } else if (this.state === undefined) {
                throw 'error'
            }
        }
}
    
module.exports = Stoplight
