import React from 'react';
import usePlanets from '../../hooks/usePlanets';
import RenderPlanets from '../../components/organism/render-planets';
import Header from '../../components/atom/header';
import PlanetType from '../../planet';

// Define the Planet type
export type Planet = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PlanetType[] | null;
};

type PlanetModuleProps = {
    header: string;
};

const PlanetModule: React.FC<PlanetModuleProps> = ({ header }) => {
    const {
        planets,
        loading,
        error,
        observerTarget,
    } = usePlanets();

    return (
        <>
            <Header>{header}</Header>
            <RenderPlanets
                planets={planets?.results}
                loading={loading}
                error={error}
                observerTarget={observerTarget}
            />
        </>
    );
};

export default PlanetModule;
