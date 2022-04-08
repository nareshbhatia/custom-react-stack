import React, { ReactElement } from 'react';
import type { NextPage } from 'next';
import { PlanMember } from 'movie-models';
import { PageLayout } from '../components/Layouts/PageLayout';

interface SettingsPageProps {
  planMembers: Array<PlanMember>;
}

const SettingsPage: NextPage = () => {
  return (
    <div className="p-3">
      <div className="card p-2">
        <div>Plan Members</div>
      </div>
    </div>
  );
};

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export async function getServerSideProps() {
  return {
    props: {
      planMembers: [],
    },
  };
}

export default SettingsPage;
