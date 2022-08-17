import React from "react";

const Sendbd = () => {
  return (
    <>
      <div className="container  sm:py-8 px-8 md:px-20 py-24 mx-auto flex flex-wrap">
        <ul className="font-abc list-none mb-11">
          <>
            <li>
              Una vez realizado el pago, envíe los datos de nacimiento en el
              formato que se muestra a continuación a
              <b> sanatanvedicastrology@gmail.com</b>
            </li>
            <li>
              La precisión de la lectura depende de los detalles exactos del
              nacimiento. Así que por favor tenlo en cuenta.
            </li>
          </>
        </ul>
        <>
          <br />
          <ul className="list-decimal bg-orange-400 font-abc mb-11">
            <li>Nombre de la lectura</li>
            <li>Su nombre y apellidos</li>
            <li>PayPal o Stripe (preferido): ID de transacción o ID de pago</li>
            <li>Género</li>
            <li>Fecha de nacimiento (dd / mm / aaaa]</li>
            <li>
              Hora de nacimiento: ambos formatos, por ejemplo, 6:00 p. m. =
              18:00
            </li>
            <li>Ciudad, estado y país de nacimiento</li>
            <li>ID de Skype y ID de Zoom (en el case de lectura en vivo)</li>
            <li>Preguntas específicas.</li>
            <li>
              Para la lectura de nacimiento de niño, envíe los detalles de
              nacimiento de ambos padres (si están disponibles)
            </li>
            <li>
              Para una lectura de compatibilidad, envíe los detalles de
              nacimiento de las dos personas.
            </li>
            <li>
              A veces, el correo electrónico de confirmación puede tardar unas
              horas, pero no se preocupe, nos pondremos en contacto con usted lo
              antes posible.
            </li>
          </ul>
          <br />
          <ul className="list-disc marker:text-blue-500 font-abc">
            <li>Preparar la lectura de audio puede tomar hasta dos semanas.</li>
            <li>
              La hora y la fecha de la lectura en vivo dependen de los espacios
              disponibles. Puede tardar hasta dos semanas.
            </li>
            <li>
              En las lecturas en vivo, solo se compartirá la pantalla con los
              gráficos.
            </li>
            <li>
              La cancelación se puede hacer 48 horas antes de la lectura. La
              lectura se puede posponer al siguiente espacio disponible.
            </li>
            <li>
              No cobramos por la lectura, cobramos por el tiempo empleado. Si no
              se relaciona con la lectura dada, ofrecemos un reembolso completo
              (menos los cargos de transacción). El reembolso debe solicitarse
              dentro de los tres días posteriores a la lectura, de lo contrario,
              se considerará satisfactorio.
            </li>
            <li>
              Si va por la lectura, significa que está de acuerdo con el
              descargo de responsabilidad que se proporciona a continuación.
            </li>
          </ul>
          <br />
          <p className="font-abc text-left">
            <b> DESCARGO DE RESPONSABILIDAD:</b> Jyotish/Astrología trabaja con
            probabilidades y factores complejos que determinan el karma. Hay
            muchas variables a considerar, por lo que las predicciones son un
            pronóstico que indica el momento más adecuado para ciertas acciones.
            La lectura pretende instruirte sobre la dirección más adecuada de tu
            vida para avanzar hacia tu realización y progreso espiritual. Puede
            decidir seguir o no las indicaciones dadas. Usted tiene cierto libre
            albedrío y necesita usar su juicio. Las indicaciones dadas en la
            lectura describen las posibilidades (y probabilidades) más fuertes y
            no son responsables de ninguna pérdida, daño o problema.
          </p>
        </>
      </div>
    </>
  );
};

export default Sendbd;
