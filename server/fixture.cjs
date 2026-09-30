module.exports = {
  ...{
    resource: "employees",
    invalid: { name: "", role: "Engineer" },
    patch: { role: "Full-stack developer" },
  },
  body: async (url, cookie) => {
    const body = { name: "Demo Person", role: "Engineer" };
    return body;
  },
};
