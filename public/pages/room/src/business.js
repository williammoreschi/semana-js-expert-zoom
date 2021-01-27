class Business{
  constructor({room,media,view, socketBuilder}){
    this.room = room
    this.media = media
    this.view = view

    this.socketBuilder = socketBuilder
    .setOnUserConnected(this.onUserConnected())
    .setOnUserDisconnected(this.onUserDisconnected())
    .build()

    this.socketBuilder.emit('join-room',this.room,'teste01')
    this.currentStream = {}
  }

  static initialize(deps){
    const instance = new Business(deps)
    return instance._init()
  }

  async _init(){
    this.currentStream = await this.media.getCamera()
    this.addVideoStream('user01')
  }

  addVideoStream(userId, stream = this.currentStream){
    const isCurrentId = this.view.renderVideo({
      userId,
      stream
    })
  }

  onUserConnected = function(){
    return userId => {
      console.log('user connected!',userId);
    }
  }

  onUserDisconnected = function(){
    return userId => {
      console.log('user disconnected!',userId);
    }
  }
}