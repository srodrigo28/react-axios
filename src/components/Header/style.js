import styled from "styled-components";
import { primaryColor } from "./../../styles/colors";

export const Container = styled.nav`
    background-color: ${primaryColor};
    padding: 20px;

    display:flex;
    align-items: center;
    justify-content: center;

    a{
        color: #fff;
        margin: 0 10px 0 0;
        font-weight: bold;
    }
`;