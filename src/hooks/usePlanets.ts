import React, { useState, useEffect, useRef } from "react";
import PlanetType from "../planet";

// Define the Planet type
type Planet = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PlanetType[];
};

// Define the usePlanets hook
const usePlanets = () => {
  const [planets, setPlanets] = useState<Planet | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const observerTarget = useRef(null); // Create a ref object

  // fetchPlanets : function that fetches planets from the API
  // @param url : the URL to fetch data from
  // @returns : void
  const fetchPlanets = async (url: string) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data: Planet = await response.json();

      // Update the planets state with the new data
      setPlanets((prevPlanets) => ({
        ...data,
        results: [...(prevPlanets?.results || []), ...data.results],
      }));
    } catch (error) {
      console.error("Error fetching planets:", error);
      setError(error instanceof Error ? error : new Error(String(error)));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets("http://swapi.dev/api/planets/?page=1");
  }, []);

  useEffect(() => {
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries) => {
        // The callback function is called whenever the observed enters or exits the viewport
        if (entries[0].isIntersecting && planets?.next) {
          // If the observed element (likely the last visible element) enters the viewport
          // and there is a "next" URL for more data, fetch more data
          fetchPlanets(planets.next);
        }
      },
      {
        rootMargin: "0px 0px 100% 0px", // Set the rootMargin to trigger
      }
    );

    if (observerTarget.current) {
      // If there is a target element to observe, start observing it
      observer.observe(observerTarget.current);
    }

    // Cleanup function: Stop observing the target element when the component is unmounted
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [planets]);

  return { planets, loading, error, observerTarget };
};

export default usePlanets;
