import { Fragment } from 'react';
import { Button } from 'ui-lib';
import { usePlanMembers } from './usePlanMembers';

export const SettingsContainer = () => {
  const { isLoading, isError, error, planMembers } = usePlanMembers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <h2 className="h5">{(error as any).message}</h2>;
  }

  return (
    <Fragment>
      <h2 className="h5 line-height-none mb-2">Manage your Family Plan</h2>
      <ul role="list" className="max-w-375">
        {planMembers.map((member) => (
          <li key={member.email} className="py-4 border-bottom flex">
            <img className="h-40 w-40 rounded-full" src={member.photo} alt="" />
            <div className="ml-3 flex flex-col">
              <span className="text-sm font-medium text-primary">
                {member.name}
              </span>
              <span className="text-sm text-secondary">{member.email}</span>
            </div>
          </li>
        ))}
      </ul>
      <Button color="primary" rootClass="mt-4">
        ADD TO FAMILY PLAN
      </Button>
    </Fragment>
  );
};
