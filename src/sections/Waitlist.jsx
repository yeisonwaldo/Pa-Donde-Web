import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';

const Waitlist = () => {
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    role: 'passenger',
  });
  const [status, setStatus] = useState('idle');
  // 'idle'|'loading'|'success'|'error'|'duplicate'

  // Fetch count + realtime subscription
  useEffect(() => {
    const fetchCount = async () => {
      const { count } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });
      setCount(count || 0);
    };
    fetchCount();

    const channel = supabase
      .channel('waitlist_realtime')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'waitlist',
      }, () => {
        setCount(prev => prev + 1);
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  // Animated counter — counts up smoothly
  useEffect(() => {
    if (count === 0) return;
    let start = displayCount;
    const end = count;
    const duration = 1000;
    const step = Math.ceil((end - start) / 30);
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setDisplayCount(start);
      if (start >= end) clearInterval(timer);
    }, duration / 30);
    return () => clearInterval(timer);
  }, [count]);

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.phone.trim()) return;
    setStatus('loading');

    // Check for duplicate phone
    const { data: existing } = await supabase
      .from('waitlist')
      .select('id')
      .eq('phone', form.phone.trim())
      .maybeSingle();

    if (existing) {
      setStatus('duplicate');
      return;
    }

    const { error } = await supabase
      .from('waitlist')
      .insert([{
        name: form.name.trim(),
        phone: form.phone.trim(),
        role: form.role,
        city: 'Arboletes',
      }]);

    setStatus(error ? 'error' : 'success');
  };

  const roles = [
    { value: 'passenger', label: 'Soy pasajero' },
    { value: 'driver',    label: 'Tengo moto/chivita' },
  ];

  const avatarEmojis = ['🧑', '👩', '🧔', '👩\u200D🦰', '🧑\u200D🦱'];

  return (
    <section
      id="waitlist"
      className="py-24 px-6 bg-navy relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10 text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
        >
          🚀 Próximo lanzamiento
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-syne font-black text-white text-4xl md:text-5xl leading-tight mb-4"
        >
          Sé el primero en{' '}
          <span className="text-primary">Pa' Donde</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed"
        >
          Regístrate y te avisamos el día que lancemos en Arboletes. Sin spam, solo la notificación cuando llegue.
        </motion.p>

        {/* Live Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          {/* Overlapping avatars */}
          <div className="flex -space-x-2">
            {avatarEmojis.map((emoji, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="w-9 h-9 rounded-full bg-navy2 border-2 border-navy flex items-center justify-center text-base"
              >
                {emoji}
              </motion.div>
            ))}
          </div>

          {/* Animated count */}
          <p className="text-gray-400 font-semibold">
            <motion.span
              key={displayCount}
              className="text-white font-black text-2xl"
            >
              {displayCount > 0
                ? displayCount.toLocaleString()
                : '···'}
            </motion.span>
            {' '}
            {displayCount === 1
              ? 'persona registrada'
              : 'personas registradas'}
          </p>
        </motion.div>

        {/* Form / Success / Duplicate states */}
        <AnimatePresence mode="wait">

          {/* SUCCESS STATE */}
          {status === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-white font-black text-xl mb-2 font-syne">
                ¡Listo, {form.name.split(' ')[0]}!
              </h3>
              <p className="text-gray-400 mb-6">
                Quedaste en la lista. Te avisamos cuando Pa' Donde llegue a Arboletes.
              </p>
              <a
                href="https://instagram.com/padonde_app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-3 rounded-full text-sm hover:-translate-y-0.5 transition-transform"
              >
                Síguenos en Instagram
              </a>
            </motion.div>
          )}

          {/* DUPLICATE STATE */}
          {status === 'duplicate' && (
            <motion.div
              key="duplicate"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6"
            >
              <div className="text-3xl mb-2">😄</div>
              <p className="text-yellow-400 font-bold text-lg">
                ¡Ya estás en la lista!
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Te avisamos cuando lancemos. Tranquilo/a, no te olvidamos 🤝
              </p>
            </motion.div>
          )}

          {/* ERROR STATE */}
          {status === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6"
            >
              <p className="text-red-400 font-bold">
                Algo salió mal 😕
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Intenta de nuevo o escríbenos por WhatsApp.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-3 text-primary text-sm font-bold underline"
              >
                Intentar de nuevo
              </button>
            </motion.div>
          )}

          {/* FORM STATE (idle or loading) */}
          {(status === 'idle' || status === 'loading') && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              {/* Role selector */}
              <div className="flex gap-2 mb-4">
                {roles.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setForm(f => ({
                      ...f, role: option.value
                    }))}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                      form.role === option.value
                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {/* Name */}
              <input
                type="text"
                placeholder="Tu nombre completo"
                value={form.name}
                onChange={e => setForm(f => ({
                  ...f, name: e.target.value
                }))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 mb-3 focus:outline-none focus:border-primary transition-colors"
              />

              {/* Phone */}
              <div className="flex gap-2 mb-4">
                <span className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-gray-400 text-sm whitespace-nowrap flex items-center">
                  🇨🇴 +57
                </span>
                <input
                  type="tel"
                  placeholder="300 000 0000"
                  value={form.phone}
                  onChange={e => setForm(f => ({
                    ...f, phone: e.target.value
                  }))}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={
                  status === 'loading' ||
                  !form.name.trim() ||
                  !form.phone.trim()
                }
                className="w-full bg-primary hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 font-syne text-base flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Guardando...
                  </>
                ) : (
                  '🔔 Avísame cuando lancen →'
                )}
              </button>

              <p className="text-gray-600 text-xs mt-3">
                Sin spam. Solo te contactamos cuando lancemos. 🤝
              </p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};

export default Waitlist;
