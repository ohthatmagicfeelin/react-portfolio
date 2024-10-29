# Spotify Music Player with Extended Controls

## What I Built
My first dive into web development - a souped-up Spotify player that adds features I always wished Spotify had. Coming from a Python background where I made command-line tools, I wanted to create something with a proper user interface that people could actually use.

## The Cool Stuff It Does

### Powerful Playback Controls
- Zoom in on the playback bar to set precise loop points (great for musicians learning songs or producers hunting samples)
- Quick 5-second jumps (like podcast controls, but for music)
- Mirrors whatever's playing on your other Spotify devices in real-time
- Smooth drag-and-drop seeking on the progress bar

### Smart Playlist Organization
- Automatically sorts liked tracks into seasonal playlists (like "Spring 2024")
- The more you like a track, the higher it moves in the playlist
- Limits you to one like per day to keep playlists meaningful
- Perfect for tracking when you discovered songs or what was on heavy rotation at the time

### Smooth User Experience
- Your settings persist between sessions
- Loading animations while data loads
- Stays logged in for 30 days
- Shows stats about tracks and artists

## Under the Hood

### Authentication & Security
- Proper OAuth setup with Spotify
- Secure token handling (no sensitive stuff in the frontend)
- Auto-refreshes tokens behind the scenes
- PostgreSQL database keeping everything safe

### How It's Built
- Built with React for frontend and Node.js/Express for backend
- Implemented RESTful API design principles
- PostgreSQL storing user data and settings
- Created middleware for session validation and token management
- Layered backend design (API → Controllers → Services → Repositories)

## Tech I Used
- **Frontend**: React (Context, Router, Custom Hooks), TailwindCSS, Axios, PWA
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **APIs**: Spotify Web API, Spotify SDK, LastFM API
- **Security**: OAuth 2.0
- **Deployment**: VPS, Nginx, SSL

### DevOps & Deployment
- Custom bash deployment scripts
- Nginx reverse proxy configuration
- SSL with Certbot
- VPS hosting with PM2 process management
- Automated build and rsync deployment

## What I Learned
- Building full-stack JavaScript apps
- Modern web development practices
- Getting apps deployed and running in the real world
- Making things secure and user-friendly
- Working with APIs and real-time data

## Challenges I Tackled
- Configured HTTPS and reverse proxy on VPS deployment
- Implemented state management for real-time playback syncing without excessive re-renders
- Created audio playback control with zoom functionality, drag-and-drop seeking, and 5-second jumps, loop markers.
- Developed secure authentication flows with token management
- Made everything work nicely on different screen sizes
