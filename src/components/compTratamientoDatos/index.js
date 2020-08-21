import React from 'react'
import { Box, Typography, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'
import { Title } from './styles'

export const CompTratamientDatos = () => {
  return (
    <Box mt={16} mx={{ xs: 2.5, sm: 5, md: 8, lg: 12.5 }}>
      <Box mb={2.5}>
        <Title variant='h3' color='primary' align='center'>
          AUTORIZACION PARA EL TRATAMIENTO DE DATOS PERSONALES
        </Title>
      </Box>
      <Box mb={2.5}>
        <Typography align='justify'>
          Al enviar los datos personales requeridos en los campos del formulario de la página web
          www.loviconretail.com  y marcar el campo de aceptación de la Política de Privacidad; entiendo
          que  en virtud de los dispuesto en las Leyes 1266 de 2008, 1581 del 2012 y demás normas
          reglamentarias, modificatorias y/o complementarias de ellas, ACEPTO Y AUTORIZO de manera
          expresa, voluntaria, previa, concreta, suficiente, informada e inequívoca a LOVICON BRAND S.A.S.,
          sociedad comercial identificada con NIT. 900.814.151-2, con domicilio principal en la Carrera
          27C No. 71B – 70, Bogotá, Colombia, teléfono 313 789 8533 o a quien represente sus derechos
          u ostente en el futuro una cualquiera o más de las siguientes calidades, conjunta o
          separadamente, para con LOVICON BRAND S.A.S., en el ámbito nacional e internacional: acreedor,
          deudor, trabajador, cliente, proveedor o entidad con la que se encuentre vinculado como socio,
          accionista, aliado o asociado, o cualquier otra que se genere en virtud de un acto licito, legal
          o contractual, para que procese, recolecte, trate, capture, utilice, consulte directamente o por
          terceras personas autorizadas directamente por la ley o por el suscrito, reporte, verifique,
          almacene, ponga en circulación, divulgue, comparta, intercambie, modifique, actualice, corrija
          y suprima mis datos personales en sus bases de datos de forma manual y/o automatizada o digital,
          con las finalidades que a continuación se relacionan:
        </Typography>
      </Box>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
            Para el desarrollo de las actividades comprendidas en el objeto social de LOVICON BRAND
            S.A.S. y los procesos administrativos, comerciales, laborales y legales que se requieran
            para el cumplimiento y ejercicio de las obligaciones y derechos  que se deriven de todo lo
            anterior, directamente o con el concurso de terceros vinculados legal o comercialmente con
            quienes se comparta la información para esos fines.
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
            Compartir y trasladar los datos personales a aliados comerciales de LOVICON BRAND S.A.S.,
            para el desarrollo de su objeto social y la realización de negocios jurídicos.
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
            Promocionar, publicitar, auditar, certificar y  controlar, las actividades, productos y
            servicios de LOVICON BRAND S.A.S. y de terceros con los cuales la misma mantenga relaciones
            de negocios así como realizar investigaciones y pruebas de mercado, análisis estadísticos,
            actualizaciones o verificaciones de información, directamente o con el concurso de terceros.
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
            Usar y revelar los datos para atender y cumplir requerimientos legales, judiciales o
            administrativos de orden nacional o internacional.
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
            Efectuar reportes y consultas sobre datos personales y suministrarlos a entidades bancarias,
            certificadoras, calificadoras de riesgos, calificadoras de riesgos, centrales de información,
            aseguradoras y otras entidades públicas o privadas, para fines administrativos, legales,
            comerciales, de certificaciones, seguridad y prevención y control de fraudes lavado de
            activos y financiación del terrorismo.
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
            Realizar comunicaciones con los titulares de los datos, sus familiares y causahabientes,
            para efectos administrativos, legales, comerciales, de mercadeo, publicitarios, laborales y
            de bienestar laboral, de seguridad, de certificaciones y de contacto.
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
            Adoptar medidas para la prevención de actividades ilícitas, tratar temas de seguridad
            física, seguridad industrial y seguridad social y consultar información en las listas de
            control (listas nacionales e internacionales), con el fin de preservar la confianza y
            transparencia entre el titular de los datos e LOVICON BRAND S.A.S.
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
            Consultar y actualizar los datos personales, en cualquier tiempo, con el fin de mantener
            actualizada dicha información y verificar los mismos, así como las afiliaciones, derechos e
            información de sus titulares para gestionar la prestación de sus servicios o su vinculación
            de cualquier orden legal con LOVICON BRAND S.A.S..
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
            Contratar con terceros el almacenamiento y/o procesamiento de la información y datos
            personales para la correcta ejecución de las relaciones comerciales y jurídicas con LOVICON
            BRAND S.A.S..
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
            Las demás autorizadas por la persona que entregue sus datos o autorizadas en la Ley 1581 de
            2012, sus decretos reglamentarios, y demás normas que la regulen o modifiquen.
        </ListItemText>
      </ListItem>
      <Box mb={2.5}>
        <Typography align='justify'>
          En estas actividades podrán estar involucrados terceros proveedores (tales como proveedores
          de bienes y servicios, sistemas de reservas, agencias de viajes, call centers, sitios web,
          entidades bancarias, aseguradoras, certificadoras, etc.).
        </Typography>
      </Box>
      <Box mb={2.5}>
        <Typography align='justify'>
          <b>AVISO DE PRIVACIDAD:</b> He sido informado por <b>LOVICON BRAND S.A.S.</b> que: (i) Las políticas de
          tratamiento de información que me serán aplicables se encuentran en el Manual de Políticas y
          Procedimientos para la Protección de Datos Personales, el cual está disponible para mi
          consulta en la página web www.loviconretail.co (ii) Las finalidades del tratamiento de mis
          datos personales son las expuestas en el citado manual y en este documento. (iii) Los cambios
          sustanciales que se produzcan en las políticas de tratamiento de información o en el presente
          aviso de privacidad, serán comunicadas previamente al suscrito publicándolas en la página web
          arriba mencionada o por los otros medios mencionados en el artículo 17 del Decreto 1377 de 2013.
        </Typography>
      </Box>
      <Box mb={2.5}>
        <Typography align='justify'>
          <b>DERECHOS:</b> Los derechos que me asisten como titular de la información sobre los datos
          personales suministrados por mí a <b>LOVICON BRAND S.A.S.</b>, son los siguientes:
        </Typography>
      </Box>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
          Conocer, actualizar y rectificar sus datos personales frente a <b>LOVICON BRAND S.A.S.</b>, en su
          condición de Responsable del Tratamiento.
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
          Solicitar prueba de la autorización otorgada a <b>LOVICON BRAND S.A.S.</b>, en su condición de
          Responsable del Tratamiento.
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
          Ser informado por <b>LOVICON BRAND S.A.S.</b>, previa solicitud, respecto del uso que le ha dado a
          sus datos personales.
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
          Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo
          dispuesto en la Ley 1581 de 2012, una vez haya agotado el trámite de consulta o reclamo ante
          el Responsable del Tratamiento.
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
          Revocar la autorización y/o solicitar la supresión del dato cuando en el Tratamiento no se
          respeten los principios, derechos y garantías constitucionales y legales.
        </ListItemText>
      </ListItem>
      <ListItem alignItems='flex-start'>
        <ListItemIcon><FiberManualRecord color='primary' style={{ fontSize: 16 }} /></ListItemIcon>
        <ListItemText>
          Acceder en forma gratuita a sus datos personales que hayan sido objeto de tratamiento.
        </ListItemText>
      </ListItem>
      <Box mb={2.5}>
        <Typography align='justify'>
          Dichos derechos podrán ser ejercidos a través de los siguientes canales: i) correo
          electrónico: <a href='mailto:sergio.parra@loviconbrand.com'>sergio.parra@loviconbrand.com</a> ii)
          Físico a la dirección: Carrera 27C Nº 71B-70, Bogotá, Colombia.
        </Typography>
      </Box>
      <Box mb={2.5}>
        <Typography align='justify'>
          <b>DATOS SENSIBLES: LOVICON BRAND S.A.S.</b> me ha informado que no estoy obligado a autorizar el
          tratamiento de datos sensibles. Teniendo en cuenta lo anterior y para los efectos previstos
          en las finalidades mencionadas en el aviso de privacidad, autorizo expresamente el uso de los
          datos relativos a la salud, y mis datos biométricos, en especial para el cumplimiento de
          obligaciones legales y temas administrativos, publicitarios, de seguridad física, seguridad
          industrial y seguridad social.
        </Typography>
      </Box>
      <Box mb={2.5}>
        <Typography align='justify'>
          <b>RECOLECCIÓN DEL TRATAMIENTO DE DATOS PERSONALES DE LOS NIÑOS, NIÑAS Y ADOLESCENTES:</b> Los datos
          personales de niños, niñas y adolescentes recolectados, serán tratados de conformidad con lo
          estipulado en el artículo 12 del Decreto 1377 de 2013.
        </Typography>
      </Box>
      <Box mb={2.5}>
        <Typography align='justify'>
          <b>DECLARO:</b> (i) Que la información que he suministrado es verídica, completa, exacta,
          actualizada, real  y comprobable, por lo tanto, cualquier error en la información suministrada
          será de mi única y exclusiva responsabilidad, lo que exonera a <b>LOVICON BRAND S.A.S.</b> de su
          responsabilidad ante las autoridades judiciales y/o  administrativas. (ii) Que he sido
          informado del carácter facultativo que tiene el otorgamiento de autorización de datos
          sensibles y de datos de niños, niñas y adolescentes, por lo cual, con la firma de este
          documento, autorizo su uso en los términos y para los fines establecidos en  las políticas
          y procedimientos para la protección de datos personales de <b>LOVICON BRAND S.A.S.</b>, disponible
          en la página web mencionada en el aviso de privacidad y (iii) Haber leído cuidadosamente el
          contenido de esta autorización y haberla comprendido a cabalidad. Razón por la cual entiendo
          sus alcances e implicaciones. (iv) Las normas a las que este acto se encuentra sometido, son
          las de la República de Colombia. (v) La vigencia de esta autorización es indefinida y
          permanecerá vigente mientras no se revoque de manera expresa y escrita en los términos
          establecidos en la ley.
        </Typography>
      </Box>
    </Box>
  )
}
