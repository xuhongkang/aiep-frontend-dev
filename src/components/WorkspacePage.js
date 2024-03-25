'use client'
import TranslationPage from '@/components/TranslationPage'
import ChatBotPage from '@/components/ChatBotPage'
import ChatBot from '@/components/chatbot/Chatbot'
import { getSessionData } from '@/components/API';
import { useState, useEffect } from 'react';
import {useSearchParams} from 'next/navigation';
import { getURLWithSearchParams } from '@/navigation';
import { useLocale } from 'next-intl';
import {useRouter} from '@/navigation';

export default function Workspace({botText, userText, askText, promptText, inputText, translationText}) {
  return (
    <div
      className="flex flex-row snap-x snap-mandatory overflow-x-auto"
      style={{height: '100vh',}}>
      <div className="flex-none w-full md:w-1/2 snap-center overflow-x-hidden">
        <TranslationPage/>
      </div>
      <div className="flex-none w-full md:w-1/2 snap-center overflow-x-hidden">
        <ChatBot />
      </div>
    </div>
  );
}