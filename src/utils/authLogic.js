const authLogic = {
  getCookie() {
    const cookies = document.cookie
      .split(";")
      .find((item) => item.includes("user"));
    if (cookies) {
      const token = cookies.split("=")[1];
      return token;
    }
    return undefined;
  },
};

export default authLogic;
