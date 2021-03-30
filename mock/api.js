const getList = () => ({
	code: 200,
	data: {
		list: [
			{
				key: '1',
				id: '1',
				name: 'niu1',
				age: 20
			},
			{
				key: '2',
				id: '2',
				name: 'niu2',
				age: 21
			}
		]
	}
});

export {
	getList
};