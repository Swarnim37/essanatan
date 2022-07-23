import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <div>
      <section className="text-gray-600 body-font font-abc">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Servicios astrológicos
            {/*<br className="hidden sm:block" />
            Selfies Wayfarers*/}
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/childbirth">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block cursor-pointer"
                    width={420}
                    height={260}
                    src="/img/childbirth.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Lectura (audio grabado)
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  nacimiento del niño
                </h2>
                <p className="mt-1">€69.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/career">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    width={420}
                    height={260}
                    src="/img/career.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Lectura (audio grabado)
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  carrera profesional
                </h2>
                <p className="mt-1">€49.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/relationship">
                <a className="block relative h-48 rounded overflow-hidden cursor-pointer">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    width={420}
                    height={260}
                    src="/img/relationship.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Lectura (audio grabado)
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  relación/matrimonio
                </h2>
                <p className="mt-1">€49.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/health">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    width={420}
                    height={260}
                    src="/img/health.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Lectura (audio grabado)
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  médica/salud
                </h2>
                <p className="mt-1">€49.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/compatibility">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    width={420}
                    height={260}
                    src="/img/compatility.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Lectura (Audio grabado o lectura en vivo en línea - Zoom o
                  Skype)
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  compatibilidad
                </h2>
                <p className="mt-1">€149.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/home">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    width={420}
                    height={260}
                    src="/img/home.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Lectura (audio grabado)
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  hogar/propiedad
                </h2>
                <p className="mt-1">€49.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/foreign">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    width={420}
                    height={260}
                    src="/img/foreign.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Lectura (audio grabado)
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  asentamientos extranjeros
                </h2>
                <p className="mt-1">€49.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/fullreading">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    width={420}
                    height={260}
                    src="/img/birthchart.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Lectura (Audio grabado o lectura en vivo en línea - Zoom o
                  Skype)
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  carta natal (60 minutos)
                </h2>
                <p className="mt-1">€149.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/fullreading90">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    width={420}
                    height={260}
                    src="/img/birthchart.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Lectura (Audio grabado o lectura en vivo en línea - Zoom o
                  Skype)
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  carta natal (90 minutos)
                </h2>
                <p className="mt-1">€195.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/followup">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    width={420}
                    height={260}
                    src="/img/birthchart.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Lectura (Audio grabado o lectura en vivo en línea - Zoom o
                  Skype)
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  seguimiento
                </h2>
                <p className="mt-1">€69.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
