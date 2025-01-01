class Atleta {

    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
        this.calculcaCategoria();
        this.calculaIMC();
        this.calculaMediaValida();
        this.imprimir();
    }

    calculcaCategoria() {
        if (this.idade >= 9 && this.idade <=11) {
            this.categoria = `Infantil`
            return
        }

         if (this.idade === 12 || this.idade === 13) {
            this.categoria = `Juvenil`
            return
        }
        
        if (this.idade === 14 || this.idade === 15) {
            this.categoria = `Intermediário`
            return
        }
        
        if (this.idade >= 16 && this.idade <= 30) {
            this.categoria = `Adulto`
            return
        }

        this.categoria = `Sem categoria`

    }

    calculaIMC(){
        this.imc = this.peso / (this.altura * this.altura)
    }

    calculaMediaValida(){
        this.notas.sort((a, b) => a - b);
        
        let notasComputadas = this.notas.slice(1, this.notas.length - 1);

        let soma = 0
        notasComputadas.forEach(notaAtual => {
            soma = soma + notaAtual;
            
        });
        let denominador = this.notas.length - 2;
        this.media = soma / denominador;
    
    }
    obtemNomeAtleta(){
        return `Nome: ${this.nome}`;
    }
    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`;
    }
    obtemPesoAtleta(){
        return `Peso: ${this.peso}`;
    }
    obtemAlturaAtleta(){
        return `Altura: ${this.altura}`;
    }
    obtemNotasAtleta(){
        return `Notas: ${this.notas}`;
    }
    obtemCategoria(){
       return `Categoria: ${this.categoria}`;
    }
    obtemIMC(){
        return `IMC: ${this.imc}`;
    }
    obtemMediaValida(){
        return `Média válida: ${this.media}`;
    }
    imprimir(){
        console.log(this.obtemNomeAtleta());
        console.log(this.obtemIdadeAtleta());
        console.log(this.obtemPesoAtleta());
        console.log(this.obtemAlturaAtleta());
        console.log(this.obtemNotasAtleta());
        console.log(this.obtemCategoria());
        console.log(this.obtemIMC());
        console.log(this.obtemMediaValida());
        console.log();
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
