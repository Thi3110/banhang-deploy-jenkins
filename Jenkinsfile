pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/Thi3110/banhang-deploy-jenkins.git'
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

        stage('Build') {
            steps {
                echo '⚙️ Building project...'
                // 👉 Nếu bạn có Dockerfile, bật dòng sau:
                // sh 'docker build -t thi3110/banhang-deploy-jenkins:latest .'
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running tests...'
                // 👉 Nếu có test (npm, dotnet, pytest...) thêm lệnh vào đây
                // sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying application...'
                // 👉 Bạn có thể thêm lệnh SSH hoặc Docker Compose ở đây.
                // Ví dụ:
                // sh 'scp docker-compose.yml root@103.20.96.174:/root/project/'
                // sh 'ssh root@103.20.96.174 "cd /root/project && docker compose up -d --build"'
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
