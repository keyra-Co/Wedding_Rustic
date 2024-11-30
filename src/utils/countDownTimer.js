export const calculateTimeLeft = (targetDate) => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  const formatTime = (time) => {
    return String(time).padStart(2, '0');
  };

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = [
      { time: formatTime(Math.floor(difference / (1000 * 60 * 60 * 24))), name: 'Days' },
      { time: formatTime(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))), name: 'Hours' },
      { time: formatTime(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))), name: 'Mins' },
      { time: formatTime(Math.floor((difference % (1000 * 60)) / 1000)), name: 'Secs' },
    ];
  }

  return timeLeft;
};
