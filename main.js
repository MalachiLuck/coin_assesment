let coin = {
    state: 0,
    flip: function() {
       this.state = Math.round(Math.random())
    },
    toString: function() {
       coin.flip()
       if (this.state === 0) {
            document.body.append("Heads")
       }
       else {
           document.body.append("Tails")
       }
    },
    toHTML: function() {
        let image = document.createElement('img');
      
        coin.flip()
        if (this.state === 0) {
            image.src = "C:/Users/malac/Documents/Kenzie/coin_assesment/images/1000PxE2.png"
            document.body.append(image)
        }
        else {
            image.src = "C:/Users/malac/Documents/Kenzie/coin_assesment/images/1000PxE3.png"
            document.body.append(image)
        }

        return image;
    }
};

function display20Flips() {
    for (let index= 0; index <= 20; index += 1) {
        coin.toString()
    }
}
display20Flips()

function display20Images() {
    for (let index= 0; index <= 20; index += 1) {
        coin.toHTML()
    }
}
display20Images()