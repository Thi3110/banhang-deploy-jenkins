pipeline {
    agent any

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
                dir('back-end') {
                    sh 'docker build -t thiphamngoc/banhang-backend:latest .'
                }
            }
        }

        stage('Push Backend Image') {
            steps {
                echo '📦 Pushing image to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $DOCKER_USER/banhang-backend:latest
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
        success { echo '✅ Deployment completed successfully!' }
        failure { echo '❌ Build or deploy failed. Check Jenkins logs.' }
    }
}
