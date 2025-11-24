"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { translations } from "@/lib/translations"
import type { Language } from "@/lib/translations"

interface RSVPButtonProps {
  language: Language
}

export default function RSVPButton({ language }: RSVPButtonProps) {
  const t = translations[language]
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    attending: "yes",
  })
  const [responses, setResponses] = useState<(typeof formData)[]>([])
  const [submitted, setSubmitted] = useState(false)

  // Load responses from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("rsvpResponses")
    if (saved) {
      setResponses(JSON.parse(saved))
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const updated = [...responses, formData]
    setResponses(updated)
    localStorage.setItem("rsvpResponses", JSON.stringify(updated))
    setFormData({ name: "", email: "", phone: "", guests: "1", attending: "yes" })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-12 px-4 bg-muted">
      <div className="max-w-md mx-auto text-center">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-khmer font-bold text-lg hover:opacity-90 transition-opacity"
          >
            {t.rsvpLabel}
          </button>
        ) : (
          <div className="bg-background rounded-lg p-8 shadow-lg">
            <h3 className="font-khmer text-2xl font-bold mb-6">{t.rsvpTitle}</h3>

            {submitted && (
              <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg font-khmer">{t.rsvpConfirmation}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block font-khmer text-sm font-semibold mb-2">{t.nameLabel}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg font-khmer"
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div>
                <label className="block font-khmer text-sm font-semibold mb-2">{t.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block font-khmer text-sm font-semibold mb-2">{t.phoneLabel}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg"
                  placeholder="+855 (12) 345-6789"
                />
              </div>

              <div>
                <label className="block font-khmer text-sm font-semibold mb-2">{t.guestsLabel}</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg font-khmer"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
              </div>

              <div>
                <label className="block font-khmer text-sm font-semibold mb-2">{t.attendingLabel}</label>
                <select
                  name="attending"
                  value={formData.attending}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg font-khmer"
                >
                  <option value="yes">{t.yes}</option>
                  <option value="no">{t.no}</option>
                  <option value="maybe">{t.maybe}</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-khmer font-bold hover:opacity-90 transition-opacity"
                >
                  {t.submit}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg font-khmer font-bold hover:opacity-75 transition-opacity"
                >
                  {t.close}
                </button>
              </div>
            </form>

            {responses.length > 0 && (
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-khmer text-sm font-semibold mb-2">
                  {t.totalResponses}: {responses.length}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
