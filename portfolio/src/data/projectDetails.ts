import { ProjectDetails } from '../components/ProjectModal';
import { DollarSign, TrendingUp, Clock, Target, MapPin, Building, Thermometer, Database, Film, Eye, Percent, GraduationCap, Zap, Layers, Briefcase, FileText, Code2, Gamepad2 } from 'lucide-react';

/**
 * Detailed project data for modal views.
 * Each project has an `id` that matches the project title for lookup.
 */
export const projectDetails: Record<string, ProjectDetails> = {
  'catchbase': {
    id: 'catchbase',
    title: 'Catchbase',
    subtitle: 'AI-Powered Apple Ads Optimization with Reinforcement Learning',
    category: 'Reinforcement Learning',
    period: '2022 - Present',
    client: 'Adobe, TripAdvisor, Pinger, onX & more',
    tags: [
      'Reinforcement Learning',
      'PPO',
      'Simulation',
      'Python',
      'Stable Baselines3',
      'OpenAI Gym',
      'Google Cloud Platform',
      'MLflow',
      'FastAPI',
      'Docker',
    ],
    summary: `Catchbase is an Apple Search Ads optimization platform I built at Phiture. It uses reinforcement learning to automatically manage bidding across thousands of keywords, trained in a custom simulation environment I developed. The system manages over $500K in monthly ad spend for clients including Adobe and TripAdvisor.`,
    metrics: [
      {
        label: 'Monthly Ad Spend',
        value: '$500K+',
        icon: DollarSign,
      },
      {
        label: 'CPI Reduction',
        value: '-23%',
        icon: TrendingUp,
      },
      {
        label: 'Decisions/Day',
        value: '10K+',
        icon: Clock,
      },
      {
        label: 'Active Campaigns',
        value: '200+',
        icon: Target,
      },
    ],
    techStack: [
      {
        category: 'Reinforcement Learning',
        items: ['PPO', 'Stable Baselines3', 'OpenAI Gym', 'Custom Simulation'],
      },
      {
        category: 'Backend',
        items: ['Python', 'FastAPI', 'SQLAlchemy', 'Celery'],
      },
      {
        category: 'Infrastructure',
        items: ['GCP', 'Cloud Run', 'BigQuery', 'Cloud Scheduler'],
      },
      {
        category: 'MLOps',
        items: ['MLflow', 'Docker', 'GitHub Actions'],
      },
    ],
    sections: [
      {
        title: 'Why Reinforcement Learning?',
        content: `
          <p>Apple Search Ads optimization is a sequential decision-making problem under uncertainty. You're adjusting bids across thousands of keywords daily, each with different competitive dynamics, and there's no ground truth for what the "optimal" bid should be.</p>
          <p class="mt-4">Rule-based systems hit a ceiling quickly. Supervised learning doesn't fit because there's no label. RL made sense: instead of predicting outcomes, the agent learns a policy that improves based on actual results.</p>
        `,
      },
      {
        title: 'Building the Simulation',
        content: `
          <p>You can't train RL agents on live campaigns - it's too slow and too risky. So I built a Gym-compatible simulation that models Apple Ads auction dynamics: bidding mechanics, keyword-level metrics, budget constraints, and competitor behavior.</p>
          <p class="mt-4">This was the hardest part of the project. The simulation needed enough realism for policies to transfer to production, but had to run fast enough to train millions of episodes. I added curriculum learning so the agent progresses from simple to complex scenarios.</p>
        `,
        media: [
          {
            type: 'gif',
            src: '/projects/catchbase/simulation-example-one-keyword.gif',
            alt: 'Simulation running for a single keyword',
            caption: 'Simulation environment during a training episode',
          },
        ],
      },
      {
        title: 'State & Reward Design',
        content: `
          <p>The observation space went through many iterations. The agent needs enough information to make good decisions, but too many features slows learning. The final design includes keyword performance signals, historical trends, and campaign-level context with careful normalization to prevent training instabilities.</p>
          <p class="mt-4">The reward function was equally challenging. The agent needs to balance volume (installs) against efficiency (CPI), explore new strategies without wasting budget, and avoid getting stuck in local optima. Small changes in reward shaping cause large behavioral shifts, so this required extensive experimentation.</p>
        `,
      },
      {
        title: 'Results',
        content: `
          <p>Compared to rule-based systems, the RL agent delivers 20-30% CPI reductions and 25-35% volume increases, with faster adaptation to market changes. The system has been running in production since 2024.</p>
          <p class="mt-4">Clients include <strong>Adobe</strong>, <strong>TripAdvisor</strong>, <strong>Pinger</strong>, and <strong>onX</strong>. I presented this work at the 2024 ASO Conference alongside Adobe's growth team.</p>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/catchbase/training_curves.png',
            alt: 'Training curves',
            caption: 'Training run showing reward improvement over episodes',
          },
          {
            type: 'image',
            src: '/projects/catchbase/aso-conference-2024-presentation.jpg',
            alt: 'Presenting Catchbase at ASO Conference 2024',
            caption: 'Presenting Catchbase at the 2024 ASO Conference alongside Adobe\'s growth team',
          },
        ],
      },
      {
        title: 'Key Takeaways',
        content: `
          <ul class="list-disc pl-6 space-y-1">
            <li>The simulation environment matters more than the algorithm. Most of my time went into building a realistic, fast environment.</li>
            <li>Reward shaping is where the real work happens. Small changes cause large behavioral shifts.</li>
            <li>Production RL needs guardrails. Spending limits and anomaly detection are essential.</li>
          </ul>
        `,
      },
    ],
    links: {
      live: 'https://catchbase.ai/',
    },
  },
  
  'taqarib': {
    id: 'taqarib',
    title: 'Storm Daniel Damage Assessment',
    subtitle: 'USAID Disaster Risk Analysis for Eastern Libya',
    category: 'Data Analysis',
    period: 'July - September 2024',
    client: 'USAID',
    tags: [
      'Geospatial Analysis',
      'Python',
      'Google Earth Engine',
      'BigQuery',
      'Satellite Data',
      'Climate Analysis',
      'Disaster Response',
      'GIS',
      'Data Visualization',
    ],
    summary: `A deeply personal project where I collaborated with my sister, a political scientist, to support USAID's disaster preparedness initiative. Nearly a year after Storm Daniel devastated Eastern Libya in September 2023, we conducted a retrospective analysis to assess the damage, evaluate disaster readiness, and develop policy recommendations to prevent and mitigate future catastrophes. I led the geospatial and climate analysis using satellite imagery and municipal data, while my sister conducted policy research, stakeholder interviews, and authored the final report.`,
    metrics: [
      {
        label: 'Municipalities Analyzed',
        value: '5',
        icon: MapPin,
      },
      {
        label: 'Buildings Assessed',
        value: '3,900+',
        icon: Building,
      },
      {
        label: 'Project Duration',
        value: '3 months',
        icon: Clock,
      },
      {
        label: 'Years of Climate Data',
        value: '23',
        icon: Thermometer,
      },
    ],
    techStack: [
      {
        category: 'Geospatial',
        items: ['GeoPandas', 'Shapely', 'Folium', 'Google Earth Engine'],
      },
      {
        category: 'Data',
        items: ['Python', 'Pandas', 'NumPy', 'BigQuery'],
      },
      {
        category: 'Visualization',
        items: ['Plotly', 'Matplotlib', 'Seaborn'],
      },
      {
        category: 'Sources',
        items: ['NASA MODIS', 'Copernicus EMS', 'CHIRPS', 'OpenStreetMap'],
      },
    ],
    sections: [
      {
        title: 'Why This Project Matters to Me',
        content: `
          <p>I am from Libya, and when Storm Daniel struck Eastern Libya in September 2023, it hit close to home. The city of Derna was devastated: two dams collapsed, sending walls of water through the city and claiming thousands of lives.</p>
          <p class="mt-4">Nearly a year later, when the opportunity arose to contribute to USAID's disaster preparedness initiative, I knew I had to be involved. The goal was not just to document the damage, but to analyze what went wrong, assess readiness gaps, and develop policy recommendations to prevent future tragedies.</p>
          <p class="mt-4">I collaborated with my sister, <strong>a political scientist</strong>, combining our complementary skills. I led the <strong>data analysis and geospatial mapping</strong>, while she conducted <strong>policy research, field interviews, and coordination</strong> with local stakeholders.</p>
          <p class="mt-4">Working together on something meaningful for our home country made this one of the most rewarding projects of my career.</p>
        `,
      },
      {
        title: 'Infrastructure Damage Assessment',
        content: `
          <p>Using <strong>Copernicus Emergency Management Service</strong> satellite data combined with OpenStreetMap infrastructure layers, I assessed the damage across five municipalities:</p>
          <div class="mt-4 overflow-x-auto">
            <table class="min-w-full border border-neutral-200 rounded-lg overflow-hidden">
              <thead class="bg-neutral-100">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Municipality</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Roads Affected</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Damage %</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-200">
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Susah</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">387 of 394</td>
                  <td class="px-4 py-3 text-sm text-red-600 font-semibold">98.2%</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Albayda</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">1,671 of 3,587</td>
                  <td class="px-4 py-3 text-sm text-orange-600 font-semibold">46.6%</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Derna</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">437 of 1,703</td>
                  <td class="px-4 py-3 text-sm text-amber-600 font-semibold">25.6%</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Shahaat</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">52 of 756</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">6.8%</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/taqarib/flood-path-Susah.png',
            alt: 'Flood path overlay in Susah showing 98% of roads affected',
            caption: 'Susah flood analysis: Purple overlay shows flood extent, with 98.2% of roads directly in the flood path',
          },
        ],
      },
      {
        title: 'Building Damage Classification',
        content: `
          <p>I classified building damage in Derna at the <strong>Mahallah (neighborhood) level</strong>, categorizing structures as <strong>Damaged</strong> or <strong>Destroyed</strong> based on satellite assessment data from Copernicus EMS.</p>
          <p class="mt-4">The Al-Jubailah and Al-Bilad neighborhoods bore the brunt of the destruction, with over <strong>2,100 buildings</strong> affected in these two areas alone.</p>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/taqarib/damaged_vs_destroyed_derna.png',
            alt: 'Bar chart showing building damage by neighborhood in Derna',
            caption: 'Building damage distribution across Derna neighborhoods: Al-Jubailah and Al-Bilad were most severely impacted',
          },
        ],
      },
      {
        title: 'Climate Change Analysis',
        content: `
          <p>I analyzed <strong>23 years of climate data</strong> (2000-2023) using NASA MODIS and CHIRPS datasets to understand the environmental context of the disaster:</p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Precipitation increased 17-22%</strong> across all affected municipalities compared to the baseline period</li>
            <li><strong>Winter temperatures rose 0.2-0.6°C</strong>, while summers showed slight cooling</li>
            <li>Despite lower average temperatures, <strong>extreme heat days increased significantly</strong>, revealing a complex climate signal</li>
            <li><strong>Vegetation health (NDVI) improved 10%</strong>, likely due to increased rainfall</li>
          </ul>
          <p class="mt-4">This climate context was crucial for the policy recommendations, highlighting the need for improved infrastructure to handle increasingly variable precipitation patterns.</p>
        `,
      },
      {
        title: 'Interactive Dashboards',
        content: `
          <p>I built interactive dashboards to make the data accessible to USAID and local stakeholders, enabling them to explore population distribution, infrastructure conditions, and damage assessments at multiple administrative levels.</p>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/taqarib/Dashboard-1.png',
            alt: 'Population overview dashboard with demographic charts and map',
            caption: 'Population Overview: Interactive dashboard showing 6.59M population across 22 districts, 100 municipalities, and 646 Mahallahs',
          },
          {
            type: 'image',
            src: '/projects/taqarib/Dashboard-2.png',
            alt: 'Critical infrastructure dashboard showing road conditions',
            caption: 'Infrastructure Analysis: 253.7K roads and streets mapped with surface type and condition data',
          },
        ],
      },
      {
        title: 'Data Challenges & Solutions',
        content: `
          <p>Working with Libyan data presented unique challenges that required creative solutions:</p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li><strong>No recent census:</strong> Libya's last official census was in 2006. I combined OCHA estimates with historical data to create the most accurate population picture possible.</li>
            <li><strong>Inconsistent boundaries:</strong> No standardized administrative boundaries exist at the Mahallah level. I worked with field data from USAID agents to construct accurate mappings.</li>
            <li><strong>Fragmented infrastructure data:</strong> I relied heavily on OpenStreetMap contributions, validating against satellite imagery where possible.</li>
          </ul>
          <p class="mt-4">These challenges reinforced the importance of documenting data lineage and being transparent about limitations, skills that apply to any data science work.</p>
        `,
      },
      {
        title: 'Impact & Recommendations',
        content: `
          <p>The analysis informed policy recommendations in the final USAID report, including:</p>
          <ol class="list-decimal pl-6 mt-4 space-y-2">
            <li><strong>Standardize administrative boundaries</strong> through a central authority to enable better coordination</li>
            <li><strong>Invest in remote sensing</strong> to overcome ground-based data collection challenges</li>
            <li><strong>Strengthen local data collection</strong> through training and standardized tools</li>
            <li><strong>Promote open data initiatives</strong> to improve transparency and accessibility</li>
          </ol>
          <p class="mt-4">This project demonstrated how data science can directly support humanitarian response and policy-making. This is exactly the kind of meaningful impact I want my work to have.</p>
        `,
      },
    ],
    links: {
      // github: 'https://github.com/moe221/Taqarib-Project', // Add when ready
    },
  },

  'berlin-apartment-predictor': {
    id: 'berlin-apartment-predictor',
    title: 'Berlin Apartment Rental Price Predictor',
    subtitle: 'ML-Powered Rental Price Prediction System',
    category: 'Regression',
    period: '2020',
    tags: [
      'Python',
      'Random Forest',
      'scikit-learn',
      'Streamlit',
      'Feature Engineering',
      'GridSearchCV',
      'Regression',
      'Real Estate',
      'Data Visualization',
    ],
    summary: `A rental price prediction tool for the Berlin market. I used 300,000+ listings scraped from Immobilienscout24 (2018-2020) to train a Random Forest regressor. The final model explains 87% of the variance in rental prices (R² = 0.87) with a mean absolute error of €167. The project covers the full ML workflow from data collection and cleaning to model building and deployment.`,
    metrics: [
      {
        label: 'R² Score',
        value: '0.87',
        icon: TrendingUp,
      },
      {
        label: 'Mean Absolute Error',
        value: '€167',
        icon: Target,
      },
      {
        label: 'Training Data',
        value: '300K+ listings',
        icon: Database,
      },
      {
        label: 'Districts Covered',
        value: '24',
        icon: MapPin,
      },
    ],
    techStack: [
      {
        category: 'Machine Learning',
        items: ['Random Forest', 'Linear Regression', 'Lasso', 'GridSearchCV'],
      },
      {
        category: 'Data Processing',
        items: ['Python', 'Pandas', 'NumPy', 'scikit-learn'],
      },
      {
        category: 'Visualization',
        items: ['Matplotlib', 'Seaborn'],
      },
      {
        category: 'Deployment',
        items: ['Streamlit'],
      },
    ],
    sections: [
      {
        title: 'Project Overview',
        content: `
          <p>Berlin's rental market is tricky to navigate. Prices swing wildly depending on district, apartment type, and amenities. I wanted to build something practical: a tool that predicts rental prices based on apartment features.</p>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/apartment-predictor/Berlin-map1.png',
            alt: 'Berlin Districts Map',
            caption: 'Geographic distribution of rental listings across Berlin districts',
          },
        ],
      },
      {
        title: 'Data Cleaning',
        content: `
          <p>The raw data was messy. Here's what I did:</p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Filtered to Berlin:</strong> The original dataset covered all of Germany. I kept only Berlin listings.</li>
            <li><strong>Removed duplicates:</strong> Apartments get re-listed constantly. I deduplicated based on address and features.</li>
            <li><strong>Handled missing values:</strong> Dropped rows missing critical fields, imputed others where it made sense.</li>
            <li><strong>Parsed text fields:</strong> Pulled out structured info (like required documents) from free-text descriptions.</li>
            <li><strong>Engineered features:</strong> Created building age from construction year, one-hot encoded districts (24) and apartment types (9).</li>
          </ul>
        `,
      },
      {
        title: 'Exploratory Data Analysis',
        content: `
          <p>The EDA surfaced some clear patterns:</p>
          <div class="mt-4 overflow-x-auto">
            <table class="min-w-full border border-neutral-200 rounded-lg overflow-hidden">
              <thead class="bg-neutral-100">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Feature</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Correlation with Price</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Key Finding</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-200">
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Living Space (m²)</td>
                  <td class="px-4 py-3 text-sm text-green-600 font-semibold">+0.82</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">Strongest predictor by far</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Location (District)</td>
                  <td class="px-4 py-3 text-sm text-green-600 font-semibold">High variance</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">Mitte and Charlottenburg are the most expensive districts</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Balcony</td>
                  <td class="px-4 py-3 text-sm text-blue-600 font-semibold">+€50-80</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">Adds measurable value</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Lift (Elevator)</td>
                  <td class="px-4 py-3 text-sm text-blue-600 font-semibold">+€40-60</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">Especially in older buildings</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Building Age</td>
                  <td class="px-4 py-3 text-sm text-orange-600 font-semibold">-0.15</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">Newer buildings slightly more expensive</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/apartment-predictor/heatmap.png',
            alt: 'Feature Correlation Heatmap',
            caption: 'Correlation matrix showing feature relationships',
          },
          {
            type: 'image',
            src: '/projects/apartment-predictor/boxplot-price-by-district.png',
            alt: 'Price Distribution by District',
            caption: 'Rental prices vary significantly across Berlin districts',
          },
        ],
      },
      {
        title: 'Model Comparison',
        content: `
          <p>I tested three models:</p>
          <div class="mt-4 overflow-x-auto">
            <table class="min-w-full border border-neutral-200 rounded-lg overflow-hidden">
              <thead class="bg-neutral-100">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Model</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">R² Score</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">MAE (€)</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">RMSE (€)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-200">
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">Linear Regression</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">0.85</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">195</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">278</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">Lasso Regression</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">0.85</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">195</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">278</td>
                </tr>
                <tr class="bg-green-50">
                  <td class="px-4 py-3 text-sm font-semibold text-neutral-900">Random Forest ✓</td>
                  <td class="px-4 py-3 text-sm font-semibold text-green-600">0.87</td>
                  <td class="px-4 py-3 text-sm font-semibold text-green-600">167</td>
                  <td class="px-4 py-3 text-sm font-semibold text-green-600">259</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-4">Tuned with GridSearchCV: 300 trees, max_features='sqrt'.</p>
        `,
      },
      {
        title: 'Feature Selection with VIF',
        content: `
          <p>Before modeling, I checked for multicollinearity using VIF (Variance Inflation Factor):</p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Dropped noRooms:</strong> High VIF with livingSpace. They're obviously correlated.</li>
            <li><strong>Dropped utilitiesPrice, geo_plz:</strong> Redundant or potentially leaky.</li>
            <li><strong>Kept district dummies:</strong> Used Mitte as reference category.</li>
          </ul>
          <p class="mt-4">From EDA: livingSpace was the strongest predictor, district location matters a lot, and amenities (balcony, kitchen, lift) add measurable value.</p>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/apartment-predictor/boxplot-price-by-rooms.png',
            alt: 'Price Distribution by Number of Rooms',
            caption: 'Larger apartments (more rooms) command higher rents',
          },
        ],
      },
      {
        title: 'Streamlit App',
        content: `
          <p>I built a simple Streamlit app so anyone can use the model:</p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li>Select district, size, rooms, building age, amenities</li>
            <li>Get predicted rent instantly</li>
            <li>See price per m² for comparison</li>
          </ul>
          <p class="mt-4">The app loads the pickled model and scaler, runs the input through the same preprocessing pipeline, and returns predictions in milliseconds.</p>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/apartment-predictor/UI-screenshot.png',
            alt: 'Streamlit App Interface',
            caption: 'Interactive web application for real-time rental price predictions',
          },
        ],
      },
      {
        title: 'What I Learned',
        content: `
          <ol class="list-decimal pl-6 mt-4 space-y-2">
            <li><strong>Data prep > model tuning:</strong> Cleaning and feature engineering moved the needle more than algorithm selection.</li>
            <li><strong>Domain knowledge matters:</strong> Knowing Berlin's market helped me engineer useful features and sanity-check results.</li>
            <li><strong>Simple works:</strong> Random Forest beat linear models, but not by much. Rental prices are surprisingly predictable.</li>
            <li><strong>Ship it:</strong> The Streamlit app made this useful instead of just another notebook.</li>
          </ol>
        `,
      },
    ],
    links: {
      github: 'https://github.com/moe221/Apartment_price_ML',
    },
  },

  'hollywood-frame-by-frame': {
    id: 'hollywood-frame-by-frame',
    title: 'Hollywood Frame by Frame',
    subtitle: 'Analyzing Gender & Race Representation in Cinema with Deep Learning',
    category: 'Deep Learning',
    period: '2021',
    tags: [
      'Deep Learning',
      'Computer Vision',
      'TensorFlow',
      'MTCNN',
      'DeepFace',
      'Python',
      'GCP',
      'Streamlit',
      'Web Scraping',
    ],
    summary: `A deep learning pipeline that quantifies on-screen representation in Hollywood films. The system scrapes frames from 200+ movies, detects faces using MTCNN, and classifies each face by gender and race using fine-tuned DeepFace models. The project was featured by Le Wagon and Career Karma as an example of "Data for Good" work.`,
    metrics: [
      {
        label: 'Movies Analyzed',
        value: '200+',
        icon: Film,
      },
      {
        label: 'Male Screen Time',
        value: '84%',
        icon: Eye,
      },
      {
        label: 'Female Screen Time',
        value: '16%',
        icon: Percent,
      },
      {
        label: 'Training Images',
        value: '200K',
        icon: Database,
      },
    ],
    techStack: [
      {
        category: 'Deep Learning',
        items: ['TensorFlow 2.5', 'DeepFace', 'MTCNN', 'facenet-pytorch'],
      },
      {
        category: 'Data Collection',
        items: ['Selenium', 'BeautifulSoup', 'Requests'],
      },
      {
        category: 'Cloud Infrastructure',
        items: ['GCP Storage', 'BigQuery'],
      },
      {
        category: 'Frontend',
        items: ['Streamlit'],
      },
    ],
    sections: [
      {
        title: 'The Problem',
        content: `
          <p>Discussions about representation in Hollywood often rely on anecdotal evidence or manual analysis of a handful of films. I wanted to answer a simple question with data: <strong>Who actually gets screen time?</strong></p>
          <p class="mt-4">I conceived this project idea and led the team during the Le Wagon Data Science bootcamp (2021). As project lead, I designed the pipeline architecture, implemented the face detection system, and trained the classification models.</p>
        `,
      },
      {
        title: 'Demo Video',
        content: `
          <p>Watch our team's presentation of the project, including a live demo of the dashboard:</p>
        `,
        media: [
          {
            type: 'youtube',
            src: 'https://www.youtube.com/embed/2BMjhQ_svYs',
            alt: 'Hollywood Frame by Frame Demo',
            caption: 'Project demo presented at Le Wagon Berlin Demo Day (2021)',
          },
        ],
      },
      {
        title: 'Featured In',
        content: `
          <p>This project was recognized as an example of using data science for social good:</p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li><a href="https://www.lewagon.com/how-it-works" target="_blank" class="text-blue-600 hover:underline font-medium">Le Wagon</a> - Featured on the official Le Wagon website as a standout bootcamp project</li>
            <li><a href="https://careerkarma.com/blog/data-science-projects-le-wagon-bootcamp/" target="_blank" class="text-blue-600 hover:underline font-medium">Career Karma</a> - Highlighted in "Data Science Projects You Can Build at Le Wagon Bootcamp" as a Data for Good project</li>
          </ul>
        `,
      },
      {
        title: 'Pipeline Architecture',
        content: `
          <p>The system processes movies through four stages:</p>
          <ol class="list-decimal pl-6 mt-4 space-y-2">
            <li><strong>Frame Extraction:</strong> A multi-threaded scraper extracts frames at configurable intervals from movie-screencaps.com. Each movie yields 500-2000 frames depending on runtime.</li>
            <li><strong>Face Detection:</strong> MTCNN detects faces with a 97% confidence threshold. Each face is cropped to 224x224 pixels and stored in GCP.</li>
            <li><strong>Classification:</strong> DeepFace models classify each face by gender (Man/Woman) and race (6 categories). The models were fine-tuned on the FairFace dataset.</li>
            <li><strong>Statistics:</strong> Per-movie statistics are computed: gender ratios, racial distribution, frame-by-frame timelines, and "only men" vs "only women" scene counts.</li>
          </ol>
        `,
      },
      {
        title: 'Face Detection',
        content: `
          <p>MTCNN (Multi-task Cascaded Convolutional Networks) proved ideal for movie frames where faces appear at various angles, sizes, and lighting conditions. Key implementation choices:</p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li><strong>High confidence threshold (97%):</strong> Reduces false positives from background objects or partial faces</li>
            <li><strong>Minimum face size of 30px:</strong> Filters out crowd scenes where individual classification would be unreliable</li>
            <li><strong>Batch processing:</strong> Frames are processed in parallel using ThreadPoolExecutor for 4x speedup</li>
          </ul>
        `,
      },
      {
        title: 'Model Fine-Tuning',
        content: `
          <p>The base DeepFace model was fine-tuned on the <a href="https://github.com/joojs/fairface" class="text-blue-600 hover:underline" target="_blank">FairFace dataset</a>, which contains ~200,000 face images with balanced representation across:</p>
          <ul class="list-disc pl-6 mt-4 space-y-1">
            <li><strong>Gender:</strong> Man, Woman</li>
            <li><strong>Race:</strong> Asian, Black, Indian, Latino/Hispanic, Middle Eastern, White</li>
          </ul>
          <p class="mt-4">This balanced training data was critical for avoiding the common bias where models trained on predominantly white faces perform poorly on underrepresented groups.</p>
        `,
      },
      {
        title: 'Results',
        content: `
          <p>Analysis of 200+ Hollywood films revealed stark disparities:</p>
          <div class="mt-4 overflow-x-auto">
            <table class="min-w-full border border-neutral-200 rounded-lg overflow-hidden">
              <thead class="bg-neutral-100">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Metric</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Value</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-200">
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">Average male screen time</td>
                  <td class="px-4 py-3 text-sm font-semibold text-blue-600">84%</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">Average female screen time</td>
                  <td class="px-4 py-3 text-sm font-semibold text-orange-600">16%</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">Frames with only men</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">61.7%</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">Frames with only women</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">10.1%</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">Frames with both</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">28.2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/diversity-cinema/dashboard.png',
            alt: 'Dashboard showing gender distribution',
            caption: 'Interactive Streamlit dashboard showing gender distribution across a film',
          },
        ],
      },
      {
        title: 'Lessons Learned',
        content: `
          <ol class="list-decimal pl-6 mt-4 space-y-2">
            <li><strong>Confidence thresholds matter:</strong> Setting MTCNN to 97% eliminated most false positives without losing too many real faces.</li>
            <li><strong>Balanced training data is essential:</strong> FairFace's diverse dataset was critical for accurate cross-racial classification.</li>
            <li><strong>Web scraping at scale is tricky:</strong> Rate limiting, rotating user agents, and error handling were as important as the ML.</li>
            <li><strong>Leading a team sharpens communication:</strong> Coordinating code, data pipelines, and deployment across teammates taught me how to break down complex problems and delegate effectively.</li>
          </ol>
        `,
      },
    ],
    links: {
      github: 'https://github.com/moe221/diversity_in_cinema',
    },
  },

  'temperature-based-retention-time': {
    id: 'temperature-based-retention-time',
    title: 'Temperature-based Retention Time',
    subtitle: 'Bachelor Thesis: Novel Method for Wastewater Retention Time Estimation',
    category: 'Time Series',
    period: '2019 - 2020',
    client: 'TU Berlin',
    tags: [
      'Time Series Analysis',
      'Signal Processing',
      'Python',
      'Regression',
      'Civil Engineering',
      'Wastewater Management',
      'Sensor Data',
      'Algorithm Development',
    ],
    summary: `My bachelor thesis at TU Berlin, graded 1.0 (equivalent to 4.0 GPA). I developed a novel algorithm to estimate wastewater retention time in pressure pipes using only temperature sensors, eliminating the need for expensive flow meters. The method achieved R² of 0.97 on lab data and 0.75 on real-world field data, with RMSPE of 11-14%.`,
    metrics: [
      {
        label: 'Thesis Grade',
        value: '1.0 (4.0 GPA)',
        icon: GraduationCap,
      },
      {
        label: 'R² Score (Lab)',
        value: '0.97',
        icon: TrendingUp,
      },
      {
        label: 'R² Score (Field)',
        value: '0.75',
        icon: Target,
      },
      {
        label: 'RMSPE',
        value: '11-14%',
        icon: Percent,
      },
    ],
    techStack: [
      {
        category: 'Analysis',
        items: ['Pandas', 'NumPy', 'SciPy', 'Statsmodels'],
      },
      {
        category: 'Visualization',
        items: ['Matplotlib', 'Seaborn', 'Plotly'],
      },
      {
        category: 'Machine Learning',
        items: ['scikit-learn', 'Linear Regression', 't-test'],
      },
      {
        category: 'Domain',
        items: ['Civil Engineering', 'Wastewater Systems', 'Sensor Data'],
      },
    ],
    sections: [
      {
        title: 'The Problem',
        content: `
          <p>Wastewater in pressure pipes can sit for hours before being pumped to treatment facilities. Long retention times cause hydrogen sulfide (H₂S) to form, leading to:</p>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Corrosion:</strong> H₂S attacks concrete and metal infrastructure</li>
            <li><strong>Odor problems:</strong> The "rotten egg" smell near pump stations</li>
            <li><strong>Health hazards:</strong> H₂S is toxic at high concentrations</li>
          </ul>
          <p class="mt-4">Knowing retention times helps engineers decide where to dose chemicals or upgrade infrastructure. But measuring retention time traditionally requires expensive flow meters at every pump station.</p>
          <p class="mt-4"><strong>My thesis proposed a cheaper alternative:</strong> use temperature sensors (which are already installed for H₂S monitoring) to infer when pumping events occur, and calculate retention time from those events.</p>
        `,
      },
      {
        title: 'The Approach',
        content: `
          <p>The core insight: when a pump activates, it pushes a slug of wastewater through the pipe. This slug has a different temperature than the stagnant water in the pipe, creating a detectable temperature change at the outlet sensor.</p>
          <p class="mt-4">My algorithm:</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li><strong>Smooth the signal:</strong> Apply exponential weighted moving average (EWM) to reduce noise</li>
            <li><strong>Detect extrema:</strong> Find local peaks and minima using <code>scipy.signal.argrelextrema()</code></li>
            <li><strong>Map to pump events:</strong> Each temperature change corresponds to a pump activation</li>
            <li><strong>Calculate retention time:</strong> Track how many pump cycles a water parcel needs to traverse the pipe</li>
          </ol>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/retention-time/peaks-detection.png',
            alt: 'Peak detection algorithm visualization',
            caption: 'Temperature signal with detected peaks and minima highlighted',
          },
        ],
      },
      {
        title: 'Validation',
        content: `
          <p>I validated the method on two datasets:</p>
          <ul class="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Dataset A (Pilot Plant):</strong> Controlled lab experiment at TU Berlin with known pump schedules</li>
            <li><strong>Dataset B (Ueckermünde):</strong> Real-world field data from an operational pressure pipe system in Germany</li>
          </ul>
          <p class="mt-4">I compared temperature-based retention times against flow-meter-based "ground truth" using:</p>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>Probability analysis of detection accuracy</li>
            <li>Two-sample t-tests for statistical significance</li>
            <li>Linear regression (R²) for correlation</li>
            <li>Root Mean Squared Percentage Error (RMSPE)</li>
          </ul>
        `,
      },
      {
        title: 'Results',
        content: `
          <div class="overflow-x-auto">
            <table class="min-w-full border border-neutral-200 rounded-lg overflow-hidden">
              <thead class="bg-neutral-100">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Metric</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Pilot Plant</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Field Data</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-200">
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">R² Score</td>
                  <td class="px-4 py-3 text-sm font-semibold text-green-600">0.97</td>
                  <td class="px-4 py-3 text-sm font-semibold text-blue-600">0.75</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">RMSPE</td>
                  <td class="px-4 py-3 text-sm font-semibold text-green-600">11%</td>
                  <td class="px-4 py-3 text-sm font-semibold text-blue-600">14%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-4">The method performed excellently on controlled lab data and reasonably well on noisy real-world data, where factors like weather and variable pump schedules introduced additional complexity.</p>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/retention-time/results-pilot.png',
            alt: 'Pilot plant results comparison',
            caption: 'Temperature-based vs. flow-based retention times (Pilot Plant, R² = 0.97)',
          },
          {
            type: 'image',
            src: '/projects/retention-time/results-field.png',
            alt: 'Field data results comparison',
            caption: 'Temperature-based vs. flow-based retention times (Field Data, R² = 0.75)',
          },
        ],
      },
      {
        title: 'Why This Matters',
        content: `
          <p>This thesis demonstrated that <strong>temperature sensors can replace flow meters</strong> for retention time estimation in many scenarios, potentially saving utilities thousands of euros per monitoring station.</p>
          <p class="mt-4">More importantly, this project sparked my interest in data science. Taking messy sensor data and building an algorithm that extracts meaningful insights showed me the power of programmatic thinking. It's what led me to pursue the Le Wagon bootcamp and eventually a career in machine learning.</p>
        `,
      },
      {
        title: 'Academic Recognition',
        content: `
          <p>The thesis received a grade of <strong>1.0 (equivalent to 4.0 GPA)</strong> from TU Berlin. The examining committee noted the novel methodology and thorough validation approach.</p>
        `,
      },
    ],
    links: {
      github: 'https://github.com/moe221/Temperature-based_RT_project',
    },
  },

  'building-power-demand-prediction': {
    id: 'building-power-demand-prediction',
    title: 'Building Power Demand Prediction',
    subtitle: 'SARIMA Time Series Forecasting for Smart Buildings',
    category: 'Time Series',
    period: '2021',
    tags: [
      'Time Series',
      'SARIMA',
      'Python',
      'Hierarchical Clustering',
      'Energy Analytics',
      'Statsmodels',
      'Feature Engineering',
    ],
    summary: `A SARIMA-based forecasting model to predict daily power demand of a 7-story academic office building in Thailand. By incorporating external regressors for weekends and national holidays, the model improved from 26% to 12% RMSPE (R² from 0.52 to 0.82). The project also includes hierarchical clustering of building floors and energy cost analysis across countries.`,
    metrics: [
      {
        label: 'RMSPE Improvement',
        value: '26% → 12%',
        icon: TrendingUp,
      },
      {
        label: 'R² Score',
        value: '0.82',
        icon: Target,
      },
      {
        label: 'Building Floors',
        value: '7',
        icon: Layers,
      },
      {
        label: 'Data Source',
        value: 'Smart Meters',
        icon: Zap,
      },
    ],
    techStack: [
      {
        category: 'Time Series',
        items: ['SARIMA', 'Statsmodels', 'ACF/PACF Analysis'],
      },
      {
        category: 'Data Processing',
        items: ['Pandas', 'NumPy', 'SciPy'],
      },
      {
        category: 'Clustering',
        items: ['Hierarchical Agglomerative', 'Dendrogram', 'scikit-learn'],
      },
      {
        category: 'Visualization',
        items: ['Matplotlib', 'Seaborn', 'Plotly'],
      },
    ],
    sections: [
      {
        title: 'The Problem',
        content: `
          <p>Office buildings account for up to <strong>45% of primary energy consumption</strong> in some countries, and their cooling demands are expected to increase due to climate change. Understanding and predicting power demand is critical for:</p>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>Identifying peak demand times</li>
            <li>Optimizing energy purchasing strategies</li>
            <li>Planning infrastructure upgrades</li>
            <li>Reducing operational costs</li>
          </ul>
          <p class="mt-4">This project uses smart meter data from a 7-story academic building at Chulalongkorn University in Thailand to build a predictive model for daily power demand.</p>
        `,
      },
      {
        title: 'Exploratory Data Analysis',
        content: `
          <p>The raw data came from smart meters measuring power consumption across different appliances and floors. Key findings from the EDA:</p>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Clear daily patterns:</strong> Power demand peaks during working hours and drops significantly on weekends</li>
            <li><strong>Seasonal variation:</strong> Higher demand during hot months due to air conditioning</li>
            <li><strong>Floor differences:</strong> Some floors consume significantly more power than others</li>
          </ul>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/power-demand/power-per-minute.png',
            alt: 'Power demand per minute',
            caption: 'Daily power consumption patterns showing clear working hours peaks',
          },
        ],
      },
      {
        title: 'Hierarchical Clustering',
        content: `
          <p>To understand similarities between floors, I applied <strong>hierarchical agglomerative clustering</strong> to the hourly power consumption data. The dendrogram revealed natural groupings:</p>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>Floors with similar usage patterns (offices, labs, common areas)</li>
            <li>Outlier floors with unique consumption profiles</li>
          </ul>
          <p class="mt-4">This clustering helped identify which floors might benefit from targeted energy-saving measures.</p>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/power-demand/dendrogram.png',
            alt: 'Hierarchical clustering dendrogram',
            caption: 'Dendrogram showing floor clustering based on power consumption patterns',
          },
          {
            type: 'image',
            src: '/projects/power-demand/floor-comparison.png',
            alt: 'Floor power comparison',
            caption: 'Power consumption comparison across building floors',
          },
        ],
      },
      {
        title: 'SARIMA Model',
        content: `
          <p>I chose <strong>SARIMA (Seasonal ARIMA)</strong> because the data showed clear daily and weekly seasonality. The initial model using only time series data performed poorly:</p>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>RMSPE: 26%</li>
            <li>R²: 0.52</li>
          </ul>
          <p class="mt-4">The model struggled with weekends and holidays, where power demand drops significantly. By adding <strong>external regressors</strong> for weekends and Thai national holidays, performance improved dramatically:</p>
          <div class="mt-4 overflow-x-auto">
            <table class="min-w-full border border-neutral-200 rounded-lg overflow-hidden">
              <thead class="bg-neutral-100">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Model</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">RMSPE</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">R²</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-200">
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">SARIMA (baseline)</td>
                  <td class="px-4 py-3 text-sm text-red-600">26%</td>
                  <td class="px-4 py-3 text-sm text-red-600">0.52</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">SARIMA + External Regressors</td>
                  <td class="px-4 py-3 text-sm font-semibold text-green-600">12%</td>
                  <td class="px-4 py-3 text-sm font-semibold text-green-600">0.82</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/power-demand/sarima-results.png',
            alt: 'SARIMA model results',
            caption: 'Predicted vs. actual daily power demand with the improved SARIMA model',
          },
        ],
      },
      {
        title: 'Energy Cost Analysis',
        content: `
          <p>As a bonus analysis, I calculated the annual electricity cost for the building and compared it across countries. Using 2021 electricity prices:</p>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Thailand:</strong> ~$18,400/year (lowest)</li>
            <li><strong>USA:</strong> ~$16,300/year</li>
            <li><strong>Germany:</strong> ~$34,100/year (highest)</li>
            <li><strong>UK:</strong> ~$34,700/year</li>
          </ul>
          <p class="mt-4">This comparison highlights how location significantly impacts operational costs for similar buildings.</p>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/power-demand/energy-cost.png',
            alt: 'Energy cost by country',
            caption: 'Annual electricity cost comparison across countries',
          },
        ],
      },
      {
        title: 'Key Takeaways',
        content: `
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>External regressors matter:</strong> Time series models can be dramatically improved by incorporating domain knowledge (weekends, holidays)</li>
            <li><strong>Clustering reveals structure:</strong> Hierarchical clustering helped identify floor groupings that weren't obvious from raw data</li>
            <li><strong>Context is everything:</strong> The same building would have vastly different operating costs depending on location</li>
          </ul>
        `,
      },
    ],
    links: {
      github: 'https://github.com/moe221/SARIMA_Power_Demand_Prediction',
    },
  },

  'nlp-contractor-classification': {
    id: 'nlp-contractor-classification',
    title: 'NLP Contractor Classification',
    subtitle: 'Automating Construction Invoice Classification with Machine Learning',
    category: 'NLP & Classification',
    period: '2021',
    tags: [
      'NLP',
      'Classification',
      'Python',
      'Bag-of-Words',
      'Random Forest',
      'Naive Bayes',
      'Construction',
      'Text Processing',
    ],
    summary: `A personal project born from my civil engineering background. During my time as a construction manager, I created a dataset of 550 construction invoices. This project uses NLP to automatically classify contractors based on work descriptions, achieving 90% accuracy with ensemble methods.`,
    metrics: [
      {
        label: 'Best Accuracy',
        value: '90%',
        icon: Target,
      },
      {
        label: 'Invoices',
        value: '550',
        icon: FileText,
      },
      {
        label: 'Contractor Types',
        value: '8+',
        icon: Briefcase,
      },
      {
        label: 'Models Tested',
        value: '4',
        icon: Layers,
      },
    ],
    techStack: [
      {
        category: 'NLP',
        items: ['Bag-of-Words', 'TF-IDF', 'Tokenization', 'Text Cleaning'],
      },
      {
        category: 'Machine Learning',
        items: ['Logistic Regression', 'Random Forest', 'K-NN', 'Naive Bayes'],
      },
      {
        category: 'Data Processing',
        items: ['Pandas', 'NumPy', 'scikit-learn'],
      },
      {
        category: 'Visualization',
        items: ['Plotly', 'Matplotlib', 'Seaborn'],
      },
    ],
    sections: [
      {
        title: 'From Construction Site to Data Science',
        content: `
          <p>Before I became a data scientist, I worked as a <strong>construction manager</strong> in Berlin. One of my responsibilities was tracking extra work orders: whenever something unexpected happened on site, a contractor would submit an invoice describing the work they did.</p>
          <p class="mt-4">I spent hours manually categorizing these invoices by contractor type: electricians, plumbers, HVAC specialists, painters, and so on. The descriptions were messy, written in different styles, and often abbreviated. It was tedious work.</p>
          <p class="mt-4">When I started learning NLP, I immediately thought: <strong>what if I could automate this?</strong> I still had access to a dataset I created during that job, so I decided to build a classifier that could read work descriptions and predict which type of contractor did the work.</p>
        `,
      },
      {
        title: 'The Dataset',
        content: `
          <p>The dataset contains <strong>550 construction invoices</strong> with the following information:</p>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li><strong>work_description:</strong> Free-text description of the work performed</li>
            <li><strong>contractor_type:</strong> The category of contractor (electrician, plumber, etc.)</li>
            <li><strong>total_cost:</strong> Invoice amount in euros</li>
            <li><strong>building:</strong> Which building the work was performed in</li>
            <li><strong>total_manhours:</strong> Labor hours for the work</li>
          </ul>
          <p class="mt-4">The challenge: work descriptions are messy. They contain abbreviations, technical jargon, and inconsistent formatting. For example:</p>
          <ul class="list-disc pl-6 mt-2 space-y-1 italic text-neutral-600">
            <li>"Install 3x outlets in conf room B2"</li>
            <li>"Repair leak under sink, replace p-trap"</li>
            <li>"HVAC maintenance, filter replacement"</li>
          </ul>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/contractor-nlp/piechart.png',
            alt: 'Contractor type distribution',
            caption: 'Distribution of contractor types in the dataset',
          },
        ],
      },
      {
        title: 'NLP Pipeline',
        content: `
          <p>To convert text descriptions into features for machine learning, I built a preprocessing pipeline:</p>
          <ol class="list-decimal pl-6 mt-2 space-y-2">
            <li><strong>Text Cleaning:</strong> Remove punctuation, convert to lowercase, strip extra whitespace</li>
            <li><strong>Tokenization:</strong> Split each description into individual words</li>
            <li><strong>Stop Word Removal:</strong> Filter out common words ("the", "and", "in") that don't help classification</li>
            <li><strong>Vectorization:</strong> Convert tokens to numerical features using scikit-learn's Bag-of-Words model</li>
          </ol>
          <p class="mt-4">The Bag-of-Words approach counts word occurrences in each description, creating a sparse matrix where each column represents a word and each row represents an invoice.</p>
        `,
      },
      {
        title: 'Model Comparison',
        content: `
          <p>I tested four different classifiers on the vectorized text data:</p>
          <div class="mt-4 overflow-x-auto">
            <table class="min-w-full border border-neutral-200 rounded-lg overflow-hidden">
              <thead class="bg-neutral-100">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Classifier</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Accuracy</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-200">
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">Logistic Regression</td>
                  <td class="px-4 py-3 text-sm font-semibold text-green-600">90%</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">Naive Bayes</td>
                  <td class="px-4 py-3 text-sm font-semibold text-green-600">89%</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">Random Forest</td>
                  <td class="px-4 py-3 text-sm text-blue-600">88%</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm text-neutral-700">K-Nearest Neighbors</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">75%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-4">Logistic Regression and Naive Bayes performed best, which makes sense: both are classic choices for text classification that work well with sparse, high-dimensional bag-of-words features.</p>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/contractor-nlp/barplot.png',
            alt: 'Cost by contractor type',
            caption: 'Total costs broken down by contractor type',
          },
        ],
      },
      {
        title: 'Insights from EDA',
        content: `
          <p>Beyond the classification task, the exploratory analysis revealed interesting patterns:</p>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Seasonal patterns:</strong> Certain contractor types had spikes in specific months</li>
            <li><strong>Cost distribution:</strong> Electricians and HVAC contractors had the highest average invoice values</li>
            <li><strong>Building hotspots:</strong> Some buildings consistently needed more maintenance than others</li>
          </ul>
          <p class="mt-4">These insights could help construction managers plan budgets and anticipate maintenance needs.</p>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/contractor-nlp/invoices.png',
            alt: 'Invoices by month and contractor',
            caption: 'Invoice distribution over time by contractor type',
          },
        ],
      },
      {
        title: 'What I Learned',
        content: `
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Domain knowledge matters:</strong> Understanding construction terminology helped me clean and preprocess the data effectively</li>
            <li><strong>Simple models can win:</strong> Bag-of-Words + Linear Regression outperformed more complex approaches</li>
            <li><strong>Real data is messy:</strong> Unlike Kaggle datasets, my own data had inconsistencies and required significant cleaning</li>
            <li><strong>Bridge your past to your future:</strong> This project showed me how data science could automate tedious work I used to do manually</li>
          </ul>
        `,
      },
    ],
    links: {
      github: 'https://github.com/moe221/NLP_Contractor_Classification',
    },
  },

  '2-player-chess-game': {
    id: '2-player-chess-game',
    title: '2-Player Chess Game',
    subtitle: 'A Coding Exercise in OOP and Game Logic',
    category: 'Software Engineering',
    period: '2020',
    tags: [
      'Python',
      'Object-Oriented Programming',
      'Tkinter',
      'Turtle Graphics',
      'Game Development',
      'GUI',
    ],
    summary: `A fully functional chess game I built from scratch to sharpen my programming skills. No tutorials, no references, just me figuring out how to implement all the rules of chess: piece movements, turn management, capture logic, and win detection. It was a great exercise in OOP design and problem-solving.`,
    metrics: [
      {
        label: 'Pieces Implemented',
        value: '6 types',
        icon: Gamepad2,
      },
      {
        label: 'Lines of Code',
        value: '~700',
        icon: Code2,
      },
      {
        label: 'Classes',
        value: '4',
        icon: Layers,
      },
      {
        label: 'No Tutorials',
        value: '100%',
        icon: Target,
      },
    ],
    techStack: [
      {
        category: 'Language',
        items: ['Python 3.8'],
      },
      {
        category: 'GUI',
        items: ['Tkinter', 'Turtle Graphics'],
      },
      {
        category: 'Concepts',
        items: ['OOP', 'Inheritance', 'Event Handling', 'Game Loop'],
      },
    ],
    sections: [
      {
        title: 'Demo',
        content: `
          <p>Here's the game in action:</p>
        `,
        media: [
          {
            type: 'gif',
            src: '/projects/chess/chess_gif.gif',
            alt: 'Chess game demo',
            caption: 'Click to select a piece, click again to move it',
          },
        ],
      },
      {
        title: 'Why I Built This',
        content: `
          <p>I like playing chess, and I wanted to challenge myself with a project that would test my understanding of <strong>object-oriented programming</strong>. Building a chess game seemed perfect: it requires modeling different piece types with unique behaviors, managing game state, and handling user interaction.</p>
          <p class="mt-4">The rule: <strong>no tutorials, no copying code</strong>. I wanted to figure it out myself, even if it took longer. The goal wasn't to build the most polished chess app; it was to strengthen my coding fundamentals.</p>
        `,
      },
      {
        title: 'Class Architecture',
        content: `
          <p>The game is built around a clean inheritance hierarchy:</p>
          <div class="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <div class="flex flex-col items-center gap-4">
              <!-- Turtle (Python) -->
              <div class="px-4 py-2 bg-gray-200 rounded border border-gray-400 text-sm font-mono text-gray-700">
                Turtle <span class="text-gray-500">(Python)</span>
              </div>
              <div class="w-px h-4 bg-gray-400"></div>
              <!-- Chesspiece -->
              <div class="px-4 py-3 bg-blue-100 rounded-lg border-2 border-blue-400 text-center">
                <div class="font-bold text-blue-800">Chesspiece</div>
                <div class="text-xs text-blue-600 mt-1">position, selected, move(), check_space()</div>
                <div class="text-xs text-blue-600">clear_way_vertical/horizontal/diagonal()</div>
              </div>
              <div class="w-px h-4 bg-blue-400"></div>
              <!-- Piece Types -->
              <div class="flex flex-wrap justify-center gap-2">
                <div class="px-3 py-2 bg-green-100 rounded border border-green-400 text-sm font-medium text-green-800">King</div>
                <div class="px-3 py-2 bg-green-100 rounded border border-green-400 text-sm font-medium text-green-800">Queen</div>
                <div class="px-3 py-2 bg-green-100 rounded border border-green-400 text-sm font-medium text-green-800">Rook</div>
                <div class="px-3 py-2 bg-green-100 rounded border border-green-400 text-sm font-medium text-green-800">Bishop</div>
                <div class="px-3 py-2 bg-green-100 rounded border border-green-400 text-sm font-medium text-green-800">Knight</div>
                <div class="px-3 py-2 bg-green-100 rounded border border-green-400 text-sm font-medium text-green-800">Pawn</div>
              </div>
              <div class="text-xs text-gray-500 italic">Each overrides move() with its own rules</div>
            </div>
            <!-- Other classes -->
            <div class="mt-6 pt-4 border-t border-neutral-300 flex flex-wrap justify-center gap-4">
              <div class="px-4 py-3 bg-amber-100 rounded-lg border border-amber-400 text-center">
                <div class="font-bold text-amber-800">Gameboard</div>
                <div class="text-xs text-amber-600 mt-1">draw_board(), setup_board()</div>
                <div class="text-xs text-amber-600">pieces_list, graveyard</div>
              </div>
              <div class="px-4 py-3 bg-purple-100 rounded-lg border border-purple-400 text-center">
                <div class="font-bold text-purple-800">Player</div>
                <div class="text-xs text-purple-600 mt-1">color, player_pieces</div>
                <div class="text-xs text-purple-600">player_turn</div>
              </div>
            </div>
          </div>
        `,
      },
      {
        title: 'Movement Logic',
        content: `
          <p>Each piece class overrides the <code>move()</code> method with its own validation logic:</p>
          <div class="mt-4 overflow-x-auto">
            <table class="min-w-full border border-neutral-200 rounded-lg overflow-hidden">
              <thead class="bg-neutral-100">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Piece</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Movement Rule</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Path Check</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-200">
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Rook</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">Horizontal or vertical</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">clear_way_vertical/horizontal()</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Bishop</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">Diagonal only</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">clear_way_diagonal()</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Queen</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">Rook + Bishop combined</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">All three methods</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Knight</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">L-shape (2+1 squares)</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">None (can jump)</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">King</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">One square any direction</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">None</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-medium text-neutral-900">Pawn</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">Forward, diagonal capture</td>
                  <td class="px-4 py-3 text-sm text-neutral-600">clear_way_vertical()</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: 'What I Learned',
        content: `
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>OOP makes complex systems manageable:</strong> Inheritance let me define common behavior once and specialize it for each piece type</li>
            <li><strong>Event-driven programming:</strong> Handling mouse clicks and updating the UI taught me about event loops and callbacks</li>
            <li><strong>Debugging is half the work:</strong> Edge cases in chess showed me how much time debugging takes</li>
            <li><strong>Building without tutorials builds confidence:</strong> Figuring things out myself made the knowledge stick</li>
          </ul>
        `,
      },
    ],
    links: {
      github: 'https://github.com/moe221/Chess_game',
    },
  },

  'incrementality-measurement-causal-impact': {
    id: 'incrementality-measurement-causal-impact',
    title: 'Incrementality Measurement with Causal Impact',
    subtitle: 'Bayesian Framework for Marketing Attribution When A/B Testing Fails',
    category: 'Causal Inference',
    period: '2024',
    tags: [
      'Causal Inference',
      'Bayesian Statistics',
      'Python',
      'Time Series',
      'Marketing Analytics',
      'A/B Testing',
      'Workshop',
    ],
    summary: `Built a Bayesian causal inference framework to measure branded Apple Ads incrementality when A/B testing isn't possible. Led a team workshop on experimental design and p-values, now the standard approach across multiple clients.`,
    metrics: [
      {
        label: 'Clients Using',
        value: 'Multiple',
        icon: Briefcase,
      },
      {
        label: 'Workshop Attendees',
        value: 'Full Team',
        icon: GraduationCap,
      },
      {
        label: 'Control Variables',
        value: '70+',
        icon: Layers,
      },
      {
        label: 'Confidence Level',
        value: '95%',
        icon: Target,
      },
    ],
    techStack: [
      {
        category: 'Core Method',
        items: ['Bayesian Structural Time Series', 'Causal Impact (Google)'],
      },
      {
        category: 'Languages',
        items: ['Python', 'R (underlying model)'],
      },
      {
        category: 'Data Sources',
        items: ['AppTweak API', 'Internal Analytics'],
      },
      {
        category: 'Visualization',
        items: ['Plotly', 'Jupyter'],
      },
    ],
    sections: [
      {
        title: 'The Problem',
        content: `
          <p>Clients kept asking the same question: <strong>"Are our branded Apple Search Ads driving new installs, or just capturing people who would have found us anyway?"</strong></p>
          <p class="mt-4">The challenge is that A/B testing isn't always possible in the App Store - you can't split the store in half. Teams were either guessing, using flawed attribution models, or simply not measuring at all. I built this framework to provide a rigorous, data-driven answer using causal inference.</p>
        `,
      },
      {
        title: 'The Approach: Causal Impact',
        content: `
          <p><strong>Causal Impact</strong> uses a Bayesian structural time-series model to answer: "What would have happened if we hadn't intervened?"</p>
          <p class="mt-4">The method works by:</p>
          <ol class="list-decimal pl-6 mt-2 space-y-1">
            <li><strong>Building a control series:</strong> Find metrics that correlate with your target but aren't affected by your intervention (e.g., competitor downloads)</li>
            <li><strong>Training on the pre-period:</strong> Learn the relationship between controls and target before the intervention</li>
            <li><strong>Predicting the counterfactual:</strong> Use the learned relationship to predict what would have happened post-intervention</li>
            <li><strong>Measuring the gap:</strong> The difference between observed and predicted is your causal effect</li>
          </ol>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/causal-impact/workshop-counterfactual.png',
            alt: 'Counterfactual Workshop Slide',
            caption: 'When experiments aren\'t possible, we estimate the counterfactual from time series',
          },
        ],
      },
      {
        title: 'Results & Interpretation',
        content: `
          <p>The output shows observed vs. predicted values with 95% credible intervals. The model produces three views:</p>
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Observed vs. Counterfactual:</strong> If observed is consistently above predicted post-intervention, there's a positive effect</li>
            <li><strong>Pointwise Effect:</strong> Daily difference with confidence intervals - if they exclude zero, the effect is significant</li>
            <li><strong>Cumulative Effect:</strong> Total incremental value attributed to the intervention</li>
          </ul>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/causal-impact/results.png',
            alt: 'Causal Impact Results',
            caption: 'Three-panel view showing observed vs. counterfactual with 95% credible intervals',
          },
        ],
      },
      {
        title: 'When to Use It',
        content: `
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 class="font-semibold text-green-800 mb-2">Good Use Cases</h4>
              <ul class="list-disc pl-4 text-sm text-green-700 space-y-1">
                <li>Brand keyword cannibalization tests</li>
                <li>ASO updates without proper A/B tools</li>
                <li>TV/offline campaign measurement</li>
                <li>Store featuring impact</li>
              </ul>
            </div>
            <div class="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 class="font-semibold text-red-800 mb-2">Poor Use Cases</h4>
              <ul class="list-disc pl-4 text-sm text-red-700 space-y-1">
                <li>When A/B testing IS possible</li>
                <li>Industry-wide events affect controls</li>
                <li>Very short intervention periods</li>
                <li>No good control series available</li>
              </ul>
            </div>
          </div>
          <p class="mt-4"><strong>Key assumption:</strong> Controls must not be affected by your intervention, and the pre-period relationship must hold in the post-period.</p>
        `,
      },
      {
        title: 'Team Workshop & Impact',
        content: `
          <p>Beyond building the framework, I recognized that its value would be limited if only I understood it. I developed and led a <strong>team-wide workshop</strong> covering experimental design fundamentals, hypothesis testing, and p-value interpretation.</p>
          <p class="mt-4">The DS lead described it as <em>"one of the most valuable knowledge-sharing sessions."</em> The methodology is now the standard approach used across multiple client engagements for incrementality testing.</p>
        `,
        media: [
          {
            type: 'image',
            src: '/projects/causal-impact/workshop-p-value.png',
            alt: 'P-Value Workshop Slide',
            caption: 'Workshop slide: Understanding p-values through resampling',
          },
        ],
      },
    ],
    links: {},
  },
};

/**
 * Helper function to get project details by title (case-insensitive, partial match)
 */
export function getProjectDetails(title: string): ProjectDetails | null {
  // Direct ID lookup
  const normalizedId = title.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (projectDetails[normalizedId]) {
    return projectDetails[normalizedId];
  }
  
  // Search by title
  const found = Object.values(projectDetails).find(
    p => p.title.toLowerCase().includes(title.toLowerCase()) ||
         title.toLowerCase().includes(p.title.toLowerCase())
  );
  
  return found || null;
}

