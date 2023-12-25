const createUser = async (username, password, name, email, phoneNumber, profilePicture) => {
    const prisma = new PrismaClient();

    try {
        return await prisma.user.create({
            data: {
                username,
                password,
                name,
                email,
                phoneNumber,
                profilePicture,
            },
        });
    } finally {
        await prisma.$disconnect(); //close the prisma client
    }
};

export default createUser;
