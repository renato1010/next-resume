This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Project uses [Chakra UI](https://chakra-ui.com/) mostly for layout
Nice tech icons comes from [react-icons/si](https://simpleicons.org/) mostly

## Data

Data info is located at: `utils/data/renato-resume-data.json` that conveniently can be  
imported as "@utils/data/renato-resume-data.json" my data(renato-resume-data.json) is ignored

## Render

You only need to render:

```bash
npm run dev
```

After that you go to: `http://localhost:3000/`

And will see the render for your resume, at the top left it's this: `Download PDF` kinda of button  
and if click it you'll download a pdf version for the rendered page.
In my case I got something like:

<img src="https://losormorpino-public-media.s3.us-east-2.amazonaws.com/yh00t59.jpg" width="600" >

The json file has this shape:

```json
{
  "profile": {
    "header": {
      "name": "Renato Perez",
      "title": "Full-Stack Engineer"
    },
    "avatar": "https://losormorpino-public-media.s3.us-east-2.amazonaws.com/7d00mq1.jpg",
    "contact": {
      "email": "contact@renatoperez.dev",
      "website": { "text": "www.renatoperez.dev", "href": "https://www.renatoperez.dev/" },
      "github": {
        "text": "/renato1010",
        "href": "https://github.com/renato1010"
      },
      "location": "Guatemala|World"
    }
  },
  "work-experience": {
    "header": "Work Experience",
    "projects": {
      "latestJob": {
        "title": "project title",
        "subTitle": "May 2022 - Dec 2022; Contractor",
        "projectName": "Admin Dashboard",
        "achievements": [
          "Supply chain management dashboard; actions and <b>data visualization</b>, <b>design-system automated pipeline</b>",
          "Frontend with Sveltekit, outstanding performance <b>LCP=~ 2.1 heaviest page</b>",
          "Backend: GraphQL API, schema implemented as small, reusable easy-to-test <b>modules(GraphQL Modules)</b>"
        ]
      },
      "PreviousJob1": {
        "title": "project/product title",
        "subTitle": "Sept 2021 - Apr 2022; Full-Time Remote",
        "projectName": "Revamp of monolithic web application",
        "achievements": [
          "Going from RoR monolith to a SSG/ISR/SSR App with <b>Next.js & multi-language support, middlewares @ Edge Network</b>",
          "Backend <b>AWS Serverless auto-scaling full observability</b>: <b>API gateway, Lambda & Step functions, SNS & SQS</b>"
        ]
      },
      "PreviousJob2": {
        "title": "project/product title",
        "subTitle": "Jan 2020 - Jan 2021; Full-Time Remote",
        "projectName": "Travel App",
        "achievements": [
          "Client: <b>React</b>(web) and <b>React Native</b>(iOS/Android) App",
          "Backend: <b>Google Apigee</b>, API backend; API ecosystem focused on multiple channels and business models serving valuable data and services as APIs for partners and developers alike, generating new revenue streams"
        ]
      },
      "PreviousJob3": {
        "title": "project/product title",
        "subTitle": "May 2018 - Dec 2020",
        "projectName": "Javascript/Typescript Engineer",
        "achievements": [
          "Project planning and software development for greenfield projects. Staff augmentation for company clients.",
          "Multiple projects: Angular V8+, Chatbots backend (Node 10), Full Stack web app MEAN Stack"
        ]
      },
      "PreviousJob4": {
        "title": "project/product title",
        "subTitle": "Jun 2017 - Feb 2018; Contractor",
        "projectName": "Home Sharing App",
        "achievements": [
          "Product definition, architecture, development, testing, deployment",
          "Frontend with Angular V2+, integration with Stripe(Multiparty payments); Backend: AWS EC2(Java)"
        ]
      },
      "PreviousJob5": {
        "title": "project/product title",
        "subTitle": "Jan2015 - Jan 2017; Contractor/Full-Time",
        "projectName": "Nutrition API: nutrition data,recipies,ingredients,restaurants,visualizations",
        "achievements": [
          "Design, development, testing, deployment and further extension of API's ecosystem",
          "Cloud infrastructure in AWS, API's in Nodejs/Laravel/Python",
          "Design, development, testing and deployment of Javascript SDK(npm pkg)"
        ]
      }
    }
  }
}
```
