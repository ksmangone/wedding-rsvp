# Wedding RSVP App

A serverless wedding RSVP application built as a personal AWS project to build confidence and experience deploying and maintaining an application in AWS.

## Current Status

Static RSVP landing page built with Vite + React that runs locally on my machine.

## Local Development

```bash
cd frontend
npm install
npm run dev 
```

## Production Build

```bash
cd frontend
npm run build
npm run preview
```

## Planned Architecture

- Static frontend
- S3 and CloudFront hosting
- API Gateway
- Lambda
- DynamoDB
- Admin access
- CI/CD with GitHub Actions
- Infrastructure as Code with TerraForm