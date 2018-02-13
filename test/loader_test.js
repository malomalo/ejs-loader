import assert from 'assert';
import compiler from './compiler.js';

describe('EJS', function() {
  
  it('allow custom tags', function () {
    const stats = compiler('example.txt');
    console.log(stats);
    const output = stats.toJson().modules[0].source;

    expect(output).toBe(`export default "Hey Alice!\\n"`);
  });
  
});



