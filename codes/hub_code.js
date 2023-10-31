document.addEventListener("DOMContentLoaded", function () {

    // ---------------------Arrays con Rutinas--------------

        /* Array Secciones */
        const secciones = [
            {
                titulo: "Tren Superior...",
                imagenes: [
                    { src: "assets/images/black/24.jpg", alt: "rutina_pechoGym", txt: "Rutina de Pecho,Hombro y Tríceps (Gym)", id: "imagen-texto1"},
                    { src: "assets/images/black/7.jpg", alt: "rutina_espaldaGym", txt: "Rutina de Espalda y Bíceps (Gym)", id: "imagen-texto2"},
                    { src: "assets/images/black/26.jpg", alt: "rutina_pechoCal", txt: "Rutina de Pecho,Hombro y Tríceps (Calistenia)", id: "imagen-texto3"},
                    { src: "assets/images/black/25.jpg", alt: "rutina_espaldaCal", txt: "Rutina de Espalda y Bíceps (Calistenia)", id: "imagen-texto4"},
                    { src: "assets/images/black/27.jpg", alt: "rutina_pechoCasa", txt: "Rutina de Pecho,Hombro y Tríceps (En Casa)", id: "imagen-texto5"},
                    { src: "assets/images/black/19.jpg", alt: "rutina_espaldaCasa", txt: "Rutina de Espalda y Bíceps (En Casa)", id: "imagen-texto6"},
                ],
            },
            {
                titulo: "Tren Inferior...",
                imagenes: [
                    { src: "assets/images/black/20.jpg", alt: "rutina_inferiorGym", txt: "Rutina de Piernas y Glúteos (Gym)", id: "imagen-texto1" },
                    { src: "assets/images/black/23.jpg", alt: "rutina_piernasGym", txt: "Rutina de Piernas (Gym)", id: "imagen-texto2" },
                    { src: "assets/images/black/28.jpg", alt: "rutina_inferiorMan", txt: "Rutina de Piernas y Glúteos (Mancuernas)", id: "imagen-texto3" },
                    { src: "assets/images/black/29.jpg", alt: "rutina_piernasMan", txt: "Rutina de Piernas (Mancuernas)", id: "imagen-texto4" },
                    { src: "assets/images/black/30.jpg", alt: "rutina_piernasCasa", txt: "Rutina de Piernas (En Casa)", id: "imagen-texto5" },
                    { src: "assets/images/black/31.jpg", alt: "rutina_inferiorCasa", txt: "Yoga para Tren Inferior (En Casa)", id: "imagen-texto6" },
                ],
            },
            {
                titulo: "Full Body...",
                imagenes: [
                    { src: "assets/images/black/6.jpg", alt: "rutina_fullGym", txt: "Rutina de Cuerpo Completo (Gym)", id: "imagen-texto1" },
                    { src: "assets/images/black/5.jpg", alt: "rutina_fullGym2", txt: "Rutina de Cuerpo Completo 2 (Gym)", id: "imagen-texto2" },
                    { src: "assets/images/black/8.jpg", alt: "rutina_fullMan", txt: "Rutina de Cuerpo Completo (Mancuernas)", id: "imagen-texto3" },
                    { src: "assets/images/black/4.jpg", alt: "rutina_fullCal", txt: "Rutina de Cuerpo Completo (Calistenia)", id: "imagen-texto4" },
                    { src: "assets/images/black/11.jpg", alt: "rutina_fullCasa", txt: "Rutina de Cuerpo Completo (En Casa)", id: "imagen-texto5" },
                    { src: "assets/images/black/13.jpg", alt: "rutina_fullCasa2", txt: "Rutina de Cuerpo Completo 2 (En Casa)", id: "imagen-texto6" },
                ],
            },
            // Aumentar Masa Muscular
            {
                titulo: "Para Ti...",
                imagenes: [
                    { src: "assets/images/black/24.jpg", alt: "rutina_pechoGym", txt: "Rutina de Pecho,Hombro y Tríceps (Gym)", id: "imagen-texto1"},
                    { src: "assets/images/black/7.jpg", alt: "rutina_espaldaGym", txt: "Rutina de Espalda y Bíceps (Gym)", id: "imagen-texto2"},
                    { src: "assets/images/black/20.jpg", alt: "rutina_inferiorGym", txt: "Rutina de Piernas y Glúteos (Gym)", id: "imagen-texto3" },
                    { src: "assets/images/black/29.jpg", alt: "rutina_piernasMan", txt: "Rutina de Piernas (Mancuernas)", id: "imagen-texto4" },
                    { src: "assets/images/black/25.jpg", alt: "rutina_espaldaCal", txt: "Rutina de Espalda y Bíceps (Calistenia)", id: "imagen-texto5"},
                    { src: "assets/images/black/23.jpg", alt: "rutina_piernasGym", txt: "Rutina de Piernas (Gym)", id: "imagen-texto6" },
                ],
            },
            // Reducir Grasa
            {
                titulo: "Para Ti...",
                imagenes: [
                    { src: "assets/images/black/26.jpg", alt: "rutina_pechoCal", txt: "Rutina de Pecho,Hombro y Tríceps (Calistenia)", id: "imagen-texto1"},
                    { src: "assets/images/black/25.jpg", alt: "rutina_espaldaCal", txt: "Rutina de Espalda y Bíceps (Calistenia)", id: "imagen-texto2"},
                    { src: "assets/images/black/6.jpg", alt: "rutina_fullGym", txt: "Rutina de Cuerpo Completo (Gym)", id: "imagen-texto3" },
                    { src: "assets/images/black/29.jpg", alt: "rutina_piernasMan", txt: "Rutina de Piernas (Mancuernas)", id: "imagen-texto4" },
                    { src: "assets/images/black/4.jpg", alt: "rutina_fullCal", txt: "Rutina de Cuerpo Completo (Calistenia)", id: "imagen-texto5" },
                    { src: "assets/images/black/20.jpg", alt: "rutina_inferiorGym", txt: "Rutina de Piernas y Glúteos (Gym)", id: "imagen-texto6" },
                ],
            },
            // Mantener Peso
            {
                titulo: "Para Ti...",
                imagenes: [
                    { src: "assets/images/black/27.jpg", alt: "rutina_pechoCasa", txt: "Rutina de Pecho,Hombro y Tríceps (En Casa)", id: "imagen-texto1"},
                    { src: "assets/images/black/25.jpg", alt: "rutina_espaldaCal", txt: "Rutina de Espalda y Bíceps (Calistenia)", id: "imagen-texto2"},
                    { src: "assets/images/black/29.jpg", alt: "rutina_piernasMan", txt: "Rutina de Piernas (Mancuernas)", id: "imagen-texto3" },
                    { src: "assets/images/black/30.jpg", alt: "rutina_piernasCasa", txt: "Rutina de Piernas (En Casa)", id: "imagen-texto4" },
                    { src: "assets/images/black/24.jpg", alt: "rutina_pechoGym", txt: "Rutina de Pecho,Hombro y Tríceps (Gym)", id: "imagen-texto5"},
                    { src: "assets/images/black/20.jpg", alt: "rutina_inferiorGym", txt: "Rutina de Piernas y Glúteos (Gym)", id: "imagen-texto6" },
                ],
            },
        ];
        
        // Array Dietas Secciones //

        const dietasSecciones = [
            {
                titulo: "Aumentar Masa...",
                imagenes: [
                    { src: "assets/images/white/5.jpg", alt: "aumento_prot", txt: "Dieta Aumento de Masa Muscular (Alta en Proteínas)", id: "imagenD-texto1"},
                    { src: "assets/images/white/1.jpg", alt: "aumento_carbo", txt: "Dieta Aumento de Masa Muscular (Orientada a Carbohidratos)", id: "imagenD-texto2"},
                    { src: "assets/images/white/2.jpg", alt: "aumento_veg", txt: "Dieta Aumento de Masa Muscular (Vegetariana)", id: "imagenD-texto3"},
                ],
            },
            {
                titulo: "Reducir Peso...",
                imagenes: [
                    { src: "assets/images/white/6.jpg", alt: "reducir_cal", txt: "Dieta para Reducción de Peso (Baja en Calorías)", id: "imagenD-texto1"},
                    { src: "assets/images/white/7.jpg", alt: "reducir_por", txt: "Dieta para Reducción de Peso (Control de Porciones)", id: "imagenD-texto2"},
                    { src: "assets/images/white/12.jpg", alt: "reducir_carbo", txt: "Dieta para Reducción de Peso (Baja en Carbohidratos)", id: "imagenD-texto3"},
                ],
            },
            {
                titulo: "Mantener Peso...",
                imagenes: [
                    { src: "assets/images/white/8.jpg", alt: "mantener_eq", txt: "Dieta para Mantener el Peso (Equilibrada)", id: "imagenD-texto1"},
                    { src: "assets/images/white/3.jpg", alt: "mantener_veg", txt: "Dieta para Mantener el Peso (Vegetariana)", id: "imagenD-texto2"},
                    { src: "assets/images/white/4.jpg", alt: "mantener_med", txt: "Dieta para Mantener el Peso (Estilo Mediterráneo)", id: "imagenD-texto3"},
                ],
            },
        ];
        
        // Array Dietas //

        const dietas = {
            // Aumentar Masa //
            "aumento_prot" :{
                contenido: [
                    {
                        texto:"Alimentación Diaria:",
                        img:"assets/images/white/9.jpg",
                        ref:"Desayuno: Batido de proteínas, avena, plátano y almendras. Almuerzo: Pechuga de pollo a la parrilla, arroz integral y brócoli.Merienda: Yogur griego con nueces y miel. Cena: Salmón a la parrilla, quinua y espárragos.",
                    },
                    {
                        texto:"Recomendaciones:",
                        img:"assets/images/white/1.jpg",
                        ref:"Una dieta para el aumento de masa muscular (alta en proteínas) es esencial para proporcionar al cuerpo los nutrientes necesarios para el crecimiento y la reparación muscular. Aquí tienes algunas recomendaciones para esta dieta: ",
                    },
                    {
                        texto:"1:",
                        img:"assets/images/black/21.jpg",
                        ref:"Proteínas magras: Las proteínas son fundamentales para el desarrollo muscular. Incluye fuentes de proteínas magras como pechuga de pollo, pavo, pescado, carne magra, huevos, yogur griego y legumbres. ",
                    },
                    {
                        texto:"2:",
                        img:"assets/images/black/9.jpg",
                        ref:"Carbohidratos complejos: Los carbohidratos proporcionan energía para los entrenamientos y ayudan en la recuperación muscular. Opta por fuentes de carbohidratos complejos como avena, arroz integral, quinua, batatas y pan integral. ",
                    },
                    {
                        texto:"2:",
                        img:"assets/images/black/12.jpg",
                        ref:"Grasas saludables: Las grasas saludables son esenciales para el funcionamiento del cuerpo. Incluye aguacates, aceite de oliva, frutos secos y semillas en tu dieta. ",
                    },
                ]
            },
            "aumento_carbo" :{
                contenido: [
                    {
                        texto:"Alimentación Diaria:",
                        img:"assets/images/white/9.jpg",
                        ref:"Desayuno: Tostadas integrales con aguacate y huevos. Almuerzo: Pavo, batata y espárragos.Merienda: Batido de proteínas con plátano y mantequilla de cacahuate. Cena: Tofu al curry, arroz integral y espinacas.",
                    },
                    {
                        texto:"Recomendaciones:",
                        img:"assets/images/white/4.jpg",
                        ref:"Una dieta para el aumento de masa muscular (Orientada en Carbohidratos) es esencial para proporcionar al cuerpo los nutrientes necesarios para el crecimiento, recuerda que, además de los carbohidratos, la proteína sigue siendo fundamental en una dieta para aumentar la masa muscular. Debes asegurarte de obtener suficiente proteína de fuentes magras para apoyar el crecimiento y la reparación muscular.. Aquí tienes algunas recomendaciones para esta dieta: ",
                    },
                    {
                        texto:"1:",
                        img:"assets/images/black/6.jpg",
                        ref:"Incluye carbohidratos complejos de calidad: Prioriza los carbohidratos complejos de alta calidad como la avena, el arroz integral, la quinua, las batatas y las legumbres. Estos alimentos proporcionan una liberación sostenida de energía y son ricos en nutrientes esenciales.",
                    },
                    {
                        texto:"2:",
                        img:"assets/images/white/7.jpg",
                        ref:"Aumenta la ingesta de calorías: Para ganar masa muscular, necesitas consumir un exceso de calorías en comparación con las que quemas. Asegúrate de que tu dieta proporcione suficientes calorías para respaldar el crecimiento muscular. Esto puede requerir un aumento en la cantidad de carbohidratos que consumes.",
                    },
                    {
                        texto:"2:",
                        img:"assets/images/white/11.jpg",
                        ref:"Planifica tus comidas alrededor del entrenamiento: Consume una cantidad significativa de carbohidratos antes y después de tu entrenamiento. Los carbohidratos previos al ejercicio proporcionarán energía para un rendimiento óptimo, mientras que los carbohidratos posteriores al ejercicio ayudarán en la recuperación muscular y la reposición de glucógeno.",
                    },
                ]
            },
            "aumento_veg" :{
                contenido: [
                    {
                        texto:"Alimentación Diaria:",
                        img:"assets/images/white/3.jpg",
                        ref:"Desayuno: Batido de proteínas de suero de leche con frutas. Almuerzo: Lentejas, arroz integral y verduras al vapor.Merienda: Yogur vegano con nueces y bayas.Cena: Tofu asado, quinua y brócoli.",
                    },
                    {
                        texto:"Recomendaciones:",
                        img:"assets/images/white/10.jpg",
                        ref:"Si estás siguiendo una dieta vegetariana y deseas aumentar tu masa muscular, es importante asegurarte de obtener los nutrientes adecuados para el crecimiento y la reparación muscular. Aquí tienes tres consejos para una dieta de aumento de masa muscular vegetariana:",
                    },
                    {
                        texto:"1:",
                        img:"assets/images/black/12.jpg",
                        ref:"Maximiza las fuentes de proteína vegetal: Las fuentes de proteína vegetal como las legumbres (lentejas, garbanzos, frijoles), tofu, tempeh, quinua, nueces y semillas son esenciales en una dieta vegetariana para ganar masa muscular. Asegúrate de incluir estas fuentes de proteína en tus comidas diarias para satisfacer tus necesidades proteicas.",
                    },
                    {
                        texto:"2:",
                        img:"assets/images/black/10.jpg",
                        ref:"Variedad de alimentos ricos en nutrientes: Consume una variedad de alimentos ricos en nutrientes para asegurarte de obtener una amplia gama de vitaminas y minerales. Las verduras de hojas verdes, frutas, granos enteros y alimentos ricos en hierro, como las espinacas y el tofu, son fundamentales para mantener la salud general y apoyar tus objetivos de ganancia muscular.",
                    },
                    {
                        texto:"2:",
                        img:"assets/images/black/9.jpg",
                        ref:"Controla tu ingesta calórica: Para aumentar la masa muscular, debes consumir un exceso de calorías, pero asegúrate de que estas calorías provengan de fuentes saludables. Los alimentos ricos en proteínas y carbohidratos, junto con grasas saludables, deben formar parte de tu dieta. Calcula tus necesidades calóricas diarias y ajusta tu ingesta en consecuencia.",
                    },
                ]
            },
            "reducir_cal": {
                contenido: [
                    {
                        texto:"Alimentación Diaria:",
                        img:"assets/images/white/3.jpg",
                        ref:"Desayuno: Batido de proteínas de suero de leche con frutas. Almuerzo: Lentejas, arroz integral y verduras al vapor.Merienda: Yogur vegano con nueces y bayas.Cena: Tofu asado, quinua y brócoli.",
                    },
                    {
                        texto:"Recomendaciones:",
                        img:"assets/images/white/10.jpg",
                        ref:"Si estás siguiendo una dieta vegetariana y deseas aumentar tu masa muscular, es importante asegurarte de obtener los nutrientes adecuados para el crecimiento y la reparación muscular. Aquí tienes tres consejos para una dieta de aumento de masa muscular vegetariana:",
                    },
                    {
                        texto:"1:",
                        img:"",
                        ref:"Maximiza las fuentes de proteína vegetal: Las fuentes de proteína vegetal como las legumbres (lentejas, garbanzos, frijoles), tofu, tempeh, quinua, nueces y semillas son esenciales en una dieta vegetariana para ganar masa muscular. Asegúrate de incluir estas fuentes de proteína en tus comidas diarias para satisfacer tus necesidades proteicas.",
                    },
                    {
                        texto:"2:",
                        img:"",
                        ref:"Variedad de alimentos ricos en nutrientes: Consume una variedad de alimentos ricos en nutrientes para asegurarte de obtener una amplia gama de vitaminas y minerales. Las verduras de hojas verdes, frutas, granos enteros y alimentos ricos en hierro, como las espinacas y el tofu, son fundamentales para mantener la salud general y apoyar tus objetivos de ganancia muscular.",
                    },
                    {
                        texto:"2:",
                        img:"",
                        ref:"Controla tu ingesta calórica: Para aumentar la masa muscular, debes consumir un exceso de calorías, pero asegúrate de que estas calorías provengan de fuentes saludables. Los alimentos ricos en proteínas y carbohidratos, junto con grasas saludables, deben formar parte de tu dieta. Calcula tus necesidades calóricas diarias y ajusta tu ingesta en consecuencia.",
                    },
                ]
            },
            "reducir_por": {
                contenido: [
                    {
                        texto:"Alimentación Diaria:",
                        img:"assets/images/white/3.jpg",
                        ref:"Desayuno: Batido de proteínas de suero de leche con frutas. Almuerzo: Lentejas, arroz integral y verduras al vapor.Merienda: Yogur vegano con nueces y bayas.Cena: Tofu asado, quinua y brócoli.",
                    },
                    {
                        texto:"Recomendaciones:",
                        img:"assets/images/white/10.jpg",
                        ref:"Si estás siguiendo una dieta vegetariana y deseas aumentar tu masa muscular, es importante asegurarte de obtener los nutrientes adecuados para el crecimiento y la reparación muscular. Aquí tienes tres consejos para una dieta de aumento de masa muscular vegetariana:",
                    },
                    {
                        texto:"1:",
                        img:"",
                        ref:"Maximiza las fuentes de proteína vegetal: Las fuentes de proteína vegetal como las legumbres (lentejas, garbanzos, frijoles), tofu, tempeh, quinua, nueces y semillas son esenciales en una dieta vegetariana para ganar masa muscular. Asegúrate de incluir estas fuentes de proteína en tus comidas diarias para satisfacer tus necesidades proteicas.",
                    },
                    {
                        texto:"2:",
                        img:"",
                        ref:"Variedad de alimentos ricos en nutrientes: Consume una variedad de alimentos ricos en nutrientes para asegurarte de obtener una amplia gama de vitaminas y minerales. Las verduras de hojas verdes, frutas, granos enteros y alimentos ricos en hierro, como las espinacas y el tofu, son fundamentales para mantener la salud general y apoyar tus objetivos de ganancia muscular.",
                    },
                    {
                        texto:"2:",
                        img:"",
                        ref:"Controla tu ingesta calórica: Para aumentar la masa muscular, debes consumir un exceso de calorías, pero asegúrate de que estas calorías provengan de fuentes saludables. Los alimentos ricos en proteínas y carbohidratos, junto con grasas saludables, deben formar parte de tu dieta. Calcula tus necesidades calóricas diarias y ajusta tu ingesta en consecuencia.",
                    },
                ]
            },
            "reducir_carbo" :{
                contenido: [
                    {
                        texto:"Alimentación Diaria:",
                        img:"assets/images/white/3.jpg",
                        ref:"Desayuno: Batido de proteínas de suero de leche con frutas. Almuerzo: Lentejas, arroz integral y verduras al vapor.Merienda: Yogur vegano con nueces y bayas.Cena: Tofu asado, quinua y brócoli.",
                    },
                    {
                        texto:"Recomendaciones:",
                        img:"assets/images/white/10.jpg",
                        ref:"Si estás siguiendo una dieta vegetariana y deseas aumentar tu masa muscular, es importante asegurarte de obtener los nutrientes adecuados para el crecimiento y la reparación muscular. Aquí tienes tres consejos para una dieta de aumento de masa muscular vegetariana:",
                    },
                    {
                        texto:"1:",
                        img:"",
                        ref:"Maximiza las fuentes de proteína vegetal: Las fuentes de proteína vegetal como las legumbres (lentejas, garbanzos, frijoles), tofu, tempeh, quinua, nueces y semillas son esenciales en una dieta vegetariana para ganar masa muscular. Asegúrate de incluir estas fuentes de proteína en tus comidas diarias para satisfacer tus necesidades proteicas.",
                    },
                    {
                        texto:"2:",
                        img:"",
                        ref:"Variedad de alimentos ricos en nutrientes: Consume una variedad de alimentos ricos en nutrientes para asegurarte de obtener una amplia gama de vitaminas y minerales. Las verduras de hojas verdes, frutas, granos enteros y alimentos ricos en hierro, como las espinacas y el tofu, son fundamentales para mantener la salud general y apoyar tus objetivos de ganancia muscular.",
                    },
                    {
                        texto:"2:",
                        img:"",
                        ref:"Controla tu ingesta calórica: Para aumentar la masa muscular, debes consumir un exceso de calorías, pero asegúrate de que estas calorías provengan de fuentes saludables. Los alimentos ricos en proteínas y carbohidratos, junto con grasas saludables, deben formar parte de tu dieta. Calcula tus necesidades calóricas diarias y ajusta tu ingesta en consecuencia.",
                    },
                ]
            },
        };

        // Array Rutinas //

        const rutinas = {
            // Tren Superior
            "rutina_pechoGym": {
                contenido: [
                    {
                        texto: "• Press de Banca: 4 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-front.mp4#t=0.1"
                        , ref: "• Recuerda!: Peso bajo primeras 1 Set // Peso Alto - Moderado Set siguientes. || • Trabaja el pecho y los tríceps."
                    },
                    {
                        texto: "• Press Inclinado: 3 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-incline-bench-press-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Peso bajo primeras 1 Set // Peso Moderado Set siguientes. || • Trabaja enfocado el Pecho superior.."
                    },
                    {
                        texto: "• Extensiones de Tríceps en Polea: 3 sets x 12-15 repeticiones. :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-push-down-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Priorizar Tecnica sobre Peso // Peso Alto - Moderado // Realizar 2 Drop Set. || • Trabaja enfocado en los Triceps."
                    },
                    {
                        texto: "• Extensiones de Tríceps Por Encima en Polea: 3 sets x 12-15 repeticiones. :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-skullcrusher-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el movimiento correcto en todo el recorrido // Peso  Moderado. || • Trabaja enfocado en los Triceps."
                    },
                    {
                        texto: "• Press Militar Por Encima con Barra: 3 sets x 10-12 repeticiones. :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-front_wHKQjdY.mp4#t=0.1"
                        ,ref: "• Recuerda!: Peso bajo primeras 1 Set // Peso Alto - Moderado. || • Trabaja enfocado en los Hombros."
                    },
                    {
                        texto: "• Levantamiento Unilateral en Polea: 3 sets x 12-14 repeticiones. :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-lateral-raise-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Priorizar Tecnica sobre Peso // Peso Moderado // Realizar 2 Drop Set. || • Trabaja enfocado en los Hombros."
                    }
                    
                ]
            },
            "rutina_espaldaGym": {
                contenido: [
                    {
                        texto: "• Dominadas: 4 sets x 6-8 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar Negativas al perder fuerza, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja la Espalda y los Bíceps."
                    },
                    {
                        texto: "• Jalon Por Encima con Polea: 2 Super sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-pullover-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Peso Alto, al finalizar reps pasar a Peso Moderado y terminar con Peso bajo trabajando Isometria. (Cuenta como 1 Super Set) // Peso Moderado Cuidando Tecnica. || • Trabaja la Espalda."
                    },
                    {
                        texto: "• Curl de Bíceps con Barra: 3 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-curl-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Priorizar Tecnica por encima del Peso // Peso Alto - Moderado. || • Trabaja los Bíceps."
                    },
                    {
                        texto: "• Curl Martillo en Polea: 3 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-Cables-cable-hammer-curl-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Prorizar Tecnica por encima del Peso // Peso Moderado. // Realizar 2 Drop Set. || • Trabaja los Bíceps."
                    },
                    
                ]
            },
            "rutina_pechoCal": {
                contenido: [
                    {
                        texto: "• Dominadas (Neutras): 2 sets x 6-8 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar sin llegar a la Fatiga, Aumentar Reps de ser necesario // Considerar como calentamiento. || • Trabaja la Espalda y los Bíceps."
                    },
                    {
                        texto: "• Flexiones Declinadas: 4 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-decline-pushup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja el Pecho y los Tríceps."
                    },
                    {
                        texto: "• Fondos (Paralelas | Apoyo): 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-dips-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja enfocado los Tríceps, Hombros y Pecho."
                    },
                    {
                        texto: "• Flexion En Pica: 4 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pike-pushup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Pararse de manos solo en caso de ser Avanzado. || • Trabaja enfocado los Hombros."
                    },
                    {
                        texto: "• Flexiones Diamante: 3 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-diamond-pushup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja el Pecho y los Tríceps."
                    },
                    {
                        texto: "• Flexiones Inclinadas: 3 sets x 10-14 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-incline-pushup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja el Pecho y los Tríceps."
                    },
                ]
            },
            "rutina_espaldaCal": {
                contenido: [
                    {
                        texto: "• Dominadas: 4 sets x 6-8 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar Negativas al perder fuerza, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja la Espalda y los Bíceps."
                    },
                    {
                        texto: "• Dominadas (Supinas): 4 sets x 6-8 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-chinup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar Negativas al perder fuerza, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja la Espalda y los Bíceps."
                    },
                    {
                        texto: "• Flexiones Invertidas: 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-reverse-row-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja Espalda, Bíceps y los Antebrazos."
                    },
                    {
                        texto: "• Flexiones Invertidas (Supinas): 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-reverse-row-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja Espalda, Bíceps y los Antebrazos."
                    }, 
                ]
            },
            "rutina_pechoCasa": {
                contenido: [
                    {
                        texto: "• Flexiones: 4 sets x 12-15 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-pushup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar Negativas al perder fuerza, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja el Pecho y los Tríceps."
                    },
                    {
                        texto: "• Fondos (Apoyo): 3 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-dips-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja enfocado los Tríceps, Hombros y Pecho."
                    },
                    {
                        texto: "• Flexiones Inclinadas: 4 sets x 10-14 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-incline-pushup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja el Pecho y los Tríceps."
                    },
                    {
                        texto: "• Fondos Profundos (Apoyo): 3 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-dips-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Bajar hasta tener los codos en 90°, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja enfocado los Tríceps."
                    },
                    {
                        texto: "• Flexiones Declinadas: 4 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-decline-pushup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja el Pecho y los Tríceps."
                    },
        
                ]
            },
            "rutina_espaldaCasa": {
                contenido: [
                    {
                        texto: "• Dominadas (Apoyo): 4 sets x 6-8 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar Negativas al perder fuerza, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja la Espalda y los Bíceps."
                    },
                    {
                        texto: "• Dominadas (Supinas con Apoyo): 4 sets x 6-8 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-chinup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar Negativas al perder fuerza, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja la Espalda y los Bíceps."
                    },
                    {
                        texto: "• Flexiones Invertidas (Apoyo): 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-reverse-row-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja Espalda, Bíceps y los Antebrazos."
                    },
                    {
                        texto: "• Plancha : 3 Sets x 30-60 segundos :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-long-lever-plank-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Tiempo de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja enfocado en Core, Espalda, Bíceps y los Hombros."
                    }, 
                ]
            },
            // Tren Inferior
            
            "rutina_inferiorGym": {
                contenido: [
                    {
                        texto: "• Sentadillas con Barra: 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-Barbell-barbell-squat-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Prorizar Tecnica por encima del Peso // Peso Alto - Moderado. // Realizar 2 Drop Set. || • Trabaja los Cuádriceps y los Glúteos."
                    }, 
                    {
                        texto: "• Prensa de Piernas en Máquina: 3 sets x 10-12/*  */ repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-leg-press-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Prorizar Tecnica por encima del Peso // Peso Alto - Moderado. // Realizar 2 Drop Set. || • Trabaja enfocado los Cuádriceps."
                    }, 
                    {
                        texto: "• Empuje de Cadera en Barra: 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-Barbell-barbell-hip-thrust-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Peso Alto - Moderado. || • Trabaja enfocado los Glúteos."
                    }, 
                    {
                        texto: "• Sentadillas Bulgaras (Mancuernas): 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-Dumbbells-dumbbell-bulgarian-split-squat-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Peso Moderado. || • Trabaja los Cuádriceps y los Glúteos."
                    }, 
                ]
            },
            "rutina_piernasGym": {
                contenido: [
                    {
                        texto: "• Sentadillas con Mancuerna: 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-kettlebell-goblet-squat-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Peso bajo primeras 1 Set // Peso Alto - Moderado Set siguientes. || • Trabaja los Cuádriceps y los Glúteos."
                    }, 
                    {
                        texto: "• Peso Muerto con Barra: 3 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-Barbell-barbell-deadlift-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Prorizar Tecnica por encima del Peso, muy importante para evitar lesiones. // Peso Moderado. || • Trabaja el tren inferior del cuerpo."
                    }, 
                    {
                        texto: "• Isquiotibiales en Maquina: 3 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-machine-hamstring-curl-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Peso Alto - Moderado. // Realizar 2 Drop Set.|| • Trabaja enfocado en los isquiotibiales."
                    }, 
                    {
                        texto: "• Levantamiento de Pierna en Polea: 4 sets x 12-14 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-cable-hamstring-curl-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Prorizar Tecnica por encima del Peso // Peso Alto - Moderado. // Realizar 2 Drop Set. || • Trabaja enfocado en los isquiotibiales."
                    }, 
                    {
                        texto: "• Pantorrillas en Maquina: 4 sets x 12-14 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-seated-calf-raise-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Prorizar Tecnica por encima del Peso // Peso Alto - Moderado. // Realizar 2 Drop Set. || • Trabaja enfocado en las Pantorrillas."
                    }, 
                ]
            },
            "rutina_inferiorMan": {
                contenido: [
                    {
                        texto: "• Sentadillas Bulgaras (Mancuernas): 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-Dumbbells-dumbbell-bulgarian-split-squat-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Peso Moderado. || • Trabaja los Cuádriceps y los Glúteos."
                    }, 
                    {
                        texto: "• Peso Muerto con Mancuernas: 3 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-romanian-deadlift-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Prorizar Tecnica por encima del Peso, muy importante para evitar lesiones. // Peso Moderado. || • Trabaja el tren inferior del cuerpo."
                    },
                    {
                        texto: "• Zancadas Laterales con Mancuerna: 3 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-goblet-lateral-lunge-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el recorrido completo. // Peso Moderado. || • Trabaja los Cuádriceps y los Glúteos."
                    }, 
                    {
                        texto: "• Empuje de Cadera con Mancuerna: 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-hip-thrust-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Peso Alto - Moderado. || • Trabaja enfocado los Glúteos."
                    },   
                ]
            },
            "rutina_piernasMan": {
                contenido: [
                    {
                        texto: "• Sentadillas Goblet: 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-goblet-squat-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Peso Alto - Moderado Set siguientes. || • Trabaja los Cuádriceps y los Glúteos."
                    }, 
                    {
                        texto: "• Peso Muerto Goblet (Mancuernas): 4 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-goblet-good-morning-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Prorizar Tecnica por encima del Peso, muy importante para evitar lesiones. // Peso Moderado. || • Trabaja el tren inferior del cuerpo."
                    },
                    {
                        texto: "• Isquiotibiales con Mancuerna: 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-leg-curl-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Peso Alto - Moderado. // Realizar 2 Drop Set.|| • Trabaja enfocado en los isquiotibiales."
                    }, 
                    {
                        texto: "• Pantorrillas con Mancuernas: 4 sets x 12-14 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-calf-raise-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Si es posible, posicionarse en una escalon para un rango más completo // Peso Alto - Moderado. || • Trabaja enfocado en las Pantorrillas."
                    }, 
                ]
            },
            "rutina_piernasCasa": {
                contenido: [
                    {
                        texto: "• Sentadillas : 4 sets x 15-20 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-squat-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja los Cuádriceps y los Glúteos."
                    }, 
                    {
                        texto: "• Zancadas : 3 sets x 12-15 repeticioness :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-forward-lunge-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja los Cuádriceps y los Glúteos."
                    },
                    {
                        texto: "• Sentadillas Bulgaras : 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-bulgarian-split-squat-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Añadir Peso solo en caso de ser Avanzado. || • Trabaja enfocado en los Cuádriceps."
                    }, 
                    {
                        texto: "• Puentes : 4 sets x 12-14 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-glute-bridge-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Añadir Peso e Isometría solo en caso de ser Avanzado. || • Trabaja enfocado en los Glúteos."
                    }, 
                ]
            },
            "rutina_inferiorCasa": {
                contenido: [
                    {
                        texto: "• Patadas Traseras : 4 sets x 15-20 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-glute-kickback-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja los Cuádriceps y los isquiotibiales."
                    }, 
                    {
                        texto: "• Levantamientos de Pantorilla : 4 sets x 12-15 repeticioness :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-calve-raise-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Si es posible, posicionarse en una escalon para un rango más completo // Añadir Peso solo en caso de ser Avanzado. || • Trabaja enfocado en las Pantorrillas."
                    },
                    {
                        texto: "• Posición Perro Cabeza Abajo : 4 sets x 2-5 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-downward-dog-toe-to-heel-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el movimiento mantienendo una buena respiración y postura // Tomarse el tiempo necesario para estirar || • Trabaja enfocado en los isquiotibiales y Pantorrillas."
                    }, 
                    {
                        texto: "• Posición de Primade : 4 sets x 2-4 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-pyramid-pose-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el movimiento mantienendo una buena respiración y postura // Tomarse el tiempo necesario para estirar || • Trabaja enfocado en los isquiotibiales y Pantorrillas."
                    }, 
                    {
                        texto: "• Posición de Luna Creciente : 4 sets x 2-5 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-crescent-moon-pose-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el movimiento mantienendo una buena respiración y postura // Tomarse el tiempo necesario para estirar || • Trabaja enfocado en los isquiotibiales y Pantorrillas."
                    }, 
                    {
                        texto: "• Posición Señor de la Danza : 4 sets x 2-4 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-lord-of-the-dance-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el movimiento mantienendo una buena respiración y postura // Tomarse el tiempo necesario para estirar || • Trabaja enfocado en los isquiotibiales y Pantorrillas."
                    }, 
                ]
            },


            // Full Body


            "rutina_fullGym": {
                contenido: [
                    {
                        texto: "• Sentadillas con Barra: 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-Barbell-barbell-squat-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Prorizar Tecnica por encima del Peso // Peso Alto - Moderado. // Realizar 2 Drop Set. || • Trabaja los Cuádriceps y los Glúteos."
                    }, 
                    {
                        texto: "• Press de Banca: 4 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-front.mp4#t=0.1"
                        , ref: "• Recuerda!: Peso bajo primeras 1 Set // Peso Alto - Moderado Set siguientes. || • Trabaja el pecho y los tríceps."
                    },
                    {
                        texto: "• Dominadas: 4 sets x 6-8 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar Negativas al perder fuerza, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja la Espalda y los Bíceps."
                    },
                    {
                        texto: "• Press Militar Por Encima con Barra: 3 sets x 10-12 repeticiones. :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-front_wHKQjdY.mp4#t=0.1"
                        ,ref: "• Recuerda!: Peso bajo primeras 1 Set // Peso Alto - Moderado. || • Trabaja enfocado en los Hombros."
                    }, 
                    {
                        texto: "• Peso Muerto con Barra: 3 sets x 6-8 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-Barbell-barbell-deadlift-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Prorizar Tecnica por encima del Peso, muy importante para evitar lesiones. // Peso Moderado. || • Trabaja el tren inferior del cuerpo."
                    }, 
                ]
            },
            "rutina_fullGym2": {
                contenido: [
                    {
                        texto: "• Prensa de Piernas en Máquina: 3 sets x 10-12/*  */ repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-leg-press-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Prorizar Tecnica por encima del Peso // Peso Alto - Moderado. // Realizar 2 Drop Set. || • Trabaja enfocado los Cuádriceps."
                    }, 
                    {
                        texto: "• Dominadas (Supinas): 4 sets x 6-8 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-chinup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar Negativas al perder fuerza, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja la Espalda y los Bíceps."
                    },
                    {
                        texto: "• Press de Banca: 4 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-front.mp4#t=0.1"
                        , ref: "• Recuerda!: Peso bajo primeras 1 Set // Peso Alto - Moderado Set siguientes. || • Trabaja el pecho y los tríceps."
                    },
                    {
                        texto: "• Peso Muerto con Barra: 3 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-Barbell-barbell-deadlift-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Prorizar Tecnica por encima del Peso, muy importante para evitar lesiones. // Peso Moderado. || • Trabaja el tren inferior del cuerpo."
                    }, 
                    {
                        texto: "• Fondos Profundos (Apoyo): 3 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-dips-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Bajar hasta tener los codos en 90°, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja enfocado los Tríceps."
                    },
                ]
            },

            "rutina_fullMan": {
                contenido: [
                    {
                        texto: "• Sentadillas Goblet: 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-goblet-squat-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Peso Alto - Moderado Set siguientes. || • Trabaja los Cuádriceps y los Glúteos."
                    }, 
                    {
                        texto: "• Zancadas Laterales con Mancuerna: 3 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-goblet-lateral-lunge-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el recorrido completo. // Peso Moderado. || • Trabaja los Cuádriceps y los Glúteos."
                    }, 
                    {
                        texto: "• Plancha : Mantén durante 3 Sets x 30-60 segundos :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-long-lever-plank-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Tiempo de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja enfocado en Core, Espalda, Bíceps y los Hombros."
                    },
                    {
                        texto: "• Flexiones Declinadas: 4 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-decline-pushup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja el Pecho y los Tríceps."
                    },
                    {
                        texto: "• Remo Unilateral (Mancuerna) : 4 Sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-pullover-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Peso Alto - Moderado Cuidando Tecnica. // Realizar 2 Drop Set. || • Trabaja la Espalda."
                    },
                    {
                        texto: "• Curl de Bíceps (Mancuernas): 3 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-Dumbbells-dumbbell-curl-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Priorizar Tecnica por encima del Peso // Peso Alto - Moderado. || • Trabaja los Bíceps."
                    },
                ]
            },
            "rutina_fullCal": {
                contenido: [
                    {
                        texto: "• Sentadillas : 4 sets x 15-20 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-squat-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja los Cuádriceps y los Glúteos."
                    }, 
                    {
                        texto: "• Flexiones Declinadas: 4 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-decline-pushup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja el Pecho y los Tríceps."
                    },
                    {
                        texto: "• Plancha : Mantén durante 3 Sets x 30-60 segundos :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-long-lever-plank-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Tiempo de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja enfocado en Core, Espalda, Bíceps y los Hombros."
                    },
                    {
                        texto: "• Burpees : 4 sets x 15-20 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-burpee-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Controlar la respiración para un resultado optimo. || • Trabaja enfocado en Core, Pecho, Bíceps y Cuádriceps."
                    },
                    {
                        texto: "• Dominadas: 4 sets x 6-8 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar Negativas al perder fuerza, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja la Espalda y los Bíceps."
                    },
                    {
                        texto: "• Dominadas (Neutras): 2 sets x 6-8 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar Negativas al perder fuerza, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja la Espalda y los Bíceps."
                    },
                    {
                        texto: "• Flexion En Pica: 4 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pike-pushup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Pararse de manos solo en caso de ser Avanzado. || • Trabaja enfocado los Hombros."
                    },
                    {
                        texto: "• Levantamientos de Rodilla al Pecho (Barra): 4 sets x 10-14 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hanging-knee-raises-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Controlar respiración para un resultado optimo. || • Trabaja el Core."
                    },
                ]
            },
            "rutina_fullCasa": {
                contenido: [
                    {
                        texto: "• Sentadillas : 4 sets x 15-20 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-squat-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja los Cuádriceps y los Glúteos."
                    }, 
                    {
                        texto: "• Burpees : 4 sets x 15-20 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-burpee-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Controlar la respiración para un resultado optimo. || • Trabaja enfocado en Core, Pecho, Bíceps y Cuádriceps."
                    },
                    {
                        texto: "• Flexiones: 4 sets x 12-15 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-pushup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar Negativas al perder fuerza, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja el Pecho y los Tríceps."
                    },
                    {
                        texto: "• Fondos Profundos (Apoyo): 3 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-dips-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Bajar hasta tener los codos en 90°, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja enfocado los Tríceps."
                    },
                    {
                        texto: "• Puentes : 4 sets x 12-14 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-glute-bridge-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Añadir Peso e Isometría solo en caso de ser Avanzado. || • Trabaja enfocado en los Glúteos."
                    }, 
                    {
                        texto: "• Patadas Traseras : 4 sets x 15-20 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-glute-kickback-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja los Cuádriceps y los isquiotibiales."
                    }, 
                ]
            },
            "rutina_fullCasa2": {
                contenido: [
                    {
                        texto: "• Sentadillas Bulgaras : 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-bulgarian-split-squat-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Añadir Peso solo en caso de ser Avanzado. || • Trabaja enfocado en los Cuádriceps."
                    }, 
                    {
                        texto: "• Burpees : 4 sets x 15-20 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-burpee-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Controlar la respiración para un resultado optimo. || • Trabaja enfocado en Core, Pecho, Bíceps y Cuádriceps."
                    },
                    {
                        texto: "• Flexiones Declinadas: 4 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-decline-pushup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja el Pecho y los Tríceps."
                    },
                    {
                        texto: "• Fondos Profundos (Apoyo): 3 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-dips-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Bajar hasta tener los codos en 90°, Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja enfocado los Tríceps."
                    },
                    {
                        texto: "• Flexiones Invertidas (Apoyo): 4 sets x 10-12 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-reverse-row-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja Espalda, Bíceps y los Antebrazos."
                    },
                    {
                        texto: "• Flexion En Pica: 4 sets x 8-10 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pike-pushup-front.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Pararse de manos solo en caso de ser Avanzado. || • Trabaja enfocado los Hombros."
                    },
                    {
                        texto: "• Sentadillas : 4 sets x 15-20 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/female-bodyweight-squat-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Aumentar Reps de ser necesario // Añadir Peso solo en caso de ser Avanzado. || • Trabaja los Cuádriceps y los Glúteos."
                    }, 
                    {
                        texto: "• Puentes : 4 sets x 12-14 repeticiones :",
                        videoURL: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-glute-bridge-side.mp4#t=0.1"
                        ,ref: "• Recuerda!: Realizar el rango de recorrido completo con un tiempo moderado // Añadir Peso e Isometría solo en caso de ser Avanzado. || • Trabaja enfocado en los Glúteos."
                    }, 
                ]
            }
        };
        



    //------------ Inicio ----------------------------------------

    /* Saludo personalizado */
    const nombre = localStorage.getItem("nombre");
    const saludoUsuario = document.getElementById("saludo");

    if (nombre) {
        saludoUsuario.textContent = `${nombre}`;
    } else {
        saludoUsuario.textContent = "Usuario";
    }

    /* Verificar para ti */
    function verificarParaTi(objetivo) {
        if(objetivo == "aumentar_masa"){
            mostrarSlider(3);
        } else if(objetivo == "reducir_peso"){
            mostrarSlider(4);
        } else if(objetivo == "mantener_peso"){
            mostrarSlider(5);
        }
        }
    //------------Funciones

    // Cambiar Imagenes y Textos

    function agregarEventosClickImagenes() {
        const imagenes = document.querySelectorAll(".imagen");
        imagenes.forEach((imagen, indiceImagen) => {
            imagen.addEventListener("click", function () {
                // Obtener el índice de la sección actual
                const seccionActual = document.getElementById("descripcion-texto").textContent;
                let indiceSeccion = -1;

                for (let i = 0; i < secciones.length; i++) {
                    if (secciones[i].titulo === seccionActual) {
                        indiceSeccion = i;
                        break;
                    }
                }

                if (indiceSeccion !== -1) {
                    mostrarRutina(indiceSeccion, indiceImagen);
                }
            });
        });
    }

    function agregarEventosDietasClickImagenes() {
        console.log("Agregando eventos a imágenes de dietas...");
        const imagenes = document.querySelectorAll(".imagenD");
        imagenes.forEach((imagen, indiceImagen) => {
            imagen.addEventListener("click", function () {
                // Obtener el índice de la sección actual
                const seccionActual = document.getElementById("descripcion-textoD").textContent;
                let indiceSeccion = -1;
    
                for (let i = 0; i < dietasSecciones.length; i++) {
                    if (dietasSecciones[i].titulo === seccionActual) {
                        indiceSeccion = i;
                        break;
                    }
                }
    
                if (indiceSeccion !== -1) {
                    mostrarDieta(indiceSeccion, indiceImagen);
                }
            });
        });
    }

    function mostrarSlider(indiceSeccion) {
        const seccionActual = secciones[indiceSeccion];
        const descripcionTexto = document.getElementById("descripcion-texto");
        const slider = document.querySelector(".imagen-slider");
        const imagenTexto = document.getElementById("imagen-texto1");

        // Actualiza el título y el texto
        descripcionTexto.textContent = seccionActual.titulo;
        imagenTexto.textContent = seccionActual.imagenes[0].alt;

        // Limpia el contenido del slider
        slider.innerHTML = "";

        // Crea y agrega las imágenes
            seccionActual.imagenes.forEach((imagen, index) => {
                const slide = document.createElement("div");
                slide.className = "slide";
                slide.innerHTML = `<img class="imagen" src="${imagen.src}" alt="${imagen.alt}">
                <p id="${imagen.id}" class="imagen-texto">${imagen.txt}</p>`;
                slider.appendChild(slide);
            });

        agregarEventosClickImagenes();
    }

    function mostrarSlider2(indiceSeccion) {
        const seccionActual = dietasSecciones[indiceSeccion];
        const descripcionTexto = document.getElementById("descripcion-textoD");
        const slider = document.querySelector(".imagen-sliderD");
        const imagenTexto = document.getElementById("imagenD-texto1");

        // Actualiza el título y el texto
        descripcionTexto.textContent = seccionActual.titulo;
        imagenTexto.textContent = seccionActual.imagenes[0].alt;

        // Limpia el contenido del slider
        slider.innerHTML = "";

        // Crea y agrega las imágenes
            seccionActual.imagenes.forEach((imagen, index) => {
                const slide = document.createElement("div");
                slide.className = "slide";
                slide.innerHTML = `<img class="imagenD" src="${imagen.src}" alt="${imagen.alt}">
                <p id="${imagen.id}" class="imagen-texto">${imagen.txt}</p>`;
                slider.appendChild(slide);
            });

        agregarEventosDietasClickImagenes();
    }

    // Mostrar modal por Rutina y Dietas

    function mostrarRutina(indiceSeccion, indiceImagen) {
        const seccionActual = secciones[indiceSeccion];
        const imagenActual = seccionActual.imagenes[indiceImagen];

        const rutina = rutinas[imagenActual.alt];

        // Actualizar el contenido del modal
        const tituloModal = document.getElementById("tituloModal");
        const informacionModal = document.getElementById("informacionModal");

        if (rutina) {
            // Construir contenido dinámico
            let contenidoHTML = "";
            rutina.contenido.forEach((contenido, index) => {
                contenidoHTML += `<p class="modalInfo">${contenido.texto}</p>
                                <iframe width="560" height="315" src="${contenido.videoURL}" frameborder="0" allowfullscreen id="videorutina"></iframe>
                                <p class="modalInfo" id="ref">${contenido.ref}</p>`;
            });

            tituloModal.textContent = imagenActual.txt;
            informacionModal.innerHTML = contenidoHTML;
        }

        // Mostrar el modal
        const modal = document.getElementById("rutinaModal");
        modal.style.display = "block";
    }

    function mostrarDieta(indiceSeccion, indiceImagen) {
        console.log("Mostrando dieta...");
        const seccionActual = dietasSecciones[indiceSeccion];
        const imagenActual = seccionActual.imagenes[indiceImagen];
    
        const dieta = dietas[imagenActual.alt];
    
        // Actualizar el contenido del modal
        const tituloDModal = document.getElementById("tituloDModal");
        const informacionDModal = document.getElementById("informacionDModal");
    
        if (dieta) {
            // Construir contenido dinámico
            let contenidoHTML = "";
            dieta.contenido.forEach((contenido, index) => {
                contenidoHTML += `<p class="modalInfo">${contenido.texto}</p>
                                <img width="560" height="315" src="${contenido.img}" id="imgdieta"></img>
                                <p class="modalInfo" id="ref">${contenido.ref}</p>`;
            });
    
            tituloDModal.textContent = imagenActual.txt;
            informacionDModal.innerHTML = contenidoHTML;
        }
    
        // Mostrar el modal
        const modal = document.getElementById("dietaModal");
        modal.style.display = "block";
    }

    
    //-------------------Elementos de la pagina

    const tiendaButton = document.getElementById("tienda");
    const objetivo = localStorage.getItem("objetivo");
    console.log("Registro: "+objetivo);

    // Cambio de Slider
    const trenSuperiorElement = document.getElementById("tren-superior");
    const trenInferiorElement = document.getElementById("tren-inferior");
    const fullBodyElement = document.getElementById("full-body");
    const paraTiElement = document.getElementById("para-ti");


    const aumentarElement = document.getElementById("aumentar");
    const reducirElement = document.getElementById("reducir");
    const mantenerElement = document.getElementById("mantener");


    trenSuperiorElement.addEventListener("click", () => mostrarSlider(0));
    trenInferiorElement.addEventListener("click", () => mostrarSlider(1));
    fullBodyElement.addEventListener("click", () => mostrarSlider(2));
    paraTiElement.addEventListener("click", () => verificarParaTi(objetivo));


    aumentarElement.addEventListener("click", () => mostrarSlider2(0));
    reducirElement.addEventListener("click", () => mostrarSlider2(1));
    mantenerElement.addEventListener("click", () => mostrarSlider2(2));


    // Mostrar Rutinas
    const modal = document.getElementById("rutinaModal");
    const cerrarModal = document.getElementById("cerrarModal");
    const modalD = document.getElementById("dietaModal");
    const cerrarModalD = document.getElementById("cerrarDModal");

    // Agregar un evento de clic para cerrar el modal
    cerrarModal.addEventListener("click", function () {
        modal.style.display = "none";
    });
    // Agregar un evento de clic para cerrar el modal Dieta
    cerrarDModal.addEventListener("click", function () {
        modalD.style.display = "none";
    });

    //Salida a Tienda
    tiendaButton.addEventListener("click", function () {
        window.location.href = "tienda/index.html";
    });
    
    agregarEventosClickImagenes();
    agregarEventosDietasClickImagenes()

});