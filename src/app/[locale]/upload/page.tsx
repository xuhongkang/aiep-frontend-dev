'use client'
import { useState, useEffect } from 'react';
import {useSearchParams} from 'next/navigation';
import {useRouter} from '@/navigation';
import {FileUpload} from '@/components/FileUpload'

type Props = {
  params: {locale: string};
};

export default function Upload({params: {locale}}: Props) {
  //const [userId, setUserId] = useState('')
  //const router = useRouter();
  //const searchParams = useSearchParams();

  return (
    <div></div>
    //<FileUpload userId={userId}/>
  );
}
