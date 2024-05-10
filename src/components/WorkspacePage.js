'use client'
import TranslationPage from '@/components/TranslationPage'
import ChatBot from '@/components/chatbot/Chatbot'
import React, { useState } from 'react';

export default function Workspace({digestTitle, digestDescription, accessError, accessMessage, accessMessage2, accessPlaceholder, accessSubmit, downloadTabName, textTabName, servicesTabName, goalsTabName, scoresTabName, chatbotTitle, chatbotDescription, sendButtonText, p1, p2, p3, p4, sendPlaceholderText,
  detailText, baselineText, pr1, pr2, pr3, goalText, startText, durationText, frequencyText, providerText, commentsText}) {
  const [isChatbotVisible, toggleChatbotVisibility] = useState(false);
  
  return (
    <div className="relative w-screen h-screen">
      {/* Desktop View */}
      <div className="hidden md:flex w-full h-full">
        <div className="w-1/2 h-full">
          <TranslationPage digestTitle={digestTitle} digestDescription={digestDescription} accessError={accessError} accessMessage={accessMessage} accessMessage2={accessMessage2}  accessPlaceholder={accessPlaceholder} accessSubmit={accessSubmit} downloadTabName={downloadTabName} textTabName={textTabName} servicesTabName={servicesTabName} goalsTabName={goalsTabName} scoresTabName={scoresTabName}
          detailText={detailText} baselineText={baselineText} pr1={pr1} pr2={pr2} pr3={pr3} goalText={goalText} startText={startText} durationText={durationText} frequencyText={frequencyText} providerText={providerText} commentsText={commentsText}/>
        </div>
        <div className="w-1/2 h-full">
          <ChatBot chatbotTitle={chatbotTitle} chatbotDescription={chatbotDescription} sendButtonText={sendButtonText} p1={p1} p2={p2} p3={p3} p4={p4} sendPlaceholderText={sendPlaceholderText}/>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col w-full h-full">
        <button 
            className="w-full btn btn-outline btn-info btn-md"
            onClick={() => toggleChatbotVisibility(!isChatbotVisible)}
          >{isChatbotVisible ? 'Show Digest' : 'Show Chatbot'}
        </button>
        {!isChatbotVisible ? (
          <div className="w-full h-full">
          <TranslationPage digestTitle={digestTitle} digestDescription={digestDescription} accessError={accessError} accessMessage={accessMessage} accessMessage2={accessMessage2} accessPlaceholder={accessPlaceholder} accessSubmit={accessSubmit} downloadTabName={downloadTabName} textTabName={textTabName} servicesTabName={servicesTabName} goalsTabName={goalsTabName} scoresTabName={scoresTabName}
          detailText={detailText} baselineText={baselineText} pr1={pr1} pr2={pr2} pr3={pr3} goalText={goalText} startText={startText} durationText={durationText} frequencyText={frequencyText} providerText={providerText} commentsText={commentsText}/>
          </div>
        ) : (
          <div className="w-full h-full">
            <ChatBot chatbotTitle={chatbotTitle} chatbotDescription={chatbotDescription} sendButtonText={sendButtonText} p1={p1} p2={p2} p3={p3} p4={p4} sendPlaceholderText={sendPlaceholderText}/>
          </div>
        )}
      </div>
    </div>
  );
}