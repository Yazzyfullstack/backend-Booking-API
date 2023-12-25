
import { PrismaClient } from '@prisma/client';

const createHost = async (username, password, name, email, phoneNumber, profilePicture, aboutMe) => {
    const prisma = new PrismaClient();

    try {
        const user = await prisma.user.create({
            data: {
                username,
                password,
                name,
                email,
                phoneNumber,
                profilePicture,
                aboutMe,
            },
        });

        return user;
    } catch (error) {
        // Handle error- throw a custom error
        console.error('Error creating host:', error);
        throw new Error('Failed to create host');
    } finally {
        await prisma.$disconnect(); // Close the Prisma client
    }
};

export default createHost;
