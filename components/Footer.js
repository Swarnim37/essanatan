import Link from "next/link";
import Image from "next/image";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <header className="text-black-600 body-font bg-orange-400 sticky-top shadow-xl top-0 sticky overflow-hidden z-10 font-abc">
        <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center cursor-pointer ">
          <Link href="/">
            <div className="logo ">
              <Image
                width={200}
                height={40}
                src="/img/logosvg.svg"
                alt="logo"
              />
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
                <span className="ml-3 text-xl">Astrología Sanatan </span>
              </a>
            </div>
          </Link>

          <>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold ">
              <Link href="/">
                <a className="mr-5 hover:text-gray-900">Incio</a>
              </Link>
              <Link href="/about">
                <a className="mr-5 hover:text-gray-900">Sobre</a>
              </Link>
              <Link href="/services">
                <a className="mr-5 hover:text-gray-900">Servicios</a>
              </Link>
              <Link href="/courses">
                <a className="mr-5 hover:text-gray-900">Cursos</a>
              </Link>
              <Link href="https://esblog.sanatanved.com/">
                <a className="mr-5 hover:text-gray-900">Blog</a>
              </Link>
              <Link href="/books">
                <a className="mr-5 hover:text-gray-900">Para Miembros</a>
              </Link>
              <Link href="/contact">
                <a className="mr-5 hover:text-gray-900">Contacto</a>
              </Link>
            </nav>
          </>
        </div>

        <div className="bg-orange-400 ">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-900 text-sm text-center sm:text-left">
              © 2022 Astrología Sanatan
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link href="/cookiepolicy">
                <a className="text-gray-1000 mr-6">Cookies Policy</a>
              </Link>
              <Link href="https://www.facebook.com/Astrolog%C3%ADa-Sanatan-100257342785122">
                <a target="_blank" className="text-gray-900 mt-1">
                  <AiFillFacebook />
                </a>
              </Link>
              <Link href="https://twitter.com/SanatanAstro3">
                <a target="_blank" className="ml-3 text-gray-900 mt-1 ">
                  <AiFillTwitterSquare />
                </a>
              </Link>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Footer;
