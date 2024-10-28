import { StyledTitle, Avatar } from "../components/Styles";
import Logo from "./../assets/logo.png";

const Dashboard = () => {
    return (
        <div>
            {/* Nav bar */}
            <div style={{
                position: "fixed", // Change from absolute to fixed to ensure it stays at the top
                top: 0,
                left: 0,
                backgroundColor: "#f0f0f0", // Set a background color so it’s visible
                width: "100%",
                padding: "15px 20px",
                display: "flex",
                justifyContent: "space-between", // Space between logo and welcome text
                alignItems: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" ,// Optional: adds a shadow for better visibility
                backgroundcolor: "#000",
                color: "#fff",
                opacity: ".5"       }}>
                {/* Logo on the left */}
                <Avatar image={Logo} />

                {/* Welcome message on the right */}
                <div style={{
                    color: "#333", // Text color for the welcome message
                    fontSize: "18px",
                    fontWeight: "bold"
                }}>
                    Welcome User
                </div>
            </div>

            {/* Main content */}
            <div style={{ marginTop: "100px", textAlign: "center" }}>
                <StyledTitle size={65}>
                    Welcome User
                </StyledTitle>
            </div>
        </div>
    );
}

export default Dashboard;
