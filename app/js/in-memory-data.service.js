"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: "Cenarius" },
            { id: 2, name: "King Krush" },
            { id: 3, name: "Archmage Antonidas" },
            { id: 4, name: "Tirion Fordring" },
            { id: 5, name: "Prophet Velen" },
            { id: 6, name: "Edwin VanCleef" },
            { id: 7, name: "Al'Akir the Windlord" },
            { id: 8, name: "Jaraxxus" },
            { id: 9, name: "Grommash Hellscream" }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map