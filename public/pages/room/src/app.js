

const recordClick = function (recorderBtn) {
  this.recordingEnabled = false
  return () => {
    this.recordingEnabled = !this.recordingEnabled
    recorderBtn.style.color = this.recordingEnabled ? 'red' : 'white'
  }
}

const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)

  //const recorderBtn = document.getElementById('record')
  //recorderBtn.addEventListener('click', recordClick(recorderBtn))

  const socketUrl = 'http://localhost:3000'
  const socketBuilder = new SocketBuilder({socketUrl})
  const view = new View()
  //view.renderVideo({userId: 'teste01', url: 'https://media.giphy.com/media/Anz7tHCWpW6ccpKFQc/giphy.mp4'})
  //view.renderVideo({userId: 'teste02', url: 'https://media.giphy.com/media/4julXRi7RwGesIzuQt/giphy.mp4'})
  //view.renderVideo({userId: 'teste03', isCurrentId: true,  url: 'https://media.giphy.com/media/cInvQ1XCV4TcEPwVrx/giphy.mp4'})
  const media = new Media()
  const deps = {
    view,
    media,
    room,
    socketBuilder
  }

  Business.initialize(deps)
}

window.onload = onload