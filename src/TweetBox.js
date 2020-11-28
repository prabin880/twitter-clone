import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';
const TweetBox = () => {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const sentTweet = e => {
		e.preventDefault();
		db.collection('posts').add({
			displayName: 'Prabin Sunar',
			username: 'sunar_prabin',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
		});

		setTweetMessage('');
		setTweetImage('');
	};

	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" />
					<input
						value={tweetMessage}
						onChange={e => setTweetMessage(e.target.value)}
						type="text"
						placeholder="What's happening?"
					/>
				</div>
				<input
					value={tweetImage}
					onChange={e => setTweetImage(e.target.value)}
					className="tweetBox__inputImage"
					type="text"
					placeholder="Enter image URL"
				/>
				<Button
					onClick={sentTweet}
					type="submit"
					className="tweetBox__tweetButton"
				>
					Tweet
				</Button>
			</form>
		</div>
	);
};

export default TweetBox;
