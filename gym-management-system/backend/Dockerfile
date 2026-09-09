# Using a Rich Base Image 
FROM python:3.12 AS Builder

# Working Directory
WORKDIR /app

# Copy the required dependencies
COPY requirements.txt .

# Install the dependencies
RUN pip install -r requirements.txt

# Copy the Code
COPY . . 

# Using a Lighter base Image just to run the Container
FROM python:3.12-slim

WORKDIR /app

COPY --from=Builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY --from=Builder /app .

# Run the Application
CMD ["python", "app.py"]


