import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import AuthForm from '@/components/AuthForm';
import LocaleSwitcherModal from '@/components/LocaleSwitcherModal';

type Props = {
  params: {locale: string};
};

export default function Home({params: {locale}}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('HomePage');

  return (
    <main>
      <LocaleSwitcherModal/>
      <AuthForm 
      welcome1={t('Welcome')} 
      welcome2={t('Welcome2')} 
      welcome3={t('Welcome3')} 
      loginMessage={t("LoginMessage")} 
      description1={t("Description1")} 
      signUpMessage={t("SignUpMessage")} 
      description2={t("Description2")}
      loginText={t("LoginText")}
      registerText={t("RegisterText")}
      usernameText={t("UsernameText")}
      passwordText={t("PasswordText")}/>
    </main>
  );
}