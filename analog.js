const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 600
canvas.height = 600
const width = canvas.width
const height = canvas.height
const r = 250
const deg = Math.PI/180
let progress = 0
setInterval(() => {
    c.clearRect(0, 0, width, height)
    c.beginPath()
    c.arc(width/2, height/2, r, 0, Math.PI*2);
    c.lineWidth = 5
    c.stroke()
    c.closePath()
    

    c.beginPath()
    c.lineWidth = 1
    for(let i=0; i <= 360; i+=6) {
        if(i % 30 !== 0 ) {
            c.moveTo(-((r/1.1)*Math.cos(i*deg) - width/2), -((r/1.1)*Math.sin(i*deg) - width/2))
            c.lineTo(-(r*Math.cos(i*deg) - width/2), -(r*Math.sin(i*deg) - width/2))
        }
    }
    c.stroke()
    c.closePath()
    
    c.beginPath()
    c.lineWidth = 5
    for(let i=0; i <= 360; i+=6) {
        if(i % 30 === 0 ) {
            c.moveTo(-((r/1.1)*Math.cos(i*deg) - width/2), -((r/1.1)*Math.sin(i*deg) - width/2))
            c.lineTo(-(r*Math.cos(i*deg) - width/2), -(r*Math.sin(i*deg) - width/2))
        }
    }
    c.stroke()
    c.closePath()


    progress < 3600 ? progress += 1 : progress = 0

    let rHAngle = ((new Date().getHours() - 12)*30) + (((new Date().getMinutes()*60) + new Date().getSeconds())*(30/3600))
    let fHAngle = rHAngle + 90
    let hour = {
        length: 100,
        x1: width/2,
        y1: width/2,
        x2: -(100*Math.cos((fHAngle)*deg) - width/2),
        y2: -(100*Math.sin((fHAngle)*deg) - width/2),
    }

    //HOUR
    c.beginPath()
    c.moveTo(hour.x1, hour.y1)
    c.lineTo(hour.x2, hour.y2)
    c.stroke()
    c.closePath()

    let bHour = {
        length: 100,
        x1: width/2,
        y1: width/2,
        x2: -(30*Math.cos((fHAngle + 180)*deg) - width/2),
        y2: -(30*Math.sin((fHAngle + 180)*deg) - width/2),
    }

    //HOUR
    c.beginPath()
    c.moveTo(bHour.x1, bHour.y1)
    c.lineTo(bHour.x2, bHour.y2)
    c.stroke()
    c.closePath()


    let rMAngle = (new Date().getMinutes()*6) + (new Date().getSeconds()*0.1)
    let fMAngle = rMAngle + 90
    
    //MINUTE
    let minute = {
        length: 200,
        x1: width/2,
        y1: width/2,
        x2: -(200*Math.cos((fMAngle)*deg) - width/2),
        y2: -(200*Math.sin((fMAngle)*deg) - width/2),
    }


    c.beginPath()
    c.moveTo(minute.x1, minute.y1)
    c.lineTo(minute.x2, minute.y2)
    c.stroke()
    c.closePath()


    let bMinute = {
        length: 30,
        x1: width/2,
        y1: width/2,
        x2: -(30*Math.cos((fMAngle+180)*deg) - width/2),
        y2: -(30*Math.sin((fMAngle+180)*deg) - width/2),
    }
    
    c.beginPath()
    c.moveTo(bMinute.x1, bMinute.y1)
    c.lineTo(bMinute.x2, bMinute.y2)
    c.stroke()
    c.closePath()
    
    
    let rSAngle = new Date().getSeconds() * 6
    let fSAngle = rSAngle + 90
    //SECOND
    let second = {
        length: 200,
        x1: width/2,
        y1: width/2,
        x2: -(200*Math.cos(fSAngle*deg) - width/2),
        y2: -(200*Math.sin(fSAngle*deg) - width/2),
    }


    c.beginPath()
    c.moveTo(second.x1, second.y1)
    c.lineTo(second.x2, second.y2)
    c.lineWidth = 2
    c.stroke()
    c.closePath()


    let bSecond = {
        length: 30,
        x1: width/2,
        y1: width/2,
        x2: -(30*Math.cos((fSAngle+180)*deg) - width/2),
        y2: -(30*Math.sin((fSAngle+180)*deg) - width/2),
    }

    c.beginPath()
    c.moveTo(bSecond.x1, bSecond.y1)
    c.lineTo(bSecond.x2, bSecond.y2)
    c.lineWidth = 2
    c.stroke()
    c.closePath()


    // MIDDLE DOT
    c.beginPath()
    c.arc(width/2, height/2, r/32, 0, Math.PI*2);
    c.fillStyle = "rgb(255, 255, 255)"
    c.fill()
    c.closePath()

    console.log(fHAngle, fMAngle, fSAngle)

}, 1000)

//ORIGINAL
// c.beginPath()
// c.moveTo(320, 320)
// c.lineTo(150, 150)
// c.stroke()
// c.closePath()