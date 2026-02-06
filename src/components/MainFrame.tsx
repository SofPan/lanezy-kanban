'use client';
import {useSession} from 'next-auth/react';

const MainFrame = () => {
  const {data: session} = useSession();

  return(
    <div className="shadow-[inset_2px_2px_4px_rgba(179,179,179,0.2)]">
      {session?.user?.email? <p>Welcome to your Dashboard</p> : <p>Please sign in</p>}
    </div>
  )
}

export default MainFrame;