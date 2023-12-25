import { PrismaClient } from '@prisma/client';

const getProperties = async (pricePerNight, location) => {
    const prisma = new PrismaClient();

    try {
        const properties = await prisma.property.findMany({
            where: {
                location: {
                    contains: location,
                },
                pricePerNight,
            },
        });

        return properties;
    } catch (error) {
        // Handle the error or throw a custom error
        console.error('Error getting properties:', error);
        throw new Error('Failed to get properties');
    } finally {
        await prisma.$disconnect(); // Close the Prisma client
    }
};

export default getProperties;
