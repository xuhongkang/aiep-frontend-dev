'use client'
import Link from "next/link";
import {useRouter} from '@/navigation';


export default function UserSelect() {
    const router = useRouter();

    function navigateToWorkspace() {
        router.push('/workspace');
    }

    return (
    <div className="flex flex-wrap h-screen">
        {/* Left Side */}
        <div className="w-full md:w-1/2 h-full bg-primary flex items-center justify-center cursor-pointer">
          <Link className='w-full' href="https://iep-kb-24839890c1f5.herokuapp.com/en/quickstart/IEP_quickstart" passHref>
            <div className="text-white flex flex-col items-center justify-center w-full h-screen">
                <img alt="New to IEP" src="/images/newcoming.png" className="w-1/3 h-1/3"/>
                <header className="font-bold text-3xl mb-2">New to Individualized Education Programs?</header>
                <h2 className="font-bold mb-2">{"<--   Read more about the IEP Process & Timeline"}</h2>
                <p>For newcoming parents without IEP documents</p>
            </div>
          </Link>
        </div>
  
        {/* Right Side */}
        <div className="w-full md:w-1/2 h-full bg-info flex items-center justify-center cursor-pointer" onClick={navigateToWorkspace}>
            <div className="text-white flex flex-col items-center justify-center w-full h-screen">
                <img alt="New to IEP" src="/images/experienced.png" className="w-1/3 h-1/3"/>
                <header className="font-bold text-3xl mb-2">Need Insights on your IEP Document?</header>
                <h2 className="font-bold mb-2">{"<--   Try out the IEP Digest and personalized chatbot"}</h2>
                <p>For experienced parents trying to understand their child's IEP</p>
            </div>
        </div>
      </div>);
}