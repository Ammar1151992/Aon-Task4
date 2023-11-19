import "./header.css"
import { Container } from "../Container/container";
export const Header = () => {
    return (
        <header>
            <Container>
            <div className="content">
                <h3>Dashboard</h3>
                <div className="profile">
                    <span>Admin</span>
                    <div className="profile-image"></div>
                </div>
            </div>
            </Container>
        </header>
    )
}