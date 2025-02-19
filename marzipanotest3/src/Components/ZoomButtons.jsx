import React from 'react';

const ZoomButtons = ({ viewer }) => {
    const Button = {
        ButtonPosition: {
            position: 'absolute',
            bottom: '20px',
            width: '100%',
            zIndex: 100, 
            textAlign: 'center',
        },
        ButtonStyle: {
            backgroundColor: 'rgba(73, 66, 215, 0.5)',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            margin: '5px',
        },
    };

    const zoomIn = () => {
        if (!viewer) return;
        const view = viewer.view();
        const zoom = view.fov();
        view.setfov(zoom + 0.1); // Increase zoom level
    };

    const zoomOut = () => {
        if (!viewer) return;
        const view = viewer.view();
        const zoom = view.fov();
        view.setfov(zoom - 0.1); // Decrease zoom level
    };

    return (
        <div>
            <div style={Button.ButtonPosition}>
                <button style={Button.ButtonStyle}>
                    ↑
                </button>
                <button style={Button.ButtonStyle}>
                    ↓
                </button>
                <button style={Button.ButtonStyle}>
                    ←
                </button>
                <button style={Button.ButtonStyle}>
                    →
                </button>
                <button className="ZoomInBtn" style={Button.ButtonStyle} onClick={zoomIn}>
                    +
                </button>
                <button className="ZoomOutBtn" style={Button.ButtonStyle} onClick={zoomOut}>
                    -
                </button>
            </div>
        </div>
    );
};

export default ZoomButtons;
