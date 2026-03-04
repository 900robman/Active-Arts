import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { siteInfo } from '../../data/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const subject = encodeURIComponent(`Website inquiry from ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`);
    window.location.href = `mailto:${siteInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-cream-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-forest-900 mb-6">
              Let&apos;s Start a Conversation
            </h2>
            <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
              Whether you&apos;re interested in our poetry programmes, training
              sessions, or would like us to speak at your event — we&apos;d love
              to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-forest-700/10 text-forest-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="font-heading text-charcoal-700 hover:text-forest-700 transition-colors"
                >
                  {siteInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-forest-700/10 text-forest-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="font-heading text-charcoal-700">
                  Auckland, New Zealand
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <Card className="shadow-soft border-cream-200/50">
                <CardContent className="pt-10 pb-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-forest-700/10 text-forest-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-forest-800 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-charcoal-600">
                    Your email client should have opened with your message. If not,
                    please email us directly at{' '}
                    <a href={`mailto:${siteInfo.email}`} className="text-terra-500 hover:text-terra-600 font-medium">
                      {siteInfo.email}
                    </a>
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-soft border-cream-200/50">
                <CardContent className="pt-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="font-heading text-charcoal-700">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Please enter your name' })}
                        className="bg-cream-50 border-cream-300 font-body placeholder:text-charcoal-400 focus-visible:ring-forest-700/20 focus-visible:border-forest-700 h-12"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-sm text-terra-600">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="font-heading text-charcoal-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', {
                          required: 'Please enter your email',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Please enter a valid email',
                          },
                        })}
                        className="bg-cream-50 border-cream-300 font-body placeholder:text-charcoal-400 focus-visible:ring-forest-700/20 focus-visible:border-forest-700 h-12"
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-terra-600">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="font-heading text-charcoal-700">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        {...register('message', { required: 'Please enter a message' })}
                        className="bg-cream-50 border-cream-300 font-body placeholder:text-charcoal-400 focus-visible:ring-forest-700/20 focus-visible:border-forest-700 resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                      {errors.message && (
                        <p className="text-sm text-terra-600">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-terra-500 text-white font-heading text-sm font-semibold tracking-wide hover:bg-terra-600 shadow-lg shadow-terra-500/20 hover:shadow-xl hover:shadow-terra-600/25 transition-all duration-300 hover:-translate-y-0.5 rounded-xl h-12"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
