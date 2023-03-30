import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onPlay, 500));

function onPlay(data) {
  const currentTime = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, currentTime);
}

function insertTime() {
  const value = localStorage.getItem(STORAGE_KEY);
  if (value) {
    const timeValueJSON = JSON.parse(value);
    const { seconds } = timeValueJSON;
    return seconds;
  }
}

player
  .setCurrentTime(insertTime())
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
