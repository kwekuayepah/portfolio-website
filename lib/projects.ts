export interface Project {
    id: string
    title: string
    description: string
    technologies: string[]
    link?: string
    featured?: boolean
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'E-commerce Platform',
        description: 'Built a scalable e-commerce platform handling 10,000+ concurrent users with microservices architecture and real-time inventory management.',
        technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
        featured: true
    },
    {
        id: '2',
        title: 'Real-time Analytics Dashboard',
        description: 'Developed a real-time analytics system processing millions of events per day with Apache Kafka and Elasticsearch for data visualization.',
        technologies: ['Python', 'Kafka', 'Elasticsearch', 'React', 'WebSockets'],
        featured: true
    },
    {
        id: '3',
        title: 'API Gateway & Authentication Service',
        description: 'Designed and implemented a secure API gateway with OAuth 2.0 authentication, rate limiting, and request/response transformation capabilities.',
        technologies: ['Go', 'JWT', 'OAuth 2.0', 'MongoDB', 'nginx'],
        featured: false
    },
    {
        id: '4',
        title: 'Payment Processing System',
        description: 'Built a robust payment processing system handling multiple payment methods with fraud detection and automated reconciliation.',
        technologies: ['Java', 'Spring Boot', 'MySQL', 'RabbitMQ', 'Stripe API'],
        featured: true
    }
]
