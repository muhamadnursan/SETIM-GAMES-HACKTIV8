let form = document.getElementById('login')
form.addEventListener('submit', (e) => {
	e.preventDefault();
	let username = document.getElementById('username')
	let password = document.getElementById('password')

	if (username.value === users1[0].username && password.value === users1[0].password) {
		// alert(window.location.href)
		window.location.href = 'index.html'
	} else {
		alert('password salah')
	}
})
//Data
let users1 = [
	{
		name: 'andri',
		username: 'andri123',
		password: '123456',
	}
]

let users = [
	{
		name: 'andri',
		username: 'andri123',
		password: '123456',
	},
	{
		name: 'raka',
		username: 'raka123',
		password: '123456',
	},
	{
		name: 'krisna',
		username: 'krisna123',
		password: '123456',
	},
	{
		name: 'bayu',
		username: 'bayu123',
		password: '123456',
	},
	{
		name: 'raihan',
		username: 'raihan123',
		password: '123456',
	}
]





if (!localStorage.getItem(`users`))
	localStorage.setItem(`users`, JSON.stringify(users, null, 2))
//signUp Function

function tambahUser() {
	console.log('here');
	let objTemp = {}
	let NamaBaru = document.getElementById("NamaBaru").value;
	console.log(NamaBaru);
	let usernameBaru = document.getElementById("UsernameBaru").value;
	let passwordBaru = document.getElementById("PasswordBaru").value;
	let users = JSON.parse(localStorage.getItem(`users`))
	console.log(users)
	objTemp.name = NamaBaru
	objTemp.username = usernameBaru
	objTemp.password = passwordBaru
	users.push(objTemp)
	localStorage.setItem(`users`, JSON.stringify(users, null, 2))

}


//selectors
const login = document.getElementById('loginForm');

//Events
loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let passed = false;
	let username = document.getElementById('floatingInput').value;
	let password = document.getElementById('floatingPassword').value;
	let users = JSON.parse(localStorage.getItem(`users`))
	for (let i = 0; i < users.length; i++) {
		if (users[i].username === username && users[i].password === password) {
			passed = true;
			localStorage.setItem('user', JSON.stringify(users[i]))
		}
	}

	if (passed) window.location.href = 'index.html';
	if (!passed) alert('Invalid username or password');
});
