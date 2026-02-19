'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ProjectImage {
  id: number;
  url: string;
  createdAt: string;
}

interface ProjectsClientProps {
  projects: ProjectImage[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl font-bold text-text-main mb-6">
            Galeri Proyek
          </h2>
          <p className="text-lg text-text-light">
            Dokumentasi instalasi dan unit operasional Oksigen Generator Medis di berbagai fasilitas kesehatan.
          </p>
        </div>
        
        {projects.length === 0 ? (
           <p className="text-center text-gray-500">Belum ada foto proyek yang diunggah.</p>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <motion.div 
              layoutId={`card-${project.id}`}
              key={project.id} 
              className="relative aspect-square group overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
              onClick={() => setSelectedId(project.id)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={project.url}
                alt={`Proyek Medigas ${project.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
        )}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
               <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/50 rounded-full p-2 transition-colors"
               >
                 <X size={24} />
               </button>
               
               <Image
                src={selectedProject.url}
                alt={`Proyek Medigas ${selectedId}`}
                fill
                className="object-contain"
                quality={100}
                unoptimized
               />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
