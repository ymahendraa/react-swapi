import { useParams } from 'react-router-dom';
import PlanetDetailModule from '../../../modules/planet/detail';

const PlanetDetail = () => {
    const { id } = useParams();

    return (
        <PlanetDetailModule id={String(id)} />
    )
}

export default PlanetDetail