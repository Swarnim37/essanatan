import Head from "next/head";

import Featured from "../components/Featured";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Astrología Sanatan </title>
        <meta
          name="description"
          content="Astrología Sanatan, Ofrecemos servicios de consultas astrológicas: lectura de carta natal, compatibilidad de pareja o de socios de negocio, selección del momento auspicioso para iniciar un negocio, boda, nacimiento de hijo."
        />
        <meta
          name="Keywords"
          content=" Astrología Sanatan, carta astral, astrología védica, lectura de carta védica, signo lunar"
        />
        <link rel="icon" href="/img/logosvg.svg" />
      </Head>
      <Featured />
    </div>
  );
}
