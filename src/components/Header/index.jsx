import { Container } from "./style";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa"

export function Header(){
    return(
        <Container>
            <span> <FaHome size={30} /> </span>
            <span> <FaUserAlt size={30}/> </span>
            <span> <FaSignInAlt size={30}/> </span>
        </Container>
    )
}