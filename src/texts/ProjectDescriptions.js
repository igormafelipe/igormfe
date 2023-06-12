import stone from "../images/stone.jpg";
import loading_page from "../images/projects/CompanyFetcher/loading_page.png";
import main_page from "../images/projects/CompanyFetcher/main_page.png";
import results_page from "../images/projects/CompanyFetcher/results_page.png";

import coming_soon from "../images/projects/coming_soon.jpg";

export const projects = 
[
  { 
    'title' : 'Coming Soon',
    'images' : [],
    'coverimg' : coming_soon,
    'body' : "",
    'skills' : '',
    'date' : '',
    'github': '',
  },
  { 
    'title' : 'Coming Soon',
    'images' : [],
    'coverimg' : coming_soon,
    'body' : "",
    'skills' : '',
    'date' : '',
    'github': '',
  },
  { 
    'images' : [stone],
    'coverimg' : stone,
    'body' : 'To structure a new products operation, focusing on entrepreneurial and Leadership skills. Tasks included reviewing training documentation, overseeing necessary infrastructure, delegating tasks and planning for project completion, and serving as a consultant for improvements on the internal platforms used by 200 agents',
    'skills' : 'Clickup, Workplace, SQL, BigQuery',
    'date' : '06/2022 - 09/2022',
    'title' : 'Stone Global Summer Internship',
  },
  { 
    'title' : 'Job Search Platform With Sponsorship Verification',
    'images' : [main_page, results_page, loading_page],
    'coverimg' : main_page,
    'body' : "Developed a platform to display job listings of companies allowed to offer sponsorship by the country's yearly listing. The platform filters out roles that are not allowed to be sponsored for, but are still advertised as such, saving applicants wasted time.",
    'skills' : 'Flask, Pandas, React, sCapy, CareerJet API',
    'date' : '05/2023',
    'github': 'https://github.com/igormafelipe/company_fetcher_front_end',
  },
  { 
    'title' : 'Job Search API',
    'images' : [main_page, results_page, loading_page],
    'coverimg' : results_page,
    'body' : "Developed an API to scrape and populate a DB of current job openings. A unique DB table is created for 20 different countries. The DB is automatically updated 3x a week, and users can request job openings with certain filter parameters.",
    'skills' : 'Flask, Pandas, React, sCapy, CareerJet API',
    'date' : '05/2023',
    'github': 'https://github.com/igormafelipe/company_fetcher_api',
  },
  { 
    'title' : 'Image Compressor',
    'images' : [],
    'coverimg' : results_page,
    'body' : "Developed a C program to compress an RGB image. The project involved writting and testing linear bijections, performing discrete cosine transformation between RGB and component video color spaces, and performing lossy compression with floating point arithmetic. The program was optimized to run in a fraction of a second for HD images.",
    'skills' : 'C, Data Structures, Algorithms',
    'date' : '09/2021',
    'github': 'https://github.com/igormafelipe/Image-Compressor',
  },
  { 
    'title' : 'Coming Soon',
    'images' : [],
    'coverimg' : coming_soon,
    'body' : "",
    'skills' : '',
    'date' : '',
    'github': '',
  },
  { 
    'title' : 'Coming Soon',
    'images' : [],
    'coverimg' : coming_soon,
    'body' : "",
    'skills' : '',
    'date' : '',
    'github': '',
  },
];