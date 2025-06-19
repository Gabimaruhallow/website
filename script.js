class GhaliAssistant {
    constructor() {
        this.chatButton = document.getElementById('chatButton');
        this.chatWidget = document.getElementById('chatWidget');
        this.chatClose = document.getElementById('chatClose');
        this.chatInput = document.getElementById('chatInput');
        this.sendButton = document.getElementById('sendButton');
        this.chatMessages = document.getElementById('chatMessages');
        this.quickButtons = document.querySelectorAll('.quick-btn');
        
        this.responses = {
            services: {
                keywords: ['service', 'offer', 'do', 'create', 'build', 'make', 'what'],
                response: `Ghali offers a wide range of professional web development services:

🌐 **Business Landing Pages** - Modern, conversion-focused websites that turn visitors into customers

🛒 **E-commerce Shops** - Complete online stores with payment integration and inventory management

🎨 **Portfolio Websites** - Stunning showcases for artists, photographers, and creative professionals

🤖 **AI & Automation** - Smart websites with connections to CRMs, Telegram bots, and other automation tools

✨ **Custom Features** - Dark/light themes, 3D effects, animations, and any special functionality you need

All websites are mobile-responsive, fast-loading, and built with modern technologies. What type of website are you interested in?`
            },
            
            ecommerce: {
                keywords: ['shop', 'store', 'ecommerce', 'e-commerce', 'sell', 'product', 'payment'],
                response: `Absolutely! Ghali specializes in creating powerful e-commerce websites. Here's what he can build for you:

🛒 **Complete Online Stores** with:
- Product catalogs and inventory management
- Secure payment processing (PayPal, Stripe, etc.)
- Shopping cart and checkout system
- Order management and tracking
- Customer accounts and wishlists
- Mobile-responsive design

🎨 **Custom Design** that matches your brand
🔧 **Admin Dashboard** to manage your products and orders
📱 **Mobile-Optimized** for shopping on any device
🚀 **Fast Loading** for better customer experience

What kind of products are you planning to sell? This will help me understand what specific features you might need!`
            },
            
            portfolio: {
                keywords: ['portfolio', 'showcase', 'work', 'gallery', 'artist', 'photographer'],
                response: `Yes! Ghali creates stunning portfolio websites that beautifully showcase your work. Perfect for:

🎨 **Artists & Designers** - Image galleries with lightbox effects
📸 **Photographers** - High-resolution photo displays
💼 **Professionals** - Work samples and case studies
🎵 **Musicians** - Audio/video integration
✍️ **Writers** - Blog integration and content showcase

**Features include:**
- Beautiful, modern layouts
- Fast-loading image optimization
- Contact forms for client inquiries
- SEO optimization to be found online
- Mobile-responsive design
- Social media integration

What type of work would you like to showcase? Ghali can create a custom design that perfectly represents your style!`
            },
            
            pricing: {
                keywords: ['price', 'cost', 'how much', 'expensive', 'cheap', 'budget', 'quote'],
                response: `Great question! Ghali's pricing is fair and depends on your specific needs:

💰 **Factors that affect pricing:**
- Type of website (landing page, e-commerce, portfolio, etc.)
- Number of pages and features
- Custom design requirements
- Automation integrations
- Timeline requirements

🎯 **Ghali's approach:**
- Competitive and affordable rates
- No hidden fees
- Payment plans available
- Value-focused pricing

The best way to get an accurate quote is to discuss your specific project with Ghali directly. He'll provide a personalized quote based on exactly what you need.

Would you like me to help you get in touch with Ghali for a free consultation and quote?`
            },
            
            contact: {
                keywords: ['contact', 'reach', 'talk', 'speak', 'get in touch', 'hire'],
                response: `I'd be happy to help you connect with Ghali! Here are the ways to reach him:

📧 **Email**: [Your email here]
💬 **WhatsApp**: [Your WhatsApp number]
📱 **Telegram**: [Your Telegram handle]
🌐 **Website**: [Your website URL]

🇲🇦 **Based in Morocco** - Available during business hours and flexible for international clients

**What happens next:**
1. Reach out using any method above
2. Ghali will discuss your project needs
3. You'll receive a personalized quote
4. Project timeline and details are finalized
5. Ghali gets to work creating your amazing website!

Ghali is known for being responsive, professional, and easy to work with. He'll make sure to understand exactly what you need and deliver beyond your expectations.

Would you like me to help you prepare any specific questions before you contact him?`
            },
            
            about: {
                keywords: ['who', 'about', 'ghali', 'age', 'experience', 'morocco'],
                response: `Let me tell you about Ghali! 

👨‍💻 **About Ghali:**
- 17 years old professional web developer
- Based in Morocco 🇲🇦
- Specializes in modern, high-quality websites
- Already helped small businesses grow online

🚀 **What makes Ghali special:**
- Uses cutting-edge AI and automation tools
- Creates websites that are both beautiful AND functional
- Fast, professional, and really listens to clients
- Stays up-to-date with latest web technologies

💪 **Experience:**
- Business landing pages that convert
- E-commerce stores that sell
- Portfolio sites that impress
- Custom automation solutions

Despite being young, Ghali has the skills and professionalism of someone much more experienced. His fresh perspective combined with technical expertise makes him perfect for modern web projects.

What would you like to know more about?`
            },
            
            features: {
                keywords: ['feature', 'animation', '3d', 'dark mode', 'theme', 'responsive'],
                response: `Ghali can add amazing features to make your website stand out:

🎨 **Design Features:**
- Dark/Light mode themes
- Custom animations and transitions
- 3D effects and interactive elements
- Modern, clean layouts
- Brand-consistent styling

📱 **Technical Features:**
- Fully responsive (works on all devices)
- Fast loading speeds
- SEO optimization
- Contact forms and lead capture
- Social media integration

🤖 **Advanced Features:**
- AI chatbots and assistants
- Automation connections to CRMs
- Telegram bot integration
- Email marketing automation
- Custom functionality

🔧 **Business Features:**
- Analytics and tracking
- Admin dashboards
- User accounts and login systems
- Payment processing
- Inventory management

What specific features are you most interested in for your website?`
            },
            
            default: {
                response: `I'm here to help you learn about Ghali's website creation services! 

Ghali is a 17-year-old professional web developer from Morocco 🇲🇦 who creates:
- Modern business websites
- E-commerce stores  
- Portfolio sites
- Custom web applications

You can ask me about:
- What services Ghali offers
- Pricing and quotes
- Specific features you need
- How to contact Ghali
- Examples of his work

What would you like to know more about?`
            }
        };
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Chat widget toggle
        this.chatButton.addEventListener('click', () => this.toggleChat());
        this.chatClose.addEventListener('click', () => this.closeChat());
        
        // Send message
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // Quick action buttons
        this.quickButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.getAttribute('data-message');
                this.sendUserMessage(message);
            });
        });
        
        // Close chat when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.chatWidget.contains(e.target) && !this.chatButton.contains(e.target)) {
                if (this.chatWidget.classList.contains('active')) {
                    this.closeChat();
                }
            }
        });
    }
    
    toggleChat() {
        this.chatWidget.classList.toggle('active');
        if (this.chatWidget.classList.contains('active')) {
            this.chatInput.focus();
        }
    }
    
    closeChat() {
        this.chatWidget.classList.remove('active');
    }
    
    sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;
        
        this.sendUserMessage(message);
        this.chatInput.value = '';
    }
    
    sendUserMessage(message) {
        // Add user message
        this.addMessage(message, 'user');
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Generate and send response after delay
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'assistant');
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }
    
    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.innerHTML = `
            <div class="message-content">
                ${this.formatMessage(content)}
            </div>
            <div class="message-time">${timeString}</div>
        `;
        
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }
    
    formatMessage(content) {
        // Convert markdown-style formatting to HTML
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>')
            .split('\n\n')
            .map(paragraph => `<p>${paragraph}</p>`)
            .join('');
    }
    
    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for specific response categories
        for (const [category, data] of Object.entries(this.responses)) {
            if (category === 'default') continue;
            
            if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
                return data.response;
            }
        }
        
        // Handle greetings
        if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
            return `Hello! 👋 Welcome! I'm Ghali's AI assistant, and I'm excited to help you learn about his web development services.

Ghali is a talented 17-year-old web developer from Morocco 🇲🇦 who creates stunning, professional websites for businesses and individuals.

What can I help you with today? You can ask about:
- His services and what he offers
- Pricing and getting a quote  
- Specific features you need
- How to get in touch with him`;
        }
        
        // Handle thanks
        if (lowerMessage.match(/(thank|thanks|appreciate)/)) {
            return `You're very welcome! 😊 I'm here to help anytime you have questions about Ghali's services.

If you're ready to move forward with a project, I'd recommend reaching out to Ghali directly for a personalized consultation. He's great at understanding exactly what you need and providing solutions that exceed expectations.

Is there anything else you'd like to know?`;
        }
        
        // Handle negative responses or confusion
        if (lowerMessage.match(/(no|not sure|don't know|confused|help)/)) {
            return `No worries at all! Let me help you figure out what you might need.

Here are some questions to consider:
- Are you a business owner looking to get online?
- Do you need to sell products or services online?
- Are you an artist/photographer wanting to showcase your work?
- Do you have a specific idea but not sure how to make it happen?

Or feel free to tell me more about your situation, and I'll help guide you toward the right solution!`;
        }
        
        // Default response for unrecognized messages
        return this.responses.default.response;
    }
    
    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <span>Ghali's assistant is typing</span>
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        
        this.chatMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

// Initialize the assistant when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new GhaliAssistant();
});

// Add some smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});