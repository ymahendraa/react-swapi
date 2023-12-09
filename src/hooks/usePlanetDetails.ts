import { useEffect, useState } from "react";
import PlanetType from "../planet";

// usePlanetDetails : custom hook that fetches a planet from the API
// @param planetId : the ID of the planet to fetch
// @returns : object containing the planet, loading state and error
const usePlanetDetails = (planetId: string | undefined) => {
  const [planet, setPlanet] = useState<PlanetType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchPlanet = async (url: string) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data: PlanetType = await response.json();

      setPlanet(data);
    } catch (error) {
      console.error("Error fetching planet:", error);
      setError(error instanceof Error ? error : new Error(String(error)));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanet(`http://swapi.dev/api/planets/${planetId}/`);
  }, [planetId]);

  return { planet, loading, error };
};

export default usePlanetDetails;
