
// Start test with the npm install set up command
// Run test with the npm run test command
import greet from './greet name';
describe('test greet()', function () {
  it('should greet a name', function () {
    expect(greet('Elizabeth')).toContain('Hello, Elizabeth');
  });
  it('should handle a null value', function () {
    expect(greet()).toContain('Hello there!');
  });
  it('should handle shouting', function () {
    expect(greet('JOSE')).toContain('HELLO JOSE!');
  });
  it('should handle 2 names', function () {
    expect(greet(['Jose', 'Pep'])).toContain('Hello, Jose, Pep');
  });
  it('should handle several names', function () {
    expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toContain(
      'Hello, Alex, Arsene, Jose, Zidane'
    );
  });
}); 

export default function greet(name) {
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