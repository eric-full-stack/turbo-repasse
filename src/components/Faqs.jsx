import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'É possível comprar um carro sem assinar o Turbo Repasse?',
      answer:
        'NÃO! Ofertamos os carros EXCLUSIVAMENTE para os assinantes do Turbo Repasse!',
    },
    {
      question: 'Todos os carros são anunciados abaixo do valor de mercado?',
      answer:
        'SIM! Todos os carros anunciados pela Turbo Repasse são abaixo do valor de mercado.',
    },
    {
      question: 'Preciso pagar algum valor além do valor anunciado do carro?',
      answer: 'NÃO! Você só paga o valor anunciado e NENHUM REAL a mais!',
    },
  ],
  [
    {
      question: 'É preciso pagar algum valor antecipado?',
      answer:
        'Não! Você olha o carro pessoalmente e só paga se resolver ficar com o carro.',
    },
    {
      question: 'Por que os carros são mais baratos?',
      answer:
        'A maioria dos carros foram pegos na troca de outro e como as lojas querem girar o estoque/dinheiro investido rapidamente, eles repassam o carro por um valor abaixo do valor de mercado (mesmo valor que pegaram o carro na negociação), para que o carro seja vendido em um ou dois dias.',
    },
    {
      question:
        'São anunciados carros de particular ou somente de concessionárias?',
      answer:
        'São anunciados SOMENTE CARROS DE CONCESSIONÁRIAS! NÃO SÃO anunciados carros de particular.',
    },
  ],
  [
    {
      question: 'Tem um carro Turbo Repasse perto de mim?',
      answer:
        'Com certeza! Anunciamos carros de mais de 2.000 concessionárias espalhadas EM TODAS as regiões do Brasil! Os carros ficam nas concessionárias em que entraram.',
    },
    {
      question:
        'Como e feito o pagamento do veiculo? É possível financiar? Aceitam carta de crédito?',
      answer:
        'Os veículos podem ser pagos a vista, financiamento ou carta de crédito contemplada. O pagamento é feito diretamente na conta CNPJ da loja em que o carro está. Totalmente a prova de fraudes.',
    },
    {
      question: 'Por quanto tempo terei acesso?',
      answer:
        'No plano mensal, cada pagamento te dá o direito de receber as ofertas por 30 dias e a renovação é automática de 30 em 30 dias em caso de não cancelamento.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Se você tiver qualquer dúvida,{' '}
            <Link
              href="https://wa.me/5548991902906"
              className="text-gray-900 underline"
            >
              entre em contato conosco
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
