import { supabase } from '../lib/supabase'
import React from 'react'
import { Button } from './Button'
import { TextField } from './Fields'

function EmailForm() {
  const [email, setEmail] = React.useState('')
  const [done, setDone] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const addLead = async () => {
    try {
      setLoading(true)
      await supabase.from('users').insert({ email: email }).single()
      setDone(true)
      setLoading(false)
      setEmail('')
    } catch (e) {
      setLoading(false)
      setDone(false)
    }
  }
  return (
    <div className="flex flex-col">
      <form
        className="flex w-full  md:w-auto"
        onSubmit={(e) => {
          e.preventDefault()
          addLead()
        }}
      >
        <TextField
          type="email"
          aria-label="Digite seu e-mail"
          placeholder="Digite seu e-mail"
          autoComplete="email"
          required
          value={email}
          className="w-60 min-w-0 shrink"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Button
          type="submit"
          disabled={loading}
          className="ml-4 flex-none items-center bg-red-600"
        >
          <span>{loading ? 'Enviando...' : 'Quero meu acesso!'}</span>
        </Button>
      </form>
      {done && (
        <div className="text-md mt-1 text-red-600">
          <h2>
            Obrigado por querer a Turbo Repasse! Em breve entraremos em contato.
          </h2>
        </div>
      )}
    </div>
  )
}

export default React.memo(EmailForm)
