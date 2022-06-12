import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const playCurrentTime = 'videoplayer-current-time';
const getTime = localStorage.getItem(playCurrentTime);

player.setCurrentTime(Number(getTime));

player.on('timeupdate', throttle(event => {
   setLocalStoreg(event);
}, 250),
);

const setLocalStoreg = event => {
	localStorage.setItem(playCurrentTime, event.seconds.toString());
	if (event.seconds === event.duration) {
		localStorage.clear();
	}
};