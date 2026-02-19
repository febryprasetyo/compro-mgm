'use server'

import { writeFile } from 'fs/promises'
import { join } from 'path'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function uploadImages(formData: FormData) {
  const files = formData.getAll('files') as File[]
  if (!files || files.length === 0) {
    return { success: false, error: 'No files uploaded' }
  }

  const results = []

  for (const file of files) {
    if (!file.name || file.size === 0) continue

    try {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      // Create unique filename
      const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`
      const path = join(process.cwd(), 'public/uploads', filename)
      
      await writeFile(path, buffer)
      
      const url = `/uploads/${filename}`
      
      await prisma.projectImage.create({
        data: {
          url,
        },
      })
      results.push({ name: file.name, success: true })
    } catch (error) {
      console.error(`Upload error for ${file.name}:`, error)
      results.push({ name: file.name, success: false, error: String(error) })
    }
  }

  revalidatePath('/projects')
  
  const allSuccess = results.every(r => r.success)
  if (allSuccess) {
    return { success: true, count: results.length }
  } else {
    const failedCount = results.filter(r => !r.success).length
    return { 
      success: false, 
      error: `Failed to upload ${failedCount} of ${results.length} images.`,
      details: results 
    }
  }
}

// Keep old for compatibility or delete if only one user. 
// I'll replace it since the user asked for multiple.
export async function uploadImage(formData: FormData) {
  return uploadImages(formData)
}



export async function getProjectImages() {
  try {
    const images = await prisma.projectImage.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return images.map(image => ({
      ...image,
      createdAt: image.createdAt.toISOString()
    }))
  } catch (error) {
    console.error('Fetch error:', error)
    return []
  }
}
