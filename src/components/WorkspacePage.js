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

export default function Workspace({digestTitle, digestDescription, accessError, accessMessage, accessPlaceholder, accessSubmit, downloadTabName, textTabName, servicesTabName, goalsTabName, scoresTabName, chatbotTitle, chatbotDescription, sendButtonText, p1, p2, p3, p4}) {
  return (
    <div className="flex flex-row snap-x snap-mandatory overflow-x-auto h-full"
      style={{height: '100vh',}}>
      <div className="flex-none w-full md:w-1/2 snap-center overflow-x-hidden h-full">
        <TranslationPage digestTitle={digestTitle} digestDescription={digestDescription} accessError={accessError} accessMessage={accessMessage} accessPlaceholder={accessPlaceholder} accessSubmit={accessSubmit} downloadTabName={downloadTabName} textTabName={textTabName} servicesTabName={servicesTabName} goalsTabName={goalsTabName} scoresTabName={scoresTabName}/>
      </div>
      <div className="flex-none w-full md:w-1/2 snap-center overflow-x-hidden h-full">
        <ChatBot chatbotTitle={chatbotTitle} chatbotDescription={chatbotDescription} sendButtonText={sendButtonText} p1={p1} p2={p2} p3={p3} p4={p4}/>
      </div>
    </div>
  );
}