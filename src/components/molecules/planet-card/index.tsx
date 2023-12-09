import React from 'react';
// hooks import
import { useNavigate } from 'react-router-dom';

// components import
import styled from 'styled-components';
import CardImage from '../../atom/card/card-image';
import CardHeader from '../../atom/card/card-header';
import CardContent from '../../atom/card/card-content';
import StyledButton from '../../atom/button';
import GradientText from '../../atom/gradient-text';
import InfoText from '../../atom/info-text';

export type CardProps = {
    header: string,
    imageSrc: string,
    content: string,
    targetUrl?: string
}

// Styled Card Component
export const StyledCard = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  background-color: #000000;
  padding: 10px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PlanetCard: React.FC<CardProps> = ({ header, imageSrc, content, targetUrl }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (targetUrl) {
            navigate(targetUrl);
        }
    }

    return (
        <StyledCard>
            <CardImage src={imageSrc} alt="Card Image" />
            <CardHeader>
                <GradientText color1="#ff00e6" color2="#02c4ff" fontSize="20px" fontWeight="800">{header}</GradientText>
            </CardHeader>
            <CardContent>
                <InfoText>{content}</InfoText>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                <StyledButton onClick={handleClick} background='black' border='1px solid white' hoverBackground='white'>
                    <GradientText color1="#ff00e6" color2="#02c4ff" fontSize="12px" fontWeight="500">Read More</GradientText>
                </StyledButton>
            </div>
        </StyledCard>
    )
}

export default PlanetCard