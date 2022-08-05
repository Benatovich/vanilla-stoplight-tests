var Stoplight = require('../stoplight.js')

test.only("should start with state==\"red\"", () => {
    var stoplight = new Stoplight()
    expect(stoplight.state).toEqual('red')
})

test.only("should have a .change() function", () => {
    const stoplight = new Stoplight()
    expect(typeof stoplight.change).toEqual('function')
})

test.only("when state is red, calling .change() should transition to green", () => {
    const stoplight = new Stoplight()
    expect(stoplight.state).toEqual('red')
    stoplight.change() // from red (initial state) to green
    expect(stoplight.state).toEqual('green')
})

test.only("when state is green, calling .change() should transition to yellow", () => {
    const stoplight = new Stoplight()
    stoplight.change() // from red (initial state) to green
    expect(stoplight.state).toEqual('green')
    stoplight.change() // from green to yellow
    expect(stoplight.state).toEqual('yellow')
})

test.only("when state is yellow, calling .change() should transition to red", () => {
    const stoplight = new Stoplight()
    stoplight.change() // from red (initial state) to green
    stoplight.change() // from green to yellow
    expect(stoplight.state).toEqual('yellow')
    stoplight.change() // from yellow to red
    expect(stoplight.state).toEqual('red')
})

test.only("when state is not valid, calling .change() should throw an error", () => {
    const stoplight = new Stoplight()
    stoplight.state = 'nonsense'
    expect(typeof stoplight.change).toEqual('function')
    expect(() => stoplight.change()).toThrow()
})

test.only("should have a event registration function .on()", () => {
    const stoplight = new Stoplight()
    expect(typeof stoplight.on).toEqual('function')
})

test(".on should throw an exception if it's not passed a function as its second argument", () => {
    const stoplight = new Stoplight()
    expect(typeof stoplight.on).toEqual('function')
    expect(() => stoplight.on('change', 'not a function')).toThrow()
})

test("when state is red, calling .change() should emit 'change' event with argument \"green\"", done => {
    const stoplight = new Stoplight()
    let immediate = 'invoked synchronously'
    stoplight.on('change', state => {
      expect(immediate).toEqual('invoked asynchronously')
      expect(state).toEqual('green')
      done()
    })
    immediate = 'invoked asynchronously'
    stoplight.change() // from red (initial state) to green
})

test("when state is green, calling .change() should emit 'change' event with argument \"yellow\"", done => {
    const stoplight = new Stoplight()
    let immediate = 'invoked synchronously'
    stoplight.change() // from red (initial state) to green
    stoplight.on('change', state => {
      expect(immediate).toEqual('invoked asynchronously')
      expect(state).toEqual('yellow')
      done()
    })
    immediate = 'invoked asynchronously'
    stoplight.change() // from green to yellow
})

test("when state is yellow, calling .change() should emit 'change' event with argument \"red\"", done => {
    const stoplight = new Stoplight()
    let immediate = 'invoked synchronously'
    stoplight.change() // from red (initial state) to green
    stoplight.change() // from green to yellow
    stoplight.on('change', function(state) {
      expect(immediate).toEqual('invoked asynchronously')
      expect(state).toEqual('red')
      done()
    })
    immediate = 'invoked asynchronously'
    stoplight.change() // from yellow to red
})

test( "when .change() is NOT called, 'change' event should not be emitted", done => {
    const stoplight = new Stoplight()
    stoplight.on('change', () => {
      expect(false).toEqual(true, "'change' event emitted when it shouldn't have been")
    })
    setTimeout(done, 2)
})
