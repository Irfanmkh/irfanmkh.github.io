import React, { useState, useRef, useEffect } from 'react';
import { askPortfolioAssistant } from '../../aiService';

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

export const AIChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: 'ai',
            text: 'Halo! Saya ImakaBot, asisten virtual pribadi Irfan. Ada yang ingin Anda tanyakan mengenai profil, keahlian, atau proyek web-nya?'
        }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const BOT_LOTTIE = 'https://lottie.host/embed/aef0cc77-4819-4262-8025-27aeda36978e/0SJCzjH2o5.json';

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
        setLoading(true);

        try {
            const aiResponse = await askPortfolioAssistant(userMessage);
            setMessages((prev) => [...prev, { sender: 'ai', text: aiResponse }]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { sender: 'ai', text: 'Maaf, terjadi kendala saat menghubungkan ke sistem. Silakan coba beberapa saat lagi.' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleQuickQuestion = async (question: string) => {
        if (loading) return;
        setInput('');
        setMessages((prev) => [...prev, { sender: 'user', text: question }]);
        setLoading(true);

        try {
            const aiResponse = await askPortfolioAssistant(question);
            setMessages((prev) => [...prev, { sender: 'ai', text: aiResponse }]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { sender: 'ai', text: 'Maaf, terjadi kendala saat menghubungkan ke sistem. Silakan coba beberapa saat lagi.' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center">
            {/* Tombol Toggle Chat (Icon Only dengan Hover Tooltip) */}
            {!isOpen && (
                <div className="relative group flex items-center">
                    {/* Tooltip Hover */}
                    <div
                        className="
              absolute right-0 bottom-[calc(100%+14px)]
              w-max max-w-[220px]
              rounded-2xl
              border border-white/10
              bg-slate-900/95
              backdrop-blur-xl
              px-4 py-3
              shadow-2xl
              opacity-0
              translate-y-2
              pointer-events-none
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all duration-300
            "
                    >
                        <p className="text-[11px] text-slate-400">
                            Ada pertanyaan?
                        </p>

                        <p className="text-sm font-semibold text-white">
                            Tanya ImakaBot
                        </p>

                        {/* Arrow */}
                        <div
                            className="
                absolute
                right-6
                -bottom-1.5
                w-3 h-3
                rotate-45
                bg-slate-900
                border-r border-b border-white/10
              "
                        />
                    </div>

                    {/* Tombol Ikon Bot Transparan */}
                    <button
                        onClick={() => setIsOpen(true)}
                        aria-label="Tanya ImakaBot"
                        className="
              relative
              w-16
              h-16
              rounded-full
              flex
              items-center
              justify-center
              bg-transparent
              hover:scale-110
              transition-transform
              duration-300
              cursor-pointer
              overflow-visible
            "
                    >
                        <iframe
                            src={BOT_LOTTIE}
                            className="w-24 h-24 border-0 pointer-events-none bg-transparent scale-150"
                            title="ImakaBot Icon"
                            allow="autoplay"
                        />
                    </button>
                </div>
            )}

            {/* =====================================================
          CHAT WINDOW
      ===================================================== */}

            {isOpen && (
                <div
                    className="
            w-[calc(100vw-32px)]
            sm:w-[380px]
            h-[min(550px,calc(100vh-40px))]
            flex
            flex-col
            overflow-hidden
            rounded-[28px]
            bg-slate-950/95
            backdrop-blur-2xl
            border
            border-white/[0.10]
            shadow-[0_25px_80px_rgba(0,0,0,0.45)]
            animate-[chatIn_0.3s_ease-out]
          "
                >
                    {/* =================================================
              HEADER
          ================================================= */}

                    <div
                        className="
              relative
              flex
              items-center
              justify-between
              px-5
              py-4
              border-b
              border-white/[0.08]
              bg-white/[0.025]
            "
                    >
                        <div className="flex items-center gap-3">
                            {/* Bot Avatar Tanpa Background */}
                            <div className="relative w-11 h-11 shrink-0 flex items-center justify-center overflow-visible bg-transparent">
                                <iframe
                                    src={BOT_LOTTIE}
                                    className="w-[52px] h-[52px] border-0 pointer-events-none bg-transparent scale-125"
                                    title="ImakaBot Avatar"
                                    allow="autoplay"
                                />

                                {/* Online */}
                                <span
                                    className="
                    absolute
                    bottom-0
                    right-0
                    w-3
                    h-3
                    rounded-full
                    bg-emerald-400
                    border-2
                    border-slate-950
                  "
                                />
                            </div>

                            {/* Header Text */}
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-sm font-semibold text-white">
                                        ImakaBot
                                    </h3>
                                </div>

                                <p className="mt-0.5 text-[11px] text-slate-400">
                                    Asisten virtual Irfan Maulana Khakiki
                                </p>

                                <div className="flex items-center gap-1.5 mt-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    <span className="text-[10px] text-emerald-400">
                                        Online
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Close */}
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Tutup ImakaBot"
                            className="
                w-9
                h-9
                rounded-xl
                flex
                items-center
                justify-center
                text-slate-400
                hover:text-white
                hover:bg-white/[0.07]
                transition-all
              "
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path
                                    d="M18 6L6 18M6 6l12 12"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* =================================================
              CHAT AREA
          ================================================= */}

                    <div
                        className="
              flex-1
              overflow-y-auto
              px-4
              py-5
              space-y-5
              scrollbar-thin
              scrollbar-thumb-white/10
              scrollbar-track-transparent
            "
                    >
                        {/* Intro Tanpa Background */}
                        <div className="text-center mb-6">
                            <div className="mx-auto w-16 h-16 flex items-center justify-center overflow-visible bg-transparent">
                                <iframe
                                    src={BOT_LOTTIE}
                                    className="w-[72px] h-[72px] border-0 pointer-events-none bg-transparent scale-125"
                                    title="ImakaBot Intro"
                                    allow="autoplay"
                                />
                            </div>

                            <p className="mt-3 text-[11px] text-slate-500">
                                Virtual assistant
                            </p>
                        </div>

                        {/* Messages */}
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`
                  flex
                  gap-2.5
                  ${msg.sender === 'user'
                                        ? 'justify-end'
                                        : 'justify-start'
                                    }
                `}
                            >
                                {/* AI Avatar Tanpa Background */}
                                {msg.sender === 'ai' && (
                                    <div className="w-7 h-7 shrink-0 mt-1 flex items-center justify-center overflow-visible bg-transparent">
                                        <iframe
                                            src={BOT_LOTTIE}
                                            className="w-[38px] h-[38px] border-0 pointer-events-none bg-transparent scale-125"
                                            title="ImakaBot"
                                            allow="autoplay"
                                        />
                                    </div>
                                )}

                                <div
                                    className={`
    max-w-[78%]
    px-4
    py-3
    text-[13px]
    leading-relaxed
    whitespace-pre-line /* <-- Tambahkan baris ini agar enter/newline dari AI terbaca */
    ${msg.sender === 'user'
                                            ? `
            bg-emerald-500
            text-white
            rounded-2xl
            rounded-br-md
            shadow-[0_5px_20px_rgba(16,185,129,0.12)]
          `
                                            : `
            bg-white/[0.055]
            text-slate-200
            border
            border-white/[0.07]
            rounded-2xl
            rounded-bl-md
          `
                                        }
  `}
                                >
                                    {msg.text}

                                    {/* User message status */}
                                    {msg.sender === 'user' && (
                                        <div className="flex justify-end mt-1.5">
                                            <svg
                                                width="13"
                                                height="13"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="opacity-70"
                                            >
                                                <path
                                                    d="M18 7L9 16l-4-4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M22 7l-9 9-1-1"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Loading */}
                        {loading && (
                            <div className="flex items-start gap-2.5">
                                <div className="w-7 h-7 shrink-0 flex items-center justify-center overflow-visible bg-transparent">
                                    <iframe
                                        src={BOT_LOTTIE}
                                        className="w-[38px] h-[38px] border-0 pointer-events-none bg-transparent scale-125"
                                        title="ImakaBot typing"
                                        allow="autoplay"
                                    />
                                </div>

                                <div
                                    className="
                    flex
                    items-center
                    gap-1.5
                    px-4
                    py-3
                    rounded-2xl
                    rounded-bl-md
                    bg-white/[0.055]
                    border
                    border-white/[0.07]
                  "
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:-0.3s]" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:-0.15s]" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* =================================================
              QUICK QUESTIONS
          ================================================= */}

                    {!loading && (
                        <div
                            className="
                px-4
                pb-3
                flex
                gap-2
                overflow-x-auto
                scrollbar-none
              "
                        >
                            <button
                                onClick={() =>
                                    handleQuickQuestion('Siapa Irfan?')
                                }
                                className="
                  shrink-0
                  px-3
                  py-2
                  rounded-xl
                  text-[11px]
                  text-slate-300
                  bg-white/[0.04]
                  border
                  border-white/[0.08]
                  hover:bg-emerald-400/10
                  hover:border-emerald-300/20
                  hover:text-emerald-300
                  transition-all
                "
                            >
                                Siapa Irfan?
                            </button>
                                                        <button
                                onClick={() =>
                                    handleQuickQuestion('Ceritakan pengalaman kerja Irfan')
                                }
                                className="
                  shrink-0
                  px-3
                  py-2
                  rounded-xl
                  text-[11px]
                  text-slate-300
                  bg-white/[0.04]
                  border
                  border-white/[0.08]
                  hover:bg-emerald-400/10
                  hover:border-emerald-300/20
                  hover:text-emerald-300
                  transition-all
                "
                            >
                                Pengalaman
                            </button>
                            <button
                                onClick={() =>
                                    handleQuickQuestion('Apa saja keahlian teknis Irfan?')
                                }
                                className="
                  shrink-0
                  px-3
                  py-2
                  rounded-xl
                  text-[11px]
                  text-slate-300
                  bg-white/[0.04]
                  border
                  border-white/[0.08]
                  hover:bg-emerald-400/10
                  hover:border-emerald-300/20
                  hover:text-emerald-300
                  transition-all
                "
                            >
                                Keahlian teknis
                            </button>

                            <button
                                onClick={() =>
                                    handleQuickQuestion('Apa saja proyek freelance Irfan?')
                                }
                                className="
                  shrink-0
                  px-3
                  py-2
                  rounded-xl
                  text-[11px]
                  text-slate-300
                  bg-white/[0.04]
                  border
                  border-white/[0.08]
                  hover:bg-emerald-400/10
                  hover:border-emerald-300/20
                  hover:text-emerald-300
                  transition-all
                "
                            >
                                Proyek freelance
                            </button>


                        </div>
                    )}

                    {/* =================================================
              INPUT
          ================================================= */}

                    <form
                        onSubmit={handleSend}
                        className="
              p-3.5
              border-t
              border-white/[0.08]
              bg-slate-950/80
            "
                    >
                        <div
                            className="
                flex
                items-center
                gap-2
                rounded-2xl
                bg-white/[0.045]
                border
                border-white/[0.08]
                p-1.5
                focus-within:border-emerald-300/30
                focus-within:bg-white/[0.06]
                transition-all
              "
                        >
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Tanya tentang Irfan..."
                                disabled={loading}
                                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-3
                  py-2
                  text-[13px]
                  text-white
                  placeholder:text-slate-600
                  outline-none
                "
                            />

                            <button
                                type="submit"
                                disabled={loading || !input.trim()}
                                aria-label="Kirim pesan"
                                className="
                  shrink-0
                  w-9
                  h-9
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  bg-emerald-500
                  text-white
                  shadow-[0_5px_20px_rgba(16,185,129,0.18)]
                  hover:bg-emerald-400
                  disabled:opacity-30
                  disabled:cursor-not-allowed
                  transition-all
                "
                            >
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        d="M22 2L11 13"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22 2L15 22l-4-9-9-4 20-7z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        <p className="text-center text-[9px] text-slate-700 mt-2">
                            ImakaBot · Portfolio Assistant
                        </p>
                    </form>
                </div>
            )}

            {/* =====================================================
          ANIMATION
      ===================================================== */}

            <style>
                {`
          @keyframes chatIn {
            from {
              opacity: 0;
              transform: translateY(16px) scale(0.96);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
            </style>
        </div>
    );
};