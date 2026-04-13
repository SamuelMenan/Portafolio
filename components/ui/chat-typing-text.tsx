"use client"

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ChatTypingTextProps {
  text: string
  className?: string
  speed?: number
  startDelay?: number
  showCursor?: boolean
  as?: 'span' | 'p' | 'div'
  disableAnimation?: boolean
}

export default function ChatTypingText({
  text,
  className,
  speed = 16,
  startDelay = 0,
  showCursor = true,
  as = 'span',
  disableAnimation = false,
}: ChatTypingTextProps) {
  const [typedText, setTypedText] = useState<string>(disableAnimation ? text : '')
  const [isTyping, setIsTyping] = useState<boolean>(!disableAnimation && text.length > 0)
  const timersRef = useRef<{ start?: number; tick?: number }>({})

  useEffect(() => {
    if (timersRef.current.start) {
      window.clearTimeout(timersRef.current.start)
    }

    if (timersRef.current.tick) {
      window.clearInterval(timersRef.current.tick)
    }

    if (!text) {
      setTypedText('')
      setIsTyping(false)
      return
    }

    const prefersReducedMotion =
      disableAnimation || window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setTypedText(text)
      setIsTyping(false)
      return
    }

    setTypedText('')
    setIsTyping(true)

    let index = 0

    timersRef.current.start = window.setTimeout(() => {
      timersRef.current.tick = window.setInterval(() => {
        index += 1
        setTypedText(text.slice(0, index))

        if (index >= text.length) {
          if (timersRef.current.tick) {
            window.clearInterval(timersRef.current.tick)
          }
          setIsTyping(false)
        }
      }, Math.max(10, speed))
    }, Math.max(0, startDelay))

    return () => {
      if (timersRef.current.start) {
        window.clearTimeout(timersRef.current.start)
      }
      if (timersRef.current.tick) {
        window.clearInterval(timersRef.current.tick)
      }
    }
  }, [text, speed, startDelay, disableAnimation])

  const Component = as

  return (
    <Component className={cn('chat-typing-text', className)} aria-label={text}>
      <span>{typedText}</span>
      {showCursor ? (
        <span
          className={cn('chat-typing-text__cursor', !isTyping && 'is-idle')}
          aria-hidden="true"
        >
          |
        </span>
      ) : null}
    </Component>
  )
}
