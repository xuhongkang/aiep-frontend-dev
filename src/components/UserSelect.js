'use client'
import Link from "next/link";
import {useRouter} from '@/navigation';
import { useLocale} from "next-intl";


export default function UserSelect({l1, l2, l3, r1, r2, r3}) {
    const router = useRouter();
    const currentLocale = useLocale();

    function navigateToWorkspace() {
        router.push('/workspace');
    }

    return (
    <div className="flex flex-wrap w-full h-full">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-primary flex items-center justify-center cursor-pointer">
        <Link className='w-full' href={`https://iep-kb-24839890c1f5.herokuapp.com${currentLocale === 'en' ? '' : `/${currentLocale}`}/quickstart/guide`} passHref>
            <div className="text-white flex flex-col items-center justify-center w-full p-4">
                <img alt="New to IEP" src="/images/newcoming.png" className="w-1/3 h-1/3"/>
                <header className="font-bold text-3xl mb-2 text-center">{l1}</header>
                <h2 className="font-bold mb-2">{l2}</h2>
                <p>{l3}</p>
            </div>
        </Link>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 h-full bg-info flex items-center justify-center cursor-pointer" onClick={navigateToWorkspace}>
            <div className="text-white flex flex-col items-center justify-center w-full p-4">
                <img alt="New to IEP" src="/images/experienced.png" className="w-1/3 h-1/3"/>
                <header className="font-bold text-3xl mb-2 text-center">{r1}</header>
                <h2 className="font-bold mb-2">{r2}</h2>
                <p>{r3}</p>
            </div>
        </div>
    </div>);
}