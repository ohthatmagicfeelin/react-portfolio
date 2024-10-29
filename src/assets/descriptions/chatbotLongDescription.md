# Enhanced AI Chat Interface

I built this chat interface because I want to implement features that I have found missing with existing AI chat tools for coding work. Code handling, keyboard shortcuts, and message/context management.

## Technical Stack

**Frontend**
- React with Vite
- Tailwind CSS
- React Markdown & Syntax Highlighter
- UI animation with Tailwind CSS

**Backend**
- Node.js/Express
- Groq AI integration
- PM2 process management
- PostgreSQL

## Key Features

### Developer-Focused Code Handling
- Language detection for syntax highlighting
- Manual language selection override
- Horizontal scroll for mobile code blocks
- Advanced regex pattern matching for auto code identification

### Enhanced User Experience
- Keyboard shortcuts for common actions
  - Tab to focus input
  - Quick message editing
  - Context window management
- Message collapsing for better conversation flow
- Token usage analytics

### UI/UX Innovations
- Dynamic input positioning
- Smooth transitions and animations
- Message context management
- Clean, minimalist interface

### DevOps & Deployment
- Custom bash deployment scripts
- Nginx reverse proxy configuration
- SSL with Certbot
- VPS hosting with PM2 process management
- Automated build and rsync deployment

## What's Next?
Planning to add user accounts and message persistence. Integration with Anthropic's Claude 3.5 model.
