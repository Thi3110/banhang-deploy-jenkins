pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/Thi3110/banhang-deploy-jenkins.git'
        IMAGE_NAME = 'banhang-backend'
    }

    stages {
        stage('Checkout Source') {
            steps {
                echo '🔑 Cloning source code from GitHub...'
                withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_PAT')]) {
                    sh '''
                        echo "➡️ Removing old files..."
                        rm -rf * .git

                        echo "➡️ Cloning repository..."
                        git config --global user.name "Thi3110"
                        git config --global user.email "thi3110@example.com"
                        git clone https://${GITHUB_PAT}@github.com/Thi3110/banhang-deploy-jenkins.git .
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🐳 Building Docker image...'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-cred',
                    usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        cd back-end
                        echo "🔧 Building image $DOCKER_USER/$IMAGE_NAME:latest ..."
                        docker build -t $DOCKER_USER/$IMAGE_NAME:latest .
                    '''
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo '📦 Pushing image to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-cred',
                    usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker push $DOCKER_USER/$IMAGE_NAME:latest
                    '''
                }
            }
        }

        stage('Deploy Container Locally') {
            steps {
                echo '🚀 Deploying container locally...'
                sh '''
                    echo "🧹 Cleaning old container if exists..."
                    docker ps -q --filter "name=banhang-backend" | grep -q . && docker stop banhang-backend && docker rm banhang-backend || true

                    echo "🚀 Running new container..."
                    docker run -d -p 3000:3000 --name banhang-backend $DOCKER_USER/$IMAGE_NAME:latest

                    echo "✅ Container deployed successfully!"
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Build & Deploy completed successfully!'
        }
        failure {
            echo '❌ Build failed! Check Jenkins console output for details.'
        }
    }
}
