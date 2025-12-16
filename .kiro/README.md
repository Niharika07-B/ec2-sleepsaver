# .kiro Directory

This directory contains Kiro AI assistant configuration and project context.

## Contents

### steering/
Contains steering files that provide context to the Kiro AI assistant:

- **project-context.md**: Overall project architecture and guidelines
- **aws-guidelines.md**: AWS-specific development guidelines (auto-included when working with backend files)

## Purpose

These files help Kiro understand:
- Project structure and architecture
- Development guidelines and best practices
- AWS-specific requirements and safety rules
- Deployment procedures

## Usage

Steering files are automatically included based on their configuration:
- `inclusion: always` - Always included in context
- `inclusion: fileMatch` - Included when matching files are opened
- `inclusion: manual` - Included only when explicitly referenced

This ensures Kiro provides relevant, context-aware assistance for your EC2 SleepSaver project.
