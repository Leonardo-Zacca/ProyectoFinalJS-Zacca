const productos = [
    //Impresoras
    {
        id: "Impresora01",
        titulo: "Impresora Creality 3D Ender 3",
        imagen:
            "https://http2.mlstatic.com/D_NQ_NP_611506-MLA49842850686_052022-V.webp",
        categoria: {
            nombre: "Impresoras",
            id: "impresoras",
        },
        precio: 65000,
    },

    {
        id: "Impresora02",
        titulo: "Impresora Hellbot Magna Se",
        imagen:
            "https://http2.mlstatic.com/D_NQ_NP_749001-MLA52141336514_102022-V.webp",
        categoria: {
            nombre: "Impresoras",
            id: "impresoras",
        },
        precio: 79000,
    },

    {
        id: "Impresora03",
        titulo: "Impresora Artillery Genius",
        imagen:
            "https://http2.mlstatic.com/D_NQ_NP_614500-MLA42238163094_062020-V.webp",
        categoria: {
            nombre: "Impresoras",
            id: "impresoras",
        },
        precio: 118000,
    },

    {
        id: "Impresora04",
        titulo: "Impresora Artillery Hornet",
        imagen:
            "https://http2.mlstatic.com/D_NQ_NP_817658-MLA51619022699_092022-V.webp",
        categoria: {
            nombre: "Impresoras",
            id: "impresoras",
        },
        precio: 67500,
    },

    //Componentes

    {
        id: "Componente01",
        titulo: "Termistor 350 Grados",
        imagen:
            "https://http2.mlstatic.com/D_NQ_NP_954794-MLA44796405521_022021-V.webp",
        categoria: {
            nombre: "Componentes",
            id: "componentes",
        },
        precio: 950,
    },

    {
        id: "Componente02",
        titulo: "Tubo teflón Pfte Capricorn 4mmx1.9mm",
        imagen:
            "https://http2.mlstatic.com/D_NQ_NP_739463-MLA48744183268_012022-V.webp",
        categoria: {
            nombre: "Componentes",
            id: "componentes",
        },
        precio: 2300,
    },

    {
        id: "Componente03",
        titulo: "Brazo Extrusor Idler Arm",
        imagen:
            "https://http2.mlstatic.com/D_NQ_NP_797150-MLA44679147485_012021-V.webp",
        categoria: {
            nombre: "Componentes",
            id: "componentes",
        },
        precio: 1850,
    },

    {
        id: "Componente04",
        titulo: "Kit Extrusor Creality Metalico Ender 3",
        imagen:
            "https://http2.mlstatic.com/D_NQ_NP_739593-MLA45551292146_042021-V.webp",
        categoria: {
            nombre: "Componentes",
            id: "componentes",
        },
        precio: 2750,
    },

    //Filamentos

    {
        id: "Filamento01",
        titulo: "Filamento 3D PLA Printalot 1.75mm 1Kg Blanco",
        imagen:
            "https://http2.mlstatic.com/D_NQ_NP_842884-MLA48658563085_122021-V.webp",
        categoria: {
            nombre: "Filamentos",
            id: "filamentos",
        },
        precio: 3285,
    },

    {
        id: "Filamento02",
        titulo: "Filamento Pla Impresora 3d",
        imagen:
            "https://http2.mlstatic.com/D_NQ_NP_954549-MLA46371004734_062021-V.webp",
        categoria: {
            nombre: "Filamentos",
            id: "filamentos",
        },
        precio: 2500,
    },

    {
        id: "Filamento03",
        titulo: "Filamento 3D PLA 1.75mm dorado",
        imagen:
            "https://http2.mlstatic.com/D_NQ_NP_660335-MLA48658563472_122021-V.webp",
        categoria: {
            nombre: "Filamentos",
            id: "filamentos",
        },
        precio: 5500,
    },

    {
        id: "Filamento04",
        titulo: "Filamento 3D PLA Grilon3 Rojo",
        imagen:
            "https://http2.mlstatic.com/D_NQ_NP_837812-MLA48657674775_122021-V.webp",
        categoria: {
            nombre: "Filamentos",
            id: "filamentos",
        },
        precio: 3245,
    },
];
//!Elementos del DOM

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}" >Agregar al carrito</button>
        </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        botonesCategorias.forEach(boton => boton.classList.remove("active"));  //Función para quitar el active a los otros botones

        e.currentTarget.classList.add("active");  //Funcion para agregar active al botón presionado

        if(e.currentTarget.id != "todos") {

        const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
        tituloPrincipal.innerText = productoCategoria.categoria.nombre;

        
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito );
    });
    
}

const productosEnCarrito = [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find (producto => producto.id === idBoton);
    productosEnCarrito.push(productoAgregado);
}



