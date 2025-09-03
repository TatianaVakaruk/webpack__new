import { createLogger } from "../logger.js";


it("should return stored logger", () => {
    const logger = createLogger("user login");
    expect(logger.getLogs()).toEqual([]);
});
it("should log some message", () => {
    const logger = createLogger("user login");
    logger.log("loggin success")
    expect(logger.getLogs()).toEqual(["log - user login - loggin success"]);
});
it("should save error", () => {
    const logger = createLogger("user login");
    logger.error("loggin failed")
    expect(logger.getLogs()).toEqual(["error - user login - loggin failed"]);
});