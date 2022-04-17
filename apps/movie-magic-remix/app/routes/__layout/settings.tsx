import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { PlanMember } from 'movie-models';
import { Button, MovieList } from 'ui-lib';

type SettingsPageData = {
  planMembers: Array<PlanMember>;
};

export let loader: LoaderFunction = async () => {
  const API_URL = process.env.API_URL;
  const resPlanMembers = await fetch(`${API_URL}/plan-members`);
  const planMembers = await resPlanMembers.json();

  let data: SettingsPageData = {
    planMembers,
  };

  return json(data);
};

export default function SettingsPage() {
  const { planMembers } = useLoaderData<SettingsPageData>();

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
}
