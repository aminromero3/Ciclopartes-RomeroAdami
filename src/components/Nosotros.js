import React from 'react'

function Nosotros() {
    return (
        <section>
            <div class="container-fluid">
                <div class="row">
                    <div class="d-flex justify-content-center">
                        <h1 class="h2 text-center m-4"> Sobre nosotros...</h1>.
                    </div>
                </div>
            </div>
            
            <div class="container marketing m">

                <hr class="featurette-divider"/>
                <div class="row featurette">
                    <div class="col-sm-7">
                        <h4 class="h2 featurette-heading">Nuestro objetivo</h4>
                        <p class="lead">Nuestro objetivo es brindar soluciones a la gente, en nuestro local podras
                            encontrar bicicletas para todo tipos de uso, ropa, repuestos y una excelente atencion.
                            Tambien podras reparar tu bicicleta</p>
                    </div>
                    <div class="col-5">
                        <img class="img-fluid" src="/local1.jpg" alt="imagen de negocio "/>
                    </div>
                </div>
                <hr class="featurette-divider"/>
                <div class="row featurette">
                    <div class="col-sm-7 order-sm-2">
                        <h4 class="h2 featurette-heading">Nuestros inicios</h4>
                        <p class="lead">Surgimos hace mas de 15 años como un simple negocio donde podias venir a reparar
                            tu bicicleta, con el tiempo fuimos agregando servicios y creciendo</p>
                    </div>
                    <div class="col-5 order-md-1">
                        <img class="img-fluid" src="/local2.jpg" alt="imagen de negocio"/>
                    </div>
                </div>

                <hr class="featurette-divider"/>
            </div>
        </section>
    )
}

export default Nosotros