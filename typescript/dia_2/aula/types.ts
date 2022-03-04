type Passaro = {
  bico: string,
  cor: string,
  tamanho: number,
};

const galinha: Passaro = {
  bico: 'curto',
  cor: 'variada',
  tamanho: 50.34,
}

type Sum = (a: number, b: number) => number;

const soma: Sum = (x, y) => {
  return x + y;
};

type Endereco = {
  rua: string,
  bairro: string,
  cep: string,
  numero: number,
  cidade: string,
};

