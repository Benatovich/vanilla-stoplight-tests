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
            } else 

            if (this.state === 'green'){
                if(this.changeHandler instanceof Function){
                    this.changeHandler('yellow')
                }
                this.state = 'yellow'
            } else 

            if (this.state === 'yellow') {
                if(this.changeHandler instanceof Function){
                    this.changeHandler('red')
                }
                this.state = 'red'
            } else 

            if (this.state !== ('red' || 'yellow' || 'green')) {
                throw new Error()
            }
        }
        
        on(eventName, handler) {
            if(!(handler instanceof Function)) {
                throw new Error(`${handler} is not a function`)
            } 
            if(eventName !== null){
                this.changeHandler = handler;
            }

        }
        
}
    
module.exports = Stoplight
