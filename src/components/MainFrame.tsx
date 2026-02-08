'use client';
import {useSession} from 'next-auth/react';
import TestButton from './TestButton';

const MainFrame = () => {
  const {data: session} = useSession();

  return(
    <div className="shadow-[inset_2px_2px_4px_rgba(179,179,179,0.2)] px-12 py-10">
      {session?.user?.email? <TestButton />: <p>Please sign in</p>}
    </div>
  )
}

export default MainFrame;