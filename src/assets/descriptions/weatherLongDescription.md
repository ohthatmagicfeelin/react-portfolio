
# Local Weather & River Monitoring System

A full-stack application that aggregates and visualizes local weather, river height, and tide data to help community members understand environmental patterns in our sub-tropical town.

## Why This Matters

Living in a flood-prone area, we often face road closures after heavy rains. I built this system to track these patterns and help our community better understand the relationships between rainfall, river heights, and tides. It's particularly useful for:
- Correlating rainfall with river heights
- Understanding seasonal patterns
- Making historical weather data actually useful

## Technical Solution

### Smart Data Collection
- Automated data gathering every 15 minutes using scheduled cron jobs
- Multiple web scraping strategies:
  - jsdom for simple weather station data
  - Puppeteer for JavaScript-heavy tide information
- Fault-tolerant system with intelligent retry logic

### Clean Architecture
- Layered backend design (API → Controllers → Services → Repositories)
- PostgreSQL for reliable data storage
- Timezone-aware data handling
- Separate concerns for each data type (weather, river, tides)

### Interactive Visualizations
- Chart.js for responsive data display
- Multiple time range views (1-day to 1-month)
- Mobile-friendly interface

## Tech Stack
**Frontend:**
- React with Vite
- Chart.js for visualizations
- Tailwind CSS

**Backend:**
- Node.js/Express
- PostgreSQL
- Web scraping (jsdom & Puppeteer)
- Cron job scheduling

**Infrastructure:**
- VPS hosting
- Automated deployment
- Nginx reverse proxy
- SSL with Certbot

