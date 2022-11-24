function Quiz () {

//instrucciones//
alert('Las respuestas deberan ser vocales en mayusculas...')


let pregunta1 = prompt
('Cuales son los 5 tipos de sabores primarios? \nA.Umami, acido, mixto, dulce, salado \nB.dulce, Amargo, sinSabor, mixto, Agridulce \nC.dulce, amargo, acido, salado, Umami')
//Evaluando...
switch (pregunta1) {
    case 'C':
        alert('Acertaste,prueba con la siguiente')

        //Se itera otra pregunta condicionalmente...

    let Acerto = prompt
    ('De que pais es originario el cafe? \nA.antioquia/Colombia \nB.caracas/venezuela \nC.etiopia/africa')

    //Evaluando la pregunta auxiliar...

        switch (Acerto) {
            case 'B':
            case 'A':
                alert('Fallaste, te queda otra oportunidad')

                 //Se itera otra pregunta condicionalmente...
                 
                let Fallo = prompt
                ('Que es un ebook? \nA.un libro en formato digital \nB.un cuaderno de apuntes web')
                 //Evaluando...
                    switch (Fallo) {
                        case 'B':
                            alert('Fallaste tu ultima oportunidad, se sabe que es un libro en formato digital')
                            Quiz ()
                            break;

                        case null:
                            alert('Quieres salir del Quiz?')
                            prompt = false
                            break;

                        case 'A':
                            alert('Acertaste!!')
                            //
                            break;

                    default:
                        prompt = false
                            break;
                        }
                break;

                case null:
                    alert('Quieres salir del Quiz?')
                    prompt = false
                    break;

                case 'C':
                    alert('Acertaste!!')
                    //
                    break;

            default:
                prompt = false
                break;

        }//seguimos con la (pregunta1)
        break;

    case 'B':
        alert('Fallaste, te queda otra oportunidad')
        //Se le da otra oportunidad al usuario despues de un fallo.
    let fallo = prompt
    ('Que seleccion nacional ha ganado mas copas mundiales de futbol? \nA.alemania \nB.argentina \nC.brasil \nD.argelia')
    //evaluando...
            switch (fallo) {
                case 'A':
                case 'B':
                case 'D':
                    alert('Fallaste tu ultimo intento, la respuesta era brasil :/')
                    Quiz()
                    break;

                case 'C':
                    alert('Muy bien, acertaste, sigues con vida')
                    //
                    break;

                default:
                    prompt = false
                    break;
               }
        break;

    case 'A':
        alert('Fallaste, te queda otra oportunidad')
        //otro intento...
        let fallaste = prompt('En que pais se encuentra la universidad de cambridge? \nA.inglaterra \nB.estados unidos \nC.canada \nD.reino unido')
        //Evaluamos..
        switch (fallaste) {
            case 'A':
            case 'B':
            case 'C':
                 alert('Fallaste tu ultimo intento, la respuesta es reino unido :/')
                 Quiz()
                 break;

            case null:
                alert('Quieres salir del quiz?')
                prompt = false
                break;

            case 'D':
                alert('Muy bien,acertaste, sigues con vida')
                //
                break;

            default:
                prompt = false
                break;

             }//segumos con (pregunta1)
        break;

    case null:
        alert('Quieres salir del quiz?')
        prompt = false
        break;
        
    default:
        prompt = false
        break;
    }
//--
let pregunta2 = prompt
('En que año fallecio steve jobs? \nA.2007 \nB.2004 \nC.2011 ')

    switch (pregunta2) {
        case 'B':
            alert('Fallaste, te queda otra oportunidad')
            //otro intento...
            let fallito = prompt
            ('Quien era steve jobs? \nA.un famoso agricultor \nB.cofundador de facebook \nC.cofundadorde apple y creador de pixar')
            //Evaluamos..
            switch (fallito) {
                case 'A':
                case 'B':
                    alert('Fallaste tu ultimo intento, steve jobs fue el creador de pixar( Yo tampoco lo sabia antes de investigar )')
                    Quiz()
                    break;

                case null:
                    alert('Quieres salir del quiz?')
                    prompt = false
                    break;

                case 'C':
                alert('Muy bien, acertaste, sigues con vida')
                break;

                default:
                    prompt = false
                    break;

            }//(pregunta2)
            break;

        case 'C':
            alert('Fallaste, te queda otra oportunidad')
            let Falloo = prompt('A cuanto equivale el numero pi? \nA.3,1615 \nB.3,1416 \nC.3,1617')
            //evaluamos.
            switch (Falloo) {
                case 'A':
                case 'C':
                    alert('Fallaste tu ultimo intento, todos sabemos que es 3,1416 :/')
                    Quiz()
                    break;

                case null:
                    alert('Quieres salir del quiz?')
                    prompt = false
                    break;

                case 'B':
                    alert('Muy bien, acertaste, sigues con vida')
                    break;

                default:
                    prompt = false
                    break;
            }// (pregunta2)
            break;

        case 'A':
            alert('Acertaste!!')

            let acierto = prompt('Cual es la capital de croacia? \nA.zagreb \nB.split \nC.zadar')
            //evaluamos la pregunta auxiliar...
            switch (acierto) {
                case 'B':
                case 'C':
                    alert('Fallaste, te queda otra oportunidad')

                    let fallooo = prompt('Cual es la capital de dinamarca? \nA.copenhague \nB.Odense \nC.Skagen')
                    switch (fallooo) {
                        case 'B':
                        case 'C':
                            alert('Fallaste tu ultimo intento, es copenhage :/')
                            Quiz()                         
                            break;

                        case null:
                            alert('Quieres salir del quiz?')
                            prompt = false
                            break;

                        case 'A':
                            alert('Muy bien, acertaste, sigues con vida')
                            break;

                        default:
                            prompt = false
                            break; 
                    }
                    break;

                 case null:
                    alert('Quieres salir del quiz?')
                    prompt = false
                    break;

                case 'A':
                    alert('Acertaste!!')
                    break;

                default:
                    prompt = false
                    break;

            }//pregunta2)
            break;

        case null:
            alert('Quieres salir del quiz?')
            prompt = false
            break;

        default:
            prompt = false
            break;
    }


//--

let pregunta3 = prompt('De que lengua proviene el español? \nA.castellano \nB.hebreo \nC.Lituano \nD.latin')

switch (pregunta3) {
    case 'A':
        alert('Fallaste descaradamente, te queda otra oportunidad')
        let erronea = prompt('¿En que pais mayormente, todavia NO abunda la conexion a internet? \nA.Myanmar \nB.etiopia \nC.tanzania')

            switch (erronea) {
                case 'B':
                case 'C':
                    alert('Fallaste tu ultimo intento, era myanmar :/')
                    Quiz()
                    break;

                case 'A':
                    alert('Muy bien, acertaste, sigues con vida')
                    let buena = prompt('De que estado fue emperador Napoleon Bonaparte? \nA.de italia \nB.de francia \nC.de republica checa')

                    switch (buena) {
                        case 'A':
                        case 'C':
                            alert('Fallaste, te queda otra oportunidad')
                            let mala = prompt('Donde esta la casa blanca? \nA.estados unidos \nB.francia \nC.italia')

                            switch (mala) {
                                case 'B':
                                case 'C':
                                    alert('Fallaste tu ultimo intento :/')
                                    Quiz()
                                    break;

                                case null:
                                    alert('Quieres salir del quiz?')
                                    prompt = false
                                    break;

                                case 'A':
                                    alert('Estaba muy facil...')
                                    let dificil = prompt('Tengo mas de 3 lados y menos de 5 lados, tengo todos los lados de igual medida ¿quien soy? \nA.un hexagono \nB.un poligono \nC.un cuadrado')

                                    switch (dificil) {
                                        case 'A':
                                        case 'B':
                                            alert('Fallaste, la respuesta era un cuadrado :/')
                                            Quiz()
                                            break;

                                        case 'C':
                                            alert('acertaste!!')
                                            break;
                                    
                                        default:
                                            prompt = false
                                            break;
                                    }
                                    break;
                                    
                                default:
                                    prompt = false
                                    break;
                            }
                        
                            break;
                            
                            case null:
                                alert('Quieres salir del quiz?')
                                prompt = false
                                break;

                            case 'B':
                                alert('Acertaste!!')
                                break;

                        default:
                            prompt = false
                            break;
                    }
                    break;

                case null:
                alert('Quieres salir del quiz?')
                prompt = false
                break;

            default:
                prompt = false
                break;
            }
        //(prgunta3)
        break;

    case 'B':
        alert('Fallaste, te queda otra oportunidad')
        let noAcertaste = prompt('Que es la unidad de estado solido de un ordenador? \nA.una alternativa al disco duro \nB.un disco duro externo \nC.un microcontrolador')

        switch (noAcertaste) {
            case 'B':
            case 'C':
                alert('Fallaste tu ultimo intento, es una alternativa al disco duro :/')
                Quiz()
                break;

            case null:
                alert('Quieres salir del quiz?')
                prompt = false
                break;
        
            case 'A':
                alert('Muy bien, acertaste, sigues con vida')
                let siAcertaste = prompt('¡Que necesita un microcontrolador para funcionar? \nA.un compilador, un IDE, un programador \nB.una CPU y un entorno linux \nC.un simple conector \nD.un chip externo que lo conecte')

                switch (siAcertaste) {
                    case 'B':
                    case 'C':
                    case 'D':
                        alert('Fallaste, te queda otra oportunidad')
                        let ultOpdad = prompt('Que es mas grande un atomo o una celula? \nA.una celula porque tiene mas nutrientes \nB.un atomo tiene mayores dimensiones que una celula \nC.una celula tiene mayor dimension que un atomo')

                        switch (ultOpdad) {
                            case 'A':
                            case 'B':
                                alert('Fallaste tu ultimo intento, la celula es mas grandeee')
                                Quiz()
                                break;

                            case null:
                                alert('Quieres salir del quiz?')
                                prompt = false
                                break;

                            case 'C':
                                alert('Estaba facilisima!, continua con esta')

                            let opdad = prompt('Cuatro gatos en un cuarto, cada uno en un rincon, cada gato ve tres gatos, adivina cuantos gatos son \nA. tres gatos \nB.seis gatos \nC.cuatro gatos')

                                switch (opdad) {
                                    case 'A':
                                    case 'B':
                                        alert('Fallaste tu ultimo intento, eran cuatro gatos /:')
                                        Quiz()
                                        break;

                                    case null:
                                        alert('Quieres salir del quiz?')
                                        prompt = false
                                        break;

                                    case 'C':
                                        alert('Acertaste!!')
                                
                                    default:
                                        prompt = false
                                        break;
                                }
                                break;
                    
                            default:
                                prompt = false
                                break;
                        }
                        
                        break;
                    
                    case null:
                        alert('Quieres salir del quiz?')
                        prompt = false
                        break;

                    case 'A':
                        alert('Acertaste, prueba con la siguiente')
                        let intenta = prompt('Los pulpos tienen varios corazones? \nA.Falso, solo tenen 1 \nB.verdadero, tienen 3 \nC.verdadero, tienen 4')

                        switch (intenta) {
                            case 'A':
                            case 'C':
                                alert('Fallaste los pulpos tienen 3 corazones :/')
                                Quiz()
                                break;

                             case null:
                                alert('Quieres salir del quiz?')
                                prompt = false
                                break;

                            case 'B':
                                alert('Muy bien, acertase!')
                                break;
                                
                            default:
                                prompt = false
                                break;
                        }

                    default:
                        prompt = false
                        break;
                }
                
            case null:
                alert('Quieres salir del quiz?')
                prompt = false
                break; 
            
            default:
                prompt = false
                break;
            }
    //(pregunta3)
    break;

    case 'C':
        alert('Fallaste, te queda otra oportunidad')

        let desacierto = prompt('De donde proviene el virus troyano? \nA.de troya \nB.Es un virus disfrazado de inofensivo pero no lo es \nC.un virus que se activa despues de conectar una USB en tu ordenador')

        switch (desacierto) {
            case 'A':
            case 'C':
                alert('Fallaste tu ultima oportunidad :/')
                Quiz()
                break;
            
            case null:
                alert('Quieres salir del quiz?')
                prompt = false
                break;
                
            case 'B':
                alert('Muy bien, acertaste, sigues con vida')
                let desacierto = prompt('Que seleccion naciopnal de futbol es conocida como la "roja"? \nA.la seleccion española \nB.la seleccion de dinamarca \nC.la seleccion de suiza')

                switch (desacierto) {
                    case 'B':
                    case 'C':
                        alert('Fallaste pero en realidad la bandera es roja, mas no su "apodo", tienes otro intento')
                        let fallaste = prompt('En que año se produjeron los atentados sobre las torres gemelas de nueva york? \nA.2001 \nB.2011 \nC.2009')

                        switch (fallaste) {
                            case 'B':
                            case 'C':
                                alert('Fallaste tu ultimo intento')
                                Quiz()
                                break;

                            case null:
                                alert('Quieres salir del quiz?')
                                prompt = false
                                break;

                            case 'A':
                                alert('Muy bien acertaste!')
                                break;
                        
                            default:
                                prompt = false
                                break;
                        }

                        break;

                    case null:
                        alert('Quieres salir del quiz?')
                        prompt = false
                        break;

                    case 'A':
                        alert('Muy bien acertaste, prueba con la siguiente')
                        let acertaste = prompt('En que año llego el ser humano a la luna? \nA.1920 \nB.1980 \nC.1969')

                        switch (acertaste) {
                            case 'A':
                            case 'B':
                                alert('Fallaste, era en 1969, tienes otra oportunidad')
                                let t = prompt('son las doce de la mañana, hora de mis pastillas. me tengo que tomar 4 pastillas, una cada hora ¿A que hora me tomare la ukltima? \nA.4 de la tarde \nB.6 de la tarde \nC.3de la tarde')

                                switch (t) {
                                    case 'A':
                                    case 'B':
                                        alert('Fallaste tu ultima oportunidad :/')
                                        Quiz()
                                        break;

                                    case 'C':
                                        alert('Acertaste!!')
                                
                                    default:
                                        prompt = false
                                        break;
                                }
                                break;

                            case null:
                                alert('Quieres salir del quiz?')
                                prompt = false
                                break;

                            case 'C':
                                alert(' muy bien acertaste!')
                                break;

                            default:
                                prompt = false
                                break;
                        }

                        break;
                
                    default:
                        prompt = false
                        break;
                }

            default:
                prompt = false
                break;
        }
    //(pregunta3)
    break;

    case 'D':
        alert('Acertaste, prueba con la siguiente')
        let Acierto = prompt('Cual es el videojuego mas adictivo creado hasta el momento? \nA.super mario bros y toda su saga \nB.clash royale \nC.skyrim \nD.Minecraft \nE.fortnite')

        switch (Acierto) {
            case 'B':
            case 'C':
            case 'E':
                alert('Fallaste por poco,intentalo de nuevo con esta')
                let mentira = prompt('Cual es la base de sus proyectos utilizada los programadores web \nA.html \nB.xml \nC.python')

                switch (mentira) {
                    case 'B':
                    case 'C':
                        alert('Aunque podrian serlo, normalmente es HTML :/')
                        Quiz()
                        break;

                    case null:
                        alert('Quieres salir del quiz?')
                        prompt = false
                        break;

                    case 'A':
                        alert('Muy bien, acertaste, sigues con vida')
                        let opndad = prompt('Que enfermedad padecio stephen hawking? \nA.esclerosis lateral amiotrofica( ELA ) \nB.artrosis cervical \nC.hipertiroidismo')

                        switch (opndad) {
                            case null:
                                prompt = false
                                break;

                            case 'B':
                            case 'C':
                                alert('Fallaste!')
                                Quiz()
                                break;

                            case 'A':
                                alert('Acertaste!')
                                break;

                            default:
                                prompt = false
                                break;
                        }

                    default:
                        prompt = false
                        break;
                }
                
                break;
        
            case 'A':
            case 'D':
                alert("Acertaste, prueba con la siguiente")
                let verdad = prompt('¿Quien es el autor de la frase "Pienso, luego existo"? \nA.Aristoteles \nB.Platon \nC.karl marx \nD.Rene descartes')

                switch (verdad) {
                    case 'A':
                    case 'B':
                    case 'C':
                        alert('fallaste, te  queda una ultima oportunidad')
                        let otraOpndad = prompt('Quien sabia que no sabia nada? \nA.Socrates \nB.platon \nC.aristoteles')

                        switch (otraOpndad) {
                            case 'C':
                            case 'B':
                                alert('Fallaste tu ultimo intento, era  socrates :/')
                                
                                break;

                             case null:
                                alert('Quieres salir del quiz?')
                                prompt = false
                                break;

                            case 'A':
                                alert('Acertaste, muy bien!') 
                                break;
                            
                            default:
                                prompt = false
                                break;
                        }
                        break;

                    case null:
                        alert('Quieres salir del quiz?')
                        prompt = false
                        break;

                    case 'D':
                        alert('Acertaste, muy bien!')
                        break;

                    default:
                        prompt = false
                        break;
                }
                break;

            case null:
                alert('Quieres salir del quiz?')
                prompt = false
                break;

            default:
                prompt = false
                break;
            }
        //(pregunta3)
        break;
    
    case null:
        alert('Quieres salir del quiz?')
        prompt = false
        break;

    default:
        prompt = false
        break;
}

//--Cada vez que  el user acierte o falle una pregunta tendra mas o menos puntos--//
                        //(pregunta1, pregunta2, pregunta3)

alert('Revisa cuantos puntos obtuviste!')

switch (pregunta1 && pregunta2 && pregunta3) {
    case 'C' && 'A' && 'D':
        alert('Obtuviste 20 puntos, felicidades!')
        break;
    
    case 'C' && 'B' && 'C':
        alert('obtuviste 10 puntos, puedes mejorar!')
        break;

    case 'A' && 'C' && 'D':
        alert('obtuviste 8 puntos, muy mal!')
    break;

    case 'A' && 'C' && 'D':
        alert('obtuviste 15 puntos, puedes mejorar!')

    default:
        alert('sigue intentando, no obtuviste puntos suficientes :/')
        break;
}

}
