import WorkspacePage from '@/components/WorkspacePage'
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function Workspace({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Workspace');
  
  return (
    <div className='flex flex-col items-start'>
      <WorkspacePage />
    </div>
  );
}