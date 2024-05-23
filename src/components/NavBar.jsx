'use client'

import LanguageModal from '@/components/LanguageModal'
import { useRouter } from '@/navigation';

export default function NavBar() {
  const router = useRouter();

  function navigateToWorkspace() {
      router.push('/workspace');
  }

  return (
    <div className="navbar bg-secondary w-screen h-10 sm:h-16 md:h-20 lg:h-24">
        <div className="flex-none h-full">
            <button className="btn btn-ghost h-full">
                <img src='/images/icon.svg' alt="Logo" className="h-full"/>
            </button>
        </div>
    	<div className="flex-grow justify-end">
    		<LanguageModal/>
			<button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={navigateToWorkspace}>
            	<h3 className="text-primary-content">MyIEP Login</h3>
        	</button>
      	</div>
    </div>
  );
}