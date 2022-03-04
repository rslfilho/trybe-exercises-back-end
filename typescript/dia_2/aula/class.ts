class Cachorro {
  nome: string;
  olhos?: string;
  cor: string;
  raca: string;

  constructor(nome: string, cor: string, raca: string,  olhos?: string) {
    this.nome = nome;
    this.olhos = olhos;
    this.cor = cor;
    this.raca = raca;
  };

  latir(): void {
    console.log(`${this.nome} está latindo`)
  };
};

