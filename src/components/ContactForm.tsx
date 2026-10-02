import { useState, FormEvent } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const schema = z.object({
  name: z.string().trim().min(1, 'Please enter your name').max(100),
  email: z.string().trim().email('Please enter a valid email').max(255),
  message: z.string().trim().min(1, 'Please enter a message').max(2000),
});

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

const inputClass = "w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700/70 transition-all duration-200";

const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  const update = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as keyof Errors] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    const id = crypto.randomUUID();
    const { error } = await supabase.from('contact_messages').insert({ id, ...parsed.data } as never);
    if (error) {
      setSending(false);
      toast.error('Sorry, your message could not be sent. Please try again or email spaxces@interioxr.com.');
      return;
    }
    // Email notification (active once the sender domain is set up)
    supabase.functions.invoke('send-transactional-email', {
      body: {
        templateName: 'contact-notification',
        recipientEmail: 'spaxces@interioxr.com',
        idempotencyKey: `contact-${id}`,
        templateData: parsed.data,
      },
    }).catch(() => {});
    setSending(false);
    setValues({ name: '', email: '', message: '' });
    toast.success("Thanks! Your message has been sent. We'll get back to you soon.");
  };

  return (
    <form className="space-y-6" onSubmit={onSubmit} noValidate>
      <div>
        <input type="text" placeholder="Your Name" value={values.name} onChange={update('name')} maxLength={100} aria-invalid={!!errors.name} className={inputClass} />
        {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
      </div>
      <div>
        <input type="email" placeholder="Your Email" value={values.email} onChange={update('email')} maxLength={255} aria-invalid={!!errors.email} className={inputClass} />
        {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
      </div>
      <div>
        <textarea rows={4} placeholder="Your Message" value={values.message} onChange={update('message')} maxLength={2000} aria-invalid={!!errors.message} className={`${inputClass} resize-none`} />
        {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
      </div>
      <button type="submit" disabled={sending} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-medium transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25 disabled:opacity-70">
        {sending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
