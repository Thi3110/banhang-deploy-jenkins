pipeline {
    agent any

    environment {
        GITHUB_URL = 'https://github.com/Thi3110/banhang-deploy-jenkins.git'
        DOCKER_HUB_USER = 'thiphamngoc'
        IMAGE_BACKEND = 'thiphamngoc/banhang-backend:latest'
    }

    stages {
        stage('Checkout Source') {
            steps {
                echo "🔑 Cloning source code from GitHub..."
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: "${GITHUB_URL}",
                        credentialsId: 'github-pat'
                    ]]
                ])
            }
        }

        stage('Build Backend Image') {
            steps {
                echo "🐳 Building backend image..."
                dir('back-end') {
                    sh "docker build -t ${IMAGE_BACKEND} ."
                }
            }
        }

        stage('Push Backend Image') {
            steps {
                echo "📦 Pushing image to Docker Hub..."
                withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push ${IMAGE_BACKEND}
                    '''
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                echo "🚀 Deploying containers via Docker Compose..."
                sh '''
                    echo "🧹 Cleaning old containers if they exist..."
                    docker rm -f banhang-backend banhang-frontend mongo || true
                    
                    echo "📦 Bringing down old compose stack..."
                    docker compose down || true

                    echo "⬇️ Pulling latest images..."
                    docker compose pull

                    echo "🚀 Starting new containers..."
                    docker compose up -d --build
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Deployment completed successfully!"
        }
        failure {
            echo "❌ Build or deploy failed. Check Jenkins logs."
        }
    }
}
