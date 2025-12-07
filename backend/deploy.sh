#!/bin/bash

# EC2 SleepSaver Lambda Deployment Script

echo "📦 Creating deployment package..."

# Create deployment directory
mkdir -p deployment
cd deployment

# Copy Lambda function
cp ../lambda_function.py .

# Install dependencies
pip install -r ../requirements.txt -t .

# Create ZIP file
zip -r ec2-sleepsaver-lambda.zip .

echo "✅ Deployment package created: deployment/ec2-sleepsaver-lambda.zip"
echo ""
echo "Next steps:"
echo "1. Upload to AWS Lambda"
echo "2. Set environment variables"
echo "3. Configure CloudWatch Events trigger"
echo "4. Test with dry-run mode"
