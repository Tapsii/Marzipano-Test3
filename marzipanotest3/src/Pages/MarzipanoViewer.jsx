import React, { useEffect, useState } from 'react';
import ZoomButtons from '../Components/ZoomButtons';
import Navbar from '../Components/Navbar';

const MarzipanoViewer = () => {
    const [viewer, setViewer] = useState(null); // Store the viewer instance

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/marzipano.js';
        script.onload = () => {
            const viewerElement = document.getElementById('pano');
            const newViewer = new window.Marzipano.Viewer(viewerElement);

            // Store the viewer instance in state
            setViewer(newViewer);

            const source = window.Marzipano.ImageUrlSource.fromString('/Imgs/spideymeme.jpg');
            const geometry = new window.Marzipano.EquirectGeometry([{ width: 4000 }]);

            const limiter = window.Marzipano.RectilinearView.limit.traditional(
                1024,
                (100 * Math.PI) / 180
            );
            const view = new window.Marzipano.RectilinearView(null, limiter);

            const scene = newViewer.createScene({
                source: source,
                geometry: geometry,
                view: view,
                pinFirstLevel: true,
            });

            scene.switchTo();
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <div
                id="pano"
                style={{
                    width: '100%',
                    height: '100vh',
                    backgroundColor: '#000',
                }}
            ></div>
            {/* Pass the viewer instance to ZoomButtons */}
            <Navbar/>
            <ZoomButtons viewer={viewer} />
        </div>
    );
};

export default MarzipanoViewer;
