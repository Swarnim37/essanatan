import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font shadow-2xl font-abc">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="about"
                className="object-cover object-center h-full w-full"
                width={1700}
                height={600}
                src="/img/solar-system.jpg"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-110 h-110 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    alt="about"
                    className="object-cover object-center h-full w-full"
                    width={1110}
                    height={1110}
                    src="/img/jyoti.jpg"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Jyotisha Sharma M.A.
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  {/*<p className="text-base">
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
  </p>*/}
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 text-left">
                  Practico activamente la astrología desde hace más de 15 años.
                  Estudié astrología occidental y védica. La filosofía védica me
                  llamó la atención por su lógica de explicar la existencia del
                  universo, nuestra existencia y todo lo que sucede en nuestra
                  vida. Los conceptos védicos del alma, la ley del karma y la
                  reencarnación tienen mucho sentido. Estudio activamente no
                  solo astrología sino también ayurveda, vastu y yoga. Completé
                  varios cursos con destacados astrólogos védicos, así como
                  cursos de psicología y consejería. También soy educadora,
                  hablo inglés, checo y español con fluidez
                  <br />
                  Astrología Sanatan comprende investigadores y practicantes de
                  astrología védica de diferentes ámbitos de la vida. Su
                  objetivo es promover el conocimiento de las ciencias védicas y
                  guiar a las personas a través de la sabiduría védica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
