// ARCHIVO DE CLASIFICADOS DE MICROEMPRESARIOS
// Edita este archivo para agregar, modificar o eliminar clasificados
// La página web cargará automáticamente los cambios

const clasificados = [
    {
        icono: "🍰",
        titulo: "Repostería Dulce Hogar",
        categoria: "Alimentos y Bebidas",
        descripcion: "Tortas personalizadas, cupcakes, postres para eventos y celebraciones. Ingredientes de primera calidad.",
        nombre: "María González",
        ubicacion: "Torre A, Apto 301",
        telefono: "(123) 456-1111",
        email: "dulcehogar@email.com"
    },
    {
        icono: "💻",
        titulo: "Soporte Tech",
        categoria: "Tecnología y Reparaciones",
        descripcion: "Reparación de computadores, celulares y tablets. Instalación de software, configuración de redes WiFi. Servicio a domicilio.",
        nombre: "Carlos Rodríguez",
        ubicacion: "Torre B, Apto 205",
        telefono: "(123) 456-2222",
        email: "soportetech@email.com"
    },
    {
        icono: "✂️",
        titulo: "Peluquería Estilo",
        categoria: "Belleza y Cuidado Personal",
        descripcion: "Cortes de cabello para toda la familia, peinados, manicure, pedicure. Servicio personalizado.",
        nombre: "Ana Martínez",
        ubicacion: "Torre C, Apto 402",
        telefono: "(123) 456-3333",
        horario: "Lun-Sáb 9AM-6PM"
    },
    {
        icono: "📚",
        titulo: "Clases Particulares",
        categoria: "Educación",
        descripcion: "Matemáticas, Física y Química para primaria y bachillerato. Preparación para exámenes.",
        nombre: "Prof. Luis Hernández",
        ubicacion: "Torre A, Apto 105",
        telefono: "(123) 456-4444",
        email: "clasesluis@email.com"
    },
    {
        icono: "🐕",
        titulo: "Paseo de Mascotas",
        categoria: "Servicios para Mascotas",
        descripcion: "Paseo de perros, cuidado de mascotas mientras viajas. Servicio confiable y con amor por los animales.",
        nombre: "Sofía López",
        ubicacion: "Torre B, Apto 310",
        telefono: "(123) 456-5555",
        horario: "Disponible todos los días"
    },
    {
        icono: "🏋️",
        titulo: "Personal Trainer",
        categoria: "Deportes y Fitness",
        descripcion: "Entrenamiento personalizado, rutinas adaptadas a tus objetivos. Sesiones en el gimnasio del conjunto.",
        nombre: "Diego Torres",
        ubicacion: "Torre C, Apto 201",
        telefono: "(123) 456-6666",
        email: "fitness@email.com"
    }
];

// FUNCIÓN PARA CARGAR LOS CLASIFICADOS EN LA PÁGINA
function cargarClasificados() {
    const container = document.getElementById('clasificados-container');
    
    if (!container) {
        console.error('No se encontró el contenedor de clasificados');
        return;
    }
    
    // Limpiar contenedor
    container.innerHTML = '';
    
    // Crear cards para cada clasificado
    clasificados.forEach(clasificado => {
        const card = document.createElement('div');
        card.className = 'clasificado-card';
        
        // Construir información de contacto
        let contactoHTML = `
            <strong>Contacto:</strong><br>
            ${clasificado.nombre} - ${clasificado.ubicacion}<br>
        `;
        
        if (clasificado.telefono) {
            contactoHTML += `📱 ${clasificado.telefono}<br>`;
        }
        
        if (clasificado.email) {
            contactoHTML += `📧 ${clasificado.email}<br>`;
        }
        
        if (clasificado.horario) {
            contactoHTML += `${clasificado.horario}`;
        }
        
        // Crear el HTML completo de la card
        card.innerHTML = `
            <div class="clasificado-header">
                <h3>${clasificado.icono} ${clasificado.titulo}</h3>
                <div class="clasificado-categoria">${clasificado.categoria}</div>
            </div>
            <div class="clasificado-body">
                <p>${clasificado.descripcion}</p>
                <div class="clasificado-contacto">
                    ${contactoHTML}
                </div>
            </div>
        `;
        
        // Agregar animación de entrada
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        
        container.appendChild(card);
        
        // Activar animación
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
}

// Cargar clasificados cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarClasificados);
} else {
    cargarClasificados();
}

// INSTRUCCIONES PARA AGREGAR NUEVOS CLASIFICADOS:
// 
// 1. Copia el siguiente formato y pégalo dentro del array "clasificados" arriba
// 2. Cambia los valores según tu negocio
// 3. Guarda el archivo
// 4. Recarga la página web
//
// FORMATO:
/*
{
    icono: "🔧",  // Puedes usar cualquier emoji
    titulo: "Nombre de tu Negocio",
    categoria: "Tipo de Servicio",
    descripcion: "Descripción detallada de lo que ofreces",
    nombre: "Tu Nombre",
    ubicacion: "Torre X, Apto XXX",
    telefono: "(123) 456-7777",  // Opcional
    email: "tuemail@email.com",  // Opcional
    horario: "Horario de atención"  // Opcional
},
*/