import LocaleSwitcherModal from '@/components/LocaleSwitcherModal';
import UserSelect from '@/components/UserSelect'
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function Home({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('UserSelect');
  
  return (
    <div className="flex flex-col h-screen">
      <ul className="menu menu-horizontal w-full p-0">
          <LocaleSwitcherModal/>
      </ul>
      <div className='flex-grow'>
        <UserSelect l1={t("l1")} l2={t("l2")} l3={t("l3")} r1={t("r1")} r2={t("r2")} r3={t("r3")}/>
      </div>
    </div>
  );
}