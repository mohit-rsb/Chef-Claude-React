import chefClaudeLogo from "../../chef_claude_icon.png"

export default function Header(){
    return (
        <header>
            <div className="header-content">
                <img className="header-img" src={chefClaudeLogo} alt="Chef Claude Icon" />
                <span className="header-text">Chef Claude</span>
            </div>
        </header>
    )
}