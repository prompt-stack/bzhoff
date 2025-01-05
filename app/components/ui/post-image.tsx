'use client'

import Image from 'next/image'

interface PostImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function PostImage({ 
  src, 
  alt, 
  width = 800, 
  height = 400, 
  className 
}: PostImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
} 