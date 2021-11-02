#!/bin/sh

# If a command fails then the deploy stops
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# Create commit message
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi

# Build the project
echo ""
echo ""
echo "Committing changes to $(pwd)"

git add .
git commit -m "$msg"
git push origin main

printf "\033[0;32mDeployment complete.\033[0m\n"
printf "\033[0;32mWe are ready for liftoff.\033[0m\n"

# Yes.
if [ "$1" = "time" ]; then
	echo ""
	echo ""
	echo "\033[0;32mT-10...\033[0m"
	sleep 2
	echo "\033[0;32m8...\033[0m"
	sleep 2
	echo "\033[0;32m6...\033[0m"
	sleep 2
	echo "\033[0;32m4...\033[0m"
	sleep 2
	echo "\033[0;32m2...\033[0m"
	sleep 2
	echo "\033[0;32mWe have liftoff!\033[0m"
	echo ""
	echo ""
	$1
else
	echo ""
	echo ""
fi