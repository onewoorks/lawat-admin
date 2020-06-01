import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="text-center mb-2" style={{ fontSize: '0.8em' }}>
                <div> 
                    {new Date().getFullYear()} | designed and developed by :{' '}
                    <a
                        href="https://onewoorks-solutions.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        onewoorks solutions
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
