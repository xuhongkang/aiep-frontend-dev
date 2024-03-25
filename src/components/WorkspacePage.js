'use client'
import TranslationPage from '@/components/TranslationPage'
import ChatBotPage from '@/components/ChatBotPage'
import { getSessionData } from '@/components/API';
import { useState, useEffect } from 'react';
import {useSearchParams} from 'next/navigation';
import { getURLWithSearchParams } from '@/navigation';
import { useLocale } from 'next-intl';
import {useRouter} from '@/navigation';

export default function Workspace({botText, userText, askText, promptText, inputText, translationText}) {
  const [accessCode, setAccessCode] = useState('')
  const [conversationHistory, setConversationHistory] = useState([])
  const [translationFile, setTranslationFile] = useState([])
  const [assistantId, setAssistantId] = useState('')
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLocale = useLocale();

  useEffect(() => {
    const fetchData = async (accessCodeTemp) => {
        try {
            const data = await getSessionData(accessCodeTemp)
            setTranslationFile(data[0]['pages'])
            setAssistantId(data[1])
            setConversationHistory(data[2].messages)
            setAccessCode(accessCodeTemp)
        } catch (error) {
            router.replace(getURLWithSearchParams('/', 'langSet', true), {locale: currentLocale});
        }
    }
    const accessCodeTemp = searchParams.get('accessCode')
    if (accessCodeTemp && !accessCode) {
      try {
        console.log(accessCodeTemp)
        fetchData(accessCodeTemp)
      } catch (error) {
        router.replace(getURLWithSearchParams('/', 'langSet', true), {locale: currentLocale});
      }
    } else {
      router.replace(getURLWithSearchParams('/', 'langSet', true), {locale: currentLocale});
    }
  },  [router.isReady]);

  return (
    <main>
      {/* For larger screens */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-screen">
        <div className="flex justify-center items-center">
          <TranslationPage translationFile={translationFile} translationText={translationText}/>
        </div>
        <div className="flex justify-center items-center">
          <ChatBotPage accessCode={accessCode} assistantId={assistantId} botText={botText} userText={userText} askText={askText} promptText={promptText} inputText={inputText} conversationHistory={conversationHistory}/>
        </div>
      </div>

      {/* For smaller screens */}
      <div className="lg:hidden flex snap-x snap-mandatory overflow-x-auto min-h-screen">
        <div className="snap-center flex-shrink-0 w-full flex justify-center items-center">
          <TranslationPage translationFile={translationFile} translationText={translationText}/>
        </div>
        <div className="snap-center flex-shrink-0 w-full flex justify-center items-center">
          <ChatBotPage accessCode={accessCode} assistantId={assistantId} botText={botText} userText={userText} askText={askText} promptText={promptText} inputText={inputText} conversationHistory={conversationHistory}/>
        </div>
      </div>
    </main>
  );
}