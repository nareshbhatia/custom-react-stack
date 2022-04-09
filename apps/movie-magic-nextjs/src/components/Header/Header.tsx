import React from 'react';
import { CogIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

interface HeaderProps {
  children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };

  const navigateToSettings = () => {
    router.push('/settings');
  };

  return (
    <header className="appbar">
      <span
        className="flex-1 h6sm line-height-none cursor-pointer"
        role="navigation"
        aria-label="Home"
        onClick={navigateToHome}
      >
        {children}
      </span>
      <div className="flex flex-row">
        <button
          type="button"
          title="Settings"
          role="navigation"
          aria-label="Settings"
          className="bg-primary-main border-none cursor-pointer ml-1"
          onClick={navigateToSettings}
        >
          <CogIcon className="h-24 w-24 primary-icon-muted" />
        </button>
      </div>
    </header>
  );
}
