export type User = {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  endereco?: string;
  data_nascimento?: string;
  data_abertura?: string;
  valor_carteira?: number;
  endereco_carteira?: string;
};