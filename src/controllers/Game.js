class Game {

    constructor (table, matriz) {
    
        this.table = $(table)
   
        this._matriz = matriz

        this._colors = ["pink", "dodgerblue", "lime", "limegreen","blue", "red", "yellow"]

        this._speed = 700   

        this._players = ["x", "o"]

        this._currentPlayer = this._players[0]

        this._dimension = 0;

        this.constructTable()

    }

    constructTable () {

        this.table.innerHTML = ""

        for (let i = 0; i < this._matriz; i++) {
         
            let tr = document.createElement("tr")

            this.table.appendChild(tr)

            for (let j = 0; j < this._matriz; j++) {

                let td = document.createElement("td")

                switch(this._dimension) {

                    case 1:
                        td.style.padding = "20px"
                        td.style.fontSize = "20px"
                        break
                    case 2:
                        td.style.padding = "40px"
                        td.style.fontSize = "40px"
                        break
                    case 3: 
                        td.style.padding = "60px"
                        td.style.fontSize = "60px"
                        break;
                    default:
                        td.style.padding = "30px"
                        td.style.fontSize = "30px"

                }
                
                td.id = `${i}x${j}`

                td.onclick = e => this.mark(e)

                this.table.appendChild(td)

            }
            
        }

        this.updateColors(true)

    }

    mark (e) {

        if(e.target.innerHTML) return

        for(let i = 0; i< this._players.length; i++) {

            if(i < this._players.length-1){
                e.target.innerHTML = this._currentPlayer

                if(this._currentPlayer == this._players[this._players.length -1]) {
                    this._currentPlayer = this._players[0]
                } else {
                    this._currentPlayer = this._players[this._players.indexOf(this._currentPlayer)+1]
                }

                break
            } else {
                e.target.innerHTML = this._currentPlayer
                
                this._currentPlayer = this._players[0]

                break
            }

        }

        this.monitor()

    }

    monitor () {

        let skipDraw = false
        let result = [...this.table.children].filter(item => (item.tagName == "TD" && item.innerHTML) )

        result = result.map(item => ({value: item.innerHTML, pos: item.id.split("x")}))

        let playersSymbol = {} 

        this._players.forEach(symbol => {

            playersSymbol[symbol] = result.filter(item => item.value == symbol)

        })

        console.log(playersSymbol)

        for(let val in playersSymbol) {

            for(let i = 0; i < this._matriz; i++) {

                const numbersToVerifyNegative = [...new Set(playersSymbol[val].map(item => parseInt(item.pos[1])))]
                
                let countOfDiffNegative = 0
                
                numbersToVerifyNegative.map((item, index) => {

                    if(numbersToVerifyNegative.length > 1 && item - numbersToVerifyNegative[index+1] == -1 ) {
                        countOfDiffNegative++
                    }

                })

                const numbersToVerifyPositive = [...new Set(playersSymbol[val].map(item => parseInt(item.pos[0])))]
                
                let countOfDiffPositive = 0
                
                numbersToVerifyPositive.map((item, index) => {

                    if(numbersToVerifyPositive.length > 1 && item - numbersToVerifyPositive[index+1] == -1 ) {
                        countOfDiffPositive++
                    }

                })

                if(playersSymbol[val].length > 2) {

                    if (countOfDiffNegative > 1 && playersSymbol[val].filter(item => item.pos[0] == i).length > 2 ||
                    countOfDiffPositive > 1 && playersSymbol[val].filter(item => item.pos[1] == i).length > 2) {
                        
                        this.restartMatch(playersSymbol[val][0].value)

                        break;
    
                    } else {
                        
                        let count = 0
                        let count2 = 0
                        let count3 = 0
                        let count4 = 0
                        let count5 = 0
                        let count6 = 0
                        let count7 = 0
                        let count8 = 0
                        let count9 = 0
                        let count10 = 0
                        let count11 = 0
                        let count12 = 0
                        let count13 = 0
                        let count14 = 0
                        let count15 = 0

                        let skip = false

                        for (let x = 0; x < playersSymbol[val].length; x++){

                            if(playersSymbol[val][x].pos[0] == playersSymbol[val][x].pos[1]) {
                                
                                count++
                            
                            }

                            switch(this._matriz){
                                case 3: 
                                    if(playersSymbol[val][x].pos[0] == "0" && playersSymbol[val][x].pos[1] == "2" ||
                                    playersSymbol[val][x].pos[0] == "1" && playersSymbol[val][x].pos[1] == "1" ||
                                    playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "0") {
                                        
                                        count2++

                                    }
                                    break
                                case 5:
                                    if(playersSymbol[val][x].pos[0] == "0" && playersSymbol[val][x].pos[1] == "2" ||
                                    playersSymbol[val][x].pos[0] == "1" && playersSymbol[val][x].pos[1] == "1" ||
                                    playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "0") {
                                        
                                        count2++

                                    }

                                    if(playersSymbol[val][x].pos[0] == "1" && playersSymbol[val][x].pos[1] == "2" ||
                                    playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "1" ||
                                    playersSymbol[val][x].pos[0] == "3" && playersSymbol[val][x].pos[1] == "0") {
                                        
                                        count3++

                                    }

                                    if(playersSymbol[val][x].pos[0] == "0" && playersSymbol[val][x].pos[1] == "3" ||
                                    playersSymbol[val][x].pos[0] == "1" && playersSymbol[val][x].pos[1] == "2" ||
                                    playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "1") {
                                        
                                        count4++

                                    }

                                    if(playersSymbol[val][x].pos[0] == "0" && playersSymbol[val][x].pos[1] == "4" ||
                                    playersSymbol[val][x].pos[0] == "1" && playersSymbol[val][x].pos[1] == "3" ||
                                    playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "2") {
                                        
                                        count5++

                                    }
                                    
                                    if (playersSymbol[val][x].pos[0] == "1" && playersSymbol[val][x].pos[1] == "3" ||
                                    playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "2" ||
                                    playersSymbol[val][x].pos[0] == "3" && playersSymbol[val][x].pos[1] == "1") {
                                       
                                        count6++
                                    
                                    }
                                    
                                    if(playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "2" ||
                                    playersSymbol[val][x].pos[0] == "3" && playersSymbol[val][x].pos[1] == "1" ||
                                    playersSymbol[val][x].pos[0] == "4" && playersSymbol[val][x].pos[1] == "0") {
                                       
                                        count7++
                                    
                                    }

                                    if(playersSymbol[val][x].pos[0] == "1" && playersSymbol[val][x].pos[1] == "4" ||
                                    playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "3" ||
                                    playersSymbol[val][x].pos[0] == "3" && playersSymbol[val][x].pos[1] == "2") {
                                       
                                        count8++
                                    
                                    }
                                    
                                    if(playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "3" ||
                                    playersSymbol[val][x].pos[0] == "3" && playersSymbol[val][x].pos[1] == "2" ||
                                    playersSymbol[val][x].pos[0] == "4" && playersSymbol[val][x].pos[1] == "1") {
                                       
                                        count9++
                                    
                                    }

                                    if(playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "4" ||
                                    playersSymbol[val][x].pos[0] == "3" && playersSymbol[val][x].pos[1] == "3" ||
                                    playersSymbol[val][x].pos[0] == "4" && playersSymbol[val][x].pos[1] == "2") {
                                       
                                        count10++
                                    
                                    }

                                    break
                                case 7:
                                    if(playersSymbol[val][x].pos[0] == "0" && playersSymbol[val][x].pos[1] == "6" ||
                                    playersSymbol[val][x].pos[0] == "1" && playersSymbol[val][x].pos[1] == "5" ||
                                    playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "4") {
                                        
                                        count2++

                                    }
                                    
                                    if (playersSymbol[val][x].pos[0] == "1" && playersSymbol[val][x].pos[1] == "5" ||
                                    playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "4" ||
                                    playersSymbol[val][x].pos[0] == "3" && playersSymbol[val][x].pos[1] == "3") {
                                    
                                        count3++
                                    
                                    }
                                    
                                    if(playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "4" ||
                                    playersSymbol[val][x].pos[0] == "3" && playersSymbol[val][x].pos[1] == "3" ||
                                    playersSymbol[val][x].pos[0] == "4" && playersSymbol[val][x].pos[1] == "2") {
                                    
                                        count4++
                                    
                                    }

                                    if(playersSymbol[val][x].pos[0] == "3" && playersSymbol[val][x].pos[1] == "3" ||
                                    playersSymbol[val][x].pos[0] == "4" && playersSymbol[val][x].pos[1] == "2" ||
                                    playersSymbol[val][x].pos[0] == "5" && playersSymbol[val][x].pos[1] == "1") {
                                    
                                        count5++
                                    
                                    }

                                    if(playersSymbol[val][x].pos[0] == "4" && playersSymbol[val][x].pos[1] == "2" ||
                                    playersSymbol[val][x].pos[0] == "5" && playersSymbol[val][x].pos[1] == "1" ||
                                    playersSymbol[val][x].pos[0] == "6" && playersSymbol[val][x].pos[1] == "0") {
                                    
                                        count6++
                                    
                                    }
                                    break
                                default:
                                    if(playersSymbol[val][x].pos[0] == "0" && playersSymbol[val][x].pos[1] == "2" ||
                                    playersSymbol[val][x].pos[0] == "1" && playersSymbol[val][x].pos[1] == "1" ||
                                    playersSymbol[val][x].pos[0] == "2" && playersSymbol[val][x].pos[1] == "0") {
                                        
                                        count2++

                                    }
                                    break
                            }
                            
                            if(count > 2 || 
                                count2 > 2 || 
                                count3 > 2 || 
                                count4 > 2 || 
                                count5 > 2 || 
                                count6 > 2 || 
                                count7 > 2 || 
                                count8 > 2 || 
                                count9 > 2 || 
                                count10 > 2 || 
                                count11 > 2 || 
                                count12 > 2 || 
                                count13 > 2 | 
                                count14 > 2 || 
                                count15 > 2) {
                               
                                console.log(
                                    " count: ", count,
                                    " count2: ", count2,
                                    " count3: ", count3,
                                    " count4: ", count4,
                                    " count5: ", count5,
                                    " count6: ", count6,
                                    " count7: ", count7,
                                    " count8: ", count8,
                                    " count9: ", count9,
                                    " count10: ", count10,
                                    " count11: ", count11,
                                    " count12: ", count12,
                                    " count13: ", count13,
                                    " count14: ", count14,
                                    " count15: ", count15,
                                )
                                
                                this.restartMatch(playersSymbol[val][0].value)
                                skip = true
                                skipDraw = true
                                break
                            }

                        }
    
                        if(skip) break
    
                    }
    
                }

            }
               
        }

        if(!skipDraw && result.length == this._matriz * this._matriz) {
            this.restartMatch("draw")
        }

    }

    restartMatch (winner) {
        setTimeout(() => {

            if(winner == "draw") {

                alert("GAME DRAW")

            } else {

                alert(winner + " VENCEU!")

            }


            this.constructTable()

        }, 200)
    }

    updateColors (on, restart = false) {

        this.randomColors()

        let colors = null

        if(on) {
            colors = setInterval(() => {

                this.randomColors()
                
            }, this._speed)
        }

        if(!on) {
            clearInterval(colors)
        }

        if(restart) {
            colors = setInterval(() => {

                this.randomColors()
                
            }, this._speed)
        }

    }

    randomColors () {

        [...this.table.children].forEach( (item,index) => {

            if(item.tagName == "TD")
                item.bgColor = this._colors[parseInt(Math.random() * (this._colors.length - 1) + 1)]

        })

    }

    set matriz (value) {

        if(value != 3 && value != 5 && value != 7) this._matriz = 3
        else this._matriz = value
        
        this.constructTable()

    }

    get matriz () {

        return this._matriz
    
    }

    set speed (value) {

        this._speed = value  

        this.updateColors(false, true)

    }

    get speed () {

        return this._speed
    
    }

}