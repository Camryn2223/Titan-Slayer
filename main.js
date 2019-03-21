var partsLevel = 0;

var parts = 0;
var cash = 0;
var mana = 0;

var partsPerSecond = 0;
var cashPerSecond = 0;
var manaPerSecond = 0;

var auto1 = 0;
var auto2 = 0;
var auto3 = 0;
var auto4 = 0;
var auto5 = 0;
var auto6 = 0;
var auto7 = 0;

var sellAuto1 = 0;
var sellAuto2 = 0;
var sellAuto3 = 0;
var sellAuto4 = 0;
var sellAuto5 = 0;

var manaAuto1 = 0;

function gainPart(number) {
	if(partsLevel > 0) {
		parts = parts + number + partsLevel;
		document.getElementById("parts").innerHTML = "Parts: " + parts;
	}else {
		parts = parts + number;
		document.getElementById("parts").innerHTML = "Parts: " + parts;
	}
}

function generateMana(number) {
	mana = mana + number;
	document.getElementById("mana").innerHTML = "Mana: " + mana;
}

function gainParts(number) {
	parts = parts + number;
}

function upgradeBaseButton() {
	costOfUpgrade = Math.floor(5 * Math.pow(2, partsLevel));
	if(cash >= costOfUpgrade) {
		partsLevel = partsLevel + 1
		cash = cash - costOfUpgrade;
	}
	nextUpgradeCost = Math.floor(5 * Math.pow(2, partsLevel));
	document.getElementById("costOfUpgrade").innerHTML = "Cost: $" + nextUpgradeCost;
	document.getElementById("numberOfUpgrade").innerHTML = "Sword Upgrades: " + partsLevel;
}

function sellPart(number) {
	if(parts >= 1) {
		cash = cash + number;
		parts = parts - number;
		document.getElementById("cash").innerHTML = "Cash: $ " + cash;
		document.getElementById("parts").innerHTML = "Parts: " + parts;
	}
}

/* Auto Producers*/

function buyCommoner() {
	auto1Cost = Math.floor(10 * Math.pow(1.4, auto1));
	if(cash >= auto1Cost) {
		auto1 = auto1 + 1;
		cash = cash - auto1Cost;
	}
	nextCostAuto1 = Math.floor(10 * Math.pow(1.4, auto1));
	document.getElementById("auto1Cost").innerHTML = "Cost: $ " + nextCostAuto1;
	document.getElementById("numberOfAutomatic1").innerHTML = "Commoners: " + auto1;
	document.getElementById("cash").innerHTML = "Cash: $ " + cash;
}

function buySwordsman() {
	auto2Cost = Math.floor(50 * Math.pow(1.3, auto2));
	if(cash >= auto2Cost) {
		auto2 = auto2 + 1;
		cash = cash - auto2Cost;
	}
	nextCostAuto2 = Math.floor(50 * Math.pow(1.3, auto2));
	document.getElementById("auto2Cost").innerHTML = "Cost: $ " + nextCostAuto2;
	document.getElementById("numberOfAutomatic2").innerHTML = "Swordsmen: " + auto2;
	document.getElementById("cash").innerHTML = "Cash: $ " + cash;
}

function buyKnight() {
	auto3Cost = Math.floor(100 * Math.pow(1.2, auto3));
	if(cash >= auto3Cost) {
		auto3 = auto3 + 1;
		cash = cash - auto3Cost;
	}
	nextCostAuto3 = Math.floor(100 * Math.pow(1.2, auto3));
	document.getElementById("auto3Cost").innerHTML = "Cost: $ " + nextCostAuto3;
	document.getElementById("numberOfAutomatic3").innerHTML = "Knights: " + auto3;
	document.getElementById("cash").innerHTML = "Cash: $ " + cash;
}

function buyGeneral() {
	auto4Cost = Math.floor(150 * Math.pow(1.1, auto4));
	if(cash >= auto4Cost) {
		auto4 = auto4 + 1;
		cash = cash - auto4Cost;
	}
	nextCostAuto4 = Math.floor(150 * Math.pow(1.1, auto4));
	document.getElementById("auto4Cost").innerHTML = "Cost: $ " + nextCostAuto4;
	document.getElementById("numberOfAutomatic4").innerHTML = "Generals: " + auto4;
	document.getElementById("cash").innerHTML = "Cash: $ " + cash;
}

function buyCommander() {
	auto5Cost = Math.floor(200 * Math.pow(1.1, auto5));
	if(cash >= auto5Cost) {
		auto5 = auto5 + 1;
		cash = cash - auto5Cost;
	}
	nextCostAuto5 = Math.floor(200 * Math.pow(1.1, auto5));
	document.getElementById("auto5Cost").innerHTML = "Cost: $ " + nextCostAuto5;
	document.getElementById("numberOfAutomatic5").innerHTML = "Commanders: " + auto5;
	document.getElementById("cash").innerHTML = "Cash: $ " + cash;
}

function buyDarkKnight() {
	auto6Cost = Math.floor(200 * Math.pow(1.1, auto6));
	if(cash >= auto6Cost) {
		auto6 = auto6 + 1;
		cash = cash - auto6Cost;
	}
	nextCostAuto6 = Math.floor(200 * Math.pow(1.1, auto6));
	document.getElementById("auto6Cost").innerHTML = "Cost: $ " + nextCostAuto6;
	document.getElementById("numberOfAutomatic6").innerHTML = "Dark Knights: " + auto6;
	document.getElementById("cash").innerHTML = "Cash: $ " + cash;
}

function buyTitanSlayer() {
	auto7Cost = Math.floor(100 * Math.pow(1.3, auto7));
	if(mana >= auto7Cost) {
		auto7 = auto7 + 1;
		mana = mana - auto7Cost;
	}
	nextCostAuto7 = Math.floor(100 * Math.pow(1.3, auto7));
	document.getElementById("auto7Cost").innerHTML = "Cost: " + nextCostAuto7 + " Mana";
	document.getElementById("numberOfAutomatic7").innerHTML = "Titan Slayers: " + auto7;
	document.getElementById("mana").innerHTML = "Mana: " + mana;
}

/* Auto Sellers */

function buyBlacksmith() {
	sellAuto1Cost = Math.floor(250 * Math.pow(1.1, sellAuto1));
	if(parts >= sellAuto1Cost) {
		sellAuto1 = sellAuto1 + 1;
		parts = parts - sellAuto1Cost;
	}
	nextCostSellAuto1 = Math.floor(250 * Math.pow(1.1, sellAuto1));
	document.getElementById("sellAuto1Cost").innerHTML = "Cost: " + nextCostSellAuto1 + " Parts";
	document.getElementById("numberOfSellAutomatic1").innerHTML = "Blacksmiths: " + sellAuto1;
	document.getElementById("parts").innerHTML = "Parts: " + parts;
}

function buyAlchemist() {
	sellAuto2Cost = Math.floor(500 * Math.pow(1.1, sellAuto2));
	if(parts >= sellAuto2Cost) {
		sellAuto2 = sellAuto2 + 1;
		parts = parts - sellAuto2Cost;
	}
	nextCostSellAuto2 = Math.floor(500 * Math.pow(1.1, sellAuto2));
	document.getElementById("sellAuto2Cost").innerHTML = "Cost: " + nextCostSellAuto2 + " Parts";
	document.getElementById("numberOfSellAutomatic2").innerHTML = "Alchemists: " + sellAuto2;
	document.getElementById("parts").innerHTML = "Parts: " + parts;
}

function buyThief() {
	sellAuto3Cost = Math.floor(1000 * Math.pow(1.1, sellAuto3));
	if(parts >= sellAuto3Cost) {
		sellAuto3 = sellAuto3 + 1;
		parts = parts - sellAuto3Cost;
	}
	nextCostSellAuto3 = Math.floor(1000 * Math.pow(1.1, sellAuto3));
	document.getElementById("sellAuto3Cost").innerHTML = "Cost: " + nextCostSellAuto3 + " Parts";
	document.getElementById("numberOfSellAutomatic3").innerHTML = "Thieves: " + sellAuto3;
	document.getElementById("parts").innerHTML = "Parts: " + parts;
}

function buyWizard() {
	sellAuto4Cost = Math.floor(2000 * Math.pow(1.1, sellAuto4));
	if(parts >= sellAuto4Cost) {
		sellAuto4 = sellAuto4 + 1;
		parts = parts - sellAuto4Cost;
	}
	nextCostSellAuto4 = Math.floor(2000 * Math.pow(1.1, sellAuto4));
	document.getElementById("sellAuto4Cost").innerHTML = "Cost: " + nextCostSellAuto4 + " Parts";
	document.getElementById("numberOfSellAutomatic4").innerHTML = "Wizards: " + sellAuto4;
	document.getElementById("parts").innerHTML = "Parts: " + parts;
}

function buySummoner() {
	sellAuto5Cost = Math.floor(2500 * Math.pow(1.1, sellAuto5));
	if(parts >= sellAuto5Cost) {
		sellAuto5 = sellAuto5 + 1;
		parts = parts - sellAuto5Cost;
	}
	nextCostSellAuto5 = Math.floor(2500 * Math.pow(1.1, sellAuto5));
	document.getElementById("sellAuto5Cost").innerHTML = "Cost: " + nextCostSellAuto5 + " Parts";
	document.getElementById("numberOfSellAutomatic5").innerHTML = "Summoners: " + sellAuto5;
	document.getElementById("parts").innerHTML = "Parts: " + parts;
}

/* Mana Producers */

function buyTransmutator() {
	manaAuto1Cost = Math.floor(2000 * Math.pow(1.5, manaAuto1));
	if(parts >= manaAuto1Cost) {
		manaAuto1 = manaAuto1 + 1;
		parts = parts - manaAuto1Cost;
	}
	nextManaAuto1Cost = Math.floor(2000 * Math.pow(1.5, manaAuto1));
	document.getElementById("manaProducer1Cost").innerHTML = "Cost: " + nextManaAuto1Cost + " Parts";
	document.getElementById("numberOfManaProducer1").innerHTML = "Transmutators: " + manaAuto1;
	document.getElementById("mana").innerHTML = "Mana: " + mana;
}

/* Auto Refreshers */

function hideAutos() {
	if(cash >= 5) {
		document.getElementById("upgradeBaseButton").style.visibility = "visible";
		document.getElementById("costOfUpgrade").style.visibility = "visible";
	}

	if(cash >= 10) {
		document.getElementById("shopButton2").style.display = "inline";
		document.getElementById("auto2Cost").style.display = "inline";
	}
	if(cash >= 25) {
		document.getElementById("shopButton3").style.display = "inline";
		document.getElementById("auto3Cost").style.display = "inline";
	}
	if(cash >= 50) {
		document.getElementById("shopButton3").style.display = "inline";
		document.getElementById("auto3Cost").style.display = "inline";
	}
	if(cash >= 75) {
		document.getElementById("shopButton4").style.display = "inline";
		document.getElementById("auto4Cost").style.display = "inline";
	}
	if(cash >= 100) {
		document.getElementById("shopButton5").style.display = "inline";
		document.getElementById("auto5Cost").style.display = "inline";
	}
	if(cash >= 125) {
		document.getElementById("shopButton6").style.display = "inline";
		document.getElementById("auto6Cost").style.display = "inline";
	}

	if(parts >= 200) {
		document.getElementById("sellButton1").style.display = "inline";
		document.getElementById("sellAuto1Cost").style.display = "inline";
	}
	if(parts >= 450) {
		document.getElementById("sellButton2").style.display = "inline";
		document.getElementById("sellAuto2Cost").style.display = "inline";
	}
	if(parts >= 750) {
		document.getElementById("sellButton3").style.display = "inline";
		document.getElementById("sellAuto3Cost").style.display = "inline";
	}
	if(parts >= 1500) {
		document.getElementById("sellButton4").style.display = "inline";
		document.getElementById("sellAuto4Cost").style.display = "inline";
	}
	if(parts >= 2000) {
		document.getElementById("sellButton5").style.display = "inline";
		document.getElementById("sellAuto5Cost").style.display = "inline";
	}

	if(sellAuto4 > 0) {
		document.getElementById("mana").style.visibility = "visible";
		document.getElementById("manaButton").style.visibility = "visible";

		document.getElementById("manaProducer1").style.visibility = "visible";
		document.getElementById("manaProducer1Cost").style.visibility = "visible";
	}

	if(mana >= 50) {
		document.getElementById("shopButton7").style.display = "inline";
		document.getElementById("auto7Cost").style.display = "inline";
	}
}

function pps() {
	document.getElementById("partsPerSecond").innerHTML = partsPerSecond + " p/s";
}

function mps() {
	document.getElementById("manaPerSecond").innerHTML = manaPerSecond + " m/s";
}

function cps() {
	if(cashPerSecond > parts) {
		cashPerSecond = parts;
	} else {
		cashPerSecond = cashPerSecond;
	}
	document.getElementById("cashPerSecond").innerHTML = "$ " + cashPerSecond + " /s";
}

function saveGame() {
	var save = {
		parts: parts,
		cash: cash,
		mana: mana,
		partsLevel: partsLevel,
		nextUpgradeCost: nextUpgradeCost
	}
	localStorage.setItem("save",JSON.stringify(saveGame));
}

function saveDelete() {
	localStorage.removeItem("save");
}

function loadGame() {
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.parts !== "undefined") parts = savegame.parts;
	if (typeof savegame.cash !== "undefined") cash = savegame.cash;
	if (typeof savegame.mana !== "undefined") mana = savegame.mana;
	if (typeof savegame.partsLevel !== "undefined") partsLevel = savegame.partsLevel;
	if (typeof savegame.nextUpgradeCost !== "undefined") nextUpgradeCost = savegame.nextUpgradeCost;
}

window.setInterval(function(){
	sellPart(cashPerSecond);
	gainParts(partsPerSecond);
	generateMana(manaPerSecond);

	document.getElementById("numberOfUpgrade").innerHTML = "Sword Upgrades: " + partsLevel;

	partsPerSecond = (auto1 * 1) + (auto2 * 3) + (auto3 * 5) + (auto4 * 7) + (auto5 * 9) + (auto6 * 11) + (auto7 * 15);
	document.getElementById("numberOfAutomatic1").innerHTML = "Commoners: " + auto1;
	document.getElementById("numberOfAutomatic2").innerHTML = "Swordsmen: " + auto2;
	document.getElementById("numberOfAutomatic3").innerHTML = "Knights: " + auto3;
	document.getElementById("numberOfAutomatic4").innerHTML = "Generals: " + auto4;
	document.getElementById("numberOfAutomatic5").innerHTML = "Commanders: " + auto5;
	document.getElementById("numberOfAutomatic6").innerHTML = "Dark Knights: " + auto6;
	document.getElementById("numberOfAutomatic7").innerHTML = "Titan Slayers: " + auto7;

	cashPerSecond = (sellAuto1 * 1) + (sellAuto2 * 5) + (sellAuto3 * 10) + (sellAuto4 * 15) + (sellAuto5 * 20);
	document.getElementById("numberOfSellAutomatic1").innerHTML = "Blacksmiths: " + sellAuto1;
	document.getElementById("numberOfSellAutomatic2").innerHTML = "Alchemists: " + sellAuto2;
	document.getElementById("numberOfSellAutomatic3").innerHTML = "Thieves: " + sellAuto3;
	document.getElementById("numberOfSellAutomatic4").innerHTML = "Wizards: " + sellAuto4;
	document.getElementById("numberOfSellAutomatic5").innerHTML = "Summoners: " + sellAuto5;

	manaPerSecond = (manaAuto1 * 1);
	document.getElementById("numberOfManaProducer1").innerHTML = "Transmutators: " + manaAuto1;
}, 1000);

window.setInterval(function(){
	hideAutos();
	cps();
	pps();
	mps();
}, 1);
