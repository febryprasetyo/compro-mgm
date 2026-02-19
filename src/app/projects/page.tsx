'use client';

import { useState, useEffect } from 'react';
import { getProjectImages } from '@/app/actions/upload';
import ProjectsClient from './ProjectsClient';

// Define the type locally to avoid importing from prisma client in client component
interface ProjectImage {
  id: number;
  url: string;
  createdAt: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjectImages();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white py-24 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <ProjectsClient projects={projects} />;
}
