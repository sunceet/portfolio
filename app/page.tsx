"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Shadcn UI",
  "REST API",
  "PostgreSQL",
  "MS SQL",
  "Framer Motion",
  "React Native",
  "Docker",
  "Vite",
  "Git",
  "React Router",
  "React i18next",
  "Axios",
];

const socoldScreenshots = [
  { src: "/socold1.png", alt: "SOCOLD WORLD - главная страница" },
  { src: "/socold2.png", alt: "SOCOLD WORLD - коллекция Muus Ullar" },
  { src: "/socold3.png", alt: "SOCOLD WORLD - коллекция Bies Qaraq" },
  { src: "/socold4.png", alt: "SOCOLD WORLD - каталог товаров" },
  { src: "/socold5.png", alt: "SOCOLD WORLD - информация конкретного товара" },
  { src: "/socold6.png", alt: 'SOCOLD WORLD - страница \"о нас\" ' },
];

const aintermedScreenshots = [
  { src: "/aintermed1.png", alt: "AIntermed - главная" },
  { src: "/aintermed2.png", alt: "AIntermed - возможности модели" },
  { src: "/aintermed3.png", alt: "AIntermed - тарифы" },
  { src: "/aintermed4.png", alt: "AIntermed - чат с AI" },
  { src: "/aintermed5.png", alt: 'AIntermed - страница "о нас"' },
  { src: "/aintermed6.png", alt: "AIntermed - faq блоки" },
];

const zlataScreenshots = [
  { src: "/zlata1.png", alt: "Zlata - применения продукций" },
  { src: "/zlata2.png", alt: 'Zlata - страница "о нас"' },
  { src: "/zlata3.png", alt: "Zlata - главная страница" },
  { src: "/zlata4.png", alt: "Zlata - история Руслана" },
  { src: "/zlata5.png", alt: "Zlata - продукция" },
  { src: "/zlata6.png", alt: "Zlata - информация масла" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function LightboxModal({
  images,
  currentIndex,
  onClose,
}: {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl aspect-video"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            key={currentIndex}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 rounded-full text-white text-xl font-bold transition-colors"
        >
          ×
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-400 text-sm">
          {images[currentIndex].alt}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Home() {
  const [lightbox, setLightbox] = useState<{
    images: { src: string; alt: string }[];
    index: number;
  } | null>(null);

  const openLightbox = (
    images: { src: string; alt: string }[],
    index: number,
  ) => {
    setLightbox({ images, index });
  };

  return (
    <>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Сивцев Владислав
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-400 mb-6">
            Frontend Developer
          </p>
          <p className="text-zinc-500 max-w-md mx-auto mb-8">
            Разрабатываю современные веб-приложения с использованием React,
            Next.js и TypeScript
          </p>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b border-zinc-800 pb-4">
            О себе
          </h2>
          <div className="bg-zinc-900/50 rounded-xl p-6 sm:p-8 space-y-4 text-zinc-300 leading-loose">
            <p>
              Привет! Меня зовут Владислав, я frontend-разработчик. Создаю
              функциональные и визуально привлекательные веб-приложения.
            </p>
            <p>
              Родился 11 февраля 2004 года. Специализируюсь на React и
              экосистеме Next.js, владею TypeScript для типобезопасной
              разработки. Использую Tailwind CSS и Shadcn для стилизации
              интерфейсов, а Framer Motion для плавных анимаций.
            </p>
            <p>
              Имею опыт работы с REST API, PostgreSQL, MS SQL. Разворачиваю
              проекты в Docker-контейнерах и базово владею React Native для
              мобильной разработки.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b border-zinc-800 pb-4">
            Навыки
          </h2>
          <motion.div
            variants={container}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={item}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium text-sm transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b border-zinc-800 pb-4">
            Проекты
          </h2>

          {/* Socold */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-zinc-900/50 rounded-xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">SOCOLD WORLD</h3>
                  <p className="text-zinc-400 text-sm">
                    Онлайн магазин ювелирных изделий
                  </p>
                </div>
                <a
                  href="https://socold-ofkm.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition-colors text-center"
                >
                  Открыть сайт →
                </a>
              </div>
              <p className="text-zinc-400 mb-6 text-sm">
                Полноценный онлайн магазин ювелирных изделий с онлайн оплатой,
                авторизацией через Telegram Gateway с личным кабинетом.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socoldScreenshots.map((img, i) => (
                  <motion.div
                    key={img.src}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="relative aspect-video rounded-lg overflow-hidden bg-zinc-800 group cursor-pointer"
                    onClick={() => openLightbox(socoldScreenshots, i)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AIntermed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900/50 rounded-xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">AIntermed</h3>
                  <p className="text-zinc-400 text-sm">
                    ИИ ассистент для медицины
                  </p>
                </div>
                <a
                  href="https://aintermed.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition-colors text-center"
                >
                  Открыть сайт →
                </a>
              </div>
              <p className="text-zinc-400 mb-6 text-sm">
                Сайт для медицинской ИИ-платформы AInterMed.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {aintermedScreenshots.map((img, i) => (
                  <motion.div
                    key={img.src}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="relative aspect-video rounded-lg overflow-hidden bg-zinc-800 group cursor-pointer"
                    onClick={() => openLightbox(aintermedScreenshots, i)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Zlata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900/50 rounded-xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">Zlata-rus</h3>
                  <p className="text-zinc-400 text-sm">
                    Интернет-магазин масел
                  </p>
                </div>
                <a
                  href="https://zlata-rus-jb4y.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition-colors text-center"
                >
                  Открыть сайт →
                </a>
              </div>
              <p className="text-zinc-400 mb-6 text-sm">
                Онлайн визитка льняных масел
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {zlataScreenshots.map((img, i) => (
                  <motion.div
                    key={img.src}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="relative aspect-video rounded-lg overflow-hidden bg-zinc-800 group cursor-pointer"
                    onClick={() => openLightbox(zlataScreenshots, i)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Контакты</h2>
          <div className="bg-zinc-900/50 rounded-xl p-6 sm:p-8">
            <p className="text-zinc-400 mb-6">
              Готов к сотрудничеству. Свяжитесь со мной любым удобным способом:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a
                href="tel:+79142850792"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium transition-colors"
              >
                <span>+7 914 285-07-92</span>
              </a>

              <a
                href="mailto:sunceetpochta@mail.ru"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium transition-colors"
              >
                <span>sunceetpochta@mail.ru</span>
              </a>
              <a
                href="https://t.me/sunceet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium transition-colors"
              >
                <span>TG: @sunceet</span>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-zinc-800 text-center text-zinc-600 text-sm">
          <p>© 2024 Сивцев Владислав. Все права защищены.</p>
        </footer>
      </main>
      {lightbox && (
        <LightboxModal
          images={lightbox.images}
          currentIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
