"use client"

import { FormEvent, useState } from 'react'

type ContactMessage = {
  id: string
  name: string
  email: string
  message: string
  status: string
  createdAt: string
}

export default function MessagesPage() {
  const [adminKey, setAdminKey] = useState('')
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  async function loadMessages(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!adminKey.trim()) {
      setError('Ingresa tu llave de administración para consultar mensajes.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact?limit=50', {
        method: 'GET',
        headers: {
          'x-admin-key': adminKey.trim(),
        },
      })

      const data = (await response.json()) as {
        ok?: boolean
        error?: string
        items?: ContactMessage[]
      }

      if (!response.ok || !data.ok) {
        setMessages([])
        setError(data.error || 'No fue posible cargar los mensajes.')
        return
      }

      setMessages(data.items || [])
    } catch {
      setMessages([])
      setError('Error de red al consultar mensajes.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="portfolio-theme min-h-screen px-4 py-8">
      <section className="max-w-4xl mx-auto border-2 border-black p-5 bg-gray-50">
        <h1 className="text-sm font-bold tracking-widest uppercase border-b border-black pb-2 mb-4">
          Mensajes de Contacto
        </h1>

        <form onSubmit={loadMessages} className="flex flex-col gap-3 mb-5">
          <label htmlFor="admin-key" className="text-xs text-gray-600 uppercase tracking-widest">
            Llave de administración
          </label>
          <div className="flex gap-2 flex-wrap">
            <input
              id="admin-key"
              type="password"
              autoComplete="off"
              value={adminKey}
              onChange={(event) => setAdminKey(event.target.value)}
              className="border border-black px-3 py-2 text-sm bg-white min-w-55 flex-1"
              placeholder="CONTACT_ADMIN_KEY"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="portfolio-action border-2 border-black bg-black text-white px-4 py-2 text-xs font-bold tracking-widest uppercase"
            >
              {isLoading ? '[ CARGANDO... ]' : '[ CARGAR MENSAJES ]'}
            </button>
          </div>
        </form>

        {error ? <p className="text-xs text-red-500 mb-4">{error}</p> : null}

        <div className="space-y-3">
          {messages.map((message) => (
            <article key={message.id} className="border border-black bg-white p-3">
              <header className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-300 pb-2 mb-2">
                <p className="text-xs font-bold tracking-widest uppercase">{message.name}</p>
                <p className="text-[11px] text-gray-500">{new Date(message.createdAt).toLocaleString()}</p>
              </header>
              <p className="text-xs text-gray-600 mb-1">{message.email}</p>
              <p className="text-sm text-gray-800 whitespace-pre-wrap">{message.message}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
