import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Turbo Repasse - Economize, lucre e aproveite.</title>
        <meta
          name="description"
          content="Compre pessoalmente direto das concessionárias da sua região e
          pague somente depois de ver o carro. Carros, revisados, com
          procedência, sem passagem por leilão, sinistro ou qualquer
          restrição! E o principal, não precisa de CNPJ para comprar."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Reviews />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
