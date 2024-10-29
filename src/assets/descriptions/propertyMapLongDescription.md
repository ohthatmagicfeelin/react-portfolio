# Property Analysis Tool

I built this web mapping tool because my family and I are trying to find the perfect rural property in our area. Most online real estate sites don't show you the important stuff - like flood risks, land zones, or how steep the property is. As someone with a GIS background, I decided to make a tool to help. 

## What It Does

This tool combines government spatial data with real estate listings to give you the full picture of a property at a glance. Want to know how much usable flat land there is? Or how much of the property faces north for the best passive solar gains? It's all there in easy-to-read charts and maps.

## The Tech Side

I kept it pretty straightforward with vanilla JavaScript, Leaflet.js for mapping, and Chart.js for the visualizations. Here's what's under the hood:

- **The Data Work**
  - Turned elevation data into flood risk maps (because the official flood data wasn't downloadable)
  - Built terrain models to show which parts of properties face north 
  - Grabbed property and zoning data from NSW government portals
  - Applied isochrone filtering to identify properties within 15-minute travel time from town
  - Web scraping of historical real estate sales data


- **Features**
  - Interactive property map
  - Charts showing land slope and sun exposure
  - Property size filtering
  - Quick links to Google property listings

## The Build Process

I actually threw this together in about 8 hours. Is it perfect? Nope. Does it have bugs? You bet. But it does exactly what I needed it to do - help us find properties that tick all our boxes without spending hours cross-referencing different maps and websites.

## Deployment

I chose to host it on a VPS because I wanted to learn the ins and outs of deployment. All the data lives on the server as GeoTIFF and GeoJSON files - simple but effective.

The thing I'm most proud of? Turning this into a PWA that I can use on my phone. This makes the app super helpful in quickly understanding the lay of the land (literally), without having to pull out my laptop.

