var getIcon = function(id) {
  if (id >= 200 && id < 300) {
    return 'rain';
  } else if (id >= 300 && id < 500) {
    return 'sleet';
  } else if (id >= 500 && id < 600) {
    return 'rain';
  } else if (id >= 600 && id < 700) {
    return 'snow';
  } else if (id >= 700 && id < 800) {
    return 'fog';
  } else if (id === 800) {
    return 'clear-day';
  } else if (id >= 801 && id < 803) {
    return 'partly-cloudy-day';
  } else if (id >= 802 && id < 900) {
    return 'cloudy';
  } else if (id === 905 || (id >= 951 && id <= 956)) {
    return 'wind';
  } else if (id >= 900 && id < 1000) {
    return 'rain';
  }
};

export { getIcon };
