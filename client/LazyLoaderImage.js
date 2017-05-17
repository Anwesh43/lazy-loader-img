class LazyLoaderImage {
    constructor(src,x,y,w,h) {
        this.img = document.createElement('img')
        this.src = src
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.circleLoader = new CircleLoader()
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
        },50)
    }
    render() {
        this.context.clearRect(0,0,this.w,this.h)
        this.context.fillStyle = "#9E9E9E"
        this.context.fillRect(0,0,this.w,this.h)
        this.circleLoaded.draw(context,this.w/2,this.h/2,this.w/6)
        this.circleLoaded.update()
    }
}
class CircleLoader  {
    constructor() {
        this.deg = 0
    }
    draw(context,x,y,r) {
        context.strokeStyle = '#BDBDBD'
        context.beginPath()
        for(var i=this.deg;i<this.deg+60;i++) {
            const point = {x:x+r*Math.cos(i*Math.PI/180),y:y+r*Math.sin(i*Math.PI/180)}
            if(i == this.deg) {
                context.moveTo(point.x,point.y)
            }
            else {
                context.lineTo(point.x,point.y)
            }
        }
        context.stroke()
    }
    update() {
        this.deg += 10
    }
}
