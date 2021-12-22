import React from 'react';
import Title from '../../elements/Title/Title';
import Text from '../../elements/Text/Text'
import Link from '../../elements/Link/Link';
import Container from '../../elements/Container/Container';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { translate } from '../../i18n';

const Cookies = () => {
const { language } = useSelector((state: RootState) => state.lang);
return (
  <div data-testid="Cookies">
		<Container width={50}>
    <Text>
		<Title size="xl" color='brownDark' centered margin>{translate("cookies", language)}</Title>
		The Roost te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios que puedan ser recabados durante la navegación a través del sitio Web <Link hrefTo="https://www.theroost.coffee/">https://www.theroost.coffee/</Link>. <br />
		En este sentido, The Roost garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD).
		Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).
		El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.<br /><br />

		<Title size="sm" color='brownDark'>Identidad del responsable</Title>
    <strong>Titular</strong>: El Apliste | Cafetería<br />
    <strong>Domicilio</strong>: España.<br />
    <strong>Correo electrónico</strong>: <Link hrefTo="contact@roost.coffee" refTo="mailto" description="Contacto Condiciones Legales The Roost">contact@roost.coffee</Link><br />
    <strong>Sitio Web</strong>: <Link hrefTo="https://www.theroost.coffee/">https://www.theroost.coffee/</Link><br /><br />

		<Title size="sm" color='brownDark'>Principios aplicados en el tratamiento de datos</Title>
		En el tratamiento de tus datos personales, el Titular aplicará los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protección de datos (RGPD):
    <br /><strong>Principio de licitud, lealtad y transparencia:</strong>
		<br />El Titular siempre requerirá el consentimiento para el tratamiento de los datos personales que puede ser para uno o varios fines específicos sobre los que el Titular informará al Usuario previamente con absoluta transparencia.
    <br /><strong>Principio de minimización de datos:</strong>
		<br />El Titular solicitará solo los datos estrictamente necesarios para el fin o los fines que los solicita.
    <br /><strong>Principio de limitación del plazo de conservación:</strong>
		<br />El Titular mantendrá los datos personales recabados durante el tiempo estrictamente necesario para el fin o los fines del tratamiento. El Titular informará al Usuario del plazo de conservación correspondiente según la finalidad.
    <br />En el caso de suscripciones, el Titular revisará periódicamente las listas y eliminará aquellos registros inactivos durante un tiempo considerable.
    <br /><strong>Principio de integridad y confidencialidad:</strong>
		<br />Los datos personales recabados serán tratados de tal manera que su seguridad, confidencialidad e integridad esté garantizada.
    <br />El Titular toma las precauciones necesarias para evitar el acceso no autorizado o uso indebido de los datos de sus usuarios por parte de terceros.<br /><br />

		<Title size="sm" color='brownDark'>Obtención de datos personales</Title>
		Para navegar por <Link hrefTo="https://www.theroost.coffee/">https://www.theroost.coffee/</Link> no es necesario que facilites ningún dato personal.<br />
		Los casos en los que sí proporcionas tus datos personales son los siguientes:<br />
   	Al registrarte como usuario y realizar reservas o pedidos, siempre con fines comerciales íntegramente ligados a la marca. No se ceden a terceros. <br /><br />

		<Title size="sm" color='brownDark'>Derechos</Title>
		El Titular te informa que sobre tus datos personales tienes derecho a:<br />
    Solicitar el acceso a los datos almacenados.<br />
    Solicitar una rectificación o la cancelación.<br />
    Solicitar la limitación de su tratamiento.<br />
    Oponerte al tratamiento.<br /><br />

		No puedes ejercitar el derecho a la portabilidad de los datos.<br />
		El ejercicio de estos derechos es personal y por tanto debe ser ejercido directamente por el interesado, solicitándolo directamente al Titular, lo que significa que cualquier cliente, suscriptor o colaborador que haya facilitado sus datos en algún momento, puede dirigirse a The Roost y pedir información sobre los datos que tiene almacenados y cómo los ha obtenido, solicitar la rectificación de los mismos, oponerse al tratamiento, limitar su uso o solicitar la cancelación de esos datos en los ficheros del Titular.<br />
		Para ejercitar tus derechos de acceso, rectificación, cancelación y oposición tienes que enviar un correo electrónico a <Link hrefTo="contact@roost.coffee" refTo="mailto" description="Contacto Condiciones Legales The Roost">contact@roost.coffee</Link> junto con la prueba válida en derecho como una fotocopia del D.N.I. o equivalente.<br />
		Tienes derecho a la tutela judicial efectiva y a presentar una reclamación ante la autoridad de control, en este caso, la Agencia Española de Protección de Datos, si consideras que el tratamiento de datos personales que te conciernen infringe el Reglamento.<br /><br />

		<Title size="sm" color='brownDark'>Finalidad del tratamiento de datos personales</Title>

		Cuando te conectas al sitio Web para mandar un correo al Titular, te suscribes a su boletín estás facilitando información de carácter personal de la que el responsable es The Roost . Esta información puede incluir datos de carácter personal como pueden ser tu dirección IP, nombre y apellidos, dirección física, dirección de correo electrónico, número de teléfono, y otra información. Al facilitar esta información, das tu consentimiento para que tu información sea recopilada, utilizada, gestionada y almacenada por — The Roost — sólo como se describe en el Aviso Legal y en la presente Política de Privacidad.<br />
		Los datos personales y la finalidad del tratamiento por parte del Titular es diferente según el sistema de captura de información:<br />
    Formularios de contacto: El Titular solicita datos personales entre los que pueden estar: nombre y apellidos, dirección de correo electrónico, número de teléfono y dirección de sitio Web con la finalidad de responder las consultas de los Usuarios.<br />
    <br />Por ejemplo, The Roost utiliza esos datos para dar respuesta a mensajes, dudas, quejas, comentarios o inquietudes que pueden tener los Usuarios relativas a la información incluida en el sitio Web, el tratamiento de los datos personales, cuestiones referentes a los textos legales incluidos en el sitio Web, así como cualquier otra consulta que el Usuario pueda tener y que no esté sujeta a las condiciones del sitio Web.<br /><br />
		Existen otras finalidades por las que el Titular trata datos personales:<br />
    Para garantizar el cumplimiento de las condiciones recogidas en el Aviso Legal y en la ley aplicable. Esto puede incluir el desarrollo de herramientas y algoritmos que ayuden a este sitio Web a garantizar la confidencialidad de los datos personales que recoge.<br />
    Para apoyar y mejorar los servicios que ofrece este sitio Web.<br />
    Para analizar la navegación de los usuarios. El Titular recoge otros datos no identificativos que se obtienen mediante el uso de cookies que se descargan en el ordenador del Usuario cuando navega por el sitio Web cuyas características y finalidad están detalladas en la Política de Cookies .<br />
    Para gestionar las redes sociales. The Roost tiene presencia en redes sociales. Si te haces seguidor en las redes sociales del Titular el tratamiento de los datos personales se regirá por este apartado, así como por aquellas condiciones de uso, políticas de privacidad y normativas de acceso que pertenezcan a la red social que proceda en cada caso y que has aceptado previamente.<br /><br />
    Puedes consultar las políticas de privacidad de las principales redes sociales en estos enlaces:<br />
		<Link hrefTo="https://www.theroost.coffee/">Facebook</Link><br />
		<Link hrefTo="https://www.theroost.coffee/">Twitter</Link><br />
    <Link hrefTo="https://www.theroost.coffee/">Linkedin</Link><br />
		<Link hrefTo="https://www.theroost.coffee/">YouTube</Link><br />
    <Link hrefTo="https://www.theroost.coffee/">Instagram</Link><br /><br />

    El Titular tratará tus datos personales con la finalidad de administrar correctamente su presencia en la red social, informarte de sus actividades, así como para cualquier otra finalidad que las normativas de las redes sociales permitan. En ningún caso el Titular utilizará los perfiles de seguidores en redes sociales para enviar publicidad de manera individual.<br /><br />

		<Title size="sm" color='brownDark'>Seguridad de los datos personales</Title>

		Para proteger tus datos personales, el Titular toma todas las precauciones razonables y sigue las mejores prácticas de la industria para evitar su pérdida, mal uso, acceso indebido, divulgación, alteración o destrucción de los mismos.
		<br />Tus datos podrán ser incorporados a un fichero de lista de correo, del cual The Roost es responsable de su gestión y tratamiento. La seguridad de tus datos está garantizada, ya que The Roost toma todas las medidas de seguridad necesarias y te garantiza que los datos personales sólo se usarán para las finalidades dadas.
		<br />The Roost informa al Usuario de que sus datos personales no serán cedidos a terceras organizaciones, con la salvedad de que dicha cesión de datos esté amparada en una obligación legal o cuando la prestación de un servicio implique la necesidad de una relación contractual con un encargado de tratamiento. En este último caso, solo se llevará a cabo la cesión de datos al tercero cuando The Roost disponga del consentimiento expreso del Usuario.
		<br />Sin embargo, en algunos casos se pueden realizar colaboraciones con otros profesionales, en esos casos, se requerirá consentimiento al Usuario informando sobre la identidad del colaborador y la finalidad de la colaboración. Siempre se realizará con los más estrictos estándares de seguridad.
		<br /><br />

		<Title size="sm" color='brownDark'>Contenido de otros sitios web</Title>

		Las páginas de este sitio Web pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si hubieras visitado la otra web.<br />
		Estos sitios Web pueden recopilar datos sobre ti, utilizar cookies, incrustar un código de seguimiento adicional de terceros, y supervisar tu interacción usando este código.<br /><br />

		<Title size="sm" color='brownDark'>Política de Cookies</Title>
		Para que este sitio Web funcione correctamente necesita utilizar cookies, que es una información que se almacena en tu navegador web.<br />
		En la página Política de Cookies puedes consultar toda la información relativa a la política de recogida, la finalidad y el tratamiento de las cookies.<br /><br />

		<Title size="sm" color='brownDark'>Legitimación para el tratamiento de datos</Title>
		La base legal para el tratamiento de tus datos es: el consentimiento.<br />
		Para contactar con el Titular, suscribirte a un boletín o realizar comentarios en este sitio Web tienes que aceptar la presente Política de Privacidad.<br /><br />

		<Title size="sm" color='brownDark'>Categorías de datos personales</Title>
		Las categorías de datos personales que trata el Titular son:<br />
    Datos identificativos.<br />
    No se tratan categorías de datos especialmente protegidos.<br /><br />

		<Title size="sm" color='brownDark'>Conservación de datos personales</Title>
		Los datos personales que proporciones al Titular se conservarán hasta que solicites su supresión.

		<Title size="sm" color='brownDark'>Navegación Web</Title>
		Al navegar por <Link hrefTo="https://www.theroost.coffee/">https://www.theroost.coffee/</Link> se pueden recoger datos no identificativos, que pueden incluir, la dirección IP, geolocalización, un registro de cómo se utilizan los servicios y sitios, hábitos de navegación y otros datos que no pueden ser utilizados para identificarte.<br />
		El sitio Web utiliza los siguientes servicios de análisis de terceros:<br />
		El Titular utiliza la información obtenida para obtener datos estadísticos, analizar tendencias, administrar el sitio, estudiar patrones de navegación y para recopilar información demográfica.<br />
		El Titular no se hace responsable del tratamiento de los datos personales que realicen las páginas web a las que puedas acceder a través de los distintos enlaces que contiene el sitio Web.<br /><br />

		<Title size="sm" color='brownDark'>Exactitud y veracidad de los datos personales</Title>
		Te comprometes a que los datos facilitados al Titular sean correctos, completos, exactos y vigentes, así como a mantenerlos debidamente actualizados.<br />
		Como Usuario del sitio Web eres el único responsable de la veracidad y corrección de los datos remitidos al sitio Web exonerando a The Roost de cualquier responsabilidad al respecto.<br /><br />

		<Title size="sm" color='brownDark'>Aceptación y consentimiento</Title>
		Como Usuario del sitio Web declaras haber sido informado de las condiciones sobre protección de datos de carácter personal, aceptas y consientes el tratamiento de los mismos por parte de The Roost en la forma y para las finalidades indicadas en esta Política de Privacidad.<br /><br />

		<Title size="sm" color='brownDark'>Revocabilidad</Title>
		Para ejercitar tus derechos de acceso, rectificación, cancelación y oposición tienes que enviar un correo electrónico a <Link hrefTo="contact@roost.coffee" refTo="mailto" description="Contacto Condiciones Legales The Roost">contact@roost.coffee</Link> junto con la prueba válida en derecho como una fotocopia del D.N.I. o equivalente.<br />
		El ejercicio de estos derechos no incluye ningún dato que The Roost esté obligado a conservar con fines administrativos, legales o de seguridad.<br /><br />

		<Title size="sm" color='brownDark'>Cambios en la Política de Privacidad</Title>
		El Titular se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria.<br />
		Estas políticas estarán vigentes hasta que sean modificadas por otras debidamente publicadas.<br /><br />
		</Text>
		</Container>
  </div>
);
}
export default Cookies;
