const expect=require('expect');
const {Users}=require('./users');
describe('Users',()=>{
	var users;







	beforeEach(()=>{
			users=new Users();
			users.users=[{
				id:'1',
				name:'Mike',
				room:'Test1'
			},
			{
				id:'2',
				name:'Jak',
				room:'Test2'
			},
			{
				id:'3',
				name:'Mikes',
				room:'Test1'
			}
			];
		});



	it('Should remove a user',()=>{
		var userId='1';
		var  user=users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);

	});
	it('should not remove user',()=>{
		var userId='5';
		var  user=users.removeUser(userId);

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);


	});
	it('should find user',()=>{
		var userId='2';
		var user=users.getUser(userId);

		expect(user.id).toBe(userId);
	});
	it('should not find user',()=>{
		var userId='22';
		var user=users.getUser(userId);

		expect(user).toNotExist();

	});



	it('Should add new users',()=>{
		

		var users=new Users();
		var user={
			id:'123',
			name:'Aleksa',
			room:'Test'
		};
		var resUser=users.addUser(user.id,user.name,user.room);

		expect(users.users).toEqual([user]);
	});
	it('should return names',()=>{
		var userList=users.getUserList('Test1');

		expect(userList).toEqual(['Mike','Mikes']);
	});

});