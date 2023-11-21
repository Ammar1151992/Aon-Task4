import "./header.css"
import { Container } from "../Container/container";
import pc from "../assest/pc.jpg"
export const Header = () => {
    return (
        <header>
            <Container>
            <div className="content">
                <h3>Dashboard</h3>
                <div className="profile">
                    <span>Admin</span>
                    <div className="profile-image">
                        <img src={pc} alt="" />
                    </div>
                </div>
            </div>
            </Container>
        </header>
    )
}