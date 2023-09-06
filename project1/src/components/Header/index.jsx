import { Link } from "react-router-dom"
import { Container } from "./style";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa"

export function Header(){
    return(
        <Container>
            <Link to="/login">
                <FaHome size={30} />
            </Link>
            <Link to="/cadastro"> 
                <FaUserAlt size={30}/>
            </Link>
            <Link to="/a">
                <FaSignInAlt size={30}/>
            </Link>
        </Container>
    )
}