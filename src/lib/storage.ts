import { supabase } from './supabase'

export interface UploadResult {
  data: any
  error: any
}

export const uploadFile = async (
  file: File,
  bucket: string,
  path: string
): Promise<UploadResult> => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file)

  return { data, error }
}

export const getPublicUrl = (bucket: string, path: string): string => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}

export const deleteFile = async (
  bucket: string,
  path: string
): Promise<UploadResult> => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .remove([path])

  return { data, error }
}

export const listFiles = async (bucket: string, path?: string) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .list(path || '')

  return { data, error }
}

// Helper function to generate unique file names
export const generateFileName = (originalName: string): string => {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 15)
  const extension = originalName.split('.').pop()
  return `${timestamp}-${randomString}.${extension}`
} 