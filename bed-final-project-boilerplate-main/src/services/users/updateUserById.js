import { PrismaClient } from "@prisma/client";

const updateUserById = async (
  id,
  username,
  password,
  name,
  email,
  phoneNumber  
) => {
  const prisma = new PrismaClient();
  const updatedUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      username,
      password,
      name,
      email,
      phoneNumber,
    },
  });

  return updatedUser; 
};

export default updateUserById;

