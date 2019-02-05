const expect=require('expect');

const {isRealString}=require('./validation');

describe('isRealString',()=>{
	it('should reject non-string',()=>{
		var res=isRealString(97);
		expect(res).toBe(false);
	});
	it('should reject only spaces',()=>{
		var res=isRealString('    ');
		expect(res).toBe(false);
	});
	it('should allow string with non-space characters',()=>{
		var res=isRealString('   Aleksa   ');
		expect(res).toBe(true);
	});
});