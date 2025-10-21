pipeline {
    agent any

    environment {
        GITHUB_REPO = 'https://github.com/Thi3110/banhang-deploy-jenkins.git'
        DOCKER_HUB_USER = 'thiphamngoc'
        IMAGE_BACKEND = 'banhang-backend'
    }

    stages {
        stage('Checkout Source') {
            steps {
                echo '🔑 Cloning source code from GitHub...'
                checkout scm
            }
        }

        stage('Build Backend Image') {
            steps {
                echo '🐳 Building backend image...'
                sh '''
                    cd back-end
                    docker build -t ${DOCKER_HUB_USER}/${IMAGE_BACKEND}:latest .
                '''
            }
        }

        stage('Push Backend Image') {
            steps {
                echo '📦 Pushing image to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker push ${DOCKER_HUB_USER}/${IMAGE_BACKEND}:latest
                    '''
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                echo '🚀 Deploying containers via Docker Compose...'
                sh '''
                    docker compose down
                    docker compose pull
                    docker compose up -d --build
                '''
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD completed successfully!'
        }
        failure {
            echo '❌ Build or deploy failed. Check Jenkins logs.'
        }
    }
}
