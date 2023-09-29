# BarberShop
# Salon Management System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

🚀  Summer Internship Project  🌞

Hello everyone,

I'm thrilled to share the latest developments from my summer internship project! 🌟

## Table of Contents
- [Project Overview](#project-overview)
- [Project Context](#project-context)
- [Project Objectives](#project-objectives)
- [Architectures and Design](#architectures-and-design)
- [Backend and Frontend Technologies](#backend-and-frontend-technologies)
- [Key Components of the Architecture](#key-components-of-the-architecture)
- [Microservices Benefits](#microservices-benefits)
- [Interfaces](#Interfaces)

- [Stay Informed](#stay-informed)
- [Tags](#tags)

## Project Overview

**Beauty and wellness salons** are an integral part of the industry, offering essential services to a wide range of clients. However, efficiently managing appointments, staff, and promotion poses common challenges in this sector. Our project aims to address these challenges by developing a **custom web application**.

## Project Context

As part of my second-year internship in computer engineering, our host company proposed this project with the intention of offering it to hair salons.

## Project Objectives

Our project encompasses several key objectives:

- **Appointment Management**: The application will allow clients to book appointments and select services online, based on the availability of hairdressers and time slots.

- **Staff Management**: Salon managers will be able to handle staff schedules, leaves, and access client information. Hairdressers can also access their schedules and client details.

- **Marketing and Promotion**: The application will include marketing features, such as showcasing photos of completed hairstyles, special promotions, and sharing content on social media to attract new clients.

- **Customer Data Management**: The application will store customer information, including hairstyle preferences, appointment history, and contact details, to personalize services.

## Architectures and Design

In this chapter, we delve into the technical aspects of the project. Our implementation revolves around a **microservices architecture**, emphasizing the separation of application functionalities into autonomous and deployable components.

## Backend and Frontend Technologies

The backend is built using **Spring Boot microservices architecture**, providing robustness and scalability, while the frontend is powered by **Angular**, ensuring a seamless user experience.

## Key Components of the Architecture

1. **API Gateway**: Acts as a single entry point for all client requests, managing their distribution to the appropriate microservices and providing features like authentication and load balancing.

2. **Config Server**: Centralizes configuration management for all microservices, ensuring consistency across different environments and simplifying maintenance.

3. **Discovery Server**: Manages service registration and discovery, facilitating communication between microservices and enhancing system scalability and flexibility.

4. **Microservice User**: Focuses on user data and operations, such as appointment scheduling, discovering new salon services and offers, and more.

5. **Microservice Admin**: Manages admin-related data and operations, including appointments, employees, services, and work schedules.

6. **OpenFeign Integration**: Simplifies communication between microservices through declarative REST calls, streamlining inter-service interactions.

7. **Zipkin Usage**: Incorporates Zipkin for distributed tracing, improving application observability by tracking request journeys through microservices and aiding in latency issue identification.

## Microservices Benefits

Our microservices architecture offers benefits like modularity, flexibility, ease of maintenance, and scalability. It effectively manages various application functionalities while promoting transparent communication between microservices. These components play a vital role in building a robust, scalable, and easily maintainable application.

## Interfaces
**user interface:**
![Acueill](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/125135be-fe12-4853-ba90-fc5270b92a0a)
![Servicesoffre](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/1c5f95cc-aa30-4e8b-9886-cb6b29600ade)

![aboutus](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/9ac276d0-acbc-4a45-bbf6-cdd7d96be5c5)
![blog](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/e82fe114-53fc-4d61-9217-a35adaf04a2c)
![Services](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/eae47a27-96e2-41e0-8256-9ede5be4e6f6)

![employee](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/6eddba6d-1ee4-45ec-b841-f60e70a31607)
![time](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/2900ae62-1412-4a0c-84e5-490b7d5977f3)
![clientdetails](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/6df182e6-1b02-43b3-a74d-ea6e57b58bbf)

**Admin Interface **
![employeedamin](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/b12a9982-033f-4bab-986e-306af3bf48b9)
![Servicesadmin](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/426b5bb4-2d41-4ada-82c0-7049da7ce106)
![Login](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/788b3d72-4c11-4ec6-9710-9386d11c2f34)
![Schdule](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/ce318143-a3cc-4067-a1cd-edad12235f15)
![Cancled](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/ab2b49bb-ed1d-485b-af4b-dc42c3f34530)
![clientadmin](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/7033d06c-297e-4fa8-93d9-929e58e96279)
![AllBooking](https://github.com/Bouchnak-Maher/BarberShop/assets/94197705/f90ab249-4f86-4bf4-8cfd-c16b80b8fef4)


## Stay Informed

Stay tuned for more updates as we make progress on this exciting project! 💪💼✨

- **SummerInternship**
- **ProjectUpdate**
- **MicroservicesArchitecture**
- **SpringBoot**
- **Angular**

#SummerInternship #ProjectUpdate #MicroservicesArchitecture #SpringBoot #Angular
