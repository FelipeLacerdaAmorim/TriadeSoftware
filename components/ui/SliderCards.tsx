'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type SliderCardsProps = {
  projects: Project[];
};

export default function SliderCards({ projects }: SliderCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const controls = useAnimation();
  
  // Adicionar os primeiros dois cards ao final para transição suave
  const duplicatedProjects = [...projects, ...projects, projects[0], projects[1]];

  useEffect(() => {
    if (containerRef.current) {
      // Calcular a largura de um conjunto de cards (sem duplicação)
      const singleSetWidth = (300 + 24) * projects.length; // 300px card + 24px gap
      setCardWidth(singleSetWidth);
    }

    // Iniciar animação automática infinita contínua
    const startAutoScroll = async () => {
      const cardWidth = 300 + 24; // card width + gap
      const singleSetWidth = cardWidth * projects.length;
      
      // Start from the beginning and scroll continuously
      const scrollContinuously = async () => {
        await controls.start({
          x: -singleSetWidth,
          transition: {
            duration: projects.length * 3.75, // 25% slower
            ease: "linear"
          }
        });
        
        // Reset position instantly and continue
        controls.set({ x: 0 });
        scrollContinuously();
      };
      
      scrollContinuously();
    };

    if (cardWidth > 0) {
      startAutoScroll();
    }
  }, [cardWidth, controls, projects.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Gradiente à esquerda */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      
      <motion.div
        ref={containerRef}
        className="flex gap-6 py-4 px-2"
        drag="x"
        dragConstraints={{ right: 0, left: -cardWidth }}
        animate={controls}
        onDragStart={() => controls.stop()}
        onDragEnd={() => {
          // Reiniciar a animação automática após o usuário soltar o arrasto
          controls.start({
            x: -cardWidth,
            transition: { duration: projects.length * 5, ease: "linear" }
          });
        }}
      >
        {duplicatedProjects.map((project, index) => (
          <motion.div
            key={`${project.id}-${index}`}
            className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 relative group"
            whileHover={{ 
              y: -10, 
              transition: { duration: 0.3 } 
            }}
          >
            <div className="relative h-[276px] w-full bg-gray-200 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Gradiente à direita */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  );
}