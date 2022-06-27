
// Start test with the npm install set up command
// Run test with the npm run test command

describe('test greet()', function () {
  it('should greet a name', function () {
    expect(greet('Elizabeth')).toBe('Hello, Elizabeth');
  });
  it('should handle a null value', function () {
    expect(greet()).toBe('Hello there!');
  });
  it('should handle shouting', function () {
    expect(greet('JOSE')).toBe('HELLO JOSE!');
  });
  it('should handle 2 names', function () {
    expect(greet(['Jose', 'Pep'])).toBe('Hello, Jose, Pep');
  });
  it('should handle several names', function () {
    expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toBe(
      'Hello, Alex, Arsene, Jose, Zidane'
    );
  });
}); 

function greet(name) {
  if (name === null || name === undefined)
      return 'Hello there!';
 if (typeof name === typeof []) {
    if (name.length > 0) {
      let names = '';
      name.forEach((index) => {
        names += ', ' + index;
      });
      return 'Hello' + names;
    }
    return 'Hello there!';
  }
  if (name === name.toUpperCase()) {
    return `HELLO ' + ${name} + '!`;
  } else {
    return `Hello, ${name}`;
}
}