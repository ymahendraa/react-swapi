import styled from "styled-components"
import PlanetCard from "../../molecules/planet-card"
import Loader from "../../atom/loading"
import PlanetType from "../../../planet"

// define the type of the props
type RenderPlanetsProps = {
    planets: PlanetType[] | undefined
    loading: boolean | null
    error: Error | null
    observerTarget: React.MutableRefObject<HTMLDivElement | null>
}

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    `;

const RenderPlanets: React.FC<RenderPlanetsProps> = ({ planets, loading, error, observerTarget }) => {
    return (
        <StyledContainer>
            {planets?.map((planet, index) => (
                <PlanetCard
                    key={index}
                    header={String(planet.name)}
                    imageSrc={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
                    content={`Population: ${planet.population}`}
                    targetUrl={String(planet.url).replace("https://swapi.dev/api", "")}
                />
            ))}
            <div ref={observerTarget}></div>
            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center" }}>
                {loading && <Loader />}
                {error && <p>Error: {error?.message}</p>}
            </div>
        </StyledContainer>
    )
}

export default RenderPlanets