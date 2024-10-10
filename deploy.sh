#!/bin/bash

# Configuration
VPS_ALIAS="vps"
VPS_PATH="/var/www/portfolio"
LOCAL_PATH="/Users/oh/Library/CloudStorage/OneDrive-Personal/code/webdev/portfolios/react-portfolio"

# Colors for output
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Function to display messages
message() {
    echo -e "${GREEN}$1${NC}"
}

# # Deploy server
# message "Deploying server..."
# rsync -avz --exclude 'node_modules' --exclude '.env' --exclude 'package-lock.json' \
#     "$LOCAL_PATH/server/" "$VPS_ALIAS:$VPS_PATH/server/"

# Deploy client
message "Deploying client..."
rsync -avz --exclude 'node_modules' --exclude '.env' --exclude 'package-lock.json' \
    "$LOCAL_PATH/" "$VPS_ALIAS:$VPS_PATH/"

# Install dependencies and restart services (if needed)
message "Installing dependencies and restarting services..."
ssh "$VPS_ALIAS" << EOF


    # ! build 
    cd $VPS_PATH && npm run build
    echo "Build completed."
    
    # ! set permissions
    echo "Setting permissions..."
    sudo chown -R www-data:www-data /var/www/portfolio/dist

    echo "Deployment process completed."
EOF

message "Deployment completed successfully!"