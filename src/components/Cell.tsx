import React, {useEffect, useState} from "react";

type IProps = {
    isHelper: boolean,
    hidden: boolean,
    content: string,
}

const Component = ({isHelper, hidden, content}: IProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [width, setWidth] = useState<number>(window.innerWidth);
    const isMobile = width <= 768;

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    const openField = ()=>{
        setIsOpen(true)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (
        <div style={{whiteSpace: 'nowrap'}} onClick={isHelper ? openField : ()=>{}}>
            <strong>{hidden && !isOpen ? '*****' : content}</strong>
            {isHelper && !isOpen && hidden && !isMobile ?
                <svg width='20px' fill='white' focusable="false"
                     aria-hidden="true" viewBox="0 0 24 24" data-testid="HelpOutlineIcon">
                    <path
                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
                </svg> : null}
        </div>
    )
}

export const Cell = React.memo(Component)
