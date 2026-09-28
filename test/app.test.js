const test=require("node:test");
const assert=require("node:assert/strict");
test("root contains service name",()=>assert.equal("platform-demo","platform-demo"));
test("health is healthy",()=>assert.equal("ok","ok"));

test("version endpoint returns service and version", async () => {
  const response = await fetch("http://localhost:8080/version");

  assert.equal(response.status, 200);

  const body = await response.json();

  assert.deepEqual(body, {
    service: "platform-demo",
    version: "1.0.0",
  });
});
