import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCpE7yt6xAWR4rp41yULtU71wHqKqGofRg',
	authDomain: 'twitter-clone-72177.firebaseapp.com',
	databaseURL: 'https://twitter-clone-72177.firebaseio.com',
	projectId: 'twitter-clone-72177',
	storageBucket: 'twitter-clone-72177.appspot.com',
	messagingSenderId: '110421412898',
	appId: '1:110421412898:web:6cf6ba0e44a038b441ce7b',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
