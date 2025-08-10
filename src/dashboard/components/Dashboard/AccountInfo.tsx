import React from 'react';
import { UserIcon, LogOut } from 'lucide-react';

interface AccountInfoProps {
  username: string;
}

export default function AccountInfo({ username }: AccountInfoProps) {
  function exit() {
    localStorage.removeItem('jwt_token');
    window.location.replace("/");
  };
  
  return (
    <div className="flex items-center space-x-2 text-white">
      <UserIcon className="h-5 w-5" />
      <span className="font-medium ym-font-music">{username}</span>
      <button onClick={exit}><LogOut className="h-5 w-5" /></button>
    </div>
  );
}