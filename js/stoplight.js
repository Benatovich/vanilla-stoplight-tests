class Stoplight {
    constructor() {
        this.state = 'red'
        this.changeHandler = {};
    }

        change() { 
            if(this.state === 'red'){
                if(this.changeHandler instanceof Function){
                    this.changeHandler('green')
                }
                this.state = 'green';
                console.log('|!3', this.state)
            } else if (this.state === 'green'){
                this.state = 'yellow'
            } else if (this.state === 'yellow') {
                this.state = 'red'
            } else if (this.state !== ('red' || 'yellow' || 'green')) {
                throw new Error()
            }
        }
        
        on(eventName, handler) {
            if(!(handler instanceof Function)) {
                throw new Error(`${handler} is not a function`)
            } 
            if(eventName === 'change'){
                this.changeHandler = handler;
            }

        }
        
}
    
module.exports = Stoplight
