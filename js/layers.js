addLayer("m", {
    name: "minutes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "m", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF0000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "minutes", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "0", description: "0: Reset for minutes ", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

addLayer("t", {
    name: "trate", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "t", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF0000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "trate", // Name of prestige currency
    baseResource: "minutes", // Name of resource prestige is based on
    baseAmount() {return player.m.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "0", description: "0: Reset for minutes ", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

addLayer("A1", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "yellow",
    resource: "Achievement 1", 
    row: "side",
    achievements: {
        11: {
            name: "You Played!",
            done() {return true},
            goalTooltip: "huh",
            doneTooltip: "You started the game!",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        12: {
            name: "Minute wowowoowowoo",
            done() {return player.points.gte("60")},
            goalTooltip: "reach NaN seconds.",
            doneTooltip: "reach 60 seconds as 1 minute.",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        13: {
            name: "COOL",
            done() {return player.points.gte("300")},
            goalTooltip: "reach (300 seconds or 5 minutes).",
            doneTooltip: "reach (300 seconds or 5 minutes) i like?",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        14: {
            name: "hour!",
            done() {return player.points.gte("3600")},
            goalTooltip: "reach 3,600 second at first hour.",
            doneTooltip: "reach 3,600 second at first hour!",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        15: {
            name: "nice",
            done() {return player.points.gte("69420")},
            goalTooltip: "reach 69420 second for at 19 hours and 17 minutes.",
            doneTooltip: "reach 69420 second for at 19 hours and 17 minutes cool",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        21: {
            name: "Million seconds a lot",
            done() {return player.points.gte("1e6")},
            goalTooltip: "reach 1 million seconds for at 11 days and 13 hours and 46 minutes and 40 seconds (text gets rellay long!)",
            doneTooltip: "reach 1 million seconds for at 11 days and 13 hours and 46 minutes and 40 seconds (text gets rellay long!)",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        22: {
            name: "ɎɆ₳Ɽ",
            done() {return player.points.gte("31536000")},
            goalTooltip: "reach 365 days (after year (somehow?))",
            doneTooltip: "reach 365 days (after year (somehow?))",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        23: {
            name: "Tomrrow^2",
            done() {return player.points.gte("7464960000")},
            goalTooltip: "reach 1 Day Day?",
            doneTooltip: "reach 1 Day Day i something long called!",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        24: {
            name: "Endgame",
            done() {return player.points.gte("1e12")},
            goalTooltip: "reach 1 trillion second a finsh to time tree!",
            doneTooltip: "reach 1 trillion second a finsh to time tree!",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
    },
},
)

addLayer("SA", {
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "yellow",
    resource: "Sercet Achievements", 
    row: "side",
    achievements: {
        11: {
            name: "i cool",
            done() {return player.points.gte("909090")},
            goalTooltip: "???",
            doneTooltip: "I Ok",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
        12: {
            name: "Hmm?",
            done() {return player.points.gte("4e15")},
            goalTooltip: "???",
            doneTooltip: "impossible quadrillion seconds?",
            onComplete() {player[this.layer].points = player[this.layer].points.add(1)}
        },
    },
},
)