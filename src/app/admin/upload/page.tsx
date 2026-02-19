'use client'

import { useState } from 'react'
import { uploadImage } from '@/app/actions/upload'
import { Loader2 } from 'lucide-react'

export default function UploadPage() {
  const [isUploading, setIsUploading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(formData: FormData) {
    setIsUploading(true)
    setMessage('')
    
    const result = await uploadImage(formData)
    
    if (result.success) {
      setMessage('Image uploaded successfully!')
      // Reset form via key change or ref, but for now message is enough
    } else {
      setMessage(`Upload failed: ${result.error}`)
    }
    
    setIsUploading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Upload Project Images</h1>
        
        <form action={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Images
            </label>
            <input
              type="file"
              name="files"
              accept="image/*"
              multiple
              required
              className="w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-600 file:text-white
                hover:file:bg-blue-700
              "
            />
          </div>
          
          <button
            type="submit"
            disabled={isUploading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                Uploading...
              </>
            ) : (
              'Upload Images'
            )}
          </button>
          
          {message && (
            <p className={`text-center text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
