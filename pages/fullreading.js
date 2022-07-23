import React from "react";
import Image from "next/image";
import Link from "next/link";

const Fullreading = () => {
  return (
    <div>
      <section className="text-gray-600 body-font font-abc">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              width={700}
              height={620}
              src="/img/kundli.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Lectura de carta natal
            </h1>

            <h2 className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">
              Audio grabado o lectura en vivo en línea de 60 Minutos.
            </h2>
            <p className="mb-8 leading-relaxed text-justify">
              Horóscopo personal (el horóscopo completo) – La interpretación del
              horóscopo personal te dirá qué forma tu personalidad, cuáles son
              tus habilidades, en qué puedes sobresalir, hacia dónde te diriges,
              cómo son tus relaciones, en otras palabras, qué tareas kármicas
              trae tu alma a esta encarnación. También podrás conocer cómo es tu
              salud y cuáles serán tus prioridades en los diferentes periodos de
              la vida. Para interpretar un horóscopo personal, es necesario
              estudiar a fondo no solo el horóscopo principal Lagna sino también
              Navamsha, el horóscopo lunar, otras cartas divisionales relevantes
              y los períodos planetarios aplicables al horóscopo para evaluar
              las tendencias futuras.
            </p>
            <div className="flex justify-center">
              <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E28EZFD36JQUW">
                <a target="_blank">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    PayPal
                  </button>
                </a>
              </Link>
              <Link href="https://buy.stripe.com/aEU2b06o302N2TCcMV">
                <a target="_blank">
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
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

export default Fullreading;
