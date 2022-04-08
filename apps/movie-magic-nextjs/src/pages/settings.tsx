import type { ReactElement } from 'react';
import type { NextPage } from 'next';
import { PlanMember } from 'movie-models';
import { PageLayout } from '../components/Layouts';
import { Button } from 'ui-lib';

interface SettingsPageProps {
  planMembers: Array<PlanMember>;
}

const SettingsPage: NextPage = ({ planMembers }: SettingsPageProps) => {
  return (
    <div className="p-3">
      <div className="card p-4">
        <h2 className="h5 line-height-none mb-2">Manage your Family Plan</h2>
        <ul role="list" className="max-w-375">
          {planMembers.map((member) => (
            <li key={member.email} className="py-4 border-bottom flex">
              <img
                className="h-40 w-40 rounded-full"
                src={member.photo}
                alt=""
              />
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
      </div>
    </div>
  );
};

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export async function getServerSideProps() {
  const apiUrl = process.env.API_URL;
  const resPlanMembers = await fetch(`${apiUrl}/plan-members`);
  const planMembers = await resPlanMembers.json();

  return {
    props: {
      planMembers,
    },
  };
}

export default SettingsPage;
