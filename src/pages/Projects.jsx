// pages/Projects.jsx
import { useState, useEffect } from 'react';
import LazyImage from '../components/LazyImage';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from '../components/AnimatedComponents';
import emailAppScreenshot from '../assets/aah_ai_email_screen.png';
import chatbotScreenshot from '../assets/integratedChatBot.png';
import socialMediaScreenshot from '../assets/socialBot.png';
import rewriteEngine from '../assets/rewrite_engine.png';
import invDash from '../assets/invDash.png';
import comparisonChart from '../assets/comparison-chart.png';
import contentCannon from '../assets/content-cannon.png';
import qrCode from '../assets/qr-code.png';
import adIntelligence from '../assets/ad-intelligence.png';
import vsiSwine from '../assets/vsi-swine.png';

function ProjectCard({ title, description, bullets, image, tags, codeSnippet, explanation, link }) {
  const [expanded, setExpanded] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden"
    >
      {image && (
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <LazyImage
            src={image}
            alt={`${title} Screenshot`}
            className="w-full h-full object-contain cursor-zoom-in p-2"
            onClick={() => setShowImage(true)}
            placeholder="blur"
          />
          {showImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              onClick={() => setShowImage(false)}
            >
              <div className="relative max-w-4xl w-full">
                <button 
                  className="absolute top-0 right-0 m-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                  onClick={() => setShowImage(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img src={image} alt="Full Preview" className="max-w-full max-h-screen rounded-lg" />
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags && tags.map((tag, index) => (
            <span key={index} className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">
              {tag}
            </span>
          ))}
        </div>
        {link && (
  <a 
    href={link} 
    className="inline-block text-blue-600 hover:text-blue-800 font-medium mb-3 border-b border-blue-600 hover:border-blue-800 transition-colors"
    onClick={(e) => e.stopPropagation()}
    target="_blank" 
    rel="noopener noreferrer"
  >
    View Live Demo →
  </a>
)}
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-blue-700 font-medium flex items-center hover:text-blue-800 transition"
        >
          {expanded ? 'Show Less' : 'Learn More'}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 ml-1 transition-transform ${expanded ? 'rotate-180' : 'rotate-0'}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {expanded && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
            <ul className="text-gray-600 space-y-2 mb-6">
              {bullets.map((point, i) => (
                <li key={i} className="flex items-start">
                  <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            {explanation && (
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Behind the Code:</h4>
                <p className="text-gray-600 italic">{explanation}</p>
              </div>
            )}
            
            {codeSnippet && (
              <div className="mt-4">
                <div className="bg-slate-800 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre><code>{codeSnippet}</code></pre>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  // Define all projects in an array for easier filtering
  const allProjects = [
    {
      id: 'vsi-swine',
      title: "A Landing Page for the Swine Division of VSI",
      description: "A simple landing page that is super mobile responsive, clean and user-friendly. Auto-deployed from the CLI using Netlify",
      image: vsiSwine,
      tags: ["HTML", "JavaScript", "TailWindCSS"],
      type: "Landing Page",
      link: "vsiswine.netlify.app",
      bullets: [
        'Deployed from CLI',
        'lightweight & Fast!',
        'Beautiful UI',
        'Seemlessly Responsive'
      ],
      explanation: " ",
      codeSnippet: ` 
                    `
    },
    {
      id: 'ad-intelligence',
      title: "Ad Intelligence Spy | A Chrome Extension for Ad Tracking",
      description: "Allows our marketing department to see what ad text, who is advertising and for what as they journey throughout the web. Excellent way to see what competitors are advertising for that is relevant to your work day",
      image: adIntelligence,
      tags: ["Chrome Extensions API", "JavaScript", "TailWindCSS"],
      type: "Browser Extension",
      link: "",
      bullets: [
        'Locally Stored Data',
        'In-Browser Dashboard Included',
        'Runs Silently in the Background',
        'Complete with Graphs'
      ],
      explanation: "This snippet is initializing the dashboard ",
      codeSnippet: `  function Dashboard() {
                        const [ads, setAds] = useState([]);
                        const [competitors, setCompetitors] = useState([]);
                        const [activeView, setActiveView] = useState('overview');
                        const [filters, setFilters] = useState({
                          platform: 'all',
                          dateRange: '7d'
                        });",
                    `
    },
    {
      id: 'qr-generator',
      title: "QR Code Generator Chrome Extension",
      description: "A modern browser extension framework that allows developers to extend Chrome's functionality with custom features accessible through the browser toolbar. Once it has been approved from the Chrome app store, I will include a link to it here.",
      image: qrCode,
      tags: ["Chrome Extensions API", "HTML", "CSS"],
      type: "Browser Extension",
      link: "",
      bullets: [
        'Automatic Tab QR Code Generation',
        'Custom Text / URL Input',
        'Export Options',
        'Advanced Customization'
      ],
      explanation: "This snippet is initializing the QR code on a new Chrome tab",
      codeSnippet: `if (chrome && chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (chrome.runtime.lastError) {
        console.error('Chrome API error:', chrome.runtime.lastError);
        return;
      }
      
      if (tabs && tabs[0] && tabs[0].url) {
        state.currentUrl = tabs[0].url;
        const displayText = tabs[0].title || tabs[0].url;
        elements.urlPreview.textContent = QR code generated for: {displayText.substring(0, 40)}{displayText.length > 40 ? '...' : ''};
        generateQR(state.currentUrl);`
    },
    {
      id: 'content-cannon',
      title: "Content Cannon Shopify Plugin",
      description: "Our marketing department needed this application and instead of running it on a server from the command line, I became a Shopify Partner and developed a plugin so users could interact with the technology directly within Shopify with no technical expertise required. The app essentially bridges the gap between static PDF documents and dynamic e-commerce content, with special focus on technical and safety documentation.",
      image: contentCannon,
      tags: ["React", "Polaris", "GraphQL", "Prisma", "Fly.io", "Docker", "PostgreSQL"],
      type: "Shopify App",
      link: "",
      bullets: [
        'Convert PDFs Directly into Shopify Pages or Blog Posts',
        'AI Powered Content Enhancement',
        'Smart Image Extraction & Management'
      ],
      explanation: "This snippet is from a portion of the AISEOGenerator file",
      codeSnippet: `{
        useEffect(() => {
          if (fetcher.data?.type === 'seo-ai' && fetcher.data.success) {
            try {
              const seoData = JSON.parse(fetcher.data.seoData);
              onSEOGenerated(seoData);
              setIsGenerating(false);
            } catch (e) {
              console.error('Failed to parse AI SEO data:', e);
              setIsGenerating(false);
            }
          } else if (fetcher.data?.errors?.length > 0 && fetcher.data.type === 'seo-ai') {
            alert(Error: {fetcher.data.errors[0].message});
            setIsGenerating(false);
          }
        }, [fetcher.data, onSEOGenerated]);

        const generateWithAI = () => {
          if (!title || !content) {
            alert('Please add title and content first');
            return;
          }

          setIsGenerating(true);
                                  },`
    },
    {
      id: 'comparison-tool',
      title: "Interactive Product Comparison Tool",
      description: "For this project, I developed a dynamic comparison web application using modern front-end technologies. Built with React and Tailwind CSS, the solution provides an interactive interface where users can compare & filter what they're looking for across various specifications and features.",
      image: comparisonChart,
      tags: ["React", "Tailwind CSS", "JSON"],
      type: "Web Application",
      link: "https://esdguys.com/pages/product-comparison-example",
      bullets: [
        'Built with React & Tailwind',
        'Embeds Directly into the Shopify Page',
        'Filtering & Search Without Page Load',
        'Product Data Saved in Separate JSON File so Employees Dont Have to Worry About Editing Products Around App Logic'
      ],
      explanation: "This snippet shows the basic JSON data structure that the table pulls from. Updating is easy and straightforward",
      codeSnippet: ` {
                              "id": 59,
                              "brand": "Motorola",
                              "model": "Razr 40",
                              "processor": "Snapdragon 7 Gen 1",
                              "ram": "8GB",
                              "storage": "256GB",
                              "display": "6.9-inch foldable AMOLED + 1.5-inch cover display",
                              "camera": "64MP main + 13MP ultrawide",
                              "battery": "4200 mAh",
                              "price": 699,
                              "releaseDate": "2023-06-01",
                              "rating": 4.0,
                              "inStock": true,
                              "colors": ["Sage Green", "Vanilla Cream", "Summer Lilac"],
                              "os": "Android 13",
                              "url": "/products/example-product",
                              "image": "motorola-razr-40.jpg"
                            },`
    },
    {
      id: 'inventory-dashboard',
      title: "Smart Stock: An Ecommerce Dashboard with AI-Style Summaries",
      description: "This interactive ecommerce dashboard helps operations and merchandising teams identify risks and opportunities across product inventory using AI-style insights.",
      image: invDash,
      tags: ["Python", "ChatGPT", "Altair", "File Processing"],
      type: "Data Dashboard",
      link: "https://inventory-dashboard.streamlit.app/",
      bullets: [
        'Built with Streamlit, Pandas, Altair',
        'Uses rule-based NLP logic to simulate GPT insights',
        'Future-ready for OpenAI or Ollama integration',
        'Clean deploy on Streamlit Cloud with custom design & branding'
      ],
      explanation: "This snippet shows the configuration and logging setup that enables robust error handling and user-customizable settings.",
      codeSnippet: `# Helper function 
                to categorize DOI
                def get_doi_status(dois):
                    status = []
                    for doi in dois:
                        if doi < 10:
                            status.append("🔴 Low")
                        elif doi > 180:
                            status.append("🟢 Overstock")
                        else:
                            status.append("🟡 Normal")
                    return status

                df['DOI_Status'] = get_doi_status(df['DOI'])`
    },
    {
      id: 'email-search',
      title: "AI-Powered Email Search Engine",
      description: "An intelligent tool that lets users search through archived emails using natural language queries, powered by a local LLM for complete privacy.",
      image: emailAppScreenshot,
      tags: ["Python", "Ollama", "Vector Search", "XML Processing"],
      type: "AI Application",
      bullets: [
        'Processes XML exports from Microsoft Outlook with robust error handling',
        'Uses local LLMs via Ollama and nomic-embed-text for complete privacy',
        'Smart contextual filtering and metadata-aware search capabilities',
        'Interactive HTML viewer with highlighted search results',
        'Completely offline functionality with no data sent to external services'
      ],
      explanation: "This snippet shows the configuration and logging setup that enables robust error handling and user-customizable settings.",
      codeSnippet: `# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    filename='email_processing.log'
)

def load_config():
    """Load configuration from config.ini or create with defaults."""
    config = configparser.ConfigParser()
    if os.path.exists('config.ini'):
        config.read('config.ini')
    else:
        # Default config
        config['DEFAULT'] = {
            'input_folder': 'xml_files',
            'output_base': 'parsed_output',
            'skip_duplicates': 'yes',
            'clean_signatures': 'yes',
            'parallel_workers': '4'
        }
        with open('config.ini', 'w') as f:
            config.write(f)
    return config`
    },
    {
      id: 'shopify-chatbot',
      title: "Shopify AI Product Chatbot",
      description: "A context-aware chatbot that integrates with product pages to answer customer questions in real-time, improving conversion rates and reducing support tickets.",
      image: chatbotScreenshot,
      tags: ["JavaScript", "OpenAI API", "Shopify Liquid", "LLM Integration"],
      type: "AI Application",
      link: "",
      bullets: [
        'Seamlessly integrates with Shopify product pages for a native experience',
        'Processes product details, specifications, and reviews to provide accurate answers',
        'Built-in rate limiting and moderation to prevent abuse and control API costs',
        'Analytics dashboard to track common questions and conversation outcomes',
        'Improved conversion rates by 18% on products with complex specifications'
      ],
      explanation: "This Liquid/JavaScript snippet demonstrates the clean integration with Shopify's product pages and the implementation of a responsive chat interface.",
      codeSnippet: `{% comment %}
  Streamlined Shopify Helper Bot with Loading Animation - Fixed Version
  For use in a Custom Liquid block on product pages, under the Add to Cart button
{% endcomment %}

{% if product %}
  <div id="product-helper-bot-{{ product.id }}" class="product-helper-section">
    <div class="helper-bot-title">
      <h4>Have questions about this product?</h4>
    </div>
    
    <div id="helper-bot-messages-{{ product.id }}" class="helper-bot-messages">
      <div class="bot-message">
        Hello! I can answer detailed questions about {{ product.title }}. What would you like to know?
      </div>
    </div>
    
    <div class="helper-bot-input-area">
      <input type="text" id="helper-bot-question-{{ product.id }}" placeholder="Ask me a question about this product!" onclick="event.stopPropagation();">`
    },
    {
      id: 'social-automation',
      title: "Social Media Content Automation",
      description: "An intelligent bot that selects Shopify products and creates engaging social media posts with unique content generated through AI.",
      image: socialMediaScreenshot,
      tags: ["Python", "OpenAI", "Social Media APIs", "Content Generation"],
      type: "Automation Tool",
      bullets: [
        'Intelligent scheduling system that optimizes posting times based on engagement data',
        'Integrates with Shopify API to dynamically select products based on inventory and sales metrics',
        'Generates diverse, SEO-optimized social content using OpenAI GPT models',
        'Automated posting to multiple platforms including Facebook, Instagram, and Twitter',
        'Reduced content creation time by 85% while improving engagement metrics'
      ],
      explanation: "This code snippet shows how the system connects to Shopify's API to fetch product data that will be used for content generation.",
      codeSnippet: `const axios = require('axios');

const shopifyUrl = 'https://your-store.myshopify.com/admin/api/2023-04/products.json';
const accessToken = 'YOUR_SHOPIFY_API_TOKEN';

async function fetchProducts() {
  try {
    const response = await axios.get(shopifyUrl, {
      headers: {
        'X-Shopify-Access-Token': accessToken,
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data.products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}`
    },
    {
      id: 'rewrite-engine',
      title: "Re-Write Engine",
      description: "An automated content transformation pipeline that converts promotional PDFs into uniquely styled blog posts, published directly to Shopify using AI.",
      image: rewriteEngine,
      tags: ["Python", "OpenAI API", "Shopify API", "Content Automation"],
      type: "Automation Tool",
      bullets: [
        "Processes folders of promotional PDFs through a streamlined pipeline",
        "Leverages OpenAI's ChatGPT API to rewrite content in customizable brand voices",
        "Applies consistent styling and formatting to ensure brand compliance",
        "Automatically publishes to Shopify blogs with appropriate tags and excerpts",
        "Reduces content creation time by 85% while maintaining quality and uniqueness"
      ],
      explanation: "This code snippet demonstrates the final stage of the pipeline, where the transformed content is posted to Shopify's API with proper authentication and formatting.",
      codeSnippet: `// Shopify Blog Post Creation Function
const axios = require('axios');
require('dotenv').config();

async function postToShopify(articleData) {
  const shopName = process.env.SHOPIFY_SHOP_NAME;
  const accessToken = process.env.SHOPIFY_ACCESS_TOKEN;
  const apiVersion = '2023-07';
  const blogId = process.env.SHOPIFY_BLOG_ID;
  
  const endpoint = \`https://\${shopName}.myshopify.com/admin/api/\${apiVersion}/blogs/\${blogId}/articles.json\`;
  
  try {
    const payload = {
      article: {
        title: articleData.title,
        author: articleData.author || 'ReWrite Engine',
        body_html: articleData.body_html,
        published: true,
        tags: articleData.tags.join(', '),
        summary_html: articleData.excerpt
      }
    };
    
    console.log(\`Publishing article: "\${articleData.title}" to Shopify...\`);
    
    const response = await axios.post(endpoint, payload, {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': accessToken
      }
    });
    
    console.log(\`✓ Successfully published article ID: \${response.data.article.id}\`);
    return response.data;
    
  } catch (error) {
    console.error('Error publishing to Shopify:', error.response?.data || error.message);
    throw error;
  }
}`
    }
  ];

  // Get unique technologies and types
  const allTechnologies = [...new Set(allProjects.flatMap(p => p.tags))].sort();
  const allTypes = [...new Set(allProjects.map(p => p.type))].sort();

  // Filter projects
  const filteredProjects = allProjects.filter(project => {
    const techMatch = selectedTech === 'All' || project.tags.includes(selectedTech);
    const typeMatch = selectedType === 'All' || project.type === selectedType;
    return techMatch && typeMatch;
  });

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Innovation in Action</h1>
          <p className="text-xl max-w-3xl mx-auto mb-4 text-blue-100">
            From concept to implementation, these projects showcase my ability to identify opportunities
            and build effective solutions.
          </p>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <blockquote className="border-l-4 border-blue-700 pl-4 py-2 italic text-gray-700">
            As an eCommerce Director, I believe in leading by example. These projects represent my philosophy that 
            the best leaders understand both the strategic vision and how to execute it technically. Each project 
            started as an opportunity that I identified, prototyped, and then refined with my team.
          </blockquote>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Technology</label>
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Technologies</option>
                  {allTechnologies.map(tech => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Types</option>
                  {allTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {(selectedTech !== 'All' || selectedType !== 'All') && (
              <button
                onClick={() => {
                  setSelectedTech('All');
                  setSelectedType('All');
                }}
                className="self-end px-4 py-2 text-sm text-blue-700 hover:text-blue-800 transition"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Results count */}
          <p className="text-center text-gray-600 mb-8">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
                bullets={project.bullets}
                explanation={project.explanation}
                codeSnippet={project.codeSnippet}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Technologies & Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Front-End</h3>
              <p className="text-gray-600 text-sm">React, Vue, JavaScript, HTML/CSS, Tailwind</p>
            </div>
            
            <div className="p-4">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Back-End</h3>
              <p className="text-gray-600 text-sm"> Python, API Integration, Database Design</p>
            </div>
            
            <div className="p-4">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">AI & ML</h3>
              <p className="text-gray-600 text-sm">OpenAI APIs, Ollama, Vector Search, LLM Integration</p>
            </div>
            
            <div className="p-4">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">eCommerce</h3>
              <p className="text-gray-600 text-sm">Shopify, Analytics, Magento, SEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Could Your Company Use Someone Like Me?</h2>
          <p className="text-xl mb-8">
            I'm always open to discussing new opportunities and interesting challenges.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition shadow-lg">
            Let's Talk
          </a>
        </div>
      </section>
    </div>
  );
}