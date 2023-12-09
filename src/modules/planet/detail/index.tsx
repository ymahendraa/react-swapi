import React from 'react'
import usePlanetDetails from '../../../hooks/usePlanetDetails';
import RenderPlanetDetail from '../../../components/organism/render-planet-detail';

type PlanetDetailModuleProps = {
    id: string;
}

const PlanetDetailModule: React.FC<PlanetDetailModuleProps> = ({ id }) => {
    // get planet detail by id
    const {
        planet,
        loading,
        error,
    } = usePlanetDetails(id);
    return (
        <RenderPlanetDetail planet={planet} loading={loading} error={error} id={id} />
    )
}

export default PlanetDetailModule