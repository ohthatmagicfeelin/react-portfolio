#!/bin/bash

# Configuration
VPS_ALIAS="vps"
VPS_PATH="/var/www/portfolio"
LOCAL_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )" # Set LOCAL_PATH to the directory containing this script, regardless of where it's called from


# Colors for output
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Function to display messages
message() {
    echo -e "${GREEN}$1${NC}"
}

# Deploy client
message "Deploying client..."
rsync -avz --delete --exclude 'node_modules' --exclude '.env' --exclude 'package-lock.json' --exclude '.git'\
    "$LOCAL_PATH/" "$VPS_ALIAS:$VPS_PATH/"


# Install dependencies and restart services (if needed)
message "Installing dependencies and restarting services..."
ssh "$VPS_ALIAS" << EOF
    # Build
    cd $VPS_PATH && npm run build
    echo "Build completed."

    echo "Deployment process completed."
EOF

message "Deployment completed successfully!"