const yargs = require("yargs");
const data10 = require("./data10")

yargs.command({
    command: "add",
    describe: "to add an item",
    builder: {
        fname: {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        },
        city: {
            describe: "adding the city name",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "adding the age",
            demandOption: true,
            type: "number"
        },
        id: {
            describe: "adding the id",
            demandOption: true,
            type: "string"
        },
        math: {
            describe: "adding the math grade",
            demandOption: true,
            type: "number"
        },
        physics: {
            describe: "adding the physics grade",
            demandOption: true,
            type: "number"
        },
        chemistry: {
            describe: "adding the chemistry grade",
            demandOption: true,
            type: "number"
        },
        biology: {
            describe: "adding the biology grade",
            demandOption: true,
            type: "number"
        },
        english: {
            describe: "adding the english grade",
            demandOption: true,
            type: "number"
        },
        arabic: {
            describe: "adding the arabic grade",
            demandOption: true,
            type: "number"
        }
    },
    handler: (argv) => {
        const { fname, lname, city, age, id, math, physics, chemistry, biology, english, arabic } = argv;
        const grades = { math, physics, chemistry, biology, english, arabic };
        data10.addPerson(fname, lname, city, age, id, grades);
    }
})

yargs.command({
    command: "delete",
    describe: "to delete an item",
    builder: {
        id: {
            describe: "ID of the person to delete",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        data10.deleteData(argv.id)
    }
})

yargs.command({
    command: "read",
    describe: "to read data",
    builder: {
        id: {
            describe: "ID of the person to read",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        data10.readData(argv.id)
    }
})

yargs.command({
    command: "list",
    describe: "list data",
    handler: () => {
        data10.listData()
    }
})

yargs.parse();