import { CogIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToSettings = () => {
    navigate('/settings');
  };

  return (
    <header className="appbar">
      <span
        className="flex-1 h6sm line-height-none cursor-pointer"
        onClick={navigateToHome}
      >
        {children}
      </span>
      <div className="flex flex-row">
        <button
          type="button"
          title="Settings"
          className="bg-primary-main border-none cursor-pointer ml-1"
          onClick={navigateToSettings}
        >
          <CogIcon className="h-24 w-24 primary-icon-muted" />
        </button>
      </div>
    </header>
  );
};
