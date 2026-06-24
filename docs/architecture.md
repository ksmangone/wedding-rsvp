# Architecture Decision Record: Initial Hosting Model

## Decision
Use a serverless architecture for the wedding RSVP application.

## Context
The application has low and unpredictable traffic, simple request/response behavior, and should remain low-cost and easy to maintain.

## Options Considered
- EC2-hosted web application
- Containerized application on ECS
- Serverless architecture using static hosting, API Gateway, Lambda, and DynamoDB

## Decision Rationale
Serverless reduces operational overhead, avoids server patching, scales automatically for RSVP traffic, and keeps idle costs low.

## Tradeoffs
- Less direct server management practice
- More AWS service integration to learn
- Cold starts may exist but are acceptable for this use case

## Components
- Frontend static site
- Cloudfront distribution
- S3 hosting bucket
- API gateway
- Lambda functions
- DynamoDB table
- Admin authentication
- CloudWatch logs
- Route 53 domain
- ACM certificate