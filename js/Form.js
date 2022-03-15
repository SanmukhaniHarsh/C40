class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder","Enter Your Name")
    this.button = createButton("Play")
    this.titleImg = createImg("./assets/title.png","game title")
    this.greeting = createElement("h2")
  }
  setElementsPosition() {
    this.titleImg.position(120,100)
    this.input.position(width/2-110,height/2 - 80)
    this.button.position(width/2-90,height/2 - 20)
    this.greeting.position(width/2-300,height/2-100)

  }

  setElementsStyle() {
    this.titleImg.class("gameTitle")
    this.input.class("customInput")
    this.button.class("customButton")
    this.greeting.class("greeting")
  }

  hide() {
    this.button.hide()
    this.input.hide()
    this.greeting.hide()

  }

  handleMousePressed() {
    this.button.mousePressed( ()=>{
      this.button.hide()
      this.input.hide()
      var message = `hello ${this.input.value()}
      </br> wait for another player to join...`
      this.greeting.html(message)
      playerCount += 1
      player.name = this.input.value()
      player.index = playerCount
      player.addPlayers()      
      player.updateCount(playerCount)
      player.getDistance()
    }) 
  }
  
  display() {
    this.setElementsPosition()
    this.handleMousePressed()
    this.setElementsStyle()
  }

}
