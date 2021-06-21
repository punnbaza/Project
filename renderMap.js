import React ,{useRef,useEffect} from 'react'
import {loadModules} from 'esri-loader'

function Map(props) {
    const myId = props.myId;
    const MapEl = useRef(null);
    console.log('choose: '+myId);

    useEffect(
        ()=>{
            let view;

        loadModules(["esri/views/MapView", "esri/WebMap", "esri/layers/GeoJSONLayer"],{
            css:true
        }).then(([MapView,WebMap,GeoJSONLayer])=>{
            const webmap = new WebMap({
                basemap: 'topo-vector'
            })
            view = new MapView({
                map: webmap,
                center: [100.15 ,13.8],
                zoom: 12,
                container : MapEl.current
            })
            
            if(myId === "Map202006"){
                console.log('06');
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202006_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "Map202007"){
                console.log('07');
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202007_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }    
            else if(myId === "Map202008"){
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202008_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "Map202009"){
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202009_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "Map202010"){
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202010_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "Map202011"){
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202011_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "Map202012"){
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202012_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "Map202101"){
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202101_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "Map202102"){
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202102_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }
            else if(myId === "Map202103"){
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202103_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            } 
            else if(myId === "Map202104"){
                const geojsonLayer = new GeoJSONLayer({
                    url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202104_lalong.geojson"
                            });
                webmap.add(geojsonLayer)  
            }                       
            else{
            
            }
            /*
            const geojsonLayer = new GeoJSONLayer({
                url: "https://raw.githubusercontent.com/chtoeii/Geojson-Data/main/202006_lalong.geojson"
                        });
            webmap.add(geojsonLayer)
            */
        })
        return()=>{
            if(!!view){
                view.destroy()
                view = null
            }
        }
        })
    return (
        <div style = {{height:550}} ref = {MapEl}>
                     
        </div>
    )
}

export default Map;