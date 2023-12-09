import React from 'react'
import FlexBox from '../../atom/flex-box'
import StyledButton from '../../atom/button';
import InfoText from '../../atom/info-text';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    handleNextPage: () => void;
    handlePreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ handleNextPage, handlePreviousPage, currentPage, totalPages }) => {
    return (
        <FlexBox alignItems="center" justifyContent="center" gap='1rem'>
            <StyledButton onClick={handlePreviousPage} disabled={currentPage === 1} padding="5px" >
                <GrFormPrevious size={25} />
            </StyledButton>
            <InfoText>{currentPage} / {totalPages}</InfoText>
            <StyledButton onClick={handleNextPage} disabled={currentPage === totalPages} padding="5px">
                <GrFormNext size={25} />
            </StyledButton>
        </FlexBox>
    )
}

export default Pagination