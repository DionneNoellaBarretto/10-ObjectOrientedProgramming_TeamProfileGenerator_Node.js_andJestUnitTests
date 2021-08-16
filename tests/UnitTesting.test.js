const Employee = require("../javascript/all");
const Intern = require("../javascript/intern");
const Manager = require("../javascript/manager");
const Engineer = require("../javascript/engineer");

// Generic test
test("Employee instance is instantiable", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

//All employee tests
test("officeNumber, school, GHUN, Name, ID & Email can be set using constructor arguments", () => {
  const officeNumber = 1234;
  const o = new Manager("DNB", 1, "test@test.com", officeNumber);
  expect(o.officeNumber).toBe(officeNumber);
  const school = "Syracuse University";
  const s = new Intern("DNB", 1, "test@test.com", school);
  expect(s.school).toBe(school);
  // GHUN - Git Hub User Name
  const GHUN = "dionnenoellabarretto";
  const u = new Engineer("DNB", 1, "test@test.com", GHUN);
  expect(u.github).toBe(GHUN);
  const name = "DNB";
  const n = new Employee(name);
  expect(n.name).toBe(name);
  const id = 1;
  const i = new Employee("DNB", id);
  expect(i.id).toBe(id);
  const email = "test@test.com";
  const m = new Employee("DNB", 1, email);
  expect(m.email).toBe(email);
});

test("All functions render the right values", () => {
  const getName = "Dionne";
  const gN = new Employee(getName);
  expect(gN.getName()).toBe(getName);

  const getID = 123;
  const gI = new Employee("DNB", getID);
  expect(gI.getID()).toBe(getID);

  const getEmail = "test@test.com";
  const gE = new Employee("DNB", 123, getEmail);
  expect(gE.getEmail()).toBe(getEmail);

  const getRE = "Employee";
  const gREmp = new Employee("Dionne", 123, "test@test.com", getRE);
  expect(gREmp.getRole()).toBe(getRE);

  const getEn = "Engineer";
  const gREng = new Engineer("DNB", 123, "test@test.com", "GitHubUser", getEn);
  expect(gREng.getRole()).toBe(getEn);

  const getGHUN = "GitHubUser";
  const gU = new Engineer("DNB", 123, "test@test.com", getGHUN);
  expect(gU.getGithub()).toBe(getGHUN);

  const getRM = "Manager";
  const gRMan = new Manager("DNB", 123, "test@test.com", 1234,getRM);
  expect(gRMan.getRole()).toBe(getRM);

  const getOfficeNumber = 1234;
  const gO = new Manager("DNB", 1, "test@test.com", getOfficeNumber);
  expect(gO.getOfficeNumber()).toBe(getOfficeNumber);

  const getRI = "Intern";
  const gRInt = new Intern("DNB", 1, "test@test.com", "Syracuse University", getRI);
  expect(gRInt.getRole()).toBe(getRI);

  const getSchool = "Syracuse University";
  const gS = new Intern("DNB", 1, "test@test.com", getSchool);
  expect(gS.getSchool()).toBe(getSchool);
});
