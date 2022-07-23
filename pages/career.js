import React from "react";
import Image from "next/image";
import Link from "next/link";

const Career = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            width={720}
            height={600}
            src="/img/career.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center font-abc">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Lectura de carrera
          </h1>

          <h2 className="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-900">
            Audio Grabado de 15-30 Minutos.
          </h2>
          <p className="mb-8 leading-relaxed text-justify">
            Usted puede estar interesado en varios tipos diferentes de carreras.
            La carta puede mostrar qué dirección es la más adecuada para ti,
            dónde puedes lograr el éxito y sentirte realizado. Los períodos
            planetarios revelan cuándo puedes ascender, cambiar de profesión,
            enfrentar obstáculos o encontrar un nuevo trabajo.
          </p>
          <div className="flex justify-center">
            <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JSNKH7VXDH6ES">
              <a target="_blank">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Paypal
                </button>
              </a>
            </Link>
            <Link href="https://buy.stripe.com/4gw3f49Af5n7fGo6oq">
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
  );
};

export default Career;
