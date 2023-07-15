export const registerUser = async (user) => {
  try {
    const data = await fetch(
      "http://ec2-18-217-180-76.us-east-2.compute.amazonaws.com:8081/api/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          password: user.password,
        }),
      }
    );
    return data;
  } catch (error) {
    return { error };
  }
};
