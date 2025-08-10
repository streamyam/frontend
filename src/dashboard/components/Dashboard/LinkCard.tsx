import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

interface LinkCardProps {
  link: string;
}

export default function LinkCard({ link }: LinkCardProps) {
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };

  const component = copyStatus ? <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">Скопировано</button> : <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">Скопировать</button>

  return (
    <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 items-center space-x-20 space-y-2">
      <textarea
      disabled
      title="Link"
      className="w-full object-cover text-left p-4 rounded-lg transition-colors"
      value={link}
    />
    {/* <h1 className="text-center font-bold text-white">Никому не показывайте ссылку!</h1> */}
      <CopyToClipboard text={link} onCopy={onCopyText}>
        {component}
      </CopyToClipboard>
    </div>
  );
}
