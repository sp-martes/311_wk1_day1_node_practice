const today = () => {
  let today = new Date()
  return today.toLocaleDateString('default', { weekday: 'long' });

}

const calendar = () => {
  let today = new Date()
  return today.toLocaleString('default', { month: 'short', day:'numeric', year: 'numeric'})
}

const currentTime = () => {
  let today = new Date()
  let time = today.toLocaleTimeString();
  if(time[1] == ':'){
    time = '0' + time;
  }
  return time
  
}

module.exports = {
  today,
  calendar,
  currentTime
}