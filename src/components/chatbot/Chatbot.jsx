"use client";
import {useEffect, useRef, useState} from 'react';
import Bubble from './components/Bubble'
import { useChat, Message } from 'ai/react';
import PromptSuggestionRow from './components/PromptSuggestions/PromptSuggestionsRow';
import useConfiguration from './hooks/useConfiguration';

export default function Home() {
  const { append, messages, input, handleInputChange, handleSubmit } = useChat();
  const { useRag, llm, similarityMetric, setConfiguration } = useConfiguration();

  const messagesEndRef = useRef(null);
  const [configureOpen, setConfigureOpen] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    handleSubmit(e, { options: { body: { useRag, llm, similarityMetric}}});
  }

  const handlePrompt = (promptText) => {
    const msg = { id: crypto.randomUUID(),  content: promptText, role: 'user' };
    append(msg, { options: { body: { useRag, llm, similarityMetric}}});
    console.log(msg)
  };

  return (
    <main className="flex bg-primary h-screen flex-col items-center justify-center">
      <section className='flex flex-col h-full rounded-md p-2 md:p-6'>
      <div className='pb-6'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <h1 className='text-xl md:text-2xl font-medium'>AIEP Chatbot</h1>
            </div>
          </div>
          <p className="text-sm md:text-base mt-2 md:mt-4">Please type your questions or requests below. Responses are sourced from AIEP Knowledge Base and a link for further reading will be provided.</p>
        </div>
        <div className='flex-1 relative overflow-y-auto my-4 md:my-6'>
          <div className='absolute w-full'>
            {messages.map((message, index) => <Bubble ref={messagesEndRef} key={`message-${index}`} content={message}/>)}
          </div>
        </div>
        {!messages || messages.length === 0 && (
          <PromptSuggestionRow onPromptClick={handlePrompt} />
        )}
        <form className='flex h-[40px] gap-2' onSubmit={handleSend}>
          <input onChange={handleInputChange} value={input} className='flex-1 text-sm md:text-base outline-none bg-transparent rounded-md p-2' placeholder='Send a message...' />
          <button type="submit" className='flex rounded-md items-center justify-center px-2.5 origin:px-3'>
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M2.925 5.025L9.18333 7.70833L2.91667 6.875L2.925 5.025ZM9.175 12.2917L2.91667 14.975V13.125L9.175 12.2917ZM1.25833 2.5L1.25 8.33333L13.75 10L1.25 11.6667L1.25833 17.5L18.75 10L1.25833 2.5Z" />
            </svg>
            <span className='origin:block font-semibold text-sm ml-2'>Send</span>
          </button>
        </form>
      </section>
    </main>
  )
}