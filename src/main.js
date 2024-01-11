class Hero{
	constructor(name, age, type){
    	this.name = name
        this.age = age
        this.type = type
    }
    attack(){
    	switch(this.type){
        	case 'guerreiro':
            	var ataque = 'sua espada'
                break
            case 'mago':
            	var ataque = 'poderes magicos'
                break
            case 'monge':
            	var ataque = 'artes marciais'
                break
            case 'ninja':
            	var ataque = 'shurikens'
                break
        }
      console.log(`O ${this.type}, ${this.name}, atacou usando ${ataque}`)
    }
}
const heroi_g = new Hero('Rodrigo', 25, 'guerreiro')
heroi_g.attack()

const heroi_m = new Hero('João',20, 'mago')
heroi_m.attack()

const heroi_mo = new Hero('Snake', 47, 'monge')
heroi_mo.attack()

const heroi_n = new Hero('Gaiden', 33, 'ninja')
heroi_n.attack()
