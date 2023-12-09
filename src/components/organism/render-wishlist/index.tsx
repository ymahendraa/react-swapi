import styled from "styled-components"
import PlanetCard from "../../molecules/planet-card"
import PlanetType from "../../../planet";
import usePaginate from "../../../hooks/usePaginate";
import Pagination from "../pagination";

// define the type of the props
type RenderPlanetsProps = {
    planets: PlanetType[] | undefined
}

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    `;

const RenderWishlist: React.FC<RenderPlanetsProps> = ({ planets }) => {
    const {
        currentData,
        handleNextPage,
        handlePrevPage,
        currentPage,
        totalPages,
    } = usePaginate(planets ?? [], 10);

    return (
        <StyledContainer>
            {currentData?.map((planet, index) => {
                const imageId = String(planet.url).replace("https://swapi.dev/api/planets/", "").replace("/", "")
                return (
                    <PlanetCard
                        key={index}
                        header={String(planet.name)}
                        imageSrc={`https://starwars-visualguide.com/assets/img/planets/${imageId}.jpg`}
                        content={`Population: ${planet.population}`}
                        targetUrl={String(planet.url).replace("https://swapi.dev/api", "")}
                    />
                )
            })}

            {/* PAGINATION */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePrevPage}
            />
        </StyledContainer>
    )
}

export default RenderWishlist