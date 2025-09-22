import "./style.css"

function Cabecalho() {
    return (
        <header>
            <nav>
                <div>

                </div>
                <div>
                    <svg width="300" height="80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 80">
                        <g transform="translate(10, 25)" fill="none" stroke="#34D399" stroke-width="3">
                            <rect x="0" y="0" width="50" height="30" rx="5" ry="5" />
                            <polyline points="0,0 25,18 50,0" />
                        </g>

                        <text x="70" y="47" font-family="Arial, sans-serif" font-size="26" fill="#D1D5DB" font-weight="bold">
                            e-mail <tspan>express</tspan>
                        </text>
                    </svg>
                </div>
                <div>
                    
                </div>
            </nav>
        </header>
    )
}

export default Cabecalho