describe("", () => {

    // it("should parse arguments", () => {

    //     const result = parseArgs("-l -p 8080 -d /usr/logs");

    //     expect(result).toEqual([
    //         { logging: true },
    //         { port: 8080 },
    //         { directory: "/usr/logs" }
    //     ]);
    // });

    it("should parse login as true when specified", () => {
        const result = parseArgs("-l");
        expect(result).toEqual([
            { logging: true },
            { ploppy: 0 }
        ]);
    });

    it("should parse login as false when not specified", () => {
        const result = parseArgs("");
        expect(result).toEqual([
            { logging: false },
            { ploppy: 0 }
        ]);
    });

    it("should parse ploppy", () => {
        const result = parseArgs("-l -p 100");
        expect(result).toEqual([
            { logging: true },
            { ploppy: 100 }
        ]);
    });

    it("should throw an error when unrecognsied argument provided", () => {
        expect(() => parseArgs("-X"))
            .toThrow("error: you are :(");
    });

});