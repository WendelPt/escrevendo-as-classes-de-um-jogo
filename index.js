class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
    atacar() {
      let ataque
      switch (this.tipo) {
        case "mago":
          ataque = " magia"
          break;
        case "guerreiro":
          ataque = " espada"
          break;
        case "monge":
          ataque = " artes marciais"
          break
        case "ninja":
          ataque = " shuriken"
      }
  
      console.log(`O ${this.tipo} atacou usando${ataque}`)
    }
  }
  
  
  const heroi = new Heroi("Aragorn", 30, "ninja")
  heroi.atacar() 