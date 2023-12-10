// hooks import
import { useNavigate } from "react-router-dom";
import useSaveToWishList from "../../../hooks/useSavetoWishList";
// types import
import type PlanetType from "../../../planet";
// helpers import
import formatDate from "../../../helpers/formatDate";
// components import
import Loader from "../../atom/loading";
import FlexBox from "../../atom/flex-box"
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { IoIosRemoveCircleOutline } from "react-icons/io";
import InfoText from "../../atom/info-text"
import StyledButton from "../../atom/button"
import { FaFilm } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";
import GradientText from "../../atom/gradient-text";

type RenderPlanetDetailProps = {
    planet: PlanetType | null,
    loading: boolean,
    error: Error | null,
    id: string
}

const RenderPlanetDetail: React.FC<RenderPlanetDetailProps> = ({ planet, loading, error, id }) => {
    // define navigate
    const navigate = useNavigate();

    const {
        saveToWishList,
        planetExists,
        removeFromWishList
    } = useSaveToWishList(planet ?? {} as PlanetType)

    // if loading
    if (loading) {
        return (
            <FlexBox alignItems="center" justifyContent="center" height="100vh">
                <Loader />
            </FlexBox>
        )
    }
    // if error
    if (error) {
        return (
            <FlexBox alignItems="center" justifyContent="center" height="100vh">
                <p>Error: {error?.message}</p>
            </FlexBox>
        )
    }
    return (
        <FlexBox backgroundColor="#000" flexDirection="column">
            {/* TOP CONTENT */}
            <FlexBox alignItems="flex-start">
                {/* BACK BUTTON */}
                <IoArrowBackCircleOutline size={40} color="red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
            </FlexBox>
            {/* MID CONTENT */}
            <FlexBox alignItems="flex-start">
                <FlexBox>
                    {/* PLANET IMAGE */}
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="detail img" width="80%" style={{ borderRadius: '15px' }} />
                </FlexBox>
                <FlexBox flexDirection="column" alignItems="flex-start" gap="1rem">
                    {/* PLANET NAME */}
                    <GradientText color1="#5FFBF1" color2="#E900FF" fontSize="58px" fontWeight="800" fontFamily="Star Wars">{planet?.name}</GradientText>
                    {/* PLANET POPULATION */}
                    <InfoText color="white">Number of population: <GradientText color1="#E5DB02" color2="#C345CF" fontSize="30px" fontWeight="700">{planet?.population}</GradientText></InfoText>
                    {/* PLANET TERRAIN */}
                    <InfoText color="white">Terrain: <GradientText color1="#E5DB02" color2="#C345CF" fontSize="30px" fontWeight="700">{planet?.terrain}</GradientText></InfoText>
                    {/* PLANET DIAMETER */}
                    <InfoText color="white">Diameter: <GradientText color1="#E5DB02" color2="#C345CF" fontSize="30px" fontWeight="700">{planet?.diameter} km</GradientText></InfoText>
                    {/* PLANET CLIMATE */}
                    <InfoText color="white">Climate: <GradientText color1="#E5DB02" color2="#C345CF" fontSize="30px" fontWeight="700">{planet?.climate}</GradientText></InfoText>
                    {/* PLANET GRAVITY */}
                    <InfoText color="white">Gravity: <GradientText color1="#E5DB02" color2="#C345CF" fontSize="30px" fontWeight="700">{planet?.gravity}</GradientText></InfoText>
                    {/* PLANET SURFACE WATER */}
                    <InfoText color="white">Surface Water: <GradientText color1="#E5DB02" color2="#C345CF" fontSize="30px" fontWeight="700">{planet?.surface_water}</GradientText></InfoText>
                    {/* PLANET ORBITAL PERIOD */}
                    <InfoText color="white">Orbital Period: <GradientText color1="#E5DB02" color2="#C345CF" fontSize="30px" fontWeight="700">{planet?.orbital_period}</GradientText></InfoText>
                    {/* PLANET ROTATION PERIOD */}
                    <InfoText color="white">Rotation Period: <GradientText color1="#E5DB02" color2="#C345CF" fontSize="30px" fontWeight="700">{planet?.rotation_period}</GradientText></InfoText>

                </FlexBox>
            </FlexBox>
            {/* BOTTOM CONTENT */}
            <FlexBox flexDirection="column" alignItems="flex-start" gap="1rem" color="white">
                {/* RESIDENTS */}
                <GradientText color1="#00ffee" color2="#0285ff" fontSize="24px" fontWeight="800">Residents:</GradientText>
                <FlexBox alignItems="flex-start" gap="1rem" color="white" flexWrap="wrap">
                    {planet?.residents?.length ?? 0 > 0 ? Array.isArray(planet?.residents) && planet?.residents.map((resident, index) => (
                        <a href={resident} target="_blank">
                            <StyledButton key={index} background="black" border="1px solid white" >
                                <FlexBox alignItems="center" gap="1rem" padding="0">
                                    <FaUserAstronaut size={25} color="white" />
                                    <InfoText>Resident {index + 1}</InfoText>
                                </FlexBox>
                            </StyledButton>
                        </a>
                    )) : <InfoText color="white">No residents</InfoText>}

                </FlexBox>
            </FlexBox>
            {/* FILMS */}
            <FlexBox flexDirection="column" alignItems="flex-start" gap="1rem" color="white">
                <GradientText color1="#00ffee" color2="#0285ff" fontSize="24px" fontWeight="800">Films:</GradientText>
                <FlexBox alignItems="flex-start" gap="1rem" color="white" flexWrap="wrap">
                    {planet?.films?.length ?? 0 > 0 ? Array.isArray(planet?.films) && planet?.films.map((film, index) => (
                        <a href={film} target="_blank">
                            <StyledButton key={index} background="black" border="1px solid white">
                                <FlexBox alignItems="center" gap="1rem" padding="0">
                                    <FaFilm size={25} color="white" />
                                    <InfoText>Film {index + 1}</InfoText>
                                </FlexBox>
                            </StyledButton>
                        </a>
                    )) : <InfoText>No films</InfoText>}
                </FlexBox>
            </FlexBox>
            {/* CREATED AT */}
            <FlexBox alignItems="flex-start" gap="1rem" color="white">
                <InfoText>Created at: <b>{formatDate(String(planet?.created))}</b></InfoText>
            </FlexBox>
            {/* ADD TO WISH LIST BUTTON */}
            <FlexBox justifyContent="flex-end" gap="1rem" color="white" width="100%">
                <StyledButton background="black" border={`1px solid ${planetExists ? 'red' : 'yellow'}`} hoverbackground="black" onClick={planetExists ? removeFromWishList : saveToWishList}>
                    <FlexBox alignItems="center" gap="1rem" padding="0">
                        {planetExists ? <IoIosRemoveCircleOutline size={25} color="red" /> : <IoMdAddCircleOutline size={25} color="yellow" />
                        }
                        {planetExists ? <InfoText fontSize="18px" color="red">Remove from wish list</InfoText> :
                            <InfoText fontSize="18px" color="yellow">Add to wish list</InfoText>
                        }

                    </FlexBox>
                </StyledButton>
            </FlexBox>
        </FlexBox>
    )
}

export default RenderPlanetDetail