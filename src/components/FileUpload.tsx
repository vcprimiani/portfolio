import React, { useState, useRef } from 'react'
import { uploadFile, generateFileName, getPublicUrl } from '../lib/storage'

interface FileUploadProps {
  bucket: string
  onUploadComplete?: (url: string) => void
  onUploadError?: (error: string) => void
  accept?: string
  maxSize?: number // in MB
  className?: string
}

const FileUpload: React.FC<FileUploadProps> = ({
  bucket,
  onUploadComplete,
  onUploadError,
  accept = '*/*',
  maxSize = 10, // 10MB default
  className = ''
}) => {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      onUploadError?.(`File size must be less than ${maxSize}MB`)
      return
    }

    setUploading(true)
    setUploadProgress(0)

    try {
      const fileName = generateFileName(file.name)
      const path = `${Date.now()}-${fileName}`

      const { data, error } = await uploadFile(file, bucket, path)

      if (error) {
        onUploadError?.(error.message)
      } else {
        const publicUrl = getPublicUrl(bucket, path)
        onUploadComplete?.(publicUrl)
      }
    } catch (err) {
      onUploadError?.('Upload failed. Please try again.')
    } finally {
      setUploading(false)
      setUploadProgress(0)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const files = event.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      
      // Check file size
      if (file.size > maxSize * 1024 * 1024) {
        onUploadError?.(`File size must be less than ${maxSize}MB`)
        return
      }

      setUploading(true)
      setUploadProgress(0)

      try {
        const fileName = generateFileName(file.name)
        const path = `${Date.now()}-${fileName}`

        const { data, error } = await uploadFile(file, bucket, path)

        if (error) {
          onUploadError?.(error.message)
        } else {
          const publicUrl = getPublicUrl(bucket, path)
          onUploadComplete?.(publicUrl)
        }
      } catch (err) {
        onUploadError?.('Upload failed. Please try again.')
      } finally {
        setUploading(false)
        setUploadProgress(0)
      }
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors ${
          uploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => !uploading && fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileSelect}
          className="hidden"
          disabled={uploading}
        />
        
        {uploading ? (
          <div className="space-y-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="text-sm text-gray-600">Uploading...</p>
            {uploadProgress > 0 && (
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-sm text-gray-600">
              <p className="font-medium">Click to upload or drag and drop</p>
              <p className="text-xs">Max file size: {maxSize}MB</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FileUpload 