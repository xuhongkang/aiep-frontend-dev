import WorkspacePage from '@/components/WorkspacePage'
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import LandingPage from '@/components/LandingPage'

type Props = {
  params: {locale: string};
};

export default function Workspace({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  
  return (
<LandingPage/>
  );
}