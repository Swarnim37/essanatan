import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="text-black-600 body-font bg-orange-400 sticky-top shadow-xl top-0 sticky overflow-hidden z-10 font-abc">
      <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center cursor-pointer ">
        <Link href="/">
          <div className="logo ">
            <Image width={200} height={40} src="/img/logosvg.svg" alt="logo" />
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
              <span className="ml-3 text-xl">Astrología Sanatan </span>
            </a>
          </div>
        </Link>

        <>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold ">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">Inicio</a>
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
            <Link href="blog.sanatanved.com">
              <a target="_blank" className="mr-5 hover:text-gray-900">
                Blog
              </a>
            </Link>
            <Link href="https://www.patreon.com/sanatanastrology">
              <a target="_blank" className="mr-5 hover:text-gray-900">
                Para Miembros
              </a>
            </Link>
            <Link href="/contact">
              <a className="mr-5 hover:text-gray-900">Contacto</a>
            </Link>
          </nav>
        </>
      </div>
    </header>
  );
};

export default Navbar;
