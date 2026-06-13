import assert from 'assert';
import ServicoDePagamento from '../src/ServicoDePagamento.js';

describe('ServicoDePagamento', () => {

  it('deve registrar pagamento com categoria cara', () => {
    const servico = new ServicoDePagamento();

    servico.pagar(
      '0987-7656-3475',
      'Samar',
      156.87
    );

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.deepStrictEqual(ultimoPagamento, {
      codigoBarras: '0987-7656-3475',
      empresa: 'Samar',
      valor: 156.87,
      categoria: 'cara'
    });
  });

  it('deve registrar pagamento com categoria padrão', () => {
    const servico = new ServicoDePagamento();

    servico.pagar(
      '1111-2222-3333',
      'Empresa Tlemos',
      50.00
    );

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.deepStrictEqual(ultimoPagamento, {
      codigoBarras: '1111-2222-3333',
      empresa: 'Empresa Tlemos',
      valor: 50.00,
      categoria: 'padrão'
    });
  });

});