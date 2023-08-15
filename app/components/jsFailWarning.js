'use client'

export default function JSFailWarning() {
    return (
        <>
        <style jsx>{`
            #warning {
                height: .5rem;
                width: .5rem;
                padding: .25rem;
                position: fixed;
                bottom: 1rem;
                right: 1rem;
                border-radius: .5rem;
                background-color: rgb(255,50,50);
                transition: 0.5s ease-out;
                overflow: hidden;
                font-size: .75rem;
                display: flex;
                align-items: center;
                justify-content: center;
                white-space: nowrap;
            }

            #warning:hover {
                background-color: rgb(155,25,25);
                width: 35rem;
                cursor: pointer;
            }

            #warning:hover::after {
                content: "There happens to be a problem with your internet/Javascript, some elements may not load correctly.";
            }
        `}</style>
        <div id="warning" onClick={() => window.location.reload()}/>
        </>
    )
}