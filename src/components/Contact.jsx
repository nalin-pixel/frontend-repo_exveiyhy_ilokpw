import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-50">
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Tell us about your project</h2>
          <p className="mt-3 text-slate-600">We’ll get back within 1–2 business days.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Name" required />
            <Input label="Email" type="email" required />
          </div>
          <Input label="Company" />
          <Input label="Budget" placeholder="$25k – $150k" />
          <div>
            <label className="block text-sm text-slate-600 mb-1">Project details</label>
            <textarea required className="w-full rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200" rows="5" placeholder="Goals, timeline, and anything else we should know"></textarea>
          </div>
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-slate-500">By submitting, you agree to our terms.</p>
            <button type="submit" className="px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
              {sent ? 'Sent ✅' : 'Send message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

function Input({ label, type = 'text', required, placeholder }) {
  return (
    <div>
      <label className="block text-sm text-slate-600 mb-1">{label}</label>
      <input type={type} required={required} placeholder={placeholder} className="w-full rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
    </div>
  )
}
