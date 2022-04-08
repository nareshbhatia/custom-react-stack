import { useEffect, useState } from 'react';
import { PlanMember } from 'movie-models';

/**
 * Hook to fetch plan members
 */
export const usePlanMembers = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown>();
  const [planMembers, setPlanMembers] = useState<Array<PlanMember>>([]);

  useEffect(() => {
    const fetchPlanMembers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/plan-members`);

        if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
        }

        const planMembers = await response.json();
        setPlanMembers(planMembers);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchPlanMembers();
  }, [apiUrl]);
  return { isLoading, isError, error, planMembers };
};
