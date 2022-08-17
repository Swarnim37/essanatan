import Image from "next/image";
import Link from "next/link";

const Health = () => {
  return (
    <div>
      <section className="text-gray-600 body-font font-abc">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              width={720}
              height={600}
              src="/img/health.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Lectura médica/salud
            </h1>

            <h2 className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">
              Audio Grabado de 20-30 Minutos.
            </h2>
            <p className="mb-8 leading-relaxed text-left">
              Lectura de astrología para la salud: podemos identificar áreas
              problemáticas, así como el momento en que pueden ocurrir,
              analizando cuidadosamente la carta natal, las cartas divisionales
              y los períodos planetarios. La acción oportuna puede prevenir o
              mitigar posibles problemas de salud. La astrología védica también
              está estrechamente relacionada con otra ciencia védica, ayurveda,
              y sus principios. El gráfico revela nuestro tipo ayurvédico y lo
              que significa para nosotros.
            </p>
            <div className="flex justify-center">
              <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=26979BXL9S2CN">
                <a target="_blank">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    PayPal
                  </button>
                </a>
              </Link>

              <Link href="https://buy.stripe.com/6oEaHw6o32aVgKs5kp">
                <a target="_blank">
                  <button className="ml-4 inline-flex text-white-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Stripe
                  </button>
                </a>
              </Link>
            </div>
            <div className="flex justify-center mt-4">
              <Link href="/sendbd">
                <a>
                  <div className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-5">
                    Envíenos datos de nacimiento
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Health;
