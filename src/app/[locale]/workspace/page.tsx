import WorkspacePage from '@/components/WorkspacePage'
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function Workspace({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Workspace2');
  
  return (
    <div className='flex flex-col items-start'>
      <WorkspacePage digestTitle={t('digestTitle')} 
      digestDescription={t('digestDescription')} 
      accessError={t('accessError')} 
      accessMessage={t('accessMessage')} 
      accessPlaceholder={t('accessPlaceholder')} 
      accessSubmit={t('accessSubmit')} 
      downloadTabName={t('downloadTabName')} 
      textTabName={t('textTabName')} 
      servicesTabName={t('servicesTabName')} 
      goalsTabName={t('goalsTabName')} 
      scoresTabName={t('scoresTabName')} 
      chatbotTitle={t('chatbotTitle')} 
      chatbotDescription={t('chatbotDescription')} 
      sendButtonText={t('sendButtonText')} 
      p1={t('p1')} p2={t('p2')} p3={t('p3')} p4={t('p4')}/>
    </div>
  );
}