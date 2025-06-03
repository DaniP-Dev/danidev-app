import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Bienvenido a la página de inicio de Mi Sitio Web.",
};

export default function Home() {
  return (
    <main className="container-global py-8">
      {/*-------------------------------------------*/}
      {/* 1. ENCABEZADO PRINCIPAL Y TEXTO BASICO   */}
      {/*-------------------------------------------*/}
      <header className="mb-8 animate-slide-up">
        <h1 className="heading-primary">Bienvenido a Mi Sitio Web</h1>
        <p className="text-base text-muted animate-fade-in">
          Esta página de inicio está diseñada para probar todas las clases CSS
          globales que has definido.
        </p>
      </header>

      {/*-------------------------------------------*/}
      {/* 2. BOTONES DE DIFERENTES TIPOS            */}
      {/*-------------------------------------------*/}
      <section className="mb-12">
        <h2 className="heading-secondary mb-4">Botones de ejemplo</h2>
        <div className="flex-between">
          <button className="btn btn-primary animate-pulse">Primario</button>
          <button className="btn btn-secondary">Secundario</button>
          <button className="btn btn-accent">Acento</button>
          <button className="btn btn-success">Éxito</button>
          <button className="btn btn-warning">Advertencia</button>
          <button className="btn btn-info">Información</button>
        </div>
      </section>

      {/*-------------------------------------------*/}
      {/* 3. TARJETAS DE CONTENIDO                  */}
      {/*-------------------------------------------*/}
      <section className="mb-12">
        <h2 className="heading-secondary mb-4">Tarjetas de contenido</h2>
        <div className="grid-2cols gap-6">
          <div className="card">
            <h3 className="heading-secondary">Tarjeta 1</h3>
            <p className="text-base">
              Esta es una tarjeta de ejemplo. Usa clases globales para fondo,
              sombra y padding.
            </p>
            <a href="#" className="link-underline-hover text-secondary">
              Leer más
            </a>
          </div>
          <div className="card card-surface animate-fade-down">
            <h3 className="heading-secondary">Tarjeta 2 (Surface)</h3>
            <p className="text-base">
              Esta tarjeta usa el fondo de superficie para diferenciarse
              ligeramente.
            </p>
          </div>
        </div>
      </section>

      {/*-------------------------------------------*/}
      {/* 4. FORMULARIO DE CONTACTO                 */}
      {/*-------------------------------------------*/}
      <section className="mb-12">
        <h2 className="heading-secondary mb-4">Formulario de contacto</h2>
        <form className="max-w-md animate-slide-up">
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              placeholder="Tu nombre"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="ejemplo@dominio.com"
              className="form-input"
            />
            <span className="form-error">Este campo es obligatorio.</span>
          </div>
          <div className="form-group">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
              className="form-input"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        </form>
      </section>

      {/*-------------------------------------------*/}
      {/* 5. AVATAR REDONDO                         */}
      {/*-------------------------------------------*/}
      <section className="mb-12">
        <h2 className="heading-secondary mb-4">Avatar redondo</h2>
        <div className="flex-center">
          <div className="avatar-circle bg-secondary animate-bounce">
            {/* Puedes reemplazar este fondo con una imagen usando <img> dentro */}
          </div>
        </div>
      </section>

      {/*-------------------------------------------*/}
      {/* 6. TEXTO MULTILÍNEA TRUNCADO              */}
      {/*-------------------------------------------*/}
      <section className="mb-12">
        <h2 className="heading-secondary mb-4">Texto truncado</h2>
        <p className="truncate-3-lines text-base" style={{ maxWidth: "400px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vulputate tincidunt nunc, eu porta est aliquet nec. Proin convallis
          eros in felis aliquet, ac fringilla nunc pulvinar. Donec euismod
          ligula ac risus molestie, ac sagittis orci aliquet. Vivamus suscipit
          lectus non massa porta, in facilisis purus tincidunt. Integer non
          risus vitae ligula pretium malesuada in nec purus.
        </p>
      </section>

      {/*-------------------------------------------*/}
      {/* 7. UTILIDADES DE SOMBRA Y LAYOUT          */}
      {/*-------------------------------------------*/}
      <section className="mb-12">
        <h2 className="heading-secondary mb-4">Sombra y layout</h2>
        <div className="card shadow-md mb-4 animate-fade-in">
          <h3 className="heading-secondary">Tarjeta con sombra</h3>
          <p className="text-base">
            Esta tarjeta tiene una sombra más pronunciada.
          </p>
        </div>
        <div className="flex-between">
          <div className="card shadow-hover p-4">
            <p className="text-base">Hover sobre mí (sombra ligera).</p>
          </div>
          <div className="card p-4">
            <p className="text-base">
              Sin sombra extra, solo la sombra por defecto de <code>.card</code>
              .
            </p>
          </div>
        </div>
      </section>

      {/*-------------------------------------------*/}
      {/* 8. ENLACE CON EFECTO UNDERLINE             */}
      {/*-------------------------------------------*/}
      <section className="mb-12">
        <h2 className="heading-secondary mb-4">Enlace con efecto</h2>
        <a href="#!" className="link-underline-hover">
          Pasa el mouse por aquí para ver el subrayado animado
        </a>
      </section>

      {/*-------------------------------------------*/}
      {/* 9. PIE DE PÁGINA SIMPLES                  */}
      {/*-------------------------------------------*/}
      <footer className="mt-16 pt-8 border-t border-gray-300 text-center">
        <p className="text-small text-muted">
          &copy; 2025 Mi Sitio Web. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
