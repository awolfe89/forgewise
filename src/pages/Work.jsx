// pages/Work.jsx
import { useState } from 'react';
import AAH_logo from '../assets/AAH_logo.jpg';
import Grubs from '../assets/grubs.png';
import PPV from '../assets/ppv_logo.jpg';
import TriLogo from '../assets/triLogo.png';
import WnLogo from '../assets/wnLogo.png';
import Voltech from '../assets/voltech.png';
import Technimark from '../assets/technimark.png';
import ESD from '../assets/esdguys.png';
import Yo from '../assets/yo.png';
import Neptune from '../assets/neptune.png'



function WorkCard({ title, subtitle, subtitle2, description, highlights, mainDescription, image, link }) {
  const [expanded, setExpanded] = useState(false);
  const [showImage, setShowImage] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow p-6 border border-gray-200 transition-all duration-300 cursor-pointer mb-8"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {image && (
          <div className="md:w-1/3">
            <img
              src={image}
              alt={`${title} Screenshot`}
              className="rounded mb-4 border max-h-48 object-contain mx-auto cursor-zoom-in"
              onClick={(e) => {
                e.stopPropagation();
                setShowImage(true);
              }}
            />
            {showImage && (
              <div
                className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                onClick={() => setShowImage(false)}
              >
                <img src={image} alt="Full Preview" className="max-w-full max-h-full rounded shadow-lg" />
              </div>
            )}
          </div>
        )}
        <div className={image ? "md:w-2/3" : "w-full"}>
          <h3 className="text-2xl font-semibold mb-1 text-blue-600">
            {title} {expanded ? '▲' : '▼'}
          </h3>
          <p className="text-lg text-gray-600 mb-2">{subtitle}</p>
          <p className="text-lg text-gray-600 mb-2">{subtitle2}</p>
          <h4 className="text-md font-semibold mb-2 mt-9 text-gray-800">Key Achievements:</h4>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                {highlights.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
          
          
          {link && (
            <a 
              href={link} 
              className="inline-block mt-6 text-blue-600 hover:text-blue-800 font-medium mb-3 border-b border-blue-600 hover:border-blue-800 transition-colors"
              onClick={(e) => e.stopPropagation()}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit Website →
            </a>
          )}
          
          {expanded && highlights && (
            <div className="mt-4">
              <p className="text-gray-700 mb-3">
            {mainDescription}
          </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Portfolio Showcase 🌅</h2>
      <blockquote className="bg-gray-100 p-6 rounded-md max-w-3xl mx-auto mb-8 text-center text-gray-700 text-lg">
        <p>
          From places I've worked, to projects, demos & companies I've helped along the way 
        </p>
        <br />
        
      </blockquote>
      <p className="text-sm text-gray-500 italic text-center mb-12">
        Click on any card to expand and see more details about each company.
      </p>
      
      <div className="space-y-8">
       {/*
          <WorkCard
          title="Armor Animal Health"
          subtitle="B2B/B2C Agricultural, Pharmaceutical Distributor | Magento 2 Enterprise"
          subtitle2="Led the complete Magento redesign of this agrigultural pharmacy & retailer, focusing on creating a more cohesive shopping experience that showcases their huge selection in a way customers can navigate."
          image={AAH_logo}
          link="https://armoranimalhealth.com"
          highlights={[
            "Sales grew {in the millions},  an increase of 88% over three years",
            "117% increase in sessions and a 137% increase in active users",
            "Built A.I. Integrations for marketing automation",
            "Despite a slight dip in engagement rate and session length, overall interaction volume nearly doubled, with event count up 88%",
            "Optimized site speed resulting in 25% reduction in bounce rate"
          ]}
          mainDescription={"When I took over management of this ecommerce site, sales were flat and the website was in disarray, with a sprawling 6,000–8,000 product catalog and no meaningful structure. I led a full-scale reorganization, creating a 100+ category taxonomy and assigning hundreds of product attributes to enable advanced filtering and a vastly improved shopping experience. I used SEO tools to monitor keyword rankings and benchmark competitors, while also collaborating on marketing materials and optimizing our social presence. To stretch our budget, I hired and managed offshore talent to scale content and operations efficiently. These combined efforts led to a 231% YoY increase in sales and 192% user growth from 2023 to 2024 — all without paid ads. In 2025, I developed and launched intelligent, six-figure ad campaigns designed to further accelerate traffic and capture market share."}
        /> */}
        <WorkCard
          title="Technimark-Inc"
          subtitle="B2B/B2C Industrial/Electronics Equipment Distributor | Magento"
          subtitle2="I spearheaded a full-scale digital transformation initiative that drove a 35% increase in online revenue and a 28% lift in conversion rates through strategic platform and UX optimization"
          image={Technimark}
          link="https://technimark-inc.com/"
          highlights={[
            "Increased order volume by 200% within 2.5 years",
            "Managed ERP integration",
            "Implemented PPC ad campaigns & reported on their performance to leadership",
            "Implemented categorization and product attribution for over 8,000 products",
            "Led overseas teams for marketing & content efforts"
          ]}
          mainDescription={"I spearheaded a full-scale digital transformation initiative that drove a 35% increase in online revenue and a 28% lift in conversion rates through strategic platform and UX optimization. Partnering closely with executive leadership, I developed a data-driven ecommerce roadmap aligned with business goals and led cross-functional collaboration across product marketing, sales, and content teams to create high-impact digital assets. I also managed a development team to implement UX/UI improvements that reduced cart abandonment by 22% and boosted average order value by 18%. In parallel, I launched a comprehensive SEO strategy that improved organic visibility by 45%, resulting in a 65% increase in non-paid traffic and first-page rankings for over 80 industry-specific keywords. I designed and deployed a robust digital media strategy with intelligent budget allocation, A/B testing, and bidding optimization, while also building a custom in-house tool using a locally trained LLM to extract insights from large datasets. These combined efforts generated over $600K in incremental annual revenue and positioned the brand for scalable, sustainable growth."}
        />
        <WorkCard
          title="HVACNet"
          subtitle="B2B/B2C Industrial Equipment Distributor | Magento 1 & Magento 2"
          subtitle2="I led the successful migration from Magento 1.x to Magento 2.0 — a technically complex project that was executed with minimal disruption and delivered major performance and usability gains."
          image={Yo}
          link="https://younits.com/"
          highlights={[
            "Successfully managed a migration from Magento 1 to Magento 2",
            "Coordinated integrated digital marketing strategy across SEO, PPC, social media, email marketing",
            "Streamlined the equipment selection process by implementation of configurable products",
            "Led website maintenance initiatives focused on technical SEO improvements and conversion rate optimization, resulting in 30% increase in organic traffic"
          ]}
          mainDescription={"During my time with the company (now under new ownership), I led the successful migration from Magento 1.x to Magento 2.0 — a technically complex project that was executed with minimal disruption and delivered major performance and usability gains. I coordinated cross-functional marketing efforts across SEO, PPC, email, social media, and creative teams to deliver a consistent and optimized customer experience. I introduced a structured A/B testing program that uncovered key conversion improvements, including a 25% lift in checkout completions. Additionally, I partnered with product and content teams to enhance product presentation and technical content, and led SEO-focused maintenance initiatives that increased organic traffic by 30%. I also delivered detailed performance reporting to stakeholders, identifying KPIs and opportunities that drove continued growth. While the company has since changed hands and my original colleagues have moved on, the systems and strategies I implemented helped lay the foundation for scalable ecommerce success."}
        />
        <WorkCard
          title="GrubsBootsUSA"
          subtitle="Outdoor Footwear Retailer | Shopify"
          subtitle2="Helped with a redesign & consulted with marketing that increased web traffic by a whopping 4,000% and increased YoY sales 551% for the last full month at the time of this writing"
          image={Grubs}
          link="https://grubsbootsusa.com"
          highlights={[
            "New Theme, layout, imagery, categories",
            "SEO Roadmao strategized & implemented",
            "Used A.I to create automated marketing & social media posts",
            "Implemented a robust PPC campaign",
            
          ]}
          mainDescription={"I re-designed this website and consulted with marketing to start a campaign that resulted in a 4,000% increase in web traffic and a 551% year-over-year sales increase during the most recent full month reported. This transformation was driven by strategic UX improvements, refined category architecture, and coordinated campaign execution across organic and paid channels — all built to scale and convert. The outcome not only revitalized the customer experience but positioned the business for sustained, high-growth performance."}
        />
        
        <WorkCard
          title="PrimePet&Vet"
          subtitle="Pet & Veterinary Retailer | Shopify"
          subtitle2="Ensured / maintained site functionality, optimizing user experience, and ensuring product data accuracy across thousands of products"
          image={PPV}
          link="https://primepetandvetsupply.com/"
          highlights={[
            
          ]}
          mainDescription={"This eCommerce store serves the veterinary and pet care markets. My role included maintaining site functionality, optimizing user experience, and ensuring product data accuracy across a broad catalog. While the business is still evolving, I’ve contributed to improving navigation, category structure, and merchandising consistency to support long-term scalability. My ongoing focus is on performance tuning, SEO foundations, and ensuring the platform is positioned to grow traffic, improve conversions, and serve both B2B and DTC customers in a highly specialized vertical."}
        />

{/* "Managed day-to-day operations and performance",
            "Maintained product catalog integrity, ensuring accurate data, consistent taxonomy, and SEO-friendly formatting across hundreds of SKUs",
            "Implemented a member portal allowing customers to easily manage their subscriptions",
            "Implemened UX and merchandising improvements to enhance navigation, category structure, and customer experience",
            "Set up long-term scalability through ongoing platform optimization, foundational SEO efforts, and technical maintenance" */}
        <WorkCard
          title="ESDGuys"
          subtitle="B2C Electronics Manufacturing Supply | Shopify"
          description="At the request of the business owner, I helped launch a brand-new ecommerce website to complement the company’s existing online presence"
          image={ESD}
          link="https://esdguys.com/"
          highlights={[
            "Designed to be a complement to the other properties",
            "Gave us a steamlined platform on which to try test new ideas",
            "Allowed us to implement new technologies quicker than on the main property",
            "Gave us the opportunity to work with new vendors and try new business models (drop shipping, flash sales etc.)"
    
          ]}
          mainDescription={"At the request of the business owner, I helped launch a brand-new ecommerce website to complement the company’s existing online presence. While still in its early stages, this second site was designed to offer a refined, conversion-friendly user experience and serve as a scalable platform for future growth. I handled site structure, design execution, and content integration — delivering a clean, professional storefront that aligns with the brand’s identity and is built to evolve as the business scales."}
        />
      </div>

      <div className="space-y-8">
     {/* <h2 className="text-4xl font-bold mb-6 mt-9 text-center text-gray-800"> Beyond eCommerce 🛫</h2>
      <blockquote className="bg-gray-100 p-6 rounded-md max-w-3xl mx-auto mb-8 text-center text-gray-700 text-lg">
        <p>
         When not working on eCommerce, I also like to help small & local businesses with their online presence. Here is a sampling of websites I have created for businesses. 
        </p>
      </blockquote> */}

      <div className="space-y-8"> 
      <WorkCard
          title="Wet Noses Grooming Inc"
          subtitle="Local Service, Mobile Dog Grooming | Wordpress"
          description="Built this site from the ground up. They now have too much business to handle! "
          image={WnLogo}
          link="https://wetnosesgrooming.com/"
          highlights={[
            "Was able to partner with Amazon & the Chicago Wolves",
            "Worked with contacts to create the logo",
            "Built the site from scratch",
            "Conducted all print & digital marketing at start up",
            "They don't have enough employees to handle all the business"
          ]}
        />

        <WorkCard
          title="Tri-County Garage Door Inc"
          subtitle="Service Installer, Sales | Wordpress"
          description="Feeling abandoned by their previous 'tech guy', I helped this company redesign their entire website starting with a fresh logo & color scheme for their entire company"
          image={TriLogo}
          link="https://tri-countydoor.com/"
          highlights={[
            "Ground-Up redesign of their website starting from scratch",
            "Used design services like adobe.color to offer them potential design choices",
            "Put them in touch with a designer I know for a new, fresh logo",
            "Implemented SEO tools, provided a roadmap and helped with their email marketing & Google Business Issues",
            "Applied their chosen color scheme to the logo and the rest of their website design",
            "Traffic is up 4x what it was"
          ]}
        />

        <WorkCard
          title="Voltech Electric"
          subtitle="Electrician | Wordpress"
          description="This company needed help troubleshooting various hurdles with their site implementation. I went on to fix those, as well as redesign their website"
          image={Voltech}
          link="https://voltechelectric.net/"
          highlights={[
            "Redesigned Website",
            "Fixed Implementation Issues",
            "Laid out a roadmap for future SEO Success"
          ]}
        />
        <WorkCard
          title="NeptuneSEO"
          subtitle="Digital Agency | Wordpress"
          description="This company needed help troubleshooting various hurdles with their site implementation. I went on to fix those, as well as redesign their website"
          image={Neptune}
          link=""
          highlights={[
            "Designed Website",
            "Created initial marketing materials",
            "Laid out a roadmap for future SEO Success"
          ]}
        />
      </div>
        </div>
    </div>
  );
}