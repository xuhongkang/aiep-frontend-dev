import LocaleSwitcherModal from '@/components/LocaleSwitcherModal';
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
    <div className="flex flex-col h-screen">
      <ul className="menu menu-horizontal w-full p-0">
          <LocaleSwitcherModal/>
      </ul>
      <div className='flex-grow'>
        <WorkspacePage/>
      </div>
    </div>
  );
}