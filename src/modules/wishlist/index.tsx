import React from 'react';
import Header from '../../components/atom/header';
import RenderWishlist from '../../components/organism/render-wishlist';
import PlanetType from '../../planet';
import InfoText from '../../components/atom/info-text';
import FlexBox from '../../components/atom/flex-box';

// Define the Planet type
export type Planet = {
    results: PlanetType[] | null;
};

type PlanetModuleProps = {
    header: string;
};

const WishlistModule: React.FC<PlanetModuleProps> = ({ header }) => {
    // get planet detail by id
    const planets = JSON.parse(localStorage.getItem("wishList") || "[]");
    let content = null;

    // if loading
    if (planets.length === 0) {
        content = (
            <FlexBox flexDirection='column' alignItems="center" justifyContent="center" height="100vh">
                <InfoText>Wishlist is empty</InfoText>
            </FlexBox>
        )
    }

    // if error
    else {
        content = <RenderWishlist planets={planets} />
    }

    return (
        <>
            <Header>{header}</Header>
            {content}
        </>
    );
};

export default WishlistModule;
