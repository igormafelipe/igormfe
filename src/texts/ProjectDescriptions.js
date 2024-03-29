import stone from "../images/stone.jpg";
import loading_page from "../images/projects/CompanyFetcher/loading_page.png";
import main_page from "../images/projects/CompanyFetcher/main_page.png";
import results_page from "../images/projects/CompanyFetcher/results_page.png";
import restful_api from "../images/projects/restful_api.png";
import arith from "../images/projects/arith.png";
import ta_position from "../images/projects/ta_position.jpg";

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
    'title' : 'Teaching Assistant',
    'images' : [],
    'coverimg' : ta_position,
    'body' : "As a teaching assistant for more than 2 years, I developed skills in teaching and leading those with little to no background in a given topic. Tasks included hosting office hours and teaching lab sections.",
    'skills' : 'Teaching, Presenting, Public Speaking',
    'date' : '2021-2023',
    'github': '',
  },
  { 
    'images' : [
      {
        original: stone,
        thumbnail: stone,
      }
    ],
    'coverimg' : stone,
    'body' : 'To structure a new products operation, focusing on entrepreneurial and Leadership skills. Tasks included reviewing training documentation, overseeing necessary infrastructure, delegating tasks and planning for project completion, and serving as a consultant for improvements on the internal platforms used by 200 agents',
    'skills' : 'Clickup, Workplace, SQL, BigQuery',
    'date' : '06/2022 - 09/2022',
    'title' : 'Stone Global Summer Internship',
    'github' : '',
  },
  { 
    'title' : 'Job Search Platform With Sponsorship Verification',
    'images' : [
      {
        original: main_page,
        thumbnail: main_page,
      },
      {
        original: results_page,
        thumbnail: results_page,
      },
      {
        original: loading_page,
        thumbnail: loading_page,
      },
    ],
    'coverimg' : main_page,
    'body' : "Developed a platform to display job listings of companies allowed to offer sponsorship by the country's yearly listing. The platform filters out roles that are not allowed to be sponsored for, but are still advertised as such, saving applicants wasted time.",
    'skills' : 'Flask, Pandas, React, sCapy, CareerJet API',
    'date' : '05/2023',
    'github': 'https://github.com/igormafelipe/company_fetcher_front_end',
  },
  { 
    'title' : 'Job Search API',
    'images' : [
      {
        original: main_page,
        thumbnail: main_page,
        legend: "Platforms Main Page",
      },
      {
        original: results_page,
        thumbnail: results_page,
        legend: "Platforms Results Page",
      },
      {
        original: loading_page,
        thumbnail: loading_page,
        legend: "Platforms Loading Page",
      },
    ],
    'coverimg' : restful_api,
    'body' : "Developed an API to scrape and populate a DB of current job openings. A unique DB table is created for 20 different countries. The DB is automatically updated 3x a week, and users can request job openings with certain filter parameters.",
    'skills' : 'Flask, Pandas, React, sCapy, CareerJet API',
    'date' : '05/2023',
    'github': 'https://github.com/igormafelipe/company_fetcher_api',
  },
  { 
    'title' : 'Image Compressor',
    'images' : [],
    'coverimg' : arith,
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