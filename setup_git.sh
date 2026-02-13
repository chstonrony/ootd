#!/bin/bash
set -e

# Initialize git
git init

# Rename branch to main
git branch -M main

# Add all files
git add .

# Initial commit
git commit -m "Initial commit"

# Add remote origin
git remote add origin https://github.com/chstonrony/ootd.git

echo "Git setup complete."
