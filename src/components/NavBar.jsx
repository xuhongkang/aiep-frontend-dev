'use client'
import {useRouter} from '@/navigation';
export default function NavBar() {
  const router = useRouter()
  function navigateToWorkspace() {
    router.push('/workspace');
}

  return (
    <div className="navbar bg-secondary w-screen">
        <div className="flex-1 container flex justify-between">
            <button className="btn btn-wide btn-ghost">
                <img src='/images/icon.svg' alt="Logo" className="h-full"/>
            </button>
        </div>
      <div className="flex w-full justify-end">
        <button className="btn btn-secondary btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            <h3 className="text-secondary-content">Language</h3>
        </button>
        <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={navigateToWorkspace}>
            <h3 className="text-primary-content">MyIEP Login</h3>
        </button>
      </div>
    </div>
  );
}