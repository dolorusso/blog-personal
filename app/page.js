import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <section className="flex items-center w-full max-w-6xl px-4 md:px-8 gap-0">
        
        <div className="flex flex-col items-center text-center gap-3 w-full">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-[#305555] to-[#36e1f8] text-transparent bg-clip-text">
            Dolores M. Russo
          </h1>

          <div className="flex justify-center gap-4 mt-2">
            <a href="https://github.com/dolorusso" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4 md:w-6 md:h-6 text-white hover:scale-110 transition-transform" />
            </a>
            <a href="https://x.com/dolorusso1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 md:w-6 md:h-6 text-white hover:scale-110 transition-transform" />
            </a>
            <a href="https://instagram.com/dolo_russo" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 md:w-6 md:h-6 text-white hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:dolo.mrusso@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 md:w-6 md:h-6 text-white hover:scale-110 transition-transform" />
            </a>
          </div>

          <p className="text-base md:text-lg lg:text-xl text-[#4e8994] tracking-tight mt-4 max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto">
            No solo baso mi personalidad en estudiar Ing. de Sistemas, también me gusta escribir y por eso creé este blog.
          </p>

          <section className="flex justify-center mt-4">
            <a
              href="/articles"
              className="px-3 py-2 md:px-4 md:py-3 text-sm md:text-base lg:text-base bg-gradient-to-b from-[#3a6868] to-[#36e1f8] text-[#121212] font-medium rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
            >
              Ver Publicaciones
            </a>
          </section>
        </div>
      </section>

      <section id="articles" className="mt-16 w-full">
        {/* carga de articulos */}
      </section>
    </div>
  );
}

