"use client"

import { FormEvent, useMemo, useState } from 'react'

interface Props {
  mobile?: boolean
  lang: 'es' | 'en'
}

interface ContactFormValues {
  name: string
  email: string
  message: string
}

export default function ContactSection({ mobile, lang }: Props) {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle')

  const copy =
    lang === 'en'
      ? {
          section: '06 - Contact',
          info: 'Contact Information',
          location: 'Location',
          country: 'Colombia',
          cv: 'Samuel Esteban Mena Pupiales - Resume',
          download: '[ DOWNLOAD PDF ]',
          sendTitle: 'Send a Message',
          name: 'Name',
          email: 'Email',
          message: 'Message',
          nameHint: 'Recommendation: include first and last name for a better reply.',
          emailHint: 'Recommendation: use an active email, for example name@domain.com.',
          messageHint: 'Recommendation: include context, objective, and expected result (minimum 20 characters).',
          namePlaceholder: 'e.g. Samuel Mena',
          emailPlaceholder: 'e.g. yourmail@domain.com',
          messagePlaceholder: 'Tell me about your project, idea, or need...',
          send: '[ SEND MESSAGE ]',
          sending: '[ SENDING... ]',
          success: 'Message sent and saved successfully. I will reply soon.',
          error: 'Please complete all fields correctly and try again.',
          progress: 'recommended length',
          footer: 'Samuel Esteban Mena Pupiales - Portfolio',
        }
      : {
          section: '06 - Contacto',
          info: 'Información de Contacto',
          location: 'Ubicación',
          country: 'Colombia',
          cv: 'Samuel Esteban Mena Pupiales - CV',
          download: '[ DESCARGAR PDF ]',
          sendTitle: 'Enviar un Mensaje',
          name: 'Nombre',
          email: 'Email',
          message: 'Mensaje',
          nameHint: 'Recomendación: incluye nombre y apellido para responderte mejor.',
          emailHint: 'Recomendación: usa un correo activo, por ejemplo nombre@dominio.com.',
          messageHint: 'Recomendación: agrega contexto, objetivo y resultado esperado (mínimo 20 caracteres).',
          namePlaceholder: 'Ej. Samuel Mena',
          emailPlaceholder: 'Ej. tucorreo@dominio.com',
          messagePlaceholder: 'Cuéntame sobre tu proyecto, idea o necesidad...',
          send: '[ ENVIAR MENSAJE ]',
          sending: '[ ENVIANDO... ]',
          success: 'Mensaje enviado y guardado con éxito. Te responderé pronto.',
          error: 'Completa correctamente todos los campos y vuelve a intentarlo.',
          progress: 'longitud recomendada',
          footer: 'Samuel Esteban Mena Pupiales - Portafolio',
        }

  const minimumMessageLength = 20
  const recommendedMessageLength = 500
  const messageLength = formValues.message.trim().length
  const messageProgress = Math.min(100, Math.round((messageLength / recommendedMessageLength) * 100))

  const hasValidEmail = useMemo(() => {
    const email = formValues.email.trim()
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }, [formValues.email])

  const isFormValid =
    formValues.name.trim().length >= 2 && hasValidEmail && formValues.message.trim().length >= minimumMessageLength

  function updateField(field: keyof ContactFormValues, value: string) {
    setFormValues((prev) => ({ ...prev, [field]: value }))
    if (submitState !== 'idle') {
      setSubmitState('idle')
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSending) return

    if (!isFormValid) {
      setSubmitState('error')
      return
    }

    setIsSending(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          message: formValues.message.trim(),
        }),
      })

      if (!response.ok) {
        setSubmitState('error')
        return
      }

      setSubmitState('success')
      setFormValues({ name: '', email: '', message: '' })
    } catch {
      setSubmitState('error')
    } finally {
      setIsSending(false)
    }
  }

  const feedbackMessage =
    submitState === 'success' ? copy.success : submitState === 'error' ? copy.error : ''

  return (
    <section id="contact" className={`py-12 scroll-mt-20 ${mobile ? "py-8" : ""}`}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-widest uppercase font-bold">{copy.section}</span>
        <div className="flex-1 border-t border-black" />
      </div>

      <div className={`grid gap-8 ${mobile ? "grid-cols-1" : "grid-cols-[1fr_1fr]"}`}>

        {/* Left: Contact info */}
        <div className="flex flex-col gap-4">
          <div className="border-2 border-black p-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 border-b border-black pb-2">{copy.info}</p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="border border-gray-300 px-3 py-2 flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Email</span>
                <span className="font-bold text-xs">samuel.menapupi@campusucc.edu.co</span>
              </div>
              <div className="border border-gray-300 px-3 py-2 flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-widest">GitHub</span>
                <span className="font-bold text-xs">github.com/SamuelMenan</span>
              </div>
              <div className="border border-gray-300 px-3 py-2 flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-widest">LinkedIn</span>
                <span className="font-bold text-xs">linkedin.com/in/SamuelMena</span>
              </div>
              <div className="border border-gray-300 px-3 py-2 flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-widest">{copy.location}</span>
                <span className="font-bold text-xs">{copy.country}</span>
              </div>
            </div>
          </div>
          {/* Download CTA */}
          <div className="border-2 border-dashed border-gray-400 px-4 py-3 flex items-center justify-between">
            <span className="text-xs text-gray-600">{copy.cv}</span>
            <div className="border-2 border-black px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
              {copy.download}
            </div>
          </div>
        </div>

        {/* Right: Interactive form */}
        <div className="border-2 border-black p-4 contact-form-panel">
          <p className="text-xs font-bold uppercase tracking-widest mb-4 border-b border-black pb-2">{copy.sendTitle}</p>
          <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-3" noValidate>
            <div className="contact-form__field">
              <label htmlFor="contact-name" className="contact-form__label">{copy.name}</label>
              <p className={`contact-form__hint ${formValues.name.trim() ? 'is-hidden' : ''}`}>{copy.nameHint}</p>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={formValues.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder={copy.namePlaceholder}
                className="contact-form__input"
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-email" className="contact-form__label">{copy.email}</label>
              <p className={`contact-form__hint ${formValues.email.trim() ? 'is-hidden' : ''}`}>{copy.emailHint}</p>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={formValues.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder={copy.emailPlaceholder}
                className="contact-form__input"
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-message" className="contact-form__label">{copy.message}</label>
              <p className={`contact-form__hint ${formValues.message.trim() ? 'is-hidden' : ''}`}>{copy.messageHint}</p>
              <textarea
                id="contact-message"
                name="message"
                value={formValues.message}
                onChange={(event) => updateField('message', event.target.value)}
                placeholder={copy.messagePlaceholder}
                className="contact-form__textarea"
              />

              <div className="contact-form__meta" aria-live="polite">
                <span>{messageLength}/{recommendedMessageLength} {copy.progress}</span>
                <span>{messageProgress}%</span>
              </div>
              <div className="contact-form__meter" aria-hidden="true">
                <div className="contact-form__meter-fill" style={{ width: `${messageProgress}%` }} />
              </div>
            </div>

            <button
              type="submit"
              data-loading={isSending}
              aria-busy={isSending}
              className="portfolio-action contact-submit border-2 border-black bg-black text-white text-center py-2 text-xs font-bold tracking-widest uppercase"
            >
              <span className="portfolio-action__content">
                <span className="portfolio-action__spinner" aria-hidden="true" />
                <span className="portfolio-action__label">{isSending ? copy.sending : copy.send}</span>
                <span className="portfolio-action__arrow" aria-hidden="true">→</span>
              </span>
            </button>

            <p
              className={`contact-form__feedback ${feedbackMessage ? 'is-visible' : ''} ${submitState === 'success' ? 'is-success' : ''} ${submitState === 'error' ? 'is-error' : ''}`}
              aria-live="polite"
            >
              {feedbackMessage || ' '}
            </p>
          </form>
        </div>
      </div>

      {/* Footer strip */}
      <div className="mt-12 border-t-2 border-black pt-4 flex items-center justify-between text-xs text-gray-500">
        <span>{copy.footer}</span>
        <span>© 2026</span>
      </div>
    </section>
  )
}
