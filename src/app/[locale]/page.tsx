import UserSelect from '@/components/UserSelect'
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function Home({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Workspace');
  
  return (
    <UserSelect/>
  );
}