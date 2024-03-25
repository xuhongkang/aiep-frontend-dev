import DashboardPage from '@/components/DashboardPage'
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function Dashboard({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Dashboard');
  
  return (
    <div className='flex flex-col items-start'>
      <DashboardPage errorMessage={t('ErrorMessage')} menuButtonMessage={t('MenuButtonMessage')}/>
    </div>
  );
}