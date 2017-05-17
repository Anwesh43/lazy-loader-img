class LazyLoaderImage {
    constructor(src,x,y,w,h) {
        this.img = document.createElement('img')
        this.src = src
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    create() {
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        this.image = new Image()
        this.canvas.width = this.w
        this.canvas.height = this.h
        this.img.style.transform = `translateX(${this.x}px)translateY(${this.y}px)`
        document.body.appendChild(this.img)
        this.startRenderLoop()
    }
    startRenderLoop() {
        setInterval(()=>{
            this.render()
        },100)
    }
    render() {
        this.context.clearRect(0,0,this.w,this.h)
        this.context.fillStyle = "#9E9E9E"
        this.context.fillRect(0,0,this.w,this.h)
    }
}
