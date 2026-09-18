# Using a Rich Base Image 
FROM python:3.12 AS Builder

# Working Directory
WORKDIR /app

# Copy the required dependencies
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Copy the Code
COPY . . 

# Using a Lighter base Image just to run the Container
FROM python:3.12-slim-bookworm

WORKDIR /app

# Update Debian packages to security-fixed versions
RUN apt-get update \
    && apt-get upgrade -y \
    && rm -rf /var/lib/apt/lists/*

# Copy Python packages
COPY --from=Builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages

# Copy application
COPY --from=Builder /app .

# Run the Application
CMD ["python", "app.py"]