/*---------------------------------------------------------------------------------------
  😎 • By https://github.com/HACHEJOTA
-----------------------------------------------------------------------------------------*/
import db from '../lib/database.js'

let handler = async (m, { conn, text}) => {

let hasil = Math.floor(Math.random() * 5000)

  m.reply(`
*┏━🝮︎︎︎︎︎︎︎🝮︎︎︎︎︎︎🝮︎︎︎︎︎🝮︎︎︎︎︎︎︎✿︎🝮︎︎︎︎︎︎︎🝮︎︎︎︎︎︎🝮︎︎︎︎︎︎︎✿︎🝮︎︎︎︎︎︎︎🝮︎︎︎︎︎︎︎🝮︎︎︎︎︎︎━┓*\n
*➳"${pickRandom(global.consejo)}"*\n\n\t➳ *_By ${hj}_*\n*┗━🝮︎︎︎︎︎︎︎🝮︎︎︎︎︎︎︎︎︎︎︎︎︎︎🝮︎︎︎︎︎︎︎✿︎🝮︎︎︎︎︎︎︎🝮🝮︎︎︎︎︎︎︎✿︎🝮🝮︎︎︎︎︎︎︎︎︎︎︎🝮︎︎︎︎︎︎︎━┛*
`)
}
handler.tags = ['frases']
handler.command = handler.help = ['consejo']


handler.fail = null
handler.exp = 0

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.consejo = ["Recuerda que no puedes fallar en ser tú mismo (Wayne Dyer)","Siempre es temprano para rendirse (Jorge Álvarez Camacho)","Sólo una cosa convierte en imposible un sueño: el miedo a fracasar (Paulo Coelho)","Lo que haces hoy puede mejorar todos tus mañanas (Ralph Marston)","Las pequeñas acciones de cada día hacen o deshacen el carácter (Oscar Wilde)","Cáete siete veces y levántate ocho (Proverbio japonés)","Para que los cambios tengan un valor verdadero deben ser consistentes y duraderos (Anthony Robbins)","Nada sucede hasta que algo se mueve (Albert Einstein)","Ser un buen perdedor es aprender cómo ganar (Carl Sandburg)","Todos nuestros sueños pueden hacerse realidad, si tenemos el coraje de perseguirlos (Walt Disney)","Quien se transforma a sí mismo, transforma el mundo (Dalai Lama)","Tu tiempo es limitado, así que no lo malgastes viviendo la vida de alguien más… ten el valor de seguir tu corazón y tu intuición (Steve Jobs)","La mayoría de las personas gastan más tiempo y energías en hablar de los problemas que en afrontarlos (Henry Ford)","No es que tengamos poco tiempo, es que perdemos mucho (Séneca)","Para poder triunfar, tu deseo de tener éxito debe ser mayor que tu miedo a fracasar (Bill Cosby)","El verdadero buscador crece y aprende, y descubre que siempre es el principal responsable de lo que sucede (Jorge Bucay)","Si la oportunidad no llama a tu puerta, construye una puerta (Milton Berle)","Siempre hay una mejor manera de hacerlo, encuéntrala (Thomas A. Edison)"," Nunca es demasiado tarde para ser la persona que podrías haber sido (George Eliot)","Cuando ya no somos capaces de cambiar una situación, tenemos el reto de cambiarnos a nosotros mismos (Viktor Frankl)","La derrota no es derrota hasta que es aceptada como una realidad en tu propia mente (Bruce Lee)","Es duro fracasar, pero es todavía peor no haber intentado nunca triunfar (Theodore Roosevelt)","La felicidad está escondida en la sala de espera de la felicidad (Eduard Punset)","La confianza en sí mismo es el primer secreto del éxito (Ralph Waldo Emerson)","El hombre bien preparado para la lucha ya ha conseguido medio triunfo (Miguel de Cervantes)","Sabemos lo que somos, pero no sabemos lo que podemos ser (William Shakespeare)","La vida comienza al final de la zona de confort (Neale Donald Walsch)","Cualquiera que no esté cometiendo errores es que no está intentándolo lo suficiente (Wess Roberts)","Debes hacer las cosas que piensas que no puedes hacer (Eleanor Roosevelt)","Confiar en ti mismo no garantiza el éxito, pero no hacerlo garantiza el fracaso (Albert Bandura)","El mayor error que una persona puede cometer es tener miedo de cometer un error (Elbert Hubbard)","De una pequeña semilla un poderoso tronco puede crecer (Esquilo)","La única manera de encontrar los límites de lo posible es ir más allá de lo imposible (Arthur C. Clarke)","Cuando la vida te ofrezca un limón, exprímelo y haz limonada (Clement Stone)","La medida de lo que somos es lo que hacemos con lo que tenemos (Vince Lombardi)","Nos convertimos en lo que pensamos (Earl Nightingale)","Solo aquellos que se atreven a tener grandes fracasos terminan consiguiendo grandes éxitos (Robert F. Kennedy)","El poder de la imaginación nos hace infinitos (John Muir)","Antes que nada, la preparación es la llave del éxito (Alexander Graham Bell)","El mejor modo de predecir el futuro es inventándolo (Alan Key)","Las cosas no se dicen, se hacen, porque al hacerlas se dicen solas (Woody Allen)","Dale luz y la oscuridad desaparecerá por sí mismo (Erasmo)","Para aumentar nuestro grado de autoestima, primero debemos aprender a vivir conscientemente, porque este es nuestro fundamento de todo (Nathaniel Branden)","El problema es que piensas que tienes tiempo (Buda)","Una persona con una nueva idea es una broma hasta que la idea tiene éxito (Mark Twain)","Si de veras desear ver al Creador, conviértete en un creador (Deepak Chopra)","No se sale adelante celebrando éxitos sino superando fracasos (Orison Swett Marden)","El miedo puede paralizar, dominar, aislar, pero ante un atisbo de valentía cederá terreno rápidamente (Jose Antonio Marina)","Tener éxito no es aleatorio; es una variable dependiente del esfuerzo (Sófocles)","El hombre necesita dificultades porque son necesarias para disfrutar del éxito (A.P.J. Abdul Kalam)","Agudiza la percepción de todo lo que te hace sentir bien y recréate en ello (Martin Seligman)","No te desanimes. A menudo la última llave que te queda por probar abre el candado. (Anónimo)","No merece la pena vivir una vida sin examinar (Sócrates)","Todo es crecimiento y aprendizaje, un crecimiento continuo (Brian Weiss)","Siempre estoy haciendo cosas que no sé hacer, de manera que tengo que aprender como hacerlo (Pablo Picasso)","Un líder es alguien que conoce el camino, lo recorre y lo muestra (John C.Maxwell)","Todos los éxitos resultan de trabajar y saber perseverar (Og Mandino)","Cuando está muy oscuro puedes ver las estrellas (Proverbio persa)","El mayor placer de la vida es hacer lo que la gente dice que no puedes hacer (Walter Bagehot)","El éxito es conseguir lo que quieres. La felicidad, es querer lo que ya has conseguido (Lair Ribeiro)","Puedes hacer cualquier cosa pero no puedes hacerlo todo (David Allen)","Solo yo puedo cambiar mi vida. Nadie puede hacerlo por mí (Carol Burnett)","El noventa por ciento de todos los que fallan, no están realmente derrotados; sencillamente se dan por vencidos (Paul J. Meyer)","Siempre parece imposible … hasta que se hace (Nelson Mandela)","Todo hombre muere. No todo hombre vive (William Wallace)","Nada en la vida debe ser temido, solamente comprendido. Es hora de comprender más y temer menos (Marie Curie)","Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto sino un hábito (Aristóteles)","La vida no es un problema a ser resuelto, sino una realidad a experimentar (Soren Kierkegaard)","Solo es posible avanzar cuando se mira lejos. Solo cabe progresar cuando se piensa en grande (Ortega y Gasset)","La victoria es más dulce cuando ya conociste la derrota (Malcolm Forbes)","Lo que no te mata te hace más fuerte (Friedrich Nietzsche)","Solo aquellos que se atreven a sufrir grandes fracasos son capaces de conseguir grandes éxitos (Will Smith)","El verdadero emprendedor es un hacedor, no un soñador (Nolan Bushnell)","Tienes que entrenar tu cerebro para ser positivo al igual que entrenas tu cuerpo (Shawn Achor)","La fortaleza y crecimiento llegan solo a través de esfuerzo y lucha continuas (Napoleon Hill)","Allí fuera, en algún garaje, hay un emprendedor forjando una bala con el nombre de tu compañía (Gary Hamel)","Cuando tienes un sueño tienes que agarrarlo y nunca dejarlo ir (Carol Burnett)","Mira de cerca al presente que estas construyendo, debería parecerse al futuro que estas soñando (Alice Walker)","No sobreviven las especies más fuertes, ni las más inteligentes, sino las que mejor se adaptan al cambio (Darwin‪)","Cuanto más hacemos, más podemos hacer (William Hazlitt)","La vida no trata de encontrarte a ti mismo. La vida trata de crearte a ti mismo (George Bernard Shaw)","La suerte es un dividendo del sudor. Cuanto más sudes, más suerte tendrás (Ray Kroc)","La forma más efectiva de hacerlo, es hacerlo (Amelia Earhart)","El significado de la vida es darle a la vida significado (Ken Hudgins)","La clave del éxito: querer ganar, saber perder (Nicolás de Maquiavelo)","No puedes derrotar a la persona que nunca se rinde (Babe Ruth)","Un sueño es solo un sueño. Una meta es un sueño con un plan y una fecha límite (Harvey Mackay)","El éxito es una decisión. Decide lo que harás con tu vida u otra persona lo hará por ti (John Atkinson)","Tienes que hacer que ocurra (Denis Diderot)","La vida es una obra de teatro que no permite ensayos… Por eso, canta, ríe, baila, llora y vive intensamente cada momento de tu vida… Antes que el telón baje y la obra termine sin aplausos (Charles Chaplin)","Si metes la pata no es culpa de tus padres ni de tus profesores, así que no lloriquees por tus errores y aprende de ellos (Bill Gates)","No huyo de un reto porque tenga miedo. Al contrario, corro hacia el reto porque la única forma de escapar al miedo es arrollarlo con tus pies (Nadia Comaneci)","Un buen plan imperfecto ejecutado hoy es mejor que un plan perfecto ejecutado mañana (General Patton)","La determinación es el punto inicial de todo logro (W.Clement Stone)","Lo que no se empieza nunca tendrá un final (Johann Wolfgang von Goethe)","Elige un trabajo que te guste, y nunca tendrás que volver a trabajar en tu vida (Confucio)","El mayor riesgo es no asumir ningún riesgo (Mark Zuckerberg)","Puedo aceptar el fracaso, todos fracasan en algo. Pero no puedo aceptar no intentarlo (Michael Jordan)","Uno de los mayores errores que comete la gente es intentar forzarse a tener interés por algo. Tú no eliges tus pasiones; tus pasiones te eligen a ti (Jeff Bezos)","Hazlo, o no lo hagas, pero no lo intentes (Yoda)","El principal arma para que un pais sea potencia es la educacion (HacheJota)","Sé tú mismo. Todos los demás ya están ocupados (Oscar Wilde)","Sé la mejor versión de ti mismo(Anonimo)"]
,"Sé el cambio que quieres ver en el mundo (Mahatma Gandhi)","El momento que da más miedo es siempre justo antes de empezar (Anonimo)","Cuando pierdas, no pierdas la lección (Dalai Lama)","Deséalo, espéralo, suéñalo, pero por todos los medios… ¡Hazlo! (HacheJota)","No esperes. Nunca va a ser el momento adecuado (Napoleon Hill)","Puedes más de lo que te imaginas, vales más de lo que crees","La energía y la persistencia conquistan todas las cosas (Benjamin Franklin)","Tu mejor profesor es tu mayor error (HacheJota)","Tienes que hacer las cosas que crees que no puedes hacer (Eleanor Roosevelt)","Todas las mañanas, levántate con la idea de comerte el mundo","No cuentes los días, haz que los días cuenten (Anonimo)"
