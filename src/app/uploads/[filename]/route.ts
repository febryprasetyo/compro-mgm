import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  context: { params: Promise<{ filename: string }> }
) {
  const { filename } = await context.params;
  const filePath = join(process.cwd(), 'public/uploads', filename);
  
  try {
    const buffer = await readFile(filePath);
    
    // Determine content type based on extension
    const ext = filename.split('.').pop()?.toLowerCase();
    let contentType = 'image/jpeg';
    if (ext === 'png') contentType = 'image/png';
    if (ext === 'webp') contentType = 'image/webp';
    if (ext === 'gif') contentType = 'image/gif';
    if (ext === 'svg') contentType = 'image/svg+xml';

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error(`Error serving image ${filename}:`, error);
    return new NextResponse('Image not found', { status: 404 });
  }
}
