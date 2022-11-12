import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Tenha acesso aos carros de repasse mais baratos do Brasil na palma da
          sua mão!
        </title>
        <meta
          name="title"
          content="Tenha acesso aos carros de repasse mais baratos do Brasil na palma da sua mão!"
        />
        <meta
          name="description"
          content="Compre pessoalmente direto das concessionárias da sua região e pague somente depois de ver o carro. Carros de repasse, revisados, com procedência, sem passagem por leilão, sinistro ou qualquer restrição! E o principal, não precisa de CNPJ para comprar."
        />
        <meta
          name="keywords"
          content="carro de repasse, repasse, repasse santa catarina, repasse rs, repasse de carros, turbo repasse"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.turborepasse.com/" />
        <meta
          property="og:title"
          content="Tenha acesso aos carros de repasse mais baratos do Brasil na palma da sua mão!"
        />
        <meta
          property="og:description"
          content="Compre pessoalmente direto das concessionárias da sua região e pague somente depois de ver o carro. Carros de repasse, revisados, com procedência, sem passagem por leilão, sinistro ou qualquer restrição! E o principal, não precisa de CNPJ para comprar."
        />
        <meta
          property="og:image"
          content="https://www.turborepasse.com/turborepasse.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.turborepasse.com/" />
        <meta
          property="twitter:title"
          content="Tenha acesso aos carros de repasse mais baratos do Brasil na palma da sua mão!"
        />
        <meta
          property="twitter:description"
          content="Compre pessoalmente direto das concessionárias da sua região e pague somente depois de ver o carro. Carros de repasse, revisados, com procedência, sem passagem por leilão, sinistro ou qualquer restrição! E o principal, não precisa de CNPJ para comprar."
        />
        <meta
          property="twitter:image"
          content="https://www.turborepasse.com/turborepasse.png"
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
