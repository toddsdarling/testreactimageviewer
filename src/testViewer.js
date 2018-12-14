import React, { Component } from 'react';

import OpenSeadragon from 'openseadragon';

// create a component
class TestImageViewer extends Component {
    render() {
        let self = this;
        let { id } = this.props        
        return (
            <div>
                <div className="navigator-wrapper c-shadow">
                    <div id="navigator"></div>
                </div>                
                <div className="openseadragon" id={id}></div>
            </div>
        );
    }

    componentDidMount() {
        let self = this
        let { id, image, type } = this.props
        self.loadImage(image).then(data =>{
            self.viewer =  OpenSeadragon({
                id: 'ocd-viewer',
                visibilityRatio: 1.0,
                constrainDuringPan: false,
                defaultZoomLevel: 1,
                minZoomLevel: 1,
                maxZoomLevel: 10,
                zoomInButton: 'zoom-in',
                zoomOutButton: 'zoom-out',
                homeButton: 'reset',
                fullPageButton: 'full-page',
                nextButton: 'next',
                previousButton: 'previous',
                showNavigator: true,
                navigatorId: 'navigator',
                tileSources: {
                    type:type,
                    levels:[ { url: image, height:data.naturalHeight, width: data.naturalWidth } ]
                }
            })

        });
    }

    // helper function to load image using promises
    loadImage = (src)=> new Promise(function(resolve, reject) {
        var img = document.createElement('img')
        img.addEventListener('load', function(){  resolve(img) })
        img.addEventListener('error', function(err){ reject(404) })
        img.src = src;
    });


}


//make this component available to the app
export default TestImageViewer;
